/* PhoneStudy — Gobilago iOS study-flow recreation for the hero.
   Loops through a Type card (keyboard + auto-grade) and a Draw card
   (stroke canvas + auto-grade), mirroring the real app screens. */
(function () {
  const React = window.React;
  const { useState, useEffect } = React;
  const h = React.createElement;
  const Ico = (n, props = {}) => h("i", { "data-lucide": n, ...props });

  // Step machine: 0 type-input, 1 type-graded, 2 draw-input, 3 draw-graded.
  const STEP_MS = [2800, 3000, 3200, 3000];
  const TYPED = "commar";   // the (intentionally imperfect) learner answer
  const ANSWER = "Comer";   // the correct Spanish word

  function StatusBar() {
    return h("div", { className: "ph-statusbar" },
      h("span", null, "9:41"),
      h("span", { className: "ph-status-icons" }, Ico("signal"), Ico("wifi"), Ico("battery-full")));
  }

  function StudyHead({ count, progress }) {
    return h(React.Fragment, null,
      h("div", { className: "ps-head" },
        h("span", { className: "ps-x" }, Ico("x")),
        h("span", { className: "ps-count" }, count),
        h("span", { style: { width: "34px" } })),
      h("div", { className: "ps-progress" },
        h("div", { className: "ps-progress-bar", style: { width: progress + "%" } })));
  }

  function GradeRow({ T, highlight }) {
    // highlight: "hard" (amber) or "easy" (green)
    const btn = (key, label, icon) => {
      const on = key === highlight;
      return h("span", { className: "ps-grade" + (on ? " is-on ps-grade--" + key : "") },
        h("span", { className: "ps-grade-ic" }, Ico(icon)),
        h("span", null, label));
    };
    return h("div", { className: "ps-grades" },
      btn("again", T.again, "circle-x"),
      btn("hard", T.hard, "circle-help"),
      btn("easy", T.easy, "circle-check"));
  }

  function ContinueBtn({ T }) {
    return h("div", { className: "ps-continue" }, Ico("arrow-right"), T.continue);
  }

  /* ---- Type card ---- */
  function TypeCard({ T, graded }) {
    const [n, setN] = useState(0);
    useEffect(() => {
      if (graded) { setN(TYPED.length); return; }
      setN(0);
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) { setN(TYPED.length); return; }
      let i = 0;
      const id = setInterval(() => { i++; setN(i); if (i >= TYPED.length) clearInterval(id); }, 230);
      return () => clearInterval(id);
    }, [graded]);
    const typed = TYPED.slice(0, n);

    return h("div", { className: "ps-card" },
      h("span", { className: "ps-badge" }, T.typeSpanish),
      h("div", { className: "ps-prompt" }, T.prompt1),
      h("div", { className: "ps-divider" }),
      graded
        ? h("div", { className: "ps-reveal" },
            h("span", { className: "ps-badge ps-badge--amber" }, T.closeMatch),
            h("div", { className: "ps-rev-label" }, T.correctAnswer),
            h("div", { className: "ps-rev-answer" }, ANSWER),
            h("div", { className: "ps-rev-label" }, T.yourAnswer),
            h("div", { className: "ps-rev-yours" }, TYPED))
        : h("div", { className: "ps-input-wrap" },
            h("div", { className: "ps-input" },
              h("span", null, typed),
              h("span", { className: "ps-caret" })),
            h("div", { className: "ps-submit" }, T.submit)),
      graded
        ? h(React.Fragment, null, h("div", { className: "ps-howwell" }, T.howWell),
            h(GradeRow, { T, highlight: "hard" }), h(ContinueBtn, { T }))
        : null);
  }

  /* ---- Draw card ---- */
  const KANA = [
    "M30 38 C58 36, 78 36, 86 38",
    "M58 22 C56 50, 52 78, 44 92",
    "M78 44 C84 64, 74 86, 50 88 C30 89, 24 70, 38 58 C52 46, 78 50, 86 70",
  ];
  function DrawCard({ T, graded }) {
    return h("div", { className: "ps-card" },
      h("span", { className: "ps-badge" }, T.findKana),
      h("div", { className: "ps-prompt ps-prompt--lg" }, "a"),
      h("div", { className: "ps-canvas" },
        h("svg", { viewBox: "0 0 110 110", width: 150, height: 150, fill: "none",
          stroke: "var(--color-primary)", strokeWidth: 6.5, strokeLinecap: "round", strokeLinejoin: "round" },
          KANA.map((d, i) => h("path", { key: (graded ? "g" : "d") + i, d,
            style: { strokeDasharray: 280, strokeDashoffset: 0,
              animation: graded ? "none" : "ps-stroke .8s var(--ease-out) both",
              animationDelay: (i * 0.5) + "s" } }))),
        h("div", { className: "ps-canvas-tools" }, Ico("undo-2"), Ico("trash-2", { className: "ps-trash" }))),
      graded
        ? h(React.Fragment, null,
            h("div", { className: "ps-stroke-ok" }, Ico("circle-check-big"), T.strokeOk),
            h("div", { className: "ps-howwell" }, T.howWell),
            h(GradeRow, { T, highlight: "easy" }), h(ContinueBtn, { T }))
        : h("div", { className: "ps-input-wrap" },
            h("div", { className: "ps-dontknow" }, T.dontKnow),
            h("div", { className: "ps-submit" }, T.submit)));
  }

  function PhoneStudy() {
    const { lang } = React.useContext(window.LangContext);
    const T = window.I18n[lang].phone;
    const [step, setStep] = useState(0);
    useEffect(() => {
      const id = setTimeout(() => setStep((step + 1) % 4), STEP_MS[step]);
      return () => clearTimeout(id);
    }, [step]);
    // refresh lucide icons whenever the screen content changes
    useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [step, lang]);

    const isDraw = step >= 2;
    const graded = step === 1 || step === 3;
    const count = isDraw ? T.count2 : T.count1;
    const progress = isDraw ? 100 : 50;

    return h("div", { className: "ph", "aria-hidden": "true" },
      h("div", { className: "ph-notch" }),
      h("div", { className: "ph-screen" },
        h(StatusBar, null),
        h(StudyHead, { count, progress }),
        h("div", { className: "ph-study", key: isDraw ? "draw" : "type" },
          isDraw ? h(DrawCard, { T, graded }) : h(TypeCard, { T, graded }))));
  }

  window.PhoneStudy = PhoneStudy;
  // Back-compat alias in case anything else references PhoneHome.
  window.PhoneHome = PhoneStudy;
})();
