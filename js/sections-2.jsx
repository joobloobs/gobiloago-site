/* Gobilago.com — Interaction types, Scheduler/phases, Features. */
(function () {
  const React = window.React;
  const { useState, useEffect, useRef } = React;
  const h = React.createElement;
  const DS = window.GobilagoDesignSystem_a1fc6c;
  const { Card, StatPill, Badge, Tag, AtomTile } = DS;
  const Ico = (n, props = {}) => h("i", { "data-lucide": n, ...props });
  function Eyebrow({ icon, children }) { return h("span", { className: "eyebrow" }, icon ? Ico(icon) : null, children); }

  /* ============ Interaction types (Display / Type / Draw) ============ */
  function TypeDemo({ active }) {
    const { lang } = React.useContext(window.LangContext);
    const T = window.I18n[lang].interactions;
    const word = "eat";
    const [n, setN] = useState(word.length);
    useEffect(() => {
      if (!active) { setN(word.length); return; }
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) { setN(word.length); return; }
      setN(0);
      let i = 0;
      const id = setInterval(() => { i++; setN(i); if (i >= word.length) clearInterval(id); }, 320);
      return () => clearInterval(id);
    }, [active]);
    const typed = word.slice(0, n);
    const done = n >= word.length;
    return h("div", { className: "itype-demo" },
      h("div", { className: "gb-overline", style: { color: "var(--color-primary)" } }, T.fillBlank),
      h("div", { className: "itype-mask" },
        "食べる means 「to ",
        h("span", { className: "blankfill" }, typed || " ", !done ? h("span", { className: "blankcaret" }) : null),
        "」"),
      h("div", { className: "kbd-row" },
        ["e", "a", "t"].map((k, i) => h("span", { className: "kbd" + (i < n ? " is-hit" : ""), key: i }, k))),
      done ? h("div", { className: "auto-graded" }, Ico("circle-check-big"), T.autoGraded) : null);
  }

  function DrawDemo({ active }) {
    const { lang } = React.useContext(window.LangContext);
    const T = window.I18n[lang].interactions;
    const paths = [
      "M30 38 C58 36, 78 36, 86 38",
      "M58 22 C56 50, 52 78, 44 92",
      "M78 44 C84 64, 74 86, 50 88 C30 89, 24 70, 38 58 C52 46, 78 50, 86 70",
    ];
    return h("div", { className: "itype-demo" },
      h("div", { className: "gb-overline", style: { color: "var(--color-primary)" } }, T.findKana),
      h("svg", { viewBox: "0 0 110 110", width: 168, height: 168, fill: "none",
        stroke: "var(--color-primary)", strokeWidth: 6.5, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" },
        paths.map((d, i) => h("path", { key: (active ? "a" : "s") + i, d,
          style: { strokeDasharray: 260, strokeDashoffset: active ? 0 : 260,
            transition: "stroke-dashoffset .9s var(--ease-out)", transitionDelay: (i * 0.55) + "s" } }))),
      h("div", { className: "auto-graded" }, Ico("circle-check-big"), T.strokeOrder));
  }

  function DisplayDemo() {
    const { lang } = React.useContext(window.LangContext);
    const T = window.I18n[lang].interactions;
    return h("div", { className: "itype-demo itype-display" },
      h("div", { className: "gb-overline", style: { color: "var(--text-muted)" } }, T.context),
      h("div", { className: "display-big" }, "食べる"),
      h("div", { className: "display-sub" }, "taberu · to eat"));
  }

  function InteractionsSection() {
    const { lang } = React.useContext(window.LangContext);
    const T = window.I18n[lang].interactions;
    const [active, setActive] = useState(1);
    return h("section", { className: "section", "data-screen-label": "Studying" },
      h("div", { className: "container" },
        h("div", { className: "section-head" },
          h(Eyebrow, { icon: "wand-sparkles" }, T.eyebrow),
          h("h2", null, T.h2),
          h("p", { className: "lead" }, T.lead)),
        h("div", { className: "itype-wrap" },
          h("div", { className: "itype-tabs", role: "tablist" },
            T.types.map(([title, ic, sub], i) => h("button", { key: i, role: "tab", "aria-selected": i === active,
              className: "itype-tab" + (i === active ? " is-active" : ""), onClick: () => setActive(i) },
              h("span", { className: "itype-tabic" }, Ico(ic)),
              h("span", null, h("span", { className: "itype-tabt" }, title), h("span", { className: "itype-tabsub" }, sub))))),
          h("div", { className: "itype-panel" },
            h("div", { className: "itype-copy" },
              h(Tag, { color: "var(--color-primary)" }, T.types[active][4]),
              h("h3", null, T.types[active][0]),
              h("p", null, T.types[active][3])),
            active === 0 ? h(DisplayDemo, null)
              : active === 1 ? h(TypeDemo, { active: true })
              : h(DrawDemo, { active: true })))));
  }
  window.InteractionsSection = InteractionsSection;

  /* ============ Scheduler / phases ============ */
  function SchedulerSection() {
    const { lang } = React.useContext(window.LangContext);
    const T = window.I18n[lang].scheduler;
    return h("section", { className: "section section--sunk", "data-screen-label": "Scheduler" },
      h("div", { className: "container sched-grid" },
        h("div", null,
          h(Eyebrow, { icon: "calendar-clock" }, T.eyebrow),
          h("h2", null, T.h2),
          h("p", { className: "lead" }, T.lead),
          h("div", { className: "phase-track" },
            h("div", { className: "phase phase--train" },
              h("span", { className: "phase-num" }, "1"),
              h("div", null, h("h4", null, T.phase1h), h("p", null, T.phase1p))),
            h("div", { className: "phase" },
              h("span", { className: "phase-num" }, "2"),
              h("div", null, h("h4", null, T.phase2h), h("p", null, T.phase2p)))),
          h("div", { className: "sched-intervals" },
            h(StatPill, null, "1d"), Ico("arrow-right", { className: "sched-arr" }),
            h(StatPill, null, "3d"), Ico("arrow-right", { className: "sched-arr" }),
            h(StatPill, null, "10d"), Ico("arrow-right", { className: "sched-arr" }),
            h(StatPill, { variant: "solid" }, "+1mo")),
          h("p", { className: "fineprint gb-mono" }, Ico("wifi-off"), T.offline)),
        h(Card, { pad: "lg", className: "sched-card" },
          h("div", { className: "sched-card-head" },
            h("span", null, Ico("book-open"), " " + T.cardHead),
            h("span", { className: "gb-mono", style: { color: "var(--text-muted)" } }, "4 cards")),
          h("div", { className: "sched-rows" },
            T.rows.map(([st, term, coll, when], i) => h("div", { className: "sched-row", key: i },
              h("div", null, h("div", { className: "sched-term" }, term), h("div", { className: "sched-coll" }, coll)),
              h(Badge, { status: st }, when)))))));
  }
  window.SchedulerSection = SchedulerSection;

  /* ============ Features ============ */
  function FeaturesSection() {
    const { lang } = React.useContext(window.LangContext);
    const T = window.I18n[lang].features;
    return h("section", { className: "section", "data-screen-label": "Features", id: "features-inner" },
      h("div", { className: "container" },
        h("div", { className: "section-head" },
          h(Eyebrow, { icon: "layers" }, T.eyebrow),
          h("h2", null, T.h2),
          h("p", { className: "lead" }, T.lead)),
        h("div", { className: "feat-grid" },
          T.items.map(([ic, color, title, desc, tag], i) => h(Card, { key: i, pad: "lg", className: "feat-card" },
            h("span", { className: "feat-ic", style: { background: color } }, Ico(ic)),
            h("h3", null, title), h("p", null, desc),
            tag ? h(Tag, { variant: "neutral" }, tag) : null)))));
  }
  window.FeaturesSection = FeaturesSection;
})();
