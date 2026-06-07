# Gobilago — Design System

A brand & UI system for **Gobilago**, an offline-first spaced-repetition learning app.
This system is scoped to the **marketing website / landing page** — it carries the app's
"Indigo Kinetic" mood to the web **without** the iOS 26 liquid-glass material (no live
blur/refraction). Everything else — the indigo core, the aurora gradient, the confetti
"memory" particles, vibrant atom tiles, soft elevation, capsule controls — comes across.

---

## 1. Product context

> **"Recall, not Recognition."** True mastery means reproducing knowledge from scratch,
> never just recognizing it.

Gobilago is an iOS-first SRS (spaced-repetition system) built on a **knowledge graph**
rather than flat flashcards:

- **Atoms** — top-level knowledge packets (e.g. the word *"to eat"*).
- **Faces** — individual testable components of an Atom (the kanji, the romanization, the meaning).
- **Clusters** — groups of facets sharing a single SRS schedule.
- **Facets** — directed interaction edges: prompt Face → answer Face. Each is tracked
  independently, so you can be strong kanji→English yet weak English→kanji.

**Learning phases:** *Training* (rapid reps until 3 correct in a row) → *Retention*
(SM-2-inspired intervals: 1d → 3d → 10d…, failures reset progress).

**Interaction types:** Display · Mask (fill-in-the-blank) · Annotate (label points on an
image) · Draw (reconstruct a symbol on a Skia canvas) · Sequence (drag into order).

**Stack:** React Native + Expo (TS, iOS-first), expo-sqlite, react-native-skia, @expo/ui,
Supabase (background sync), MMKV, Expo Router. Offline-first with a single-device lock.

**App aesthetic:** *"Indigo Kinetic"* — deep indigo palettes, flat minimalism, soft
elevation, system typography (SF Pro), iOS-26 native feel.

### Sources used to build this system
- **GitHub:** `joobloobs/gobiloago-site` — https://github.com/joobloobs/gobiloago-site
  (empty at time of authoring — no code to import; build from this guide). Explore it later
  for the real site implementation and refine these recreations against it.
- **iOS screenshots** (light + dark): `uploads/IMG_8751–IMG_8778.PNG` — Home, Library,
  Settings, collection detail, template / notion editors, the **Long Term Memory** review
  hub (the colour anchor for this system), Draw study, and the icon picker.

> The website is a **new surface**: it should feel like Gobilago, not be a 1:1 port of the
> iOS chrome. Drop liquid glass; keep the soul.

---

## 2. Content fundamentals — how Gobilago writes

**Voice.** Confident, warm, a little playful, never fussy. It speaks like a smart study
partner. Short declaratives. The product has a *thesis* ("Recall, not recognition") and
isn't shy about it.

