/* Gobilago.com — Terms & Privacy shared renderer. */
(function () {
  const React = window.React;
  const { useState, useEffect } = React;
  const h = React.createElement;
  const DS = window.GobilagoDesignSystem_a1fc6c;
  const { Logo, Button } = DS;
  const Ico = (n, p = {}) => h("i", { "data-lucide": n, ...p });

  function LegalNav({ theme, setTheme }) {
    return h("header", { className: "nav is-scrolled" },
      h("div", { className: "container nav-inner" },
        h("a", { href: "index.html", className: "nav-logo", "aria-label": "Gobilago home" }, h(Logo, { size: 28 })),
        h("nav", { className: "nav-links" },
          h("a", { href: "index.html#principle" }, "Method"),
          h("a", { href: "index.html#features" }, "Features"),
          h("a", { href: "index.html#maker" }, "Story")),
        h("div", { className: "nav-actions" },
          h("button", { className: "nav-theme", "aria-label": "Toggle theme", onClick: () => setTheme(theme === "dark" ? "light" : "dark") },
            Ico(theme === "dark" ? "sun" : "moon")),
          h("span", { className: "nav-hide-sm" },
            h(Button, { variant: "primary", size: "sm", icon: Ico("apple"), as: "a", href: "index.html#get" }, "Get the app")))));
  }

  function LegalFooter() {
    const year = new Date().getFullYear();
    return h("footer", { className: "footer" },
      h("div", { className: "container footer-inner" },
        h("div", { className: "footer-brand" },
          h(Logo, { size: 30 }),
          h("p", null, "Recall, not recognition. An offline-first spaced-repetition app for people who want to actually keep what they learn.")),
        h("div", { className: "footer-cols" },
          h("div", null, h("h4", null, "Product"),
            h("a", { href: "index.html#principle" }, "Method"),
            h("a", { href: "index.html#types" }, "Studying"),
            h("a", { href: "index.html#features" }, "Features")),
          h("div", null, h("h4", null, "Legal"),
            h("a", { href: "terms.html" }, "Terms of Use"),
            h("a", { href: "privacy.html" }, "Privacy Policy")),
          h("div", null, h("h4", null, "Contact"),
            h("a", { href: "mailto:hello@gobilago.com" }, "hello@gobilago.com"))),
        h("div", { className: "footer-foot" },
          h("span", { className: "gb-mono" }, "\u00a9 " + year + " Gobilago"),
          h("span", null, "Made with care \u00b7 iOS only \u00b7 Works offline"))));
  }

  function Section({ id, num, title, children }) {
    return h("section", { className: "legal-section", id },
      h("h2", null, h("span", { className: "legal-num" }, num), title), children);
  }
  function P(...kids) { return h("p", null, ...kids); }
  function UL(items) { return h("ul", null, items.map((it, i) => h("li", { key: i }, it))); }
  function Callout(text) {
    return h("div", { className: "legal-callout" }, Ico("info"), h("p", null, text));
  }

  function LegalPage({ doc }) {
    const [theme, setThemeState] = useState(() => localStorage.getItem("gobilago-theme") || "light");
    const setTheme = (m) => { setThemeState(m); localStorage.setItem("gobilago-theme", m); };
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.setAttribute("data-warm", "on");
      if (window.lucide) window.lucide.createIcons();
    }, [theme]);
    useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

    return h(React.Fragment, null,
      h(LegalNav, { theme, setTheme }),
      h("main", null,
        h("div", { className: "container legal-hero" },
          h("div", { className: "legal-wrap" },
            h("aside", { className: "legal-toc" },
              h("h4", null, "On this page"),
              doc.sections.map((s, i) => h("a", { key: i, href: "#" + s.id }, s.title))),
            h("article", { className: "legal-body" },
              h("h1", null, doc.title),
              h("p", { className: "legal-meta" }, "Last updated " + doc.updated + " \u00b7 Effective " + doc.updated),
              h("p", { className: "legal-intro" }, doc.intro),
              doc.sections.map((s, i) => h(Section, { key: i, id: s.id, num: String(i + 1).padStart(2, "0"), title: s.title }, s.body)))))),
      h(LegalFooter, null));
  }

  // expose builders
  window.LegalKit = { LegalPage, P, UL, Callout, h };
})();
