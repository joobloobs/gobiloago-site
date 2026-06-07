/* PhoneHome — Gobilago iOS home screen recreation for the hero.
   Uses the design-system AuroraPanel + AtomTile. Follows page theme. */
(function () {
  const React = window.React;
  const h = React.createElement;
  const DS = window.GobilagoDesignSystem_a1fc6c;
  const { AuroraPanel, AtomTile } = DS;
  const Ico = (n, props = {}) => h("i", { "data-lucide": n, ...props });

  const COLLECTIONS = [
    { color: "var(--atom-red)", icon: "languages", title: "hiragana", meta: "1 notion" },
    { color: "var(--atom-amber)", icon: "copy", title: "separate cluster", meta: "2 notions" },
    { color: "var(--atom-indigo)", icon: "book-a", title: "espagnol", meta: "1 notion" },
    { color: "var(--atom-leaf)", icon: "book-a", title: "french verbs", meta: "3 notions" },
    { color: "var(--atom-violet)", icon: "book-a", title: "japonais", meta: "2 notions" },
    { color: "var(--atom-blue)", icon: "type", title: "devanagari", meta: "0 notions" },
  ];

  function TabItem({ icon, label, active }) {
    return h("span", { className: "ph-tab" + (active ? " is-active" : "") },
      Ico(icon), h("span", null, label));
  }

  function PhoneHome() {
    return h("div", { className: "ph", "aria-hidden": "true" },
      h("div", { className: "ph-notch" }),
      h("div", { className: "ph-screen" },
        h("div", { className: "ph-statusbar" },
          h("span", null, "9:41"),
          h("span", { className: "ph-status-icons" }, Ico("signal"), Ico("wifi"), Ico("battery-full"))),
        h("div", { className: "ph-body" },
          h("div", { className: "ph-topbar" },
            h("span", { className: "ph-h1" }, "Home"),
            h("span", { className: "ph-iconbtn" }, Ico("layers"))),
          h("div", { className: "ph-search" }, Ico("search"), h("span", null, "Search\u2026")),
          h(AuroraPanel, { confetti: true, className: "ph-plan" },
            h("span", { className: "gb-overline", style: { color: "rgba(255,255,255,.85)" } }, "Today's Plan"),
            h("div", { className: "ph-plan-title" }, "1 notion to review"),
            h("div", { className: "ph-plan-sub" }, "0 training \u00b7 1 retention"),
            h("div", { className: "ph-plan-cta" }, "Start Studying ", Ico("arrow-right")),
            h("span", { className: "ph-cap" }, Ico("graduation-cap"))),
          h("div", { className: "ph-coll-head" }, h("span", null, "All Collections"), Ico("list")),
          h("div", { className: "ph-grid" },
            COLLECTIONS.map((c, i) => h(AtomTile, { key: i, color: c.color, title: c.title, meta: c.meta,
              icon: Ico(c.icon) })))),
        h("div", { className: "ph-tabbar" },
          h(TabItem, { icon: "house", label: "Home", active: true }),
          h(TabItem, { icon: "library-big", label: "Library" }),
          h(TabItem, { icon: "settings", label: "Settings" }))));
  }

  window.PhoneHome = PhoneHome;
})();
