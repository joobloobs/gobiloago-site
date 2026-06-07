/* Gobilago.com — app shell: theme + tweaks + composition. */
(function () {
  const React = window.React;
  const { useState, useEffect, useRef } = React;
  const h = React.createElement;

  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "warm": true,
    "dark": false,
    "accent": "indigo",
    "heroLayout": "split",
    "confetti": true
  }/*EDITMODE-END*/;

  // Apply theme/tweak attributes to <html> so token overrides cascade.
  function applyDoc(t) {
    const r = document.documentElement;
    r.setAttribute("data-theme", t.dark ? "dark" : "light");
    r.setAttribute("data-warm", t.warm ? "on" : "off");
    r.setAttribute("data-accent", t.accent);
    r.setAttribute("data-herolayout", t.heroLayout);
  }

  function useReveal() {
    useEffect(() => {
      const els = document.querySelectorAll(".reveal");
      if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
      const io = new IntersectionObserver((ents) => {
        ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      els.forEach((e) => io.observe(e));
      return () => io.disconnect();
    }, []);
  }

  function App() {
    const { useTweaks, TweaksPanel, TweakSection, TweakToggle, TweakRadio, TweakColor } = window;
    const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

    // Language: auto-detect from browser locale, persisted in localStorage.
    const [lang, setLangState] = useState(() => {
      const stored = localStorage.getItem("gb-lang");
      if (stored === "en" || stored === "fr") return stored;
      return navigator.language.startsWith("fr") ? "fr" : "en";
    });
    const toggleLang = () => {
      const next = lang === "en" ? "fr" : "en";
      localStorage.setItem("gb-lang", next);
      setLangState(next);
    };

    // Theme toggle (nav button + tweak) with a circular reveal that
    // expands from the click origin via the View Transitions API.
    const setTheme = (mode, ev) => {
      const dark = mode === "dark";
      const commit = () => setTweak("dark", dark);

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!document.startViewTransition || reduce) { commit(); return; }

      // Origin: the clicked element's center, else top-right corner.
      let x = window.innerWidth - 48, y = 48;
      const tgt = ev && ev.currentTarget;
      if (tgt && tgt.getBoundingClientRect) {
        const r = tgt.getBoundingClientRect();
        x = r.left + r.width / 2;
        y = r.top + r.height / 2;
      }
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const vt = document.startViewTransition(() => {
        ReactDOM.flushSync(() => {
          // Apply the attribute synchronously so the snapshot is correct,
          // and mirror into tweak state.
          document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
          commit();
        });
      });
      vt.ready.then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`] },
          { duration: 520, easing: "cubic-bezier(.22,1,.36,1)", pseudoElement: "::view-transition-new(root)" }
        );
      });
    };

    useEffect(() => { applyDoc(t); }, [t.warm, t.dark, t.accent, t.heroLayout]);
    // run lucide + reveal after mount/renders
    useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
    useReveal();

    const theme = t.dark ? "dark" : "light";
    const { Nav, Hero, PrincipleSection, ModelSection, InteractionsSection, SchedulerSection,
      FeaturesSection, MakerSection, RoadmapSection, CTASection, Footer } = window;

    const wrap = (node, i) => h("div", { className: "reveal", key: i }, node);

    return h(window.LangContext.Provider, { value: { lang, toggleLang } },
      h(Nav, { theme, setTheme }),
      h("main", { id: "content" },
        h(Hero, null),
        h("div", { id: "principle" }, wrap(h(PrincipleSection, { confetti: t.confetti }), "pr")),
        h("div", { id: "model" }, wrap(h(ModelSection, null), "mo")),
        h("div", { id: "types" }, wrap(h(InteractionsSection, null), "ty")),
        wrap(h(SchedulerSection, null), "sc"),
        h("div", { id: "features" }, wrap(h(FeaturesSection, null), "fe")),
        wrap(h(RoadmapSection, null), "rm"),
        wrap(h(MakerSection, { confetti: t.confetti }), "mk"),
        wrap(h(CTASection, null), "ct")),
      h(Footer, null),
      h(TweaksPanel, { title: "Tweaks" },
        h(TweakSection, { label: "Mood" }),
        h(TweakToggle, { label: "Warm paper tone", value: t.warm, onChange: (v) => setTweak("warm", v) }),
        h(TweakToggle, { label: "Dark mode", value: t.dark, onChange: (v) => setTheme(v ? "dark" : "light") }),
        h(TweakToggle, { label: "Confetti moments", value: t.confetti, onChange: (v) => setTweak("confetti", v) }),
        h(TweakSection, { label: "Accent" }),
        h(TweakColor, { label: "Accent color", value: accentHex(t.accent),
          options: ["#5E5CE6", "#8E7CF0", "#1FA8A0", "#2F80ED"],
          onChange: (v) => setTweak("accent", hexToAccent(v)) }),
        h(TweakSection, { label: "Hero" }),
        h(TweakRadio, { label: "Layout", value: t.heroLayout, options: ["split", "centered"],
          onChange: (v) => setTweak("heroLayout", v) })));
  }

  const ACCENTS = { indigo: "#5E5CE6", violet: "#8E7CF0", teal: "#1FA8A0", blue: "#2F80ED" };
  function accentHex(a) { return ACCENTS[a] || ACCENTS.indigo; }
  function hexToAccent(hex) { return Object.keys(ACCENTS).find((k) => ACCENTS[k].toLowerCase() === hex.toLowerCase()) || "indigo"; }

  window.GobilagoApp = App;
})();
