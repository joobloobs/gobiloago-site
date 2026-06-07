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

  /* ---- Maker note ---- */
  function MakerSection({ confetti }) {
    return h("section", { className: "section maker", id: "maker", "data-screen-label": "Story" },
      h("div", { className: "container" },
        h(Card, { pad: "lg", className: "maker-card" },
          confetti ? h("div", { className: "gb-confetti maker-confetti" }) : null,
          h("div", { className: "maker-inner" },
            h(Eyebrow, { icon: "sprout", className: "maker-eyebrow" }, "From the maker"),
            h("p", { className: "maker-quote" },
              "\u201cI kept ", h("span", { className: "hl" }, "recognising"),
              " words in my flashcard app and feeling like I knew them \u2014 then drawing a complete blank when I needed them. So I built the app I wished existed: one that makes you ",
              h("span", { className: "hl" }, "produce"),
              " the answer, and is honest with you when you can't yet.\u201d"),
            h("div", { className: "maker-sign" },
              h("span", { className: "maker-avatar gb-aurora" }, "G"),
              h("div", { style: { textAlign: "left" } },
                h("div", { className: "maker-name" }, "The Gobilago maker"),
                h("div", { className: "maker-role" }, "Solo developer \u00b7 building in the open")))))));
  }
  window.MakerSection = MakerSection;

  /* ---- Roadmap ---- */
  function RoadmapSection() {
    const items = [
      ["graduation-cap", "Exam & Intensive modes", "Focused cram sessions and timed exams for the night before."],
      ["sparkles", "AI collection generation", "Turn a prompt or a PDF into a ready-to-study collection."],
      ["arrow-left-right", "Anki & Quizlet import", "Bring your existing decks across without losing your history."],
      ["users", "Collaborative decks", "Build and maintain collections together with classmates."],
      ["flame", "Daily streaks & widget", "A gentle home-screen nudge to keep your memories fresh."],
    ];
    return h("section", { className: "section section--tight section--sunk", id: "roadmap", "data-screen-label": "Roadmap" },
      h("div", { className: "container" },
        h("div", { className: "section-head section-head--center" },
          h(Eyebrow, { icon: "route", className: "maker-eyebrow" }, "On the way"),
          h("h2", null, "What's coming next"),
          h("p", { className: "lead", style: { marginInline: "auto" } }, "Gobilago is built in the open. Here's a peek at what's on the bench \u2014 shaped, in part, by what you ask for.")),
        h("div", { className: "roadmap-row" },
          items.map(([ic, t, d], i) => h("div", { className: "roadmap-item", key: i },
            h("span", { className: "roadmap-ic" }, Ico(ic)),
            h("div", null, h("h4", null, t), h("p", null, d)))))));
  }
  window.RoadmapSection = RoadmapSection;

  /* ---- Final CTA ---- */
  function CTASection() {
    return h("section", { className: "section", id: "get", "data-screen-label": "Download" },
      h("div", { className: "container" },
        h(AuroraPanel, { confetti: true, className: "cta-panel" },
          h("h2", { className: "cta-h2" }, "Start remembering things for real."),
          h("p", { className: "cta-sub" },
            "Free to start, works fully offline, no account required. Build your first collection in a couple of minutes."),
          h("div", { className: "cta-row" },
            h(window.AppStoreBadge, { light: true, href: "#" }),
            h(Button, { variant: "ghost", size: "lg", className: "cta-ghost", icon: Ico("apple"), as: "a", href: "#" }, "Requires iOS 17+")))));
  }
  window.CTASection = CTASection;

  /* ---- Footer ---- */
  function Footer() {
    const year = new Date().getFullYear();
    const col = (title, links) => h("div", null,
      h("h4", null, title),
      links.map(([t, href], i) => h("a", { key: i, href }, t)));
  const ghIcon = h("svg", { viewBox: "0 0 24 24", width: 17, height: 17, fill: "currentColor", "aria-hidden": "true" },
    h("path", { d: "M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.5v-1.8c-2.92.63-3.54-1.4-3.54-1.4-.48-1.22-1.17-1.55-1.17-1.55-.95-.65.07-.64.07-.64 1.06.07 1.62 1.09 1.62 1.09.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.67-1.4-2.33-.27-4.78-1.17-4.78-5.2 0-1.15.4-2.08 1.08-2.82-.1-.27-.47-1.34.1-2.8 0 0 .88-.28 2.88 1.08a10 10 0 0 1 5.24 0c2-1.36 2.88-1.08 2.88-1.08.58 1.46.21 2.53.1 2.8.68.74 1.08 1.67 1.08 2.82 0 4.04-2.46 4.93-4.8 5.19.38.33.72.97.72 1.96v2.9c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z" }));
  const xIcon = h("svg", { viewBox: "0 0 24 24", width: 15, height: 15, fill: "currentColor", "aria-hidden": "true" },
    h("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h6.83l4.713 6.231 5.447-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" }));
  return h("footer", { className: "footer", "data-screen-label": "Footer" },
      h("div", { className: "container footer-inner" },
        h("div", { className: "footer-brand" },
          h(Logo, { size: 30 }),
          h("p", null, "Recall, not recognition. An offline-first spaced-repetition app for people who want to actually keep what they learn."),
          h("div", { className: "footer-social" },
            h("a", { href: "#", "aria-label": "GitHub" }, ghIcon),
            h("a", { href: "#", "aria-label": "X / Twitter" }, xIcon),
            h("a", { href: "mailto:hello@gobilago.com", "aria-label": "Email" }, Ico("mail")))),
        h("div", { className: "footer-cols" },
          col("Product", [["Method", "#principle"], ["The model", "#model"], ["Studying", "#types"], ["Features", "#features"]]),
          col("Company", [["Story", "#maker"], ["Roadmap", "#roadmap"], ["Contact", "mailto:hello@gobilago.com"]]),
          col("Legal", [["Terms of Use", "terms.html"], ["Privacy Policy", "privacy.html"]])),
        h("div", { className: "footer-foot" },
          h("span", { className: "gb-mono" }, "\u00a9 " + year + " Gobilago"),
          h("span", null, "Made with care \u00b7 iOS only \u00b7 Works offline"))));
  }
  window.Footer = Footer;
})();
