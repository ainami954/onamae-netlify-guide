# Akira Inami Design System

Brand system for **Akira Inami** (described as "Akira Inami Design System NP"), a web designer whose public-facing surface is a set of square Instagram posts that educate prospects and sell web-design services.

## Sources
- `uploads/Web Design Instagram Template, Social Media Canva Template for Web Designer, Editable Instagram Post, Website Builder Branding Kit.jpg` — a single 736×736 overview of a Canva Instagram template kit (copied to `assets/reference/instagram-kit-overview.jpg`). No codebase, Figma, logo or font files were provided. Every value here was sampled or inferred from that image.

## Products
- **Instagram posts** (1080×1080). Two grounds: white and navy. Post types: "Why Hire Me", comparison table, listicle with hero numeral, step-by-step process, security checklist, contact steps, terminology definition, question list.

## CONTENT FUNDAMENTALS
- **Voice:** a solo designer speaking directly. First person singular ("I get your site up fast", "I'm just a call away"), sometimes "we/our team" for process posts. Reader is "you / your business".
- **Tone:** helpful, reassuring, a bit playful ("Craftsmanship or Chaos: Choose Your Web Adventure!", "Hopeful Googling", "Fingers crossed"). Sells expertise by contrasting it with DIY pain.
- **Casing:** headlines in Title Case ("The First Step to Your Dream Website"); listicle headlines go lowercase after a numeral ("7 / reasons to avoid website templates"). Emphasis is one word in ALL CAPS ("ACTUALLY"). Eyebrows and CTA bars are uppercase, wide-tracked ("LET'S CONNECT", "LET'S START YOUR WEB DESIGN JOURNEY").
- **Structure:** headline → eyebrow/sub-line → 4–7 items with a **bold lead-in and colon** ("**Efficiency:** I get your site up fast…") → closing CTA line ("Reach out today.").
- **Punctuation:** questions in headlines ("Is Your Web Designer Prioritizing Security?"), exclamation in sub-lines, ellipsis to continue a thought ("…and hire a professional web designer instead").
- **Emoji:** none. Unicode used only for phonetics in terminology posts.

## VISUAL FOUNDATIONS
- **Color:** one deep navy (`--navy-800 #293e53`) plus white. Lighter navies (600/500) appear only as photo-texture tints. Presentation backdrop is cool slate `#9ba2ac`. Blush (`--blush-*`) is the portrait backdrop, never a UI color. No gradients except photo fades.
- **Type:** three roles. Banner caps in a thin high-contrast serif (Gilda Display); post headlines in a sturdy soft serif (Young Serif); everything else in a wide geometric sans (Lexend), with eyebrows at +0.22em tracking.
- **Backgrounds:** flat white or flat navy, overlaid with a faint line motif (large arcs and grid lines at ~8% opacity, like an enlarged globe/wireframe). Some navy posts carry a faint photo texture. Portrait photos bleed off an edge and fade into white.
- **Imagery:** warm, bright, soft portrait photography of the designer; blush/peach tones; no grain. Device mockups (black bezel tablet/phone) hold copy or wireframes.
- **Layout:** square 1080 canvas, ~72px margin, centered stacks on light posts, left-aligned columns on numeral posts. Thin inset rule frames (3px white, 40px inset) on navy posts, sometimes broken into L-shapes around a numeral. CTA bars are full-width or inset solid strips at the bottom.
- **Corners:** posts, bars, badges and tables are square (radius 0). Only device bezels are rounded (~36px).
- **Borders:** 2–3px solid rules; table cells fully ruled.
- **Shadows:** none inside posts. Posts get a soft drop shadow only when shown on the slate presentation backdrop (`--shadow-post`).
- **Transparency/blur:** only the motif lines and photo fades. No blur, no glass.
- **Cards:** there are no rounded cards; the post itself is the card. Grouping is done by rules, frames and solid bars.
- **Animation:** static medium. For interactive previews use simple opacity fades (`--dur-med`, `--ease-out`); no bounces.
- **Hover/press:** (previews only) hover raises opacity from .75 to 1; selection is a 3px navy outline. No shrink.

## ICONOGRAPHY
- The kit uses thin, single-weight outline icons (clock, headset, sliders, code window, envelope, thumbs-up, clipboard, padlock, circle-check), dark ink on white or white on navy, ~60px on a 1080 canvas. No emoji.
- No icon files were provided. **Substitute: Lucide** via CDN (`lucide-static@0.460.0`), rendered through the `Icon` component as a CSS mask so it takes any color. Common names: `clock`, `headset`, `sliders-horizontal`, `code-xml`, `mail`, `thumbs-up`, `clipboard-list`, `clipboard-check`, `lock`, `circle-check`.
- Checklists always use `circle-check`.

## Logo
No logo was provided. The name is set in `--font-display-caps` uppercase ("AKIRA INAMI") wherever a mark is needed. The kit itself shows a "YOUR BUSINESS NAME" placeholder line.

## Fonts (substitutions — please supply originals)
Original Canva fonts are unknown. Bundled Google Fonts in `assets/fonts/`: Gilda Display (banner caps), Young Serif (headlines), Lexend (body/labels).

## Index
- `styles.css` — entry; imports `tokens/` (fonts, colors, typography, spacing, effects, base)
- `guidelines/` — foundation specimen cards
- `assets/` — fonts, reference image
- `components/core/` — **Icon**, **Badge**
- `components/social/` — **PostCanvas**, **Headline**, **Eyebrow**, **BigNumeral**, **CheckList**, **IconFeature**, **ComparisonTable**, **CTABar**, **DeviceFrame**, **PhotoSlot**
- `ui_kits/instagram-posts/` — 8 recreated post templates + browser
- `thumbnail.html`, `SKILL.md`

## Components
Icon, Badge, PostCanvas, Headline, Eyebrow, BigNumeral, CheckList, IconFeature, ComparisonTable, CTABar, DeviceFrame, PhotoSlot.

### Intentional additions
No component library was provided, so all components are derived from repeated parts in the post templates. `Icon` wraps the Lucide substitute; `PhotoSlot` stands in for portrait photos.
