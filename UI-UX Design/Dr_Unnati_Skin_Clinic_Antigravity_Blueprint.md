# Google Antigravity — Full Website Redesign Implementation Blueprint
# Dr. Unnati's Skin Clinic
### Version 1.0 | Production-Ready | Comprehensive Design & Development Specification

---

> **CRITICAL CONSTRAINT — READ BEFORE ANYTHING ELSE:**
> Dr. Unnati is a **COSMETOLOGIST**, not a Dermatologist.
> This distinction must govern every word, label, icon, section heading, service category, schema tag, and UX pattern throughout the entire website.
> The term "dermatologist", "dermatology", or "skin doctor" must **never appear** anywhere on the site.
> All copy, microcopy, metadata, structured data, and AI-readable content must consistently position this as a **Cosmetology & Aesthetic Medicine Clinic**.

---

## SECTION 1 — PROJECT IDENTITY

| Attribute | Detail |
|---|---|
| **Clinic Name** | Dr. Unnati's Skin Clinic |
| **Practitioner Title** | Cosmetologist & Aesthetic Medicine Expert |
| **Clinic Category** | Premium Cosmetology & Aesthetic Clinic |
| **Primary Audience** | Women, men, brides, executives, beauty-conscious adults |
| **Design Tier** | Luxury / International Premium |
| **Design Emotion** | Confidence, calm, transformation, elegance, trust |
| **Business Goal** | Increase consultation bookings and WhatsApp inquiries |
| **Competitor Benchmark** | International luxury aesthetic clinics (La Prairie, Sulwhasoo-level digital presence) |

---

## SECTION 2 — DESIGN SYSTEM

### 2.1 Color Palette

Define all values as CSS custom properties at the `:root` level. Every component inherits from these tokens. No hardcoded hex values anywhere in component CSS.

```css
:root {

  /* ─── PRIMARY BRAND PALETTE ─────────────────────────────────── */
  --color-rose-gold:       #C9A882;   /* Main brand accent */
  --color-champagne:       #F5E6D3;   /* Warm light background fills */
  --color-ivory:           #FAF7F2;   /* Primary page background */
  --color-nude:            #EDE0D4;   /* Secondary surface */
  --color-warm-white:      #FDFCFA;   /* Card/surface base */

  /* ─── SECONDARY PALETTE ─────────────────────────────────────── */
  --color-sage:            #9CAE9C;   /* Calm accent for wellness cues */
  --color-deep-olive:      #5C6B4E;   /* Rich text on light surfaces */
  --color-charcoal:        #2D2D2D;   /* Primary heading text */
  --color-soft-beige:      #D9C9B4;   /* Dividers, borders, separators */

  /* ─── ACCENT / LUXURY METALS ─────────────────────────────────── */
  --color-gold:            #B8973E;   /* Premium highlights */
  --color-copper:          #A0644A;   /* Warm CTA tones */
  --color-bronze:          #8B5E3C;   /* Depth and richness */

  /* ─── NEUTRAL SCALE ─────────────────────────────────────────── */
  --color-neutral-100:     #FFFFFF;
  --color-neutral-200:     #FDFCFA;
  --color-neutral-300:     #F5F2EE;
  --color-neutral-400:     #E8E0D8;
  --color-neutral-500:     #C4B8AC;
  --color-neutral-600:     #9A8F84;
  --color-neutral-700:     #6B6159;
  --color-neutral-800:     #3E3732;
  --color-neutral-900:     #1A1714;

  /* ─── SEMANTIC TOKENS ─────────────────────────────────────────── */
  --color-text-primary:    var(--color-charcoal);
  --color-text-secondary:  var(--color-neutral-700);
  --color-text-muted:      var(--color-neutral-600);
  --color-text-inverse:    var(--color-warm-white);
  --color-surface-base:    var(--color-ivory);
  --color-surface-card:    var(--color-warm-white);
  --color-surface-subtle:  var(--color-champagne);
  --color-border-light:    var(--color-soft-beige);
  --color-border-medium:   var(--color-neutral-500);
  --color-cta-primary:     var(--color-rose-gold);
  --color-cta-hover:       #B89070;
  --color-cta-text:        var(--color-warm-white);

  /* ─── FOCUS / ACCESSIBILITY ───────────────────────────────────── */
  --color-focus-ring:      #6B9EE0;   /* Accessible blue focus visible ring */
  --color-error:           #C0392B;
  --color-success:         #27AE60;
  --color-warning:         #E67E22;
}
```

**Color usage rules:**
- Never use pure `#000000` or `#FFFFFF` as design choices. Always use the warm neutral scale.
- Background must feel like warm parchment, not clinical white.
- Text-on-background contrast must meet WCAG AA minimum 4.5:1 for body, 3:1 for large text.
- Gold and copper accents are for decorative line art, dividers, icon embellishments only — not large fills.

---

### 2.2 Typography System

**Font Selection:**

| Role | Font Family | Fallback |
|---|---|---|
| Display / Hero Headings | `Playfair Display` | Georgia, serif |
| Body / UI Text | `DM Sans` | system-ui, sans-serif |
| Accent / Taglines | `Cormorant Garamond` | Georgia, serif |
| Monospace / Data | `DM Mono` | monospace |

Load via Google Fonts with `display=swap`. Subset to Latin only. Preconnect to `fonts.googleapis.com` and `fonts.gstatic.com`.

**Type Scale (fluid, using `clamp()`):**

```css
:root {
  /* ─── DISPLAY ────────────────────────────────── */
  --text-display-2xl: clamp(3.5rem,  8vw, 7rem);     /* Hero headline */
  --text-display-xl:  clamp(2.75rem, 6vw, 5rem);     /* Page hero */
  --text-display-lg:  clamp(2.25rem, 4vw, 3.5rem);   /* Section headline */

  /* ─── HEADINGS ───────────────────────────────── */
  --text-h1:  clamp(2rem,    3.5vw, 2.75rem);
  --text-h2:  clamp(1.625rem, 2.8vw, 2.25rem);
  --text-h3:  clamp(1.375rem, 2.2vw, 1.75rem);
  --text-h4:  clamp(1.125rem, 1.8vw, 1.375rem);
  --text-h5:  clamp(1rem,     1.4vw, 1.125rem);
  --text-h6:  clamp(0.875rem, 1.2vw, 1rem);

  /* ─── BODY ───────────────────────────────────── */
  --text-body-lg:  clamp(1.0625rem, 1.5vw, 1.25rem);
  --text-body:     clamp(0.9375rem, 1.2vw, 1.0625rem);
  --text-body-sm:  clamp(0.875rem,  1vw,  0.9375rem);

  /* ─── UI / LABELS ────────────────────────────── */
  --text-label-lg: 0.875rem;
  --text-label:    0.8125rem;
  --text-label-sm: 0.75rem;
  --text-caption:  0.6875rem;

  /* ─── LINE HEIGHTS ───────────────────────────── */
  --leading-tight:  1.15;
  --leading-snug:   1.35;
  --leading-normal: 1.6;
  --leading-relaxed: 1.75;
  --leading-loose:  2.0;

  /* ─── LETTER SPACING ─────────────────────────── */
  --tracking-tighter: -0.04em;
  --tracking-tight:   -0.02em;
  --tracking-normal:   0em;
  --tracking-wide:     0.04em;
  --tracking-wider:    0.08em;
  --tracking-widest:   0.16em;  /* Used for uppercase eyebrow labels */

  /* ─── FONT WEIGHTS ───────────────────────────── */
  --weight-light:    300;
  --weight-regular:  400;
  --weight-medium:   500;
  --weight-semibold: 600;
  --weight-bold:     700;
}
```

