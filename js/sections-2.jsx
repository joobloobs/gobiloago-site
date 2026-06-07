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
  const TYPES = [
    ["Display", "eye", "Read-only context",
      "A static prompt that frames the test \u2014 a sentence, an image, a reading. It sets the scene but is never scored on its own.",
      "context"],
    ["Type", "text-cursor-input", "Reproduce by keyboard",
      "Type the missing piece and Gobilago checks it for you, character by character. No \u201cI knew that\u201d self-grading \u2014 you either produced it or you didn't.",
      "language"],
    ["Draw", "pen-tool", "Reconstruct by hand",
      "Redraw a symbol or diagram stroke-by-stroke on a Skia-powered canvas. Perfect for kanji, kana, signatures, and anything your fingers need to remember.",
      "language"],
  ];

  function TypeDemo({ active }) {
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
      h("div", { className: "gb-overline", style: { color: "var(--color-primary)" } }, "Fill the blank"),
      h("div", { className: "itype-mask" },
        "\u98df\u3079\u308b means \u201cto ",
        h("span", { className: "blankfill" }, typed || "\u00a0", !done ? h("span", { className: "blankcaret" }) : null),
        "\u201d"),
      h("div", { className: "kbd-row" },
        ["e", "a", "t"].map((k, i) => h("span", { className: "kbd" + (i < n ? " is-hit" : "") , key: i }, k))),
      done ? h("div", { className: "auto-graded" }, Ico("circle-check-big"), "Auto-graded \u00b7 correct") : null);
  }

  function DrawDemo({ active }) {
    // Stroke-animated hiragana あ
    const paths = [
      "M30 38 C58 36, 78 36, 86 38",
      "M58 22 C56 50, 52 78, 44 92",
      "M78 44 C84 64, 74 86, 50 88 C30 89, 24 70, 38 58 C52 46, 78 50, 86 70",
    ];
    return h("div", { className: "itype-demo" },
      h("div", { className: "gb-overline", style: { color: "var(--color-primary)" } }, "Find the kana"),
      h("svg", { viewBox: "0 0 110 110", width: 168, height: 168, fill: "none",
        stroke: "var(--color-primary)", strokeWidth: 6.5, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" },
        paths.map((d, i) => h("path", { key: (active ? "a" : "s") + i, d,
          style: { strokeDasharray: 260, strokeDashoffset: active ? 0 : 260,
            transition: "stroke-dashoffset .9s var(--ease-out)", transitionDelay: (i * 0.55) + "s" } }))),
      h("div", { className: "auto-graded" }, Ico("circle-check-big"), "Stroke order recognised"));
  }

  function DisplayDemo() {
    return h("div", { className: "itype-demo itype-display" },
      h("div", { className: "gb-overline", style: { color: "var(--text-muted)" } }, "Context"),
      h("div", { className: "display-big" }, "\u98df\u3079\u308b"),
      h("div", { className: "display-sub" }, "taberu \u00b7 to eat"));
  }

  function InteractionsSection() {
    const [active, setActive] = useState(1);
    return h("section", { className: "section", "data-screen-label": "Studying" },
      h("div", { className: "container" },
        h("div", { className: "section-head" },
          h(Eyebrow, { icon: "wand-sparkles" }, "How you study"),
          h("h2", null, "Three ways to prove you actually know it"),
          h("p", { className: "lead" }, "Every aspect picks the interaction that genuinely tests recall \u2014 then Gobilago grades it automatically, removing the bias to mark yourself right. Tap to preview.")),
        h("div", { className: "itype-wrap" },
          h("div", { className: "itype-tabs", role: "tablist" },
            TYPES.map(([t, ic, sub], i) => h("button", { key: i, role: "tab", "aria-selected": i === active,
              className: "itype-tab" + (i === active ? " is-active" : ""), onClick: () => setActive(i) },
              h("span", { className: "itype-tabic" }, Ico(ic)),
              h("span", null, h("span", { className: "itype-tabt" }, t), h("span", { className: "itype-tabsub" }, sub))))),
          h("div", { className: "itype-panel" },
            h("div", { className: "itype-copy" },
              h(Tag, { color: "var(--color-primary)" }, TYPES[active][4]),
              h("h3", null, TYPES[active][0]),
              h("p", null, TYPES[active][3])),
            active === 0 ? h(DisplayDemo, null)
              : active === 1 ? h(TypeDemo, { active: true })
              : h(DrawDemo, { active: true })))));
  }
  window.InteractionsSection = InteractionsSection;

  /* ============ Scheduler / phases ============ */
  function SchedulerSection() {
    return h("section", { className: "section section--sunk", "data-screen-label": "Scheduler" },
      h("div", { className: "container sched-grid" },
        h("div", null,
          h(Eyebrow, { icon: "calendar-clock" }, "The scheduler"),
          h("h2", null, "It knows what you're about to forget"),
          h("p", { className: "lead" }, "Knowledge moves through two phases, automatically:"),
          h("div", { className: "phase-track" },
            h("div", { className: "phase phase--train" },
              h("span", { className: "phase-num" }, "1"),
              h("div", null, h("h4", null, "Training"),
                h("p", null, "Rapid, high-frequency reps until you recall it three times in a row. New knowledge sprints here first."))),
            h("div", { className: "phase" },
              h("span", { className: "phase-num" }, "2"),
              h("div", null, h("h4", null, "Retention"),
                h("p", null, "SM-2-inspired intervals that stretch as you succeed. Miss one and it resets \u2014 honesty over streaks.")))),
          h("div", { className: "sched-intervals" },
            h(StatPill, null, "1d"), Ico("arrow-right", { className: "sched-arr" }),
            h(StatPill, null, "3d"), Ico("arrow-right", { className: "sched-arr" }),
            h(StatPill, null, "10d"), Ico("arrow-right", { className: "sched-arr" }),
            h(StatPill, { variant: "solid" }, "+1mo")),
          h("p", { className: "fineprint gb-mono" }, Ico("wifi-off"), "Fully offline. Sync never blocks the UI.")),
        h(Card, { pad: "lg", className: "sched-card" },
          h("div", { className: "sched-card-head" },
            h("span", null, Ico("book-open"), " Long Term Memory"),
            h("span", { className: "gb-mono", style: { color: "var(--text-muted)" } }, "4 cards")),
          h("div", { className: "sched-rows" },
            [["overdue", "a", "hiragana", "1 day overdue"],
             ["upcoming", "manger", "french verbs", "in 1 day"],
             ["dormant", "comer", "espagnol", "in 3 days"],
             ["upcoming", "\u98df\u3079\u308b", "japonais", "in 5 days"]]
              .map(([st, term, coll, when], i) => h("div", { className: "sched-row", key: i },
                h("div", null, h("div", { className: "sched-term" }, term), h("div", { className: "sched-coll" }, coll)),
                h(Badge, { status: st }, when)))))));
  }
  window.SchedulerSection = SchedulerSection;

  /* ============ Features ============ */
  function FeaturesSection() {
    const feats = [
      ["layout-template", "var(--atom-indigo)", "Collections & templates", "Reusable notion structures \u2014 built-in, your own, or from the community. Spin up a new deck in seconds.", "Built-in"],
      ["replace-all", "var(--atom-teal)", "Field operations", "Bulk-transform a whole collection at once: find & replace, change case, add affixes, clear fields.", null],
      ["library-big", "var(--atom-violet)", "Community library", "Publish, download and share collections. Versioned snapshots mean an author's update never breaks your copy.", null],
      ["wifi-off", "var(--atom-green)", "Offline-first", "Everything works with zero signal. Your graph syncs quietly in the background the moment you're back online.", null],
      ["copy-plus", "var(--atom-blue)", "Derived templates", "Tweak a template as you create and Gobilago auto-saves a deduplicated hidden variant \u2014 no clutter.", null],
      ["lock", "var(--atom-amber)", "Yours, privately", "A single-device lock keeps your data consistent. No account required to start, ever.", null],
    ];
    return h("section", { className: "section", "data-screen-label": "Features", id: "features-inner" },
      h("div", { className: "container" },
        h("div", { className: "section-head" },
          h(Eyebrow, { icon: "layers" }, "Built in"),
          h("h2", null, "Everything a serious learner actually needs"),
          h("p", { className: "lead" }, "No noise, no nagging. Just the tools that make building and keeping knowledge feel effortless.")),
        h("div", { className: "feat-grid" },
          feats.map(([ic, color, t, d, tag], i) => h(Card, { key: i, pad: "lg", className: "feat-card" },
            h("span", { className: "feat-ic", style: { background: color } }, Ico(ic)),
            h("h3", null, t), h("p", null, d),
            tag ? h(Tag, { variant: "neutral" }, tag) : null)))));
  }
  window.FeaturesSection = FeaturesSection;
})();