- **Person.** Address the learner as **you** ("How well did you remember?", "Learn new
  knowledge"). The product refers to itself by name or implicitly, rarely "we".
- **Casing.** **Title Case for screen titles & buttons** ("Start Studying", "Add Notion",
  "Create Collection", "Choose a Template"). **ALL-CAPS overlines** with wide tracking for
  section kickers ("TODAY'S PLAN", "NEW TO LEARN", "FIND THE KANA"). Sentence case for
  helper/body copy ("At least 2 aspects required. Each aspect is one side of your card.").
- **Domain vocabulary is intentional** — lean into it as brand language: *Atom, Face,
  Cluster, Facet, Notion, Aspect, Collection, Training, Retention, Long Term Memory*.
  On the website, teach these terms; don't sand them off.
- **Microcopy is instructive & quietly helpful**, often as a single muted line under a
  control: "Optional — rename fields or change their type. You can skip this and just
  create.", "Long-press to open options · Drag to reorder · Swipe left to delete."
- **Numbers are concrete and human:** "1 notion to review", "0 training · 1 retention",
  "3 to learn", "1 day overdue", "in 5 days". Use mono for interval/stat values.
- **Status words are plain:** Overdue · Due today · Upcoming · Dormant · Downloaded.
- **Emoji** appear only as *user-chosen* collection icons (🐸 on "french verbs") — they are
  user content, **not** brand chrome. Don't decorate marketing copy with emoji.
- **Tone for the landing page:** lead with the principle and the payoff (remember more,
  forget less), then reveal the mechanics (the graph, the five interaction types, the
  scheduler). Avoid hype words and exclamation spam.

**Sample landing copy in voice**
> **Recall, not recognition.**
> Most apps test whether you *recognise* an answer. Gobilago makes you *reproduce* it —
> from scratch, on a schedule that knows exactly what you're about to forget.
> *Start free. Works fully offline.*

---

## 3. Visual foundations

**Colour.** Anchored on **systemIndigo `#5E5CE6`** (the *Start Studying* button, active nav,
links). The signature is the **aurora gradient** — violet → indigo → blue → teal → mint —
used on hero and feature surfaces (the "Today's Plan" card). The second signature is the
**confetti particle field** from the Long Term Memory screen: tiny scattered dots in blue /
teal / green / violet / indigo over a plain background, evoking memories settling into
place. Content uses a vibrant **atom palette** (red, amber, indigo, green, teal, blue,
violet, olive) for collection tiles — saturated, friendly, iOS system hues. Status colours
are literal: **red `#FF3B30`** overdue, **indigo** due-today, **green `#34C759`** upcoming.

**Neutrals.** Light mode is white surfaces on a cool grouped-grey base (`#F2F2F7`); some
collection detail screens take a faint warm tint of the collection's colour. Headings are a
near-black indigo-navy (`#14152B`), body a soft grey. **Dark mode is true OLED black
(`#000`)** with `#141416`/`#1C1C1E` cards and a subtle coloured border-glow on tinted tiles.

**Type.** App = SF Pro. Web brand = **Bricolage Grotesque** (bold, confident display) +
**Hanken Grotesk** (warm, legible body/UI) + **Space Mono** (intervals, stats, code-y
accents). Headlines are heavy and tight (extrabold, negative tracking); overlines are bold
uppercase with wide tracking. *(These are open-font substitutes for SF Pro — see Caveats.)*

**Spacing & layout.** 4px base scale. Generous rhythm; sections breathe
(`clamp(4rem,9vw,8rem)` vertical). Content max-width ~1200px. Mobile-honest hit targets
(≥44px). Lots of negative space — minimalism over density.

**Radii.** Everything is soft and rounded, iOS-style: inputs 16px, tiles/small cards 20px,
cards 24px, hero/feature surfaces 32px, and **fully-rounded capsules** for primary buttons,
chips, pills and the tab bar. Atom tiles are rounded squares (20px) with the icon inset.

**Elevation / shadow.** Soft, low-opacity, large-blur shadows (never hard or dark in light
mode): `0 8px 24px rgba(20,21,43,.08)` for cards, lifting to `0 28px 64px` for hero. Primary
CTAs and aurora cards carry a coloured **indigo glow** (`0 14px 36px rgba(94,92,230,.30)`).
In dark mode, elevation is conveyed by surface lightness + a faint hairline border, plus
deeper black shadows.

**Borders.** Hairline dividers (`#E6E6EC` light / `#2A2A2E` dark), 1px. Cards use a near-
transparent border in addition to shadow. Dark tinted tiles get a 1px border in their own
hue for the "glow" effect.

**Backgrounds.** Three modes: (1) plain paper/black, (2) aurora gradient surfaces, (3)
confetti particle fields behind "memory/celebration" moments. No photography is core to the
brand; imagery, where used, is product UI screenshots in device frames. No heavy textures or
noise.

**Motion.** Calm and physical. iOS-like settle easing
(`cubic-bezier(.22,1,.36,1)`) for entrances/transitions; a gentle spring
(`cubic-bezier(.34,1.56,.64,1)`) for affordances that "pop" (toggles, the Easy button,
confetti). Durations 140–420ms. Confetti drifts slowly. Respect `prefers-reduced-motion`.
No parallax, no aggressive scroll-jacking.

**Hover / press states.**
- *Primary button:* hover → darken to `--indigo-600`; press → `--indigo-700` + scale .97.
- *Secondary / tile:* hover → lift (raise shadow one step) + 1–2px translateY; press → scale .98.
- *Ghost / list row:* hover → tint background `--color-primary-soft` or `--surface-sunk`.
- *Links:* hover → underline or shift toward `--indigo-600`.
- Selection / correct uses green ("Easy" turns green with a check); destructive uses red.

**Transparency & blur.** On the **website we avoid liquid-glass blur**. The only acceptable
translucency is light scrims over the aurora (e.g. a frosted-white capsule on the hero) and
subtle coloured tints. Prefer solid surfaces.

**Cards.** White (or `#141416` dark), 24px radius, soft shadow + faint border, 20–28px
padding. Tappable list rows sit in grouped white capsules with hairline separators (iOS
inset-grouped table style).

---

## 4. Iconography

- **In-app**, Gobilago uses **Apple SF Symbols**: *solid/filled* glyphs for content &
  categories (book, brain, graduation cap, flask, globe, palette, music, film, camera, code,
  leaf…) shown in the icon picker, and *outline* glyphs for nav/UI (home, books, gear, chevrons,
  pencil, trash, bell). SF Symbols are Apple-proprietary and can't be shipped to the web.
- **On the website**, use **[Lucide](https://lucide.dev)** (outline, ~1.75–2px stroke,
  rounded caps) for UI/nav icons — it closely matches the app's outline set. Load from CDN:
  `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`.
  Use `stroke-width: 2` and `color: currentColor`. ⚠ *Substitution flagged* — Lucide stands
  in for SF Symbols; swap for a bespoke set if one is commissioned.
- For **content/category** marks (the colourful atom tiles), the app uses filled symbols on a
  tinted rounded square. On web, place a white Lucide/filled glyph centered on an atom-colour
  tile (see the `AtomTile` component).
- **Emoji** are valid *user-chosen* collection icons only (🐸). Never use emoji as interface
  iconography or in marketing copy.
- **Brand mark:** `assets/gobilago-mark.svg` — an aurora rounded-square tile with a white
  "memory graph" (four connected nodes = Atom→Faces→Cluster). Pair with the wordmark
  **"Gobilago"** set in Bricolage Grotesque (rendered inline so the webfont applies; see
  `components/brand/Logo`). ⚠ *Proposed placeholder* — no official logo was provided.

---

## 5. Index / manifest

**Root**
- `styles.css` — global entry point (import this). `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter for use in Claude Code.

**`tokens/`** (all reached from `styles.css`)
- `fonts.css` — webfont `@import` (Bricolage Grotesque / Hanken Grotesk / Space Mono).
- `colors.css` — palette + semantic aliases, light + `[data-theme="dark"]`.
- `typography.css` — families, scale, weights, roles.
- `spacing.css` — spacing, radii, shadows, layout, motion.
- `base.css` — reset, element defaults, `.gb-aurora`, `.gb-confetti`, `.gb-card`, `.gb-overline`.

**`guidelines/`** — foundation specimen cards (the Design System tab): colours, type,
spacing/radii/shadow, and brand motifs.

**`components/`** — reusable React primitives (see each `*.prompt.md`):
- `core/` — `Button`, `Tag`, `Badge`, `Card`, `StatPill`, `Toggle`.
- `brand/` — `Logo`, `AtomTile`, `AuroraPanel`.

**`ui_kits/website/`** — high-fidelity landing-page recreation (Nav, Hero, principle,
interaction-types, the SRS scheduler section, CTA, footer) wired interactively in `index.html`.

---

## 6. Caveats
- **Fonts are substitutes.** SF Pro can't be shipped; Bricolage Grotesque + Hanken Grotesk +
  Space Mono are open stand-ins loaded via Google Fonts `@import`. They render everywhere but
  the compiler may not list them as "shipped" webfonts (remote import). Provide real font
  files to lock this down.
- **Icons are substitutes.** Lucide stands in for SF Symbols (proprietary).
- **Logo is a proposed placeholder** — no official Gobilago logo was supplied.
- The GitHub repo is empty; recreations are built from screenshots + the product brief.