**Typography rules:**
- Display and H1–H2 headings → `Playfair Display`, weight 400 or 500, tracking tight, color `--color-charcoal`.
- Eyebrow labels (tiny uppercase category labels above headings) → `DM Sans`, weight 500, `--tracking-widest`, `--color-rose-gold`.
- Body copy → `DM Sans`, weight 400, `--leading-relaxed`, `--color-text-secondary`.
- Accent quotes and pull-quotes → `Cormorant Garamond` italic, large, `--color-rose-gold`.
- Never mix more than 3 font sizes in a single component.
- Maximum line length for body text: 68 characters (ch). Use `max-width: 68ch` on prose containers.

---

### 2.3 Spacing System

Use an 8-point base grid. All spacing values are multiples of 8px.

```css
:root {
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   20px;
  --space-6:   24px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;
  --space-24:  96px;
  --space-32: 128px;
  --space-40: 160px;
  --space-48: 192px;
}
```

Section vertical padding defaults:
- Mobile: `--space-16` top and bottom (64px).
- Tablet: `--space-24` (96px).
- Desktop: `--space-32` (128px).

---

### 2.4 Grid System

```css
:root {
  --grid-columns:      12;
  --grid-gutter:       clamp(16px, 2.5vw, 32px);
  --grid-margin:       clamp(16px, 5vw, 80px);
  --container-max:     1280px;
  --container-wide:    1440px;
  --container-narrow:  800px;
  --container-text:    680px;
}
```

Use CSS Grid with named areas for all major layout sections. Never use float-based layouts.

---

### 2.5 Elevation & Shadow System

```css
:root {
  --shadow-xs:  0 1px 2px rgba(45, 45, 45, 0.04);
  --shadow-sm:  0 2px 6px rgba(45, 45, 45, 0.06), 0 1px 3px rgba(45, 45, 45, 0.04);
  --shadow-md:  0 4px 16px rgba(45, 45, 45, 0.08), 0 2px 6px rgba(45, 45, 45, 0.04);
  --shadow-lg:  0 8px 32px rgba(45, 45, 45, 0.10), 0 4px 12px rgba(45, 45, 45, 0.06);
  --shadow-xl:  0 16px 48px rgba(45, 45, 45, 0.12), 0 8px 20px rgba(45, 45, 45, 0.06);
  --shadow-2xl: 0 32px 80px rgba(45, 45, 45, 0.14), 0 16px 32px rgba(45, 45, 45, 0.08);

  /* Luxury glow for featured elements */
  --shadow-gold-glow: 0 0 0 1px rgba(184, 151, 62, 0.15),
                      0 8px 32px rgba(184, 151, 62, 0.12);

  /* Card hover elevation */
  --shadow-card-hover: 0 20px 60px rgba(45, 45, 45, 0.14),
                       0 8px 24px rgba(201, 168, 130, 0.10);
}
```

---

### 2.6 Border Radius System

```css
:root {
  --radius-sm:   6px;
  --radius-md:   12px;
  --radius-lg:   20px;
  --radius-xl:   32px;
  --radius-2xl:  48px;
  --radius-full: 9999px;   /* Pills and avatars */
}
```

---

### 2.7 Motion & Transition System

```css
:root {
  /* ─── DURATIONS ───────────────────────────── */
  --duration-instant:  80ms;
  --duration-fast:    150ms;
  --duration-normal:  250ms;
  --duration-slow:    400ms;
  --duration-slower:  600ms;
  --duration-slowest: 900ms;

  /* ─── EASING ──────────────────────────────── */
  --ease-in:      cubic-bezier(0.4, 0, 1, 1);
  --ease-out:     cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring:  cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-luxury:  cubic-bezier(0.25, 0.46, 0.45, 0.94);  /* Signature easing */
}
```

**Reduced motion:** Wrap all decorative animations in `@media (prefers-reduced-motion: no-preference)`. When reduced motion is preferred, transitions should complete instantly with no visual effects.

---

## SECTION 3 — SITE ARCHITECTURE

### 3.1 Navigation Structure

```
Primary Navigation (Desktop Sticky)
├── Home
├── About Dr. Unnati
├── Treatments [Mega Menu]
│   ├── Skin Treatments
│   │   ├── Skin Brightening & Glow
│   │   ├── Acne & Scar Treatment
│   │   ├── Pigmentation & Melasma
│   │   ├── Anti-Ageing & Rejuvenation
│   │   └── Skin Hydration & Nourishment
│   ├── Advanced Procedures
│   │   ├── Chemical Peels
│   │   ├── Microneedling / Dermapen
│   │   ├── Meso Therapy
│   │   ├── PRP Therapy
│   │   └── Laser Treatments
│   ├── Face & Body Aesthetics
│   │   ├── Botox & Fillers
│   │   ├── Thread Lift
│   │   ├── Lip Enhancement
│   │   ├── Jawline Contouring
│   │   └── Body Contouring
│   └── Hair Treatments
│       ├── Hair Loss Treatment
│       ├── PRP for Hair
│       └── Scalp Treatment
├── Before & After
├── Patient Stories
├── Blog
├── Contact
└── [CTA Button] Book Consultation
```

### 3.2 URL Structure

```
/                          → Homepage
/about                     → About Dr. Unnati
/treatments                → Treatments overview
/treatments/skin           → Skin treatments hub
/treatments/skin/[slug]    → Individual treatment
/treatments/advanced/[slug]
/treatments/aesthetics/[slug]
/treatments/hair/[slug]
/gallery                   → Before & after gallery
/testimonials              → Patient stories
/blog                      → Blog index
/blog/[slug]               → Individual article
/contact                   → Contact & booking
/faq                       → Frequently asked questions
/privacy-policy
/sitemap
```

---

## SECTION 4 — HOMEPAGE — COMPLETE SECTION BLUEPRINT

### 4.1 Navigation Bar

**Behavior:**
- Transparent on initial scroll position over hero.
- Transitions to `background: rgba(250, 247, 242, 0.95); backdrop-filter: blur(20px); box-shadow: --shadow-sm;` after user scrolls 80px.
- Transition: 250ms ease-out.
- Sticky. `position: sticky; top: 0; z-index: 1000;`

**Desktop layout (1 row, full width):**
- Left: Clinic logo (SVG, max height 48px). Logo mark + wordmark lockup.
- Center: Primary navigation links in `DM Sans`, weight 500, 15px, `--color-text-primary`. Link hover → underline slides in from left, 2px, `--color-rose-gold`.
- Right: `Book Consultation` primary CTA button + optional phone number in small text.

