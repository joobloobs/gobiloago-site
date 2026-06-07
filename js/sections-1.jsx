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
          h("a", { href: "#principle" }, "Method"),
          h("a", { href: "#model" }, "Model"),
          h("a", { href: "#types" }, "Studying"),
          h("a", { href: "#features" }, "Features"),
          h("a", { href: "#maker" }, "Story")),
        h("div", { className: "nav-actions" },
          h("button", { className: "nav-theme", "aria-label": "Toggle light / dark", onClick: (e) => setTheme(theme === "dark" ? "light" : "dark", e) },
            Ico(theme === "dark" ? "sun" : "moon")),
          h("span", { className: "nav-hide-sm" },
            h(Button, { variant: "primary", size: "sm", icon: Ico("apple"), as: "a", href: "#get" }, "Get the app")))));
  }
  window.Nav = Nav;

  /* ---- Hero ---- */
  function Hero() {
    const { PhoneHome } = window;
    return h("section", { className: "section hero", id: "top", "data-screen-label": "Hero" },
      h("div", { className: "container hero-grid" },
        h("div", { className: "hero-copy" },
          h(Tag, { className: "hero-tag" }, Ico("wifi-off"), "Offline-first \u00b7 iPhone & iPad"),
          h("h1", { className: "hero-h1" }, "Recall,", h("br"), "not recognition."),
          h("p", { className: "hero-lead" },
            "Most apps test whether you ", h("em", null, "recognise"),
            " an answer. Gobilago makes you reproduce it \u2014 by typing, drawing, recalling from scratch \u2014 on a schedule that knows exactly what you're about to forget."),
          h("div", { className: "hero-cta" },
            h(window.AppStoreBadge, { href: "#get" }),
            h(Button, { variant: "ghost", size: "lg", icon: Ico("play"), as: "a", href: "#types" }, "See how it works")),
          h("div", { className: "hero-note" }, Ico("heart"), "Free to start \u00b7 Works fully offline \u00b7 No account required")),
        h("div", { className: "hero-visual" },
          h("div", { className: "hero-glow gb-aurora" }),
          h(PhoneHome, null))));
  }
  window.Hero = Hero;

  /* ---- Principle ---- */
  function PrincipleSection({ confetti }) {
    return h("section", { className: "section principle", "data-screen-label": "Principle" },
      confetti ? h("div", { className: "gb-confetti principle-bg" }) : null,
      h("div", { className: "container principle-inner" },
        h(Eyebrow, { icon: "sparkles" }, "The principle"),
        h("h2", { className: "principle-statement" },
          "Recognition feels like learning. ",
          h("span", { className: "muted-strike" }, "It isn't."),
          " Gobilago makes you ",
          h("span", { className: "hl" }, "reproduce"),
          " the answer \u2014 from scratch."),
        h("div", { className: "principle-cols" },
          [["eye-off", "No peeking at the answer", "Seeing the right answer in a list is recognition. We keep it hidden until you've produced it yourself."],
           ["pen-tool", "Produce, don't pick", "Type it. Draw it. The effort of reconstructing it is exactly what makes it stick."],
           ["git-compare-arrows", "Graded for you, both ways", "Strong on kanji\u2192English but weak the other way? Each direction is tracked and scheduled on its own."]]
            .map(([ic, t, d], i) => h("div", { className: "principle-col", key: i },
              h("span", { className: "principle-ic" }, Ico(ic)),
              h("h3", null, t), h("p", null, d))))));
  }
  window.PrincipleSection = PrincipleSection;

  /* ---- Knowledge model ---- */
  function ModelSection() {
    const items = [
      ["Notion", "circle-dot", "A top-level packet of knowledge \u2014 e.g. the word \u201cto eat.\u201d It's the idea you actually want to own."],
      ["Aspects", "scan-face", "The testable sides of a notion: the kanji, the reading, the meaning. Each one can be prompted or answered."],
      ["Cards", "git-compare-arrows", "A directed link \u2014 prompt aspect \u2192 answer aspect. Each card is graded and scheduled independently."],
      ["Clusters", "boxes", "When knowing one card implies another, they share a single schedule \u2014 so you never grind redundant reps."],
    ];
    return h("section", { className: "section section--sunk", "data-screen-label": "Model" },
      h("div", { className: "container" },
        h("div", { className: "section-head" },
          h(Eyebrow, { icon: "network" }, "The model"),
          h("h2", null, "A knowledge graph, not a stack of cards"),
          h("p", { className: "lead" }, "Flat flashcards flatten meaning. Gobilago keeps the structure of what you're learning intact, so the scheduler knows precisely which connection is weak \u2014 and which you can leave alone.")),
        h("div", { className: "graph-grid" },
          items.map(([t, ic, d], i) => h(Card, { key: i, pad: "lg", className: "graph-card" },
            h("span", { className: "graph-ic" }, Ico(ic)),
            h("div", { className: "graph-step gb-mono" }, "0" + (i + 1)),
            h("h3", null, t), h("p", null, d))))));
  }
  window.ModelSection = ModelSection;
})();
