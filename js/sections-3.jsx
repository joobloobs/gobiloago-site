/* Gobilago.com — Maker note, Final CTA, Footer. */
(function () {
  const React = window.React;
  const h = React.createElement;
  const DS = window.GobilagoDesignSystem_a1fc6c;
  const { Card, Button, AuroraPanel, Logo } = DS;
  const Ico = (n, props = {}) => h("i", { "data-lucide": n, ...props });
  function Eyebrow({ icon, children, className }) {
    return h("span", { className: "eyebrow" + (className ? " " + className : "") }, icon ? Ico(icon) : null, children);
  }

  /* ---- Roadmap ---- */
  function RoadmapSection() {
    const { lang } = React.useContext(window.LangContext);
    const T = window.I18n[lang].roadmap;
    return h("section", { className: "section section--tight section--sunk", id: "roadmap", "data-screen-label": "Roadmap" },
      h("div", { className: "container" },
        h("div", { className: "section-head section-head--center" },
          h(Eyebrow, { icon: "route", className: "maker-eyebrow" }, T.eyebrow),
          h("h2", null, T.h2),
          h("p", { className: "lead", style: { marginInline: "auto" } }, T.lead)),
        h("div", { className: "roadmap-row" },
          T.items.map(([ic, title, desc], i) => h("div", { className: "roadmap-item", key: i },
            h("span", { className: "roadmap-ic" }, Ico(ic)),
            h("div", null, h("h4", null, title), h("p", null, desc)))))));
  }
  window.RoadmapSection = RoadmapSection;

  /* ---- Final CTA ---- */
  function CTASection() {
    const { lang } = React.useContext(window.LangContext);
    const T = window.I18n[lang].cta;
    return h("section", { className: "section", id: "get", "data-screen-label": "Download" },
      h("div", { className: "container" },
        h(AuroraPanel, { confetti: true, className: "cta-panel" },
          h("h2", { className: "cta-h2" }, T.h2),
          h("p", { className: "cta-sub" }, T.sub),
          h("div", { className: "cta-row" },
            h(window.AppStoreBadge, { light: true, href: "#" }),
            h(Button, { variant: "ghost", size: "lg", className: "cta-ghost", icon: Ico("apple"), as: "a", href: "#" }, T.ios)))));
  }
  window.CTASection = CTASection;

  /* ---- Footer ---- */
  function Footer() {
    const { lang } = React.useContext(window.LangContext);
    const T = window.I18n[lang].footer;
    const year = new Date().getFullYear();
    const col = (title, links) => h("div", null,
      h("h4", null, title),
      links.map(([text, href], i) => h("a", { key: i, href }, text)));
    const ghIcon = h("svg", { viewBox: "0 0 24 24", width: 17, height: 17, fill: "currentColor", "aria-hidden": "true" },
      h("path", { d: "M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.5v-1.8c-2.92.63-3.54-1.4-3.54-1.4-.48-1.22-1.17-1.55-1.17-1.55-.95-.65.07-.64.07-.64 1.06.07 1.62 1.09 1.62 1.09.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.67-1.4-2.33-.27-4.78-1.17-4.78-5.2 0-1.15.4-2.08 1.08-2.82-.1-.27-.47-1.34.1-2.8 0 0 .88-.28 2.88 1.08a10 10 0 0 1 5.24 0c2-1.36 2.88-1.08 2.88-1.08.58 1.46.21 2.53.1 2.8.68.74 1.08 1.67 1.08 2.82 0 4.04-2.46 4.93-4.8 5.19.38.33.72.97.72 1.96v2.9c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z" }));
    const xIcon = h("svg", { viewBox: "0 0 24 24", width: 15, height: 15, fill: "currentColor", "aria-hidden": "true" },
      h("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h6.83l4.713 6.231 5.447-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" }));
    return h("footer", { className: "footer", "data-screen-label": "Footer" },
      h("div", { className: "container footer-inner" },
        h("div", { className: "footer-brand" },
          h(Logo, { size: 30 }),
          h("p", null, T.brand),
          h("div", { className: "footer-social" },
            h("a", { href: "#", "aria-label": "GitHub" }, ghIcon),
            h("a", { href: "#", "aria-label": "X / Twitter" }, xIcon),
            h("a", { href: "mailto:hello@gobilago.com", "aria-label": "Email" }, Ico("mail")))),
        h("div", { className: "footer-cols" },
          col(T.product, T.productLinks),
          col(T.company, T.companyLinks),
          col(T.legal, T.legalLinks)),
        h("div", { className: "footer-foot" },
          h("span", { className: "gb-mono" }, "© " + year + " Gobilago"),
          h("span", null, T.made))));
  }
  window.Footer = Footer;
})();