**Mega menu (Treatments):**
- Opens on hover (desktop) or tap (mobile).
- Panel slides down smoothly: `transform: translateY(-8px) → translateY(0)`, opacity 0→1, 250ms `--ease-out`.
- Four columns (one per sub-category), each with icon + heading + list of treatment links.
- Column icons: thin-stroke, rose-gold colored, 24px.
- Bottom bar inside mega menu: featured treatment card with image, title, and CTA.
- Panel background: `--color-warm-white`, top border 2px `--color-rose-gold`, `--shadow-xl`.

**Mobile navigation:**
- Hamburger icon (3 lines → X, animated transition).
- Full-screen slide-in drawer from right.
- Background: `--color-ivory`.
- Nested accordion for Treatments sub-items.
- `Book Consultation` CTA at bottom of drawer, full width.

---

### 4.2 Hero Section

**Layout:** Full viewport height (100svh) on desktop. Min-height 90svh on mobile. Two-column grid, 55%/45% split, left content, right imagery.

**Background:** Subtle warm gradient: `linear-gradient(135deg, --color-ivory 0%, --color-champagne 100%)`. Layered with a soft organic blob SVG shape (no hard edges) in `--color-soft-beige`, opacity 0.4.

**Eyebrow label (above headline):**
- Text: `"Premium Cosmetology & Aesthetic Medicine"`
- Style: `DM Sans`, 11px, weight 600, `--tracking-widest`, uppercase, `--color-rose-gold`.
- Left-bordered with 24px `--color-rose-gold` line. `padding-left: 12px`.
- Fade + slide-up animation on page load: 0→1 opacity, translateY(12px)→0, 400ms, 100ms delay.

**Headline (H1):**
- Text example: `"Reveal Your\nMost Radiant Self"`
- Font: `Playfair Display`, `--text-display-2xl`, weight 500, `--tracking-tight`, `--leading-tight`, `--color-charcoal`.
- `"Radiant"` word: italic, color `--color-rose-gold`.
- Animation: words stagger-reveal. Each word: translateY(24px)→0, opacity 0→1. 600ms `--ease-luxury`. 80ms stagger between words. Begins after eyebrow label animation.

**Subheadline:**
- Text example: `"Dr. Unnati offers personalized cosmetic treatments designed to enhance your natural beauty with the precision of advanced aesthetic science."`
- Font: `DM Sans`, `--text-body-lg`, weight 400, `--leading-relaxed`, `--color-text-secondary`. `max-width: 52ch`.
- Animation: fade in 400ms, 600ms delay.

**CTA Group (two buttons, horizontal row):**
- Primary button: `"Book a Consultation"` → `--color-cta-primary` background, `--color-cta-text` text.
- Secondary button: `"Explore Treatments"` → transparent background, `--color-rose-gold` border, `--color-rose-gold` text.
- Both animate in from below: 400ms, 800ms delay, 40ms stagger.

**Trust badges (horizontal row below CTAs):**
- Three short trust signals with check icon: `"500+ Happy Clients"`, `"Certified Cosmetologist"`, `"Safe & Natural Results"`.
- Font: `DM Sans`, 13px, weight 500, `--color-text-muted`. Icon: 14px, `--color-sage`.
- Fade in at 1000ms delay.

**Hero Image (right column):**
- Large, sharp, authentic professional portrait of the doctor or a premium before/after composite.
- Image container: `border-radius: --radius-2xl` on specific corners only (top-left, bottom-right) — asymmetric corner treatment for modernity.
- Soft floating card overlaid in bottom-left of image: `"Your Transformation Begins Here"`, clinic logo, floating with subtle vertical CSS animation (bob 3s ease-in-out infinite, ±6px).
- Image: `object-fit: cover`, lazy loaded, priority preloaded (LCP image).

**Hero scroll indicator:**
- Centered at bottom: thin animated scroll caret, `--color-rose-gold`, bouncing 6px, 1.5s ease-in-out infinite.

---

### 4.3 Trust Metrics Band

**Full width, between Hero and Services.**

**Background:** `--color-charcoal`.

**Layout:** Four stats in a horizontal row, centered, equal width.

**Each stat:**
- Number: `Playfair Display`, 48px, `--color-rose-gold`. Animated counter (count-up on scroll-enter, 1200ms).
- Label: `DM Sans`, 13px, `--tracking-wider`, uppercase, `--color-neutral-500`.
- Vertical divider between items: 1px, `--color-neutral-700`.

**Sample stats:**
- `500+` Happy Clients
- `8+` Years of Expertise
- `30+` Aesthetic Treatments
- `4.9★` Average Rating

---

### 4.4 Services Overview Section

**Section label:** `"What We Offer"`

**Headline:** `"Cosmetic Excellence\nAcross Every Dimension"`

**Subtext:** Short paragraph, `--container-text` max-width, centered.

**Grid:** 4 cards on desktop, 2 on tablet, 1 on mobile.

**Each card:**
- Icon (custom SVG, thin stroke, 40px, `--color-rose-gold`).
- Category name: `DM Sans`, weight 600, `--text-h5`, `--color-charcoal`.
- Short 2-line description: `DM Sans`, 14px, `--color-text-secondary`.
- `"View Treatments →"` link: 13px, `--color-rose-gold`, with arrow that slides right 4px on hover.
- Card: `--color-surface-card` background, `--shadow-sm`, `--radius-lg`, 32px padding.
- Hover: `--shadow-card-hover`, translateY(-4px), 250ms `--ease-luxury`. Border-top becomes 2px `--color-rose-gold`.

**Categories:**
1. Skin Treatments (icon: leaf/glow)
2. Advanced Procedures (icon: precision/science)
3. Face & Body Aesthetics (icon: contour/profile)
4. Hair Treatments (icon: strand/follicle)

**Scroll animation:** Cards reveal staggered: scale(0.96)→1, opacity 0→1, 400ms `--ease-spring`, 60ms stagger.

---

### 4.5 About the Doctor Section

**Layout:** Two-column, 40/60 split. Image left, content right. On mobile: stacked, image first.

**Left — Doctor Image:**
- Full-height professional photograph, warm studio lighting.
- Framing: unique shape — bottom edge has a decorative gold flourish SVG.
- Floating badge: certification seal SVG, bottom-right of image, `--shadow-md`.

**Right — Content:**
- Eyebrow label: `"Meet Your Cosmetologist"`
- H2: `"Dr. Unnati — Dedicated to the Art of Aesthetic Beauty"`
- Body: 3–4 short paragraphs. Warm, credible, personal tone. Mention her qualifications, approach to cosmetology (NOT dermatology), passion for natural results.
- Key qualifications list: 3–4 items with `--color-gold` check icons. `DM Sans`, 14px.
- CTA: `"Read My Full Story"` — text link with arrow.

---

### 4.6 Featured Treatments Section

**Headline:** `"Signature Treatments"`

**Layout:** Horizontal scroll on mobile. 3-column grid on desktop.

