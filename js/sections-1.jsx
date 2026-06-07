/* Gobilago.com — Nav, Hero, Principle, Knowledge model. */
(function () {
  const React = window.React;
  const h = React.createElement;
  const DS = window.GobilagoDesignSystem_a1fc6c;
  const { Logo, Button, Tag, Card } = DS;
  const Ico = (n, props = {}) => h("i", { "data-lucide": n, ...props });

  function Eyebrow({ icon, children }) {
    return h("span", { className: "eyebrow" }, icon ? Ico(icon) : null, children);
  }

  /* ---- App Store badge ---- */
  function AppStoreBadge({ light, href = "#get" }) {
    return h("a", { className: "appstore-badge" + (light ? " appstore-badge--light" : ""), href },
      h("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" },
        h("path", { d: "M17.05 12.97c-.03-2.6 2.12-3.84 2.22-3.9-1.21-1.77-3.1-2.01-3.77-2.04-1.6-.16-3.13.94-3.94.94-.81 0-2.07-.92-3.4-.9-1.75.03-3.36 1.02-4.26 2.58-1.82 3.16-.47 7.83 1.3 10.4.86 1.26 1.89 2.67 3.24 2.62 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.02 2.29-1.28 3.15-2.55.99-1.46 1.4-2.88 1.42-2.95-.03-.01-2.72-1.04-2.75-4.13zM14.6 5.35c.72-.87 1.2-2.08 1.07-3.29-1.03.04-2.28.69-3.02 1.56-.66.77-1.24 2-1.08 3.18 1.15.09 2.32-.59 3.03-1.45z" })),
      h("span", null,
        h("span", { className: "asb-1" }, "Download on the"),
        h("span", { className: "asb-2" }, "App Store")));
  }
  window.AppStoreBadge = AppStoreBadge;

  /* ---- Nav ---- */
  function Nav({ theme, setTheme }) {
    const { lang, toggleLang } = React.useContext(window.LangContext);
    const T = window.I18n[lang].nav;
    const [scrolled, setScrolled] = React.useState(false);
    React.useEffect(() => {
      const f = () => setScrolled(window.scrollY > 8);
      window.addEventListener("scroll", f); f();
      return () => window.removeEventListener("scroll", f);
    }, []);
    return h("header", { className: "nav" + (scrolled ? " is-scrolled" : "") },
      h("div", { className: "container nav-inner" },
        h("a", { href: "#top", className: "nav-logo", "aria-label": "Gobilago home" }, h(Logo, { size: 28 })),
        h("nav", { className: "nav-links" },
          h("a", { href: "#principle" }, T.method),
          h("a", { href: "#model" }, T.model),
          h("a", { href: "#types" }, T.studying),
          h("a", { href: "#features" }, T.features),
          h("a", { href: "#maker" }, T.story)),
        h("div", { className: "nav-actions" },
          h("button", { className: "nav-theme", "aria-label": "Toggle light / dark", onClick: (e) => setTheme(theme === "dark" ? "light" : "dark", e) },
            Ico(theme === "dark" ? "sun" : "moon")),
          h("button", { className: "nav-theme", "aria-label": "Switch language", onClick: toggleLang,
            style: { fontFamily: "var(--font-mono, monospace)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em" } },
            window.I18n[lang].langToggle),
          h("span", { className: "nav-hide-sm" },
            h(Button, { variant: "primary", size: "sm", icon: Ico("apple"), as: "a", href: "#get" }, T.getApp)))));
  }
  window.Nav = Nav;

  /* ---- Hero ---- */
  function Hero() {
    const { lang } = React.useContext(window.LangContext);
    const T = window.I18n[lang].hero;
    const { PhoneStudy } = window;
    return h("section", { className: "section hero", id: "top", "data-screen-label": "Hero" },
      h("div", { className: "container hero-grid" },
        h("div", { className: "hero-copy" },
          h(Tag, { className: "hero-tag" }, Ico("wifi-off"), T.tag),
          h("h1", { className: "hero-h1" }, T.h1a, h("br"), T.h1b),
          h("p", { className: "hero-lead" },
            T.lead1, h("em", null, T.leadEm), T.lead2),
          h("div", { className: "hero-cta" },
            h(window.AppStoreBadge, { href: "#get" }),
            h(Button, { variant: "ghost", size: "lg", icon: Ico("play"), as: "a", href: "#types" }, T.seeHow)),
          h("div", { className: "hero-note" }, Ico("heart"), T.note)),
        h("div", { className: "hero-visual" },
          h("div", { className: "hero-glow gb-aurora" }),
          h(PhoneStudy, null))));
  }
  window.Hero = Hero;

  /* ---- Principle ---- */
  function PrincipleSection({ confetti }) {
    const { lang } = React.useContext(window.LangContext);
    const T = window.I18n[lang].principle;
    return h("section", { className: "section principle", "data-screen-label": "Principle" },
      confetti ? h("div", { className: "gb-confetti principle-bg" }) : null,
      h("div", { className: "container principle-inner" },
        h(Eyebrow, { icon: "sparkles" }, T.eyebrow),
        h("h2", { className: "principle-statement" },
          T.s1,
          h("span", { className: "muted-strike" }, T.sStrike),
          T.s2,
          h("span", { className: "hl" }, T.sHl),
          T.s3),
        h("div", { className: "principle-cols" },
          T.cols.map(([ic, title, desc], i) => h("div", { className: "principle-col", key: i },
            h("span", { className: "principle-ic" }, Ico(ic)),
            h("h3", null, title), h("p", null, desc))))));
  }
  window.PrincipleSection = PrincipleSection;

  /* ---- Knowledge model ---- */
  function ModelSection() {
    const { lang } = React.useContext(window.LangContext);
    const T = window.I18n[lang].model;
    return h("section", { className: "section section--sunk", "data-screen-label": "Model" },
      h("div", { className: "container" },
        h("div", { className: "section-head" },
          h(Eyebrow, { icon: "network" }, T.eyebrow),
          h("h2", null, T.h2),
          h("p", { className: "lead" }, T.lead)),
        h("div", { className: "graph-grid" },
          T.items.map(([title, ic, desc], i) => h(Card, { key: i, pad: "lg", className: "graph-card" },
            h("span", { className: "graph-ic" }, Ico(ic)),
            h("div", { className: "graph-step gb-mono" }, "0" + (i + 1)),
            h("h3", null, title), h("p", null, desc))))));
  }
  window.ModelSection = ModelSection;
})();
