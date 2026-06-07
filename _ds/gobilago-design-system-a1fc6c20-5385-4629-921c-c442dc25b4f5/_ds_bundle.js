/* @ds-bundle: {"format":3,"namespace":"GobilagoDesignSystem_a1fc6c","components":[{"name":"AtomTile","sourcePath":"components/brand/AtomTile.jsx"},{"name":"AuroraPanel","sourcePath":"components/brand/AuroraPanel.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"StatPill","sourcePath":"components/core/StatPill.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Toggle","sourcePath":"components/core/Toggle.jsx"}],"sourceHashes":{"components/brand/AtomTile.jsx":"ab286310ccc8","components/brand/AuroraPanel.jsx":"1eb24068532f","components/brand/Logo.jsx":"76a1e33c7001","components/core/Badge.jsx":"4834f999308c","components/core/Button.jsx":"7271eaf7cc34","components/core/Card.jsx":"ee412d652597","components/core/StatPill.jsx":"9ef2aa1b70a2","components/core/Tag.jsx":"c82d2619e099","components/core/Toggle.jsx":"88b5ff877014","ui_kits/website/app.jsx":"dc6bcfa4d41c","ui_kits/website/kit-components.jsx":"a2e3d90e4453","ui_kits/website/phone.jsx":"6ae06382685c","ui_kits/website/sections.jsx":"397066d91b4a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GobilagoDesignSystem_a1fc6c = window.GobilagoDesignSystem_a1fc6c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/AtomTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gb-atom{
  display:flex; flex-direction:column; justify-content:space-between;
  aspect-ratio:1.1; border-radius:var(--radius-lg); padding:var(--space-4);
  color:#fff; box-shadow:var(--shadow-sm); border:none; text-align:left;
  background:var(--_atom, var(--atom-indigo)); cursor:default;
  transition:transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
}
.gb-atom--interactive{ cursor:pointer; }
.gb-atom--interactive:hover{ transform:translateY(-3px); box-shadow:var(--shadow-md); }
.gb-atom--interactive:active{ transform:translateY(0) scale(.99); }
.gb-atom__chip{
  width:36px; height:36px; border-radius:11px; background:rgba(255,255,255,.22);
  display:flex; align-items:center; justify-content:center; color:#fff;
}
.gb-atom__chip svg{ width:20px; height:20px; stroke-width:2.2; }
.gb-atom__title{ font-family:var(--font-body); font-weight:700; font-size:var(--text-base); line-height:1.2; }
.gb-atom__meta{ font-size:var(--text-sm); color:rgba(255,255,255,.82); margin-top:2px; }
`;
let injected = false;
function useCSS() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-gb", "atom");
  el.textContent = CSS;
  document.head.appendChild(el);
}

/** Vibrant collection / category tile with inset glyph. */
function AtomTile({
  color = "var(--atom-indigo)",
  icon = null,
  title,
  meta,
  interactive = false,
  className = "",
  children,
  ...rest
}) {
  useCSS();
  const Tag = interactive ? "button" : "div";
  const cls = ["gb-atom", interactive ? "gb-atom--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    style: {
      "--_atom": color,
      ...rest.style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "gb-atom__chip"
  }, icon), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "gb-atom__title"
  }, title), meta != null && /*#__PURE__*/React.createElement("span", {
    className: "gb-atom__meta",
    style: {
      display: "block"
    }
  }, meta), children));
}
Object.assign(__ds_scope, { AtomTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/AtomTile.jsx", error: String((e && e.message) || e) }); }

// components/brand/AuroraPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gb-aurora-panel{
  position:relative; overflow:hidden; color:#fff;
  border-radius:var(--radius-2xl); padding:var(--space-8);
  background-color:var(--aurora-indigo);
  background-image:
    radial-gradient(60% 90% at 12% 18%, var(--aurora-violet) 0%, transparent 60%),
    radial-gradient(70% 80% at 88% 12%, var(--aurora-mint) 0%, transparent 58%),
    radial-gradient(80% 90% at 78% 92%, var(--aurora-teal) 0%, transparent 60%),
    radial-gradient(90% 90% at 20% 95%, var(--aurora-blue) 0%, transparent 62%),
    linear-gradient(120deg, var(--aurora-indigo), var(--aurora-blue));
}
.gb-aurora-panel--glow{ box-shadow:var(--shadow-indigo); }
.gb-aurora-panel--confetti::before{
  content:""; position:absolute; inset:0; opacity:.5; pointer-events:none;
  background-image:
    radial-gradient(circle, var(--confetti-violet) 99%, transparent 0) 4% 12% / 200px 200px,
    radial-gradient(circle, var(--confetti-mint, #8BE3B8) 99%, transparent 0) 62% 28% / 240px 240px,
    radial-gradient(circle, #fff 99%, transparent 0) 30% 64% / 220px 220px,
    radial-gradient(circle, var(--confetti-teal) 99%, transparent 0) 84% 72% / 260px 260px;
  background-repeat:repeat;
}
.gb-aurora-panel > *{ position:relative; }
`;
let injected = false;
function useCSS() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-gb", "aurora");
  el.textContent = CSS;
  document.head.appendChild(el);
}

/** The signature aurora gradient surface (no liquid glass). */
function AuroraPanel({
  glow = true,
  confetti = false,
  as = "div",
  className = "",
  children,
  ...rest
}) {
  useCSS();
  const Tag = as;
  const cls = ["gb-aurora-panel", glow ? "gb-aurora-panel--glow" : "", confetti ? "gb-aurora-panel--confetti" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { AuroraPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/AuroraPanel.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MARK = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 96 96",
  fill: "none",
  "aria-hidden": "true",
  style: {
    display: "block",
    width: "100%",
    height: "100%"
  }
}, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "gbLogoAurora",
  x1: "6",
  y1: "6",
  x2: "90",
  y2: "90",
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/React.createElement("stop", {
  stopColor: "#8E7CF0"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "0.34",
  stopColor: "#5E5CE6"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "0.66",
  stopColor: "#5AA9F5"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "1",
  stopColor: "#4FD2C2"
}))), /*#__PURE__*/React.createElement("rect", {
  x: "4",
  y: "4",
  width: "88",
  height: "88",
  rx: "24",
  fill: "url(#gbLogoAurora)"
}), /*#__PURE__*/React.createElement("g", {
  stroke: "#fff",
  strokeWidth: "4.5",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("line", {
  x1: "30",
  y1: "34",
  x2: "56",
  y2: "26"
}), /*#__PURE__*/React.createElement("line", {
  x1: "30",
  y1: "34",
  x2: "40",
  y2: "62"
}), /*#__PURE__*/React.createElement("line", {
  x1: "56",
  y1: "26",
  x2: "66",
  y2: "56"
}), /*#__PURE__*/React.createElement("line", {
  x1: "40",
  y1: "62",
  x2: "66",
  y2: "56"
})), /*#__PURE__*/React.createElement("g", {
  fill: "#fff"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "30",
  cy: "34",
  r: "9"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "56",
  cy: "26",
  r: "6.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "40",
  cy: "62",
  r: "6.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "66",
  cy: "56",
  r: "9"
})));

/** Gobilago lockup: aurora mark + Bricolage wordmark. */
function Logo({
  size = 32,
  showWordmark = true,
  tone = "auto",
  className = "",
  ...rest
}) {
  const wordColor = tone === "light" ? "#fff" : tone === "dark" ? "#14152B" : "var(--text-strong)";
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size * 0.34,
      ...rest.style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      flex: "none"
    }
  }, MARK), showWordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      letterSpacing: "-0.03em",
      fontSize: size * 0.92,
      lineHeight: 1,
      color: wordColor
    }
  }, "Gobilago"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gb-badge{
  display:inline-flex; align-items:center; gap:.45em;
  font-family:var(--font-body); font-weight:600; font-size:var(--text-sm);
  line-height:1; color:var(--text-body);
}
.gb-badge__dot{ width:.62em; height:.62em; border-radius:50%; background:currentColor; flex:none; }
.gb-badge--overdue{ color:var(--danger); }
.gb-badge--due{ color:var(--color-primary); }
.gb-badge--upcoming{ color:var(--success); }
.gb-badge--dormant{ color:var(--text-muted); }
.gb-badge__count{
  display:inline-flex; align-items:center; justify-content:center;
  min-width:1.5em; height:1.5em; padding:0 .45em; border-radius:var(--radius-pill);
  background:var(--color-primary); color:#fff; font-family:var(--font-mono);
  font-weight:700; font-size:var(--text-xs);
}
`;
let injected = false;
function useCSS() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-gb", "badge");
  el.textContent = CSS;
  document.head.appendChild(el);
}
const LABELS = {
  overdue: "Overdue",
  due: "Due today",
  upcoming: "Upcoming",
  dormant: "Dormant"
};

/** Status badge with coloured dot, or a count pill. */
function Badge({
  status,
  count,
  dot = true,
  className = "",
  children,
  ...rest
}) {
  useCSS();
  if (count != null) {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: ["gb-badge", className].filter(Boolean).join(" ")
    }, rest), /*#__PURE__*/React.createElement("span", {
      className: "gb-badge__count"
    }, count), children);
  }
  const cls = ["gb-badge", status ? `gb-badge--${status}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "gb-badge__dot"
  }), children ?? (status ? LABELS[status] : null));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once. */
const CSS = `
.gb-btn{
  --_bg: var(--color-primary);
  --_fg: var(--color-on-primary);
  display:inline-flex; align-items:center; justify-content:center; gap:.5em;
  font-family:var(--font-body); font-weight:600; line-height:1;
  border:1px solid transparent; border-radius:var(--radius-pill);
  cursor:pointer; white-space:nowrap; text-decoration:none;
  background:var(--_bg); color:var(--_fg);
  transition:transform var(--dur-fast) var(--ease-out),
             background var(--dur-fast) var(--ease-out),
             box-shadow var(--dur-base) var(--ease-out), opacity var(--dur-fast);
}
.gb-btn:active{ transform:scale(.97); }
.gb-btn:focus-visible{ outline:none; box-shadow:0 0 0 4px var(--focus-ring); }
.gb-btn[disabled]{ opacity:.45; cursor:not-allowed; transform:none; }

/* sizes */
.gb-btn--sm{ font-size:var(--text-sm); padding:.5rem .95rem; }
.gb-btn--md{ font-size:var(--text-base); padding:.7rem 1.35rem; }
.gb-btn--lg{ font-size:var(--text-md); padding:.95rem 1.9rem; }

/* variants */
.gb-btn--primary{ background:var(--color-primary); color:var(--color-on-primary); box-shadow:var(--shadow-indigo); }
.gb-btn--primary:hover:not([disabled]){ background:var(--color-primary-hover); }
.gb-btn--primary:active:not([disabled]){ background:var(--color-primary-press); }

.gb-btn--secondary{ background:var(--surface-sunk); color:var(--text-strong); }
.gb-btn--secondary:hover:not([disabled]){ background:color-mix(in oklch, var(--surface-sunk) 78%, var(--ink-900)); }

.gb-btn--ghost{ background:transparent; color:var(--color-primary); }
.gb-btn--ghost:hover:not([disabled]){ background:var(--color-primary-soft); }

.gb-btn--danger{ background:var(--danger); color:#fff; }
.gb-btn--danger:hover:not([disabled]){ filter:brightness(.93); }

.gb-btn--block{ display:flex; width:100%; }
.gb-btn__icon{ display:inline-flex; }
.gb-btn__icon svg{ width:1.15em; height:1.15em; stroke-width:2.2; }
`;
let injected = false;
function useCSS() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-gb", "button");
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Gobilago primary control. Capsule-shaped; primary carries the indigo glow.
 */
function Button({
  variant = "primary",
  size = "md",
  block = false,
  icon = null,
  iconRight = false,
  as = "button",
  className = "",
  children,
  ...rest
}) {
  useCSS();
  const Tag = as;
  const cls = ["gb-btn", `gb-btn--${variant}`, `gb-btn--${size}`, block ? "gb-btn--block" : "", className].filter(Boolean).join(" ");
  const ico = icon ? /*#__PURE__*/React.createElement("span", {
    className: "gb-btn__icon"
  }, icon) : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), !iconRight && ico, children != null && /*#__PURE__*/React.createElement("span", null, children), iconRight && ico);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gb-card{
  background:var(--surface-card); border-radius:var(--radius-xl);
  border:1px solid color-mix(in oklch, var(--border-color) 60%, transparent);
  box-shadow:var(--shadow-md);
}
.gb-card--flat{ box-shadow:none; }
.gb-card--sunk{ background:var(--surface-sunk); border-color:transparent; box-shadow:none; }
.gb-card--pad-sm{ padding:var(--space-4); }
.gb-card--pad-md{ padding:var(--space-6); }
.gb-card--pad-lg{ padding:var(--space-8); }
.gb-card--interactive{ cursor:pointer; transition:transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out); }
.gb-card--interactive:hover{ transform:translateY(-3px); box-shadow:var(--shadow-lg); }
.gb-card--interactive:active{ transform:translateY(0) scale(.99); }
`;
let injected = false;
function useCSS() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-gb", "card");
  el.textContent = CSS;
  document.head.appendChild(el);
}

/** Soft-elevation surface card. */
function Card({
  pad = "md",
  flat = false,
  sunk = false,
  interactive = false,
  as = "div",
  className = "",
  children,
  ...rest
}) {
  useCSS();
  const Tag = as;
  const cls = ["gb-card", `gb-card--pad-${pad}`, flat ? "gb-card--flat" : "", sunk ? "gb-card--sunk" : "", interactive ? "gb-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/StatPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gb-statpill{
  display:inline-flex; align-items:center; gap:.4em;
  font-family:var(--font-mono); font-weight:700; font-size:var(--text-sm);
  line-height:1; padding:.5em .85em; border-radius:var(--radius-pill);
  background:var(--color-primary-soft); color:var(--color-primary);
}
.gb-statpill--ghost{ background:var(--surface-sunk); color:var(--text-body); }
.gb-statpill--solid{ background:var(--color-primary); color:#fff; }
`;
let injected = false;
function useCSS() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-gb", "statpill");
  el.textContent = CSS;
  document.head.appendChild(el);
}

/** Monospace pill for SRS intervals / stats (1d, 3d, 10d…). */
function StatPill({
  variant = "soft",
  className = "",
  children,
  ...rest
}) {
  useCSS();
  const cls = ["gb-statpill", variant !== "soft" ? `gb-statpill--${variant}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { StatPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gb-tag{
  display:inline-flex; align-items:center; gap:.4em;
  font-family:var(--font-body); font-weight:700; font-size:var(--text-xs);
  line-height:1; padding:.45em .7em; border-radius:var(--radius-xs);
  background:var(--color-primary-soft); color:var(--color-primary);
}
.gb-tag--neutral{ background:var(--surface-sunk); color:var(--text-body); }
.gb-tag--solid{ background:var(--color-primary); color:#fff; }
.gb-tag svg{ width:1em; height:1em; stroke-width:2.4; }
`;
let injected = false;
function useCSS() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-gb", "tag");
  el.textContent = CSS;
  document.head.appendChild(el);
}

/** Small metadata chip — e.g. "language", "language:french". */
function Tag({
  variant = "soft",
  color,
  icon = null,
  className = "",
  children,
  ...rest
}) {
  useCSS();
  const cls = ["gb-tag", variant !== "soft" ? `gb-tag--${variant}` : "", className].filter(Boolean).join(" ");
  const style = color ? {
    background: `color-mix(in oklch, ${color} 15%, transparent)`,
    color
  } : undefined;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      ...style,
      ...rest.style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.gb-toggle{
  display:inline-flex; align-items:center; border:none; padding:0; cursor:pointer;
  width:52px; height:31px; border-radius:var(--radius-pill);
  background:var(--line-strong); transition:background var(--dur-base) var(--ease-out);
}
.gb-toggle[aria-checked="true"]{ background:var(--color-primary); }
.gb-toggle[disabled]{ opacity:.5; cursor:not-allowed; }
.gb-toggle__knob{
  width:27px; height:27px; margin:2px; border-radius:50%; background:#fff;
  box-shadow:0 2px 5px rgba(0,0,0,.25);
  transition:transform var(--dur-base) var(--ease-spring);
}
.gb-toggle[aria-checked="true"] .gb-toggle__knob{ transform:translateX(21px); }
.gb-toggle:focus-visible{ outline:none; box-shadow:0 0 0 4px var(--focus-ring); }
`;
let injected = false;
function useCSS() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-gb", "toggle");
  el.textContent = CSS;
  document.head.appendChild(el);
}

/** iOS-style switch. Controlled via `checked` + `onChange`. */
function Toggle({
  checked = false,
  onChange,
  disabled = false,
  className = "",
  ...rest
}) {
  useCSS();
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    className: ["gb-toggle", className].filter(Boolean).join(" "),
    onClick: () => !disabled && onChange && onChange(!checked)
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "gb-toggle__knob"
  }));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toggle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* Gobilago landing page — shell + composition. */
(function () {
  const React = window.React;
  const {
    useState,
    useEffect
  } = React;
  const h = React.createElement;
  const {
    Logo,
    Button,
    AuroraPanel,
    Tag
  } = window;
  const {
    PhoneHome,
    PrincipleSection,
    GraphSection,
    InteractionsSection,
    SchedulerSection
  } = window;
  const Ico = (n, props = {}) => h("i", {
    "data-lucide": n,
    ...props
  });
  function useTheme() {
    const [theme, setTheme] = useState(() => localStorage.getItem("gb-theme") || "light");
    useEffect(() => {
      document.documentElement.dataset.theme = theme === "dark" ? "dark" : "";
      localStorage.setItem("gb-theme", theme);
      if (window.lucide) lucide.createIcons();
    }, [theme]);
    return [theme, setTheme];
  }
  function Nav({
    theme,
    setTheme
  }) {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      const f = () => setScrolled(window.scrollY > 8);
      window.addEventListener("scroll", f);
      f();
      return () => window.removeEventListener("scroll", f);
    }, []);
    return h("header", {
      className: "nav" + (scrolled ? " is-scrolled" : "")
    }, h("div", {
      className: "container nav-inner"
    }, h("a", {
      href: "#top",
      className: "nav-logo"
    }, h(Logo, {
      size: 28
    })), h("nav", {
      className: "nav-links"
    }, h("a", {
      href: "#principle"
    }, "Method"), h("a", {
      href: "#model"
    }, "Model"), h("a", {
      href: "#types"
    }, "Tests"), h("a", {
      href: "#scheduler"
    }, "Scheduler")), h("div", {
      className: "nav-actions"
    }, h("button", {
      className: "nav-theme",
      "aria-label": "Toggle theme",
      onClick: () => setTheme(theme === "dark" ? "light" : "dark")
    }, Ico(theme === "dark" ? "sun" : "moon")), h(Button, {
      variant: "primary",
      size: "sm",
      icon: Ico("apple"),
      as: "a",
      href: "#get"
    }, "Get the app"))));
  }
  function Hero() {
    return h("section", {
      className: "section hero",
      id: "top",
      "data-screen-label": "Hero"
    }, h("div", {
      className: "container hero-grid"
    }, h("div", {
      className: "hero-copy"
    }, h(Tag, {
      className: "hero-tag"
    }, Ico("wifi-off"), "Offline-first · iOS"), h("h1", {
      className: "hero-h1"
    }, "Recall, not recognition."), h("p", {
      className: "hero-lead"
    }, "Most apps test whether you ", h("em", null, "recognise"), " an answer. Gobilago makes you reproduce it — from scratch, on a schedule that knows exactly what you're about to forget."), h("div", {
      className: "hero-cta"
    }, h(Button, {
      variant: "primary",
      size: "lg",
      icon: Ico("apple"),
      as: "a",
      href: "#get"
    }, "Get Gobilago free"), h(Button, {
      variant: "ghost",
      size: "lg",
      icon: Ico("play"),
      as: "a",
      href: "#types"
    }, "See how it works")), h("div", {
      className: "hero-note"
    }, Ico("check"), "Free to start · Works fully offline · No account required")), h("div", {
      className: "hero-visual"
    }, h("div", {
      className: "hero-glow gb-aurora"
    }), h(PhoneHome, null))));
  }
  function CtaBand() {
    return h("section", {
      className: "section",
      id: "get",
      "data-screen-label": "Get the app"
    }, h("div", {
      className: "container"
    }, h(AuroraPanel, {
      confetti: true,
      className: "cta-panel"
    }, h("h2", {
      className: "cta-h2"
    }, "Remember more. Forget less."), h("p", {
      className: "cta-sub"
    }, "Start free today. Everything works offline — your graph syncs quietly in the background when you're back online."), h("div", {
      className: "cta-row"
    }, h(Button, {
      variant: "secondary",
      size: "lg",
      icon: Ico("apple"),
      as: "a",
      href: "#"
    }, "Download on iOS"), h(Button, {
      variant: "ghost",
      size: "lg",
      className: "cta-ghost",
      as: "a",
      href: "#model"
    }, "Explore the library")))));
  }
  function Footer() {
    return h("footer", {
      className: "footer"
    }, h("div", {
      className: "container footer-inner"
    }, h("div", {
      className: "footer-brand"
    }, h(Logo, {
      size: 26
    }), h("p", null, "Recall, not recognition. An offline-first spaced-repetition system for serious learners.")), h("div", {
      className: "footer-cols"
    }, h("div", null, h("h4", null, "Product"), h("a", {
      href: "#types"
    }, "Interaction types"), h("a", {
      href: "#scheduler"
    }, "The scheduler"), h("a", {
      href: "#model"
    }, "Knowledge graph")), h("div", null, h("h4", null, "Community"), h("a", {
      href: "#"
    }, "Library"), h("a", {
      href: "#"
    }, "Templates"), h("a", {
      href: "#"
    }, "Publish a collection")), h("div", null, h("h4", null, "Company"), h("a", {
      href: "#"
    }, "About"), h("a", {
      href: "#"
    }, "Roadmap"), h("a", {
      href: "#"
    }, "Contact"))), h("div", {
      className: "footer-foot gb-mono"
    }, "© 2026 Gobilago · Made for recall")));
  }
  function App() {
    const [theme, setTheme] = useTheme();
    // Run after EVERY commit (covers tab switches). DOM mutation here does
    // not trigger a React re-render, so there is no loop.
    useEffect(() => {
      try {
        if (window.lucide) lucide.createIcons();
      } catch (e) {}
    });
    return h(React.Fragment, null, h(Nav, {
      theme,
      setTheme
    }), h("main", null, h(Hero, null), h("div", {
      id: "principle"
    }, h(PrincipleSection, null)), h("div", {
      id: "model"
    }, h(GraphSection, null)), h("div", {
      id: "types"
    }, h(InteractionsSection, null)), h("div", {
      id: "scheduler"
    }, h(SchedulerSection, null)), h(CtaBand, null)), h(Footer, null));
  }

  // Re-run icon replacement after first paint.
  const _render = () => {
    try {
      if (window.lucide) lucide.createIcons();
    } catch (e) {}
  };
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(h(App));
  setTimeout(_render, 80);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/kit-components.jsx
try { (() => {
/* Gobilago UI-kit primitives — self-contained (no bundle dependency).
   Mirrors the design-system components; styling comes from styles.css tokens.
   Plain functions assigned to window (no ES imports). */
(function () {
  const React = window.React;
  const h = React.createElement;
  function cx(...a) {
    return a.filter(Boolean).join(" ");
  }
  function Button({
    variant = "primary",
    size = "md",
    block,
    icon,
    iconRight,
    as = "button",
    className = "",
    children,
    ...rest
  }) {
    const Tag = as;
    return h(Tag, {
      className: cx("gb-btn", `gb-btn--${variant}`, `gb-btn--${size}`, block && "gb-btn--block", className),
      ...rest
    }, !iconRight && icon ? h("span", {
      className: "gb-btn__icon"
    }, icon) : null, children != null ? h("span", null, children) : null, iconRight && icon ? h("span", {
      className: "gb-btn__icon"
    }, icon) : null);
  }
  function Tag({
    variant = "soft",
    color,
    icon,
    className = "",
    children,
    style,
    ...rest
  }) {
    const st = color ? {
      background: `color-mix(in oklch, ${color} 15%, transparent)`,
      color,
      ...style
    } : style;
    return h("span", {
      className: cx("gb-tag", variant !== "soft" && `gb-tag--${variant}`, className),
      style: st,
      ...rest
    }, icon ? h("span", {
      style: {
        display: "inline-flex"
      }
    }, icon) : null, children);
  }
  const STATUS = {
    overdue: "Overdue",
    due: "Due today",
    upcoming: "Upcoming",
    dormant: "Dormant"
  };
  function Badge({
    status,
    count,
    dot = true,
    className = "",
    children,
    ...rest
  }) {
    if (count != null) return h("span", {
      className: cx("gb-badge", className),
      ...rest
    }, h("span", {
      className: "gb-badge__count"
    }, count), children);
    return h("span", {
      className: cx("gb-badge", status && `gb-badge--${status}`, className),
      ...rest
    }, dot ? h("span", {
      className: "gb-badge__dot"
    }) : null, children != null ? children : status ? STATUS[status] : null);
  }
  function StatPill({
    variant = "soft",
    className = "",
    children,
    ...rest
  }) {
    return h("span", {
      className: cx("gb-statpill", variant !== "soft" && `gb-statpill--${variant}`, className),
      ...rest
    }, children);
  }
  function Card({
    pad = "md",
    flat,
    sunk,
    interactive,
    as = "div",
    className = "",
    children,
    ...rest
  }) {
    const Tag = as;
    return h(Tag, {
      className: cx("gb-card", `gb-card--pad-${pad}`, flat && "gb-card--flat", sunk && "gb-card--sunk", interactive && "gb-card--interactive", className),
      ...rest
    }, children);
  }
  function Toggle({
    checked = false,
    onChange,
    disabled,
    className = "",
    ...rest
  }) {
    return h("button", {
      type: "button",
      role: "switch",
      "aria-checked": checked,
      disabled,
      className: cx("gb-toggle", className),
      onClick: () => !disabled && onChange && onChange(!checked),
      ...rest
    }, h("span", {
      className: "gb-toggle__knob"
    }));
  }
  function AtomTile({
    color = "var(--atom-indigo)",
    icon,
    title,
    meta,
    interactive,
    className = "",
    style,
    children,
    ...rest
  }) {
    const Tag = interactive ? "button" : "div";
    return h(Tag, {
      className: cx("gb-atom", interactive && "gb-atom--interactive", className),
      style: {
        "--_atom": color,
        ...style
      },
      ...rest
    }, h("span", {
      className: "gb-atom__chip"
    }, icon), h("span", null, h("span", {
      className: "gb-atom__title"
    }, title), meta != null ? h("span", {
      className: "gb-atom__meta",
      style: {
        display: "block"
      }
    }, meta) : null, children));
  }
  function AuroraPanel({
    glow = true,
    confetti,
    as = "div",
    className = "",
    children,
    ...rest
  }) {
    const Tag = as;
    return h(Tag, {
      className: cx("gb-aurora-panel", glow && "gb-aurora-panel--glow", confetti && "gb-aurora-panel--confetti", className),
      ...rest
    }, children);
  }
  const MARK = h("svg", {
    viewBox: "0 0 96 96",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: "block",
      width: "100%",
      height: "100%"
    }
  }, h("defs", null, h("linearGradient", {
    id: "gbKitAurora",
    x1: 6,
    y1: 6,
    x2: 90,
    y2: 90,
    gradientUnits: "userSpaceOnUse"
  }, h("stop", {
    stopColor: "#8E7CF0"
  }), h("stop", {
    offset: 0.34,
    stopColor: "#5E5CE6"
  }), h("stop", {
    offset: 0.66,
    stopColor: "#5AA9F5"
  }), h("stop", {
    offset: 1,
    stopColor: "#4FD2C2"
  }))), h("rect", {
    x: 4,
    y: 4,
    width: 88,
    height: 88,
    rx: 24,
    fill: "url(#gbKitAurora)"
  }), h("g", {
    stroke: "#fff",
    strokeWidth: 4.5,
    strokeLinecap: "round"
  }, h("line", {
    x1: 30,
    y1: 34,
    x2: 56,
    y2: 26
  }), h("line", {
    x1: 30,
    y1: 34,
    x2: 40,
    y2: 62
  }), h("line", {
    x1: 56,
    y1: 26,
    x2: 66,
    y2: 56
  }), h("line", {
    x1: 40,
    y1: 62,
    x2: 66,
    y2: 56
  })), h("g", {
    fill: "#fff"
  }, h("circle", {
    cx: 30,
    cy: 34,
    r: 9
  }), h("circle", {
    cx: 56,
    cy: 26,
    r: 6.5
  }), h("circle", {
    cx: 40,
    cy: 62,
    r: 6.5
  }), h("circle", {
    cx: 66,
    cy: 56,
    r: 9
  })));
  function Logo({
    size = 32,
    showWordmark = true,
    tone = "auto",
    className = "",
    style,
    ...rest
  }) {
    const color = tone === "light" ? "#fff" : tone === "dark" ? "#14152B" : "var(--text-strong)";
    return h("span", {
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: size * 0.34,
        ...style
      },
      ...rest
    }, h("span", {
      style: {
        width: size,
        height: size,
        flex: "none"
      }
    }, MARK), showWordmark ? h("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        letterSpacing: "-0.03em",
        fontSize: size * 0.92,
        lineHeight: 1,
        color
      }
    }, "Gobilago") : null);
  }
  Object.assign(window, {
    Button,
    Tag,
    Badge,
    StatPill,
    Card,
    Toggle,
    AtomTile,
    AuroraPanel,
    Logo
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/kit-components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/phone.jsx
try { (() => {
/* PhoneHome — recreation of the Gobilago iOS home screen, for the hero.
   Reuses AuroraPanel + AtomTile. Follows the page theme (light/dark). */
(function () {
  const React = window.React;
  const h = React.createElement;
  const {
    AuroraPanel,
    AtomTile
  } = window;
  const Ico = (n, props = {}) => h("i", {
    "data-lucide": n,
    ...props
  });
  const COLLECTIONS = [{
    color: "var(--atom-red)",
    icon: "languages",
    title: "hiragana",
    meta: "1 notion"
  }, {
    color: "var(--atom-amber)",
    icon: "copy",
    title: "separate cluster",
    meta: "2 notions"
  }, {
    color: "var(--atom-indigo)",
    icon: "book-a",
    title: "espagnol",
    meta: "1 notion"
  }, {
    color: "var(--atom-leaf)",
    icon: "flask-conical",
    title: "french verbs",
    meta: "3 notions"
  }, {
    color: "var(--atom-violet)",
    icon: "book-a",
    title: "japonais",
    meta: "2 notions"
  }, {
    color: "var(--atom-blue)",
    icon: "type",
    title: "devanagari",
    meta: "0 notions"
  }];
  function TabItem({
    icon,
    label,
    active
  }) {
    return h("span", {
      className: "ph-tab" + (active ? " is-active" : "")
    }, Ico(icon), h("span", null, label));
  }
  function PhoneHome() {
    return h("div", {
      className: "ph"
    }, h("div", {
      className: "ph-screen"
    }, h("div", {
      className: "ph-statusbar"
    }, h("span", null, "9:41"), h("span", {
      className: "ph-status-icons"
    }, Ico("signal"), Ico("wifi"), Ico("battery-full"))), h("div", {
      className: "ph-body"
    }, h("div", {
      className: "ph-topbar"
    }, h("span", {
      className: "ph-h1"
    }, "Home"), h("span", {
      className: "ph-iconbtn"
    }, Ico("layers"))), h("div", {
      className: "ph-search"
    }, Ico("search"), h("span", null, "Search…")), h(AuroraPanel, {
      confetti: true,
      className: "ph-plan"
    }, h("span", {
      className: "gb-overline",
      style: {
        color: "rgba(255,255,255,.85)"
      }
    }, "Today's Plan"), h("div", {
      className: "ph-plan-title"
    }, "1 notion to review"), h("div", {
      className: "ph-plan-sub"
    }, "0 training · 1 retention"), h("div", {
      className: "ph-plan-cta"
    }, "Start Studying ", Ico("arrow-right")), h("span", {
      className: "ph-cap"
    }, Ico("graduation-cap"))), h("div", {
      className: "ph-coll-head"
    }, h("span", null, "All Collections"), Ico("list")), h("div", {
      className: "ph-grid"
    }, COLLECTIONS.map((c, i) => h(AtomTile, {
      key: i,
      color: c.color,
      title: c.title,
      meta: c.meta,
      icon: Ico(c.icon)
    })))), h("div", {
      className: "ph-tabbar"
    }, h(TabItem, {
      icon: "house",
      label: "Home",
      active: true
    }), h(TabItem, {
      icon: "library-big",
      label: "Library"
    }), h(TabItem, {
      icon: "settings",
      label: "Settings"
    }))));
  }
  window.PhoneHome = PhoneHome;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/phone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
/* Gobilago landing-page content sections. window-exported. */
(function () {
  const React = window.React;
  const {
    useState
  } = React;
  const h = React.createElement;
  const {
    Card,
    StatPill,
    Badge,
    Tag,
    Button
  } = window;
  const Ico = (n, props = {}) => h("i", {
    "data-lucide": n,
    ...props
  });
  function Eyebrow({
    children
  }) {
    return h("span", {
      className: "eyebrow"
    }, children);
  }

  /* ---- The principle ----------------------------------------- */
  function PrincipleSection() {
    return h("section", {
      className: "section principle",
      "data-screen-label": "Principle"
    }, h("div", {
      className: "gb-confetti principle-bg"
    }), h("div", {
      className: "container principle-inner"
    }, h(Eyebrow, null, "The principle"), h("h2", {
      className: "principle-statement"
    }, "Recognition feels like learning. ", h("span", {
      className: "muted-strike"
    }, "It isn't."), " Gobilago makes you ", h("span", {
      className: "hl"
    }, "reproduce"), " the answer — from scratch."), h("div", {
      className: "principle-cols"
    }, [["eye-off", "No multiple choice", "Seeing the right answer in a list is recognition. We hide it until you've recalled it."], ["pen-tool", "Produce, don't pick", "Type it, draw it, sequence it, annotate it. The effort is the point."], ["brain", "Tested per direction", "Strong kanji→English but weak the other way? Each facet is scheduled on its own."]].map(([ic, t, d], i) => h("div", {
      className: "principle-col",
      key: i
    }, h("span", {
      className: "principle-ic"
    }, Ico(ic)), h("h3", null, t), h("p", null, d))))));
  }

  /* ---- A graph, not a stack ---------------------------------- */
  function GraphSection() {
    const items = [["Atom", "circle-dot", "A top-level packet of knowledge — e.g. the word “to eat.”"], ["Faces", "scan-face", "Its testable components: the kanji, the reading, the meaning."], ["Clusters", "boxes", "Faces grouped under one shared review schedule."], ["Facets", "git-compare-arrows", "Directed edges — prompt Face → answer Face — tracked one by one."]];
    return h("section", {
      className: "section",
      "data-screen-label": "Graph"
    }, h("div", {
      className: "container"
    }, h("div", {
      className: "section-head"
    }, h(Eyebrow, null, "The model"), h("h2", null, "A knowledge graph, not a stack of cards"), h("p", {
      className: "lead"
    }, "Flat flashcards flatten meaning. Gobilago keeps the structure of what you're learning, so the scheduler knows exactly which connection is weak.")), h("div", {
      className: "graph-grid"
    }, items.map(([t, ic, d], i) => h(Card, {
      key: i,
      pad: "lg",
      className: "graph-card"
    }, h("span", {
      className: "graph-ic"
    }, Ico(ic)), h("div", {
      className: "graph-step gb-mono"
    }, "0" + (i + 1)), h("h3", null, t), h("p", null, d))))));
  }

  /* ---- Five ways to be tested (interactive tabs) ------------- */
  const TYPES = [["Display", "eye", "A static prompt shown for context — the scaffolding around a test, never scored on its own."], ["Mask", "text-cursor-input", "Fill-in-the-blank. You type the missing piece and it's auto-verified, character for character."], ["Annotate", "map-pin", "Tap pinpoints on an image and label them — anatomy, maps, diagrams."], ["Draw", "pen-tool", "Reconstruct a symbol or diagram stroke-by-stroke on a Skia-powered canvas."], ["Sequence", "list-ordered", "Drag items into the correct order, with no hints to lean on."]];
  function PreviewFor({
    idx
  }) {
    if (idx === 1) return h("div", {
      className: "itype-demo"
    }, h("div", {
      className: "gb-overline",
      style: {
        color: "var(--color-primary)"
      }
    }, "Fill the blank"), h("div", {
      className: "itype-mask"
    }, "総武 means “to ", h("span", {
      className: "blankfill"
    }, "eat"), "”"));
    if (idx === 3) return h("div", {
      className: "itype-demo"
    }, h("div", {
      className: "gb-overline",
      style: {
        color: "var(--color-primary)"
      }
    }, "Find the kana"), h("div", {
      className: "itype-draw"
    }, h("span", {
      className: "draw-glyph"
    }, "あ")));
    if (idx === 4) return h("div", {
      className: "itype-demo itype-seq"
    }, ["un", "deux", "trois", "quatre"].map((w, i) => h("div", {
      className: "seq-row",
      key: i
    }, h("span", {
      className: "seq-h"
    }, Ico("grip-vertical")), w)));
    if (idx === 2) return h("div", {
      className: "itype-demo itype-annot"
    }, h("span", {
      className: "annot-pin",
      style: {
        left: "30%",
        top: "34%"
      }
    }, "1"), h("span", {
      className: "annot-pin",
      style: {
        left: "66%",
        top: "58%"
      }
    }, "2"), h("span", {
      className: "annot-cap"
    }, "Tap & label"));
    return h("div", {
      className: "itype-demo itype-display"
    }, h("div", {
      className: "gb-overline",
      style: {
        color: "var(--text-muted)"
      }
    }, "Context"), h("div", {
      className: "display-big"
    }, "食べる"), h("div", {
      className: "display-sub gb-mono"
    }, "taberu · to eat"));
  }
  function InteractionsSection() {
    const [active, setActive] = useState(3);
    return h("section", {
      className: "section section--sunk",
      "data-screen-label": "Interactions"
    }, h("div", {
      className: "container"
    }, h("div", {
      className: "section-head"
    }, h(Eyebrow, null, "Interaction types"), h("h2", null, "Five ways to be tested"), h("p", {
      className: "lead"
    }, "Each facet picks the interaction that actually proves recall. Tap to preview.")), h("div", {
      className: "itype-wrap"
    }, h("div", {
      className: "itype-tabs"
    }, TYPES.map(([t, ic], i) => h("button", {
      key: i,
      className: "itype-tab" + (i === active ? " is-active" : ""),
      onClick: () => setActive(i)
    }, h("span", {
      className: "itype-tabic"
    }, Ico(ic)), h("span", {
      className: "itype-tabt"
    }, t)))), h("div", {
      className: "itype-panel"
    }, h(PreviewFor, {
      idx: active
    }), h("div", {
      className: "itype-copy"
    }, h("h3", null, TYPES[active][0]), h("p", null, TYPES[active][2]))))));
  }

  /* ---- The scheduler ----------------------------------------- */
  function SchedulerSection() {
    return h("section", {
      className: "section",
      "data-screen-label": "Scheduler"
    }, h("div", {
      className: "container sched-grid"
    }, h("div", null, h(Eyebrow, null, "The scheduler"), h("h2", null, "It knows what you're about to forget"), h("p", {
      className: "lead"
    }, "New facets sprint through ", h("strong", null, "Training"), " — rapid reps until three correct in a row. Then they graduate to ", h("strong", null, "Retention"), ", on expanding SM-2 intervals. Miss one and it resets."), h("div", {
      className: "sched-intervals"
    }, h(StatPill, null, "1d"), Ico("arrow-right", {
      className: "sched-arr"
    }), h(StatPill, null, "3d"), Ico("arrow-right", {
      className: "sched-arr"
    }), h(StatPill, null, "10d"), Ico("arrow-right", {
      className: "sched-arr"
    }), h(StatPill, {
      variant: "solid"
    }, "+1mo")), h("p", {
      className: "fineprint gb-mono"
    }, "Fully offline. Sync never blocks the UI.")), h(Card, {
      pad: "lg",
      className: "sched-card"
    }, h("div", {
      className: "sched-card-head"
    }, h("span", null, Ico("book-open"), " Long Term Memory"), h("span", {
      className: "gb-mono",
      style: {
        color: "var(--text-muted)"
      }
    }, "4 cards")), h("div", {
      className: "sched-rows"
    }, [["overdue", "a", "hiragana", "1 day overdue"], ["upcoming", "Good", "french verbs", "in 1 day"], ["dormant", "Bad", "french verbs", "in 3 days"], ["upcoming", "Example", "helloworld", "in 5 days"]].map(([st, term, coll, when], i) => h("div", {
      className: "sched-row",
      key: i
    }, h("div", null, h("div", {
      className: "sched-term"
    }, term), h("div", {
      className: "sched-coll"
    }, coll)), h(Badge, {
      status: st
    }, when)))))));
  }
  Object.assign(window, {
    PrincipleSection,
    GraphSection,
    InteractionsSection,
    SchedulerSection
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AtomTile = __ds_scope.AtomTile;

__ds_ns.AuroraPanel = __ds_scope.AuroraPanel;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatPill = __ds_scope.StatPill;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toggle = __ds_scope.Toggle;

})();