**Each treatment card:**
- Large treatment image (aspect ratio 4:5, `object-fit: cover`).
- Overlay gradient on bottom 50%: `linear-gradient(to top, rgba(45,45,45,0.75) 0%, transparent 100%)`.
- Treatment name (white, `Playfair Display`, weight 500, 22px) positioned over gradient.
- Category badge (pill): `--color-rose-gold` background, white text, 11px uppercase.
- `"Learn More"` CTA fades in on card hover.
- Card `--radius-xl`, `overflow: hidden`, hover: scale(1.015), image scale(1.04). 350ms `--ease-luxury`.

---

### 4.7 How It Works Section (Process Flow)

**Background:** `--color-champagne`.

**Headline:** `"Your Journey to Radiant Skin"`

**Layout:** Horizontal 4-step process on desktop. Vertical timeline on mobile.

**Each step:**
- Step number (large, `Playfair Display`, 80px, `--color-soft-beige` — decorative background number).
- Icon (40px, `--color-rose-gold`).
- Title: `DM Sans`, weight 600, `--text-h5`.
- Short description.

**Connector:** Dashed line between steps, `--color-rose-gold`, 1px, animated dash-offset on scroll.

**Steps:**
1. **Book a Consultation** — Online or WhatsApp
2. **Personal Assessment** — 1-on-1 with Dr. Unnati
3. **Tailored Treatment Plan** — Customized for your skin
4. **See Your Transformation** — Natural, lasting results

---

### 4.8 Before & After Gallery Section

**Headline:** `"Real Results, Real People"`

**Sub-label:** `"All results shown are from actual clients of Dr. Unnati's Skin Clinic with consent."`

**Filter tabs:** Pill-style tabs for treatment categories. Active: `--color-rose-gold` background, white text. Inactive: border only.

**Gallery grid:** Masonry-style, 3 columns desktop, 2 tablet, 1 mobile.

**Each before-after card:**
- Vertical split slider (drag interaction): left side = before, right side = after, with `--color-rose-gold` drag handle in center.
- Treatment label (bottom).
- Client consent note (small, muted).

**CTA below grid:** `"View Full Gallery →"` button.

> **Note:** If actual before-after images are not yet available, render placeholder cards with "Client results coming soon" and a booking CTA.

---

### 4.9 Testimonials Section

**Background:** `--color-surface-base`.

**Headline:** `"What Our Clients Say"`

**Layout:** Auto-scrolling horizontal carousel (pauses on hover). 3 cards visible on desktop, 1 on mobile.

**Each testimonial card:**
- Rating stars: 5-star SVG, `--color-gold`.
- Quote text: `Cormorant Garamond` italic, 20px, `--color-text-primary`. Max 3 lines with ellipsis + expand on click.
- Client name: `DM Sans`, weight 600, 14px.
- Treatment received: small pill badge.
- Client photo (if available): 44px circle avatar; if not, initial-letter avatar with `--color-champagne` background.
- Card: `--color-warm-white`, `--shadow-md`, `--radius-lg`, 32px padding.

**Below carousel:** Google Reviews aggregate badge (icon + rating + count). Links to Google Maps listing.

---

### 4.10 Awards & Recognition Strip

**Background:** `--color-charcoal`.

**Content:** Logo marquee of certifications, associations, publications, or media mentions. Fade in on left and right edges using CSS mask.

**Marquee:** CSS animation (`@keyframes marquee`), speed 40s linear infinite, paused on hover.

**Items:** Logos in soft white, opacity 0.65, scale to 1.0 and opacity 1.0 on hover.

---

### 4.11 FAQ Section

**Background:** `--color-champagne`.

**Headline:** `"Questions We Hear Most"`

**Layout:** Single column, max-width `--container-narrow`, centered.

**Each FAQ item:**
- Question: `DM Sans`, weight 600, `--text-h5`, `--color-charcoal`.
- Answer: `DM Sans`, `--text-body`, `--leading-relaxed`, `--color-text-secondary`.
- Accordion expand: answer panel slides open, `max-height: 0 → auto` with height transition. Plus-to-Minus icon rotates 45°. 250ms `--ease-out`.
- Divider: 1px `--color-border-light` between items.

**FAQ Schema:** Implement `FAQPage` JSON-LD schema. Every question and answer must be included in structured data.

---

### 4.12 Booking CTA Section

**Full-bleed section. Background:** Elegant full-width image (clinic interior or atmospheric beauty shot) with overlay `rgba(45, 45, 45, 0.72)`.

**Content — centered:**
- Eyebrow: `"Ready to Begin?"`
- H2: `"Your Best Skin Starts With One Conversation"` — white, `Playfair Display`.
- Subtext: white, `DM Sans`, `--text-body-lg`.
- Two buttons: `"Book Online"` (primary, `--color-rose-gold` bg) + `"Chat on WhatsApp"` (secondary, white border, white text, WhatsApp icon).
- Below buttons: `"No commitment. Free initial guidance."` — small, `--color-neutral-400`.

---

### 4.13 Footer

**Background:** `--color-neutral-900`.

**Top band:** Clinic logo, tagline, and social links row.

**Main grid (4 columns on desktop, 2 tablet, 1 mobile):**

**Column 1 — Clinic Info:**
- Logo (inverted/light version).
- Short clinic description (2 lines).
- Certification badges (small, muted).

**Column 2 — Quick Links:**
- Home, About, Treatments, Gallery, Blog, Contact.
- `DM Sans`, 14px, `--color-neutral-400`. Hover → `--color-rose-gold`. Transition 150ms.

**Column 3 — Treatments:**
- Top 6 treatments. Same link style.

**Column 4 — Contact & Hours:**
- Address with location icon.
- Phone (clickable `tel:` link).
- WhatsApp button (small pill, green icon).
- Clinic hours (Mon–Sat / timings).
- Embedded Google Map (small, `--radius-md`, `--shadow-sm`).

**Social row:** Icons (Instagram, Facebook, YouTube, LinkedIn) — 40px touch target, `--color-neutral-500` default, `--color-rose-gold` hover. 24px SVG icons.

**Bottom bar:**
- Left: `© 2025 Dr. Unnati's Skin Clinic. All rights reserved.`
- Right: Privacy Policy | Terms | Sitemap
- `DM Sans`, 12px, `--color-neutral-600`.
- 1px `--color-neutral-800` top border.

---

## SECTION 5 — COMPONENT LIBRARY

### 5.1 Button System

Define all button variants. Buttons are never `<a>` tags styled as buttons. Use semantic `<button>` or `<a>` as context requires.

**Variants:**

```
btn-primary      → --color-rose-gold bg, white text
btn-secondary    → white bg, --color-rose-gold border, --color-rose-gold text
btn-dark         → --color-charcoal bg, white text
btn-ghost        → transparent, --color-charcoal border, --color-charcoal text
btn-text         → no bg/border, --color-rose-gold text, underline on hover
btn-icon         → square/circle icon-only button
```

**Sizes:**

```
btn-sm    → height 36px, px 16px, font 13px
btn-md    → height 44px, px 24px, font 15px   [default]
btn-lg    → height 52px, px 32px, font 16px
btn-xl    → height 60px, px 40px, font 18px
```

**States for all buttons:**
- `default` → base styles.
- `hover` → background lightens or darkens 8%, `translateY(-1px)`, `--shadow-md`. Transition 200ms.
- `focus-visible` → `outline: 3px solid --color-focus-ring; outline-offset: 3px;`
- `active` → `translateY(0)`, `--shadow-sm`.
- `disabled` → opacity 0.45, cursor not-allowed, no pointer events.
- `loading` → spinner replaces or appends to text. Spinner: 16px, `--color-cta-text`, `@keyframes spin`.

**Border radius:** `--radius-full` (pill buttons are the luxury default).

**WhatsApp button:** `btn-primary` variant with custom green `#25D366` background and WhatsApp SVG icon. Position: Fixed, bottom-right, `right: 24px; bottom: 24px; z-index: 900`.

---

### 5.2 Form System

**Appointment / Contact Form:**

**Fields:**
1. Full Name (text)
2. Mobile Number (tel) — with country code picker
3. Email (email)
4. Treatment of Interest (select dropdown)
5. Preferred Date (date picker — no past dates)
6. How did you hear about us? (select)
7. Message / Additional Info (textarea, optional)

**Input design:**
- Height: 52px (text/select/tel), 120px (textarea).
- Border: 1px `--color-border-medium` default.
- Border-focus: 2px `--color-rose-gold`.
- Background: `--color-warm-white`.
- Label: float animation — label sits inside field, floats above on focus/fill. `DM Sans`, 13px, `--color-rose-gold` when active.
- Error state: border `--color-error`, inline error message below field in 12px red.
- Success state: border `--color-success`, checkmark icon inside field.
- `--radius-md` on all inputs.

**Submit button:** Full-width, `btn-xl`, `btn-primary`, icon: calendar icon left of text.

**Privacy note:** `"Your information is safe. We never share your data."` — 12px, muted, lock icon.

---

### 5.3 Treatment Card

**Three sizes:** compact (listing), standard (grid), featured (hero treatment).

**Standard card:**
- Image top: 16:9 or 4:5 ratio, `object-fit: cover`, `--radius-lg --radius-lg 0 0`.
- Body: 24px padding.
- Category badge: pill, top-left overlay on image.
- Treatment name: `Playfair Display`, `--text-h4`, `--color-charcoal`.
- Short description: `DM Sans`, 14px, 2 lines, `--color-text-secondary`.
- Benefits list: 2–3 bullet points, check icons `--color-sage`.
- Pricing (if applicable): `DM Sans`, weight 600, `--color-rose-gold`. Prefix with `"Starting from"`.
- CTA: `btn-secondary btn-md` full-width.
- Hover: card lifts, image zooms (scale 1.04 on image only, `overflow: hidden`).
- `--shadow-sm` default, `--shadow-card-hover` on hover.

---

### 5.4 Doctor Profile Component

**Card variant (for homepage/sidebar):**
- Circular or squircle portrait image, 140px.
- Gold ring border: `box-shadow: 0 0 0 3px --color-warm-white, 0 0 0 5px --color-rose-gold`.
- Name: `Playfair Display`, `--text-h3`.
- Title: `DM Sans`, 14px, `--color-rose-gold`, uppercase tracking.
- Qualifications: pill tags, `--color-champagne` background, `--color-text-secondary`, 12px.
- Short bio: `DM Sans`, 14px, `--color-text-secondary`.

**Full-page About section:**
- Large portrait (40% column width) with credential overlaid badge.
- Extended bio with `Cormorant Garamond` pull quote.
- Timeline of education/training (vertical line, dots, `--color-rose-gold`).
- `"Dr. Unnati is a Cosmetologist"` — explicitly stated, bold, in introduction.

---

### 5.5 Before-After Slider Component

**Architecture:** CSS-only slider with range input or JavaScript drag interaction.

**Markup:**
```html
<div class="ba-slider" role="group" aria-label="Before and After comparison">
  <div class="ba-before">
    <img alt="Before treatment" />
    <span class="ba-label">Before</span>
  </div>
  <div class="ba-after">
    <img alt="After treatment" />
    <span class="ba-label">After</span>
  </div>
  <div class="ba-handle" role="slider" aria-label="Slide to compare" tabindex="0">
    <div class="ba-handle-line"></div>
    <div class="ba-handle-circle">
      <svg><!-- arrows left/right --></svg>
    </div>
  </div>
</div>
```

**Handle:** 44px circle, `--color-rose-gold` background, white arrows. `--shadow-lg`. Draggable.

**Keyboard:** Left/Right arrow keys move handle 5% per keypress.

**Touch:** Touch-drag supported, pointer events based implementation.

---

### 5.6 Floating Booking Widget (Sticky)

**Behavior:** Visible only when user has scrolled past hero. Fixed, right side, vertically centered.

**Collapsed state:** Vertical tab with `"Book Now"` text rotated 90°, `--color-rose-gold` background, white text. Width 40px, height 100px, right: 0.

**Expanded state (hover/click):** Expands to 280px mini-form: name, phone, treatment select, submit. Smooth 300ms width transition.

**Mobile:** Does not exist as sidebar. Replaced by sticky bottom bar (see below).

---

### 5.7 Mobile Sticky Bottom Bar

**Mobile only (`max-width: 768px`).**

**Position:** Fixed, bottom: 0, full width, z-index 990.

**Content:** Two equal-width buttons.
- Left: `"📅 Book Now"` → links to booking form.
- Right: `"💬 WhatsApp"` → opens WhatsApp link.

**Background:** `--color-charcoal`. Both buttons: white text. Divider: 1px `--color-neutral-700` between.

**Safe area support:** `padding-bottom: env(safe-area-inset-bottom)` for iOS.

---

## SECTION 6 — PAGE TEMPLATES

### 6.1 Individual Treatment Page Template

**URL pattern:** `/treatments/[category]/[treatment-slug]`

**Structure:**
```
1. Breadcrumb navigation
2. Treatment Hero (large image + headline + CTA)
3. What is [Treatment]? (overview)
4. How It Works (step-by-step process)
5. Benefits (icon grid)
6. Who Is It For? (eligibility)
7. What to Expect (before / during / after)
8. Before & After Gallery (treatment-specific)
9. Safety & Side Effects
10. Pricing
11. Related Treatments
12. FAQs (treatment-specific)
13. Book This Treatment (CTA section)
```

**Schema required per treatment page:**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "[Treatment Name]",
  "procedureType": "https://schema.org/CosmenticProcedure",
  "description": "...",
  "followup": "...",
  "preparation": "...",
  "performer": {
    "@type": "Physician",
    "name": "Dr. Unnati",
    "medicalSpecialty": "Cosmetology"
  }
}
```

---

### 6.2 About Dr. Unnati Page Template

**Structure:**
```
1. Page Hero (portrait + headline)
2. Introduction — Dr. Unnati as Cosmetologist
3. Education & Credentials (timeline)
4. Philosophy & Approach
5. Clinic Values
6. Media & Recognition
7. Meet the Team (if applicable)
8. Awards / Certifications
9. Book a Consultation CTA
```

**Critical:** Never use the word "dermatologist" on this page. Her specialty is explicitly stated as Cosmetology and Aesthetic Medicine throughout.

---

### 6.3 Contact & Booking Page

**Structure:**
```
1. Page Hero (minimal, heading + subtext)
2. Booking Form (left column, 55%)
3. Clinic Info (right column, 45%)
   — Address
   — Phone / WhatsApp
   — Hours
   — Embedded Google Map
4. What to Expect after booking
5. FAQs about booking
```

---

### 6.4 Gallery Page

**Filter system:** Treatment-based pill filter tabs. All | Skin | Hair | Acne | Anti-Aging | Lips | Body.

**Grid:** 3-column masonry on desktop, 2 on tablet, 1 on mobile.

**Lightbox:** On click, opens full-screen overlay with before-after slider, treatment info, and nav arrows.

**Lazy loading:** Intersection Observer API. Load 9 cards initially, then 9 more on scroll.

**Privacy statement:** Prominently placed above gallery: `"Results shared with client consent. Individual results may vary."`

---

## SECTION 7 — SEO & STRUCTURED DATA REQUIREMENTS

### 7.1 On-Page SEO

Every page must include:
- Unique `<title>` (50–60 chars): `"[Page Topic] | Dr. Unnati's Skin Clinic | [City]"`
- Unique `<meta name="description">` (140–160 chars).
- Canonical URL `<link rel="canonical">`.
- `<meta property="og:title">`, `og:description`, `og:image`, `og:url`.
- `<meta name="twitter:card" content="summary_large_image">`.
- `<html lang="en">` and `dir="ltr"`.
- Exactly one `<h1>` per page.
- Logical H2 → H3 → H4 hierarchy. No skipped levels.
- Image `alt` text: descriptive, includes treatment name and "Dr. Unnati's Skin Clinic".
- Internal links: every treatment page links to related treatments and booking page.

### 7.2 Structured Data (JSON-LD)

**Homepage — `MedicalBusiness` schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Dr. Unnati's Skin Clinic",
  "medicalSpecialty": "Cosmetology",
  "description": "Premium cosmetology and aesthetic medicine clinic offering advanced skin, hair, and aesthetic treatments.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[ADDRESS]",
    "addressLocality": "[CITY]",
    "addressRegion": "[STATE]",
    "postalCode": "[PINCODE]",
    "addressCountry": "IN"
  },
  "telephone": "[PHONE]",
  "url": "https://[domain].com",
  "sameAs": ["[Instagram URL]", "[Facebook URL]"],
  "openingHoursSpecification": [...],
  "priceRange": "₹₹₹",
  "currenciesAccepted": "INR"
}
```

**Homepage — `Physician` schema for Dr. Unnati:**
```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Unnati",
  "medicalSpecialty": "Cosmetology",
  "worksFor": {
    "@type": "MedicalBusiness",
    "name": "Dr. Unnati's Skin Clinic"
  }
}
```

**Review aggregate schema** on homepage.

**BreadcrumbList schema** on all inner pages.

**FAQPage schema** on every page with FAQ section.

---

## SECTION 8 — AEO & GEO SPECIFICATIONS

### 8.1 AEO (Answer Engine Optimization)

Design content containers so AI-powered answer engines (Google SGE, Perplexity, Bing Copilot) can extract clean answers.

**AEO design rules:**
- Every treatment page must open with a concise 2–3 sentence definition of the treatment.
- Use HTML `<dl>` / `<dt>` / `<dd>` for Q&A pair data where appropriate.
- FAQ accordions: content must be readable without JS (render all content, hide with CSS only).
- Use `<section>` with descriptive `aria-labelledby` on every major content block.
- Each benefit listed in an `<ul>` with clear, scannable bullet points.
- Process steps in `<ol>` with numbered items.
- Comparison tables: valid HTML `<table>` with `<caption>`, `<thead>`, `<th scope="col">`.

**Featured Snippet targets:** For each major treatment, include a "Quick Answer" box:
- Green/gold left border.
- Heading: `"What is [Treatment] in brief?"`
- 40–60 word answer in a paragraph.
- This box increases probability of appearing in AI-generated summaries.

### 8.2 GEO (Generative Engine Optimization)

**Entity clarity:**
- Dr. Unnati is always referred to as `"Dr. Unnati, Cosmetologist"` — never "doctor", "dermatologist", or "skin specialist".
- Clinic is always `"Dr. Unnati's Skin Clinic, a cosmetology and aesthetic medicine clinic"` on first mention per page.
- Every treatment mentions whether it is `"a non-invasive cosmetic procedure"`, `"a minimally invasive aesthetic treatment"`, etc. — precise categorization.

**Information architecture for GEO:**
- Semantic `<article>` wrapper for every treatment page.
- `<time>` tags for any dates or review dates.
- `itemprop` attributes aligned with schema types.
- Author box on blog posts: `"Written and reviewed by Dr. Unnati, Cosmetologist"` with structured data.
- Consistent entity naming: use the same exact treatment names in heading, body, meta description, alt text, and schema — no synonyms mixed within the same page.

---

## SECTION 9 — PERFORMANCE SPECIFICATIONS

### 9.1 Core Web Vitals Targets

| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.0 seconds |
| INP (Interaction to Next Paint) | < 150ms |
| CLS (Cumulative Layout Shift) | < 0.05 |
| FCP (First Contentful Paint) | < 1.2 seconds |
| TTFB (Time to First Byte) | < 600ms |
| Total Page Weight (Homepage) | < 1.2MB compressed |

### 9.2 Technical Performance Requirements

**Images:**
- Serve in WebP format with AVIF progressive enhancement where supported.
- Use `srcset` and `sizes` for responsive images.
- `loading="lazy"` on all below-fold images.
- `loading="eager"` + `fetchpriority="high"` on LCP image only.
- Provide explicit `width` and `height` attributes to prevent CLS.
- Max image size after compression: 100KB for cards, 250KB for hero, 60KB for thumbnails.

**Fonts:**
- `font-display: swap` on all custom fonts.
- Preload critical font files (`woff2`).
- Subset fonts to characters actually used (Latin only for English site).
- Self-host fonts after download from Google Fonts.

**CSS:**
- Inline critical above-fold CSS in `<style>` tag in `<head>`.
- Load full stylesheet with `media="print" onload` technique for non-critical.
- No unused CSS in production. PurgeCSS or equivalent in build pipeline.

**JavaScript:**
- No render-blocking scripts.
- `defer` or `async` on all third-party scripts.
- Code-split per route. Homepage JS bundle < 80KB gzipped.
- No heavy animation libraries (GSAP only if needed — use its lite build).
- Intersection Observer for all scroll-triggered effects (no scroll event listeners).

**Caching:**
- Static assets: `Cache-Control: public, max-age=31536000, immutable`.
- HTML: `Cache-Control: no-cache, must-revalidate`.

**Hosting:**
- Serve from CDN edge locations.
- Enable HTTP/2 or HTTP/3.
- Brotli compression on all text assets.

---

## SECTION 10 — ACCESSIBILITY SPECIFICATIONS (WCAG 2.2 AA)

### 10.1 Color Contrast

| Use | Minimum Ratio |
|---|---|
| Normal body text (< 18px) | 4.5:1 |
| Large text (≥ 18px or ≥ 14px bold) | 3.0:1 |
| UI components (buttons, inputs, borders) | 3.0:1 |
| Decorative elements | Exempt |

Verify every color combination:
- `--color-rose-gold` on `--color-ivory` background → verify passes 3:1 for large/bold.
- `--color-charcoal` on `--color-warm-white` → must pass 4.5:1.
- White text on `--color-rose-gold` button → must pass 3:1 for button text.

### 10.2 Keyboard Navigation

- All interactive elements reachable via `Tab`.
- Skip-to-main-content link: first focusable element on every page. Visually hidden but visible on focus.
- Focus order: logical, follows visual layout.
- No keyboard trap (modals, drawers must be escapable with `Escape` key and return focus to trigger).
- Custom components (sliders, accordions, tabs) must implement ARIA patterns from ARIA Authoring Practices Guide.

### 10.3 Semantic HTML

- `<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`, `<article>`, `<aside>` — correct use.
- Navigation: `<nav aria-label="Primary navigation">`.
- `<button>` for all interactive non-link elements.
- `<a href>` for all navigational links.
- Icon-only buttons: `aria-label` required.
- Images: `alt=""` for decorative images, descriptive alt for meaningful images.

### 10.4 ARIA

- Mega menu: `aria-expanded`, `aria-controls`, `role="menu"`, `role="menuitem"`.
- Accordion: `aria-expanded`, `aria-controls`, `id` linkage.
- Carousel: `role="region"`, `aria-roledescription="carousel"`, live region for active slide.
- Before-After slider: `role="slider"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`.
- Modal / Lightbox: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, focus trap.

### 10.5 Forms

- Every input has an associated `<label>` (not just placeholder).
- Error messages: `aria-describedby` linking input to error message.
- Required fields: `aria-required="true"` + visual asterisk with legend.
- No CAPTCHA without audio alternative.
- Success confirmation: announced via `role="alert"` or `aria-live="polite"`.

---

## SECTION 11 — MOBILE-FIRST RESPONSIVE SPECIFICATIONS

### 11.1 Breakpoint System

```css
/* Mobile first — styles apply from 0px upward */

/* Small mobile */
@media (min-width: 375px) { }

/* Large mobile */
@media (min-width: 480px) { }

/* Tablet portrait */
@media (min-width: 768px) { }

/* Tablet landscape / small laptop */
@media (min-width: 1024px) { }

/* Desktop */
@media (min-width: 1280px) { }

/* Large desktop */
@media (min-width: 1440px) { }

/* Ultra-wide */
@media (min-width: 1920px) { }

/* Foldable (inner screen) */
@media (min-width: 344px) and (max-width: 428px) and (min-height: 560px) { }
```

### 11.2 Mobile-Specific Patterns

**Navigation:** Full-height off-canvas drawer. Touch target minimum 44×44px for all interactive elements.

**Hero:** Single column, reduced headline size. Image above or behind content. CTA buttons full width.

**Cards:** Single column stack on mobile. No horizontal scroll except where intentional (treatment category tabs).

**Forms:** Inputs at least 48px tall. Numeric fields open numeric keyboard (`inputmode="numeric"`). Date picker: native `<input type="date">` on mobile, custom picker on desktop.

**Typography:** Minimum 16px for all body text to prevent iOS zoom on input focus.

**Spacing:** Reduce all padding by 30% from desktop values. Section padding mobile: `--space-12` (48px).

**Touch interactions:**
- Swipe on carousels and gallery.
- Long-press on treatment cards opens quick info sheet.
- Pull-to-refresh does not interfere with page animations.

**Bottom safe area:** All fixed bottom UI must account for `env(safe-area-inset-bottom)`.

---

## SECTION 12 — CONVERSION OPTIMIZATION SPECIFICATIONS

### 12.1 CTA Placement Matrix

| Page Position | CTA Type | Trigger |
|---|---|---|
| Hero | Primary book + Secondary explore | Immediate |
| After trust metrics | Inline text CTA | After credibility established |
| After Doctor About | Book consultation | After trust built |
| After each treatment card | "Learn More" + "Book" | Treatment interest |
| After testimonials | Book consultation | Social proof peak |
| After FAQ section | WhatsApp chat | Remaining objections cleared |
| Sticky bar (mobile) | Book + WhatsApp | Always visible |
| Exit intent | Modal with special offer | Before leaving |
| Footer | Book + Phone + WhatsApp | Last resort |

### 12.2 Trust Signal Placement

- Doctor credentials visible within first scroll on every page.
- Review aggregate score in navigation bar (star + number) on desktop.
- "Safe & Certified" badge near all form submit buttons.
- Real-time availability hint near booking form: `"Next available slot: [Date]"`.
- After-submit confirmation: what happens next, timeline, WhatsApp contact.

### 12.3 Friction Reduction

- Booking form: 3-step progress bar. Step 1: Contact. Step 2: Treatment. Step 3: Confirm.
- Phone number auto-formatted as user types.
- Treatment dropdown searchable.
- Form auto-saves to `sessionStorage` in case of accidental navigation.
- After successful submission: animate success state, show confirmation number, WhatsApp deeplink to follow up.

### 12.4 WhatsApp Integration

**Primary WhatsApp link format:**
```
https://wa.me/[PHONE]?text=Hi%20Dr.%20Unnati's%20Clinic%2C%20I'd%20like%20to%20book%20a%20consultation.
```

**Per-treatment WhatsApp links:** Pre-fill message with treatment name.
```
?text=Hi%2C%20I'm%20interested%20in%20[Treatment%20Name].%20Can%20I%20book%20a%20consultation%3F
```

---

## SECTION 13 — ANIMATION & INTERACTION MASTER SPECIFICATION

### 13.1 Scroll-Reveal System

**Implementation:** Intersection Observer API. Class-based CSS animation system.

```css
/* Initial state — applied via JS on page load */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity var(--duration-slower) var(--ease-luxury),
              transform var(--duration-slower) var(--ease-luxury);
}

/* Triggered when element enters viewport */
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Variants:**
- `.reveal-up` → translateY(24px) → 0.
- `.reveal-left` → translateX(-24px) → 0.
- `.reveal-right` → translateX(24px) → 0.
- `.reveal-scale` → scale(0.96) → 1 + opacity.
- `.reveal-fade` → opacity only.

**Threshold:** `0.15` (element 15% visible triggers animation).

**Stagger groups:** `[data-stagger-group]` — children animate sequentially with `--delay-index` CSS variable.

**Respect `prefers-reduced-motion`:**
```css
@media (prefers-reduced-motion: reduce) {
  .reveal, .reveal.is-visible {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

### 13.2 Page Transitions

**Route change:** Fade out (150ms) → content swap → fade in (250ms). Use View Transitions API where supported, with CSS fallback.

### 13.3 Loading States

**Skeleton loaders:** Match the visual structure of the content being loaded. Use `--color-neutral-300` with `shimmer` animation:
```css
@keyframes shimmer {
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}
.skeleton {
  background: linear-gradient(90deg,
    var(--color-neutral-300) 25%,
    var(--color-neutral-200) 50%,
    var(--color-neutral-300) 75%
  );
  background-size: 800px 100%;
  animation: shimmer 1.5s infinite;
}
```

### 13.4 Micro-interaction Catalog

| Element | Interaction | Specification |
|---|---|---|
| Nav links | Hover | Rose-gold underline slides from left, 200ms |
| CTA buttons | Hover | lift translateY(-2px), shadow upgrade, 200ms |
| CTA buttons | Active | translateY(0), shadow reduce, 80ms |
| Cards | Hover | lift + image zoom, 300ms ease-luxury |
| Accordion | Toggle | Smooth height, icon rotate, 250ms ease-out |
| Star rating | Load | Stars fill left to right, staggered 80ms |
| Counter stats | Enter viewport | Count-up from 0, 1200ms, ease-out |
| Logo marquee | Continuous | CSS animation, pause on hover |
| Before-after slider | Drag | Real-time, no delay, pointer-based |
| Form inputs | Focus | Border width 1px→2px, color changes, label floats, 150ms |
| Toast notifications | Appear | Slide up from bottom right, 300ms spring |
| WhatsApp button | Idle | Subtle pulse ring every 4s |
| Page scroll | Scroll | Smooth scroll behavior: CSS `scroll-behavior: smooth` + offset for sticky nav |

---

## SECTION 14 — ICON SYSTEM

**Source:** Use Phosphor Icons (thin weight, stroke-based) or Lucide Icons. Apply one system only — never mix.

**Size scale:**
- Decorative (section backgrounds): 64–120px, opacity 0.08.
- Feature icons (service cards): 40px.
- UI icons (buttons, inputs): 20px.
- Inline icons (text): 16px.

**Color:** Inherit from parent or explicitly set to `--color-rose-gold` (feature) or `--color-text-secondary` (UI).

**Never use:** Emoji as functional icons. Font Awesome (too heavy). Raster PNG icons.

**Implement as:** SVG sprite or inline SVGs. No external icon font loading.

---

## SECTION 15 — IMAGERY ART DIRECTION

### 15.1 Photography Standards

**All images must convey:**
- Warmth, professionalism, cleanliness.
- Authentic representation of aesthetic clinic environment.
- Natural lighting or controlled studio lighting. Never harsh overhead.
- Diversity: show varied skin tones across testimonials and gallery.

**Avoid:**
- Generic stock photography (nurse clipart, generic spa images).
- Images with visible branding of competitor brands.
- Before-after images without clear consent notice.
- Extreme or unrealistic results.

### 15.2 Image Specifications

| Context | Aspect Ratio | Min Resolution | Format |
|---|---|---|---|
| Hero | 16:9 or 3:2 | 1920×1080 | WebP |
| Treatment card | 4:5 | 800×1000 | WebP |
| Doctor portrait | 3:4 | 900×1200 | WebP |
| Gallery before-after | 1:1 | 800×800 | WebP |
| Team photos | 1:1 | 600×600 | WebP |
| Blog thumbnail | 16:9 | 1200×675 | WebP |
| Logo | N/A | SVG preferred | SVG/WebP |
| OG Image (social preview) | 1200×630 | 1200×630 | JPEG/WebP |

---

## SECTION 16 — BRAND VOICE & MICROCOPY GUIDELINES

### 16.1 Tone

- **Warm** — Never cold or clinical.
- **Confident** — Not boastful. Expertise shown through precision.
- **Elegant** — Sentences are short, clean, purposeful.
- **Empathetic** — Acknowledge the visitor's concerns before presenting solutions.
- **Expert** — Technical terms explained in accessible language.

### 16.2 Language Rules

- Refer to Dr. Unnati as **"Dr. Unnati, Cosmetologist"** — always include the specialty.
- Never: "skin doctor", "dermatologist", "specialist" as a standalone term.
- Treatments are "cosmetic treatments" or "aesthetic procedures" — never "medical procedures" or "clinical interventions".
- Clients are "clients" or "guests" — not "patients" (unless required in schema).
- Results copy: always qualify with `"Individual results may vary."` near gallery sections.

### 16.3 Microcopy Examples

| Context | Copy |
|---|---|
| Booking button | `"Book Your Consultation"` |
| WhatsApp CTA | `"Chat With Us Now"` |
| Hero headline | `"Reveal Your Most Radiant Self"` |
| Hero subtext | `"Personalized cosmetic treatments by Dr. Unnati, Cosmetologist"` |
| Form submit | `"Request My Consultation"` |
| Form success | `"We've received your request! Dr. Unnati's team will contact you within 24 hours."` |
| Empty gallery | `"Stunning results coming soon — book your transformation today."` |
| 404 page | `"This page seems to have had a makeover. Let's find what you need."` |
| Loading | `"Preparing your experience..."` |

---

## SECTION 17 — LEGAL & COMPLIANCE

### 17.1 Required Pages

- **Privacy Policy** — GDPR / Indian data protection compliant.
- **Terms of Use**.
- **Disclaimer** — `"Results may vary. Cosmetic treatments are not substitutes for medical care."` Must appear in footer.
- **Cookie Consent** — If analytics or third-party scripts are present. Non-intrusive bottom banner, not full-screen modal.

### 17.2 Medical Advertising Compliance

- No guaranteed outcome claims.
- All before-after imagery labeled with consent statement.
- Pricing shown as `"Starting from ₹[amount]"` — never fixed pricing without consultation qualifier.
- Treatments described accurately using cosmetic/aesthetic terminology, not medical diagnosis language.

---

## SECTION 18 — IMPLEMENTATION CHECKLIST

Before launch, verify every item:

**Design:**
- [ ] All color tokens implemented correctly
- [ ] Typography scale applied consistently
- [ ] Spacing system used throughout — no arbitrary pixel values
- [ ] All components match design spec
- [ ] Dark mode considered (optional: system preference)

**Content:**
- [ ] Dr. Unnati referred to as Cosmetologist on every page
- [ ] Zero instances of "dermatologist" or "dermatology"
- [ ] All before-after images have consent labels
- [ ] All pricing has "starting from" qualifier

**Performance:**
- [ ] Lighthouse score ≥ 90 on all four categories (Performance, Accessibility, Best Practices, SEO)
- [ ] Core Web Vitals all in green on PageSpeed Insights
- [ ] LCP image preloaded
- [ ] All images in WebP with proper dimensions

**SEO:**
- [ ] JSON-LD structured data valid (Google Rich Results Test)
- [ ] All pages have unique title and meta description
- [ ] XML sitemap at `/sitemap.xml`
- [ ] `robots.txt` configured
- [ ] Google Search Console verified
- [ ] Canonical URLs set

**Accessibility:**
- [ ] axe DevTools zero critical violations
- [ ] Keyboard navigation complete
- [ ] All images have alt text
- [ ] Color contrast verified
- [ ] Screen reader tested (NVDA/VoiceOver)

**Conversion:**
- [ ] WhatsApp button visible on all pages
- [ ] Booking CTA present above fold on every page
- [ ] Mobile sticky bottom bar implemented
- [ ] Form validation and error handling complete
- [ ] Thank-you/success state after form submission

---

*End of Google Antigravity Implementation Blueprint*
*Document Version: 1.0 | Prepared for Dr. Unnati's Skin Clinic*
*This document is the sole and complete design + development specification. Execute all sections in full.*
