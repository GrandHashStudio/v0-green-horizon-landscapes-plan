# GreenHorizon Landscapes — Implementation Kickstart

## Project Overview

**Client:** GreenHorizon Landscapes  
**Contact:** Elias (Owner)  
**Launch Target:** Spring 2026  
**Conversion Goal:** 15+ consultation bookings/month  
**Site Type:** High-conversion single-page landing page

---

## Design Token System

### Color Palette

| Token Name | Hex Value | Usage |
|------------|-----------|-------|
| `--sage-50` | `#f6f7f4` | Backgrounds, subtle fills |
| `--sage-100` | `#e8ebe3` | Card backgrounds, dividers |
| `--sage-200` | `#d4dac9` | Borders, muted elements |
| `--sage-300` | `#b8c4a5` | Secondary text, icons |
| `--sage-400` | `#9aad80` | Hover states |
| `--sage-500` | `#7d9660` | Primary brand color |
| `--sage-600` | `#637a4a` | Primary buttons, links |
| `--sage-700` | `#4d5f3a` | Button hover, emphasis |
| `--sage-800` | `#3a472d` | Headings, strong text |
| `--sage-900` | `#2a3321` | Footer, dark accents |
| `--slate-50` | `#f8f9fa` | Light backgrounds |
| `--slate-100` | `#f1f3f4` | Alternate sections |
| `--slate-200` | `#e8eaed` | Borders |
| `--slate-300` | `#dadce0` | Disabled states |
| `--slate-400` | `#9aa0a6` | Placeholder text |
| `--slate-500` | `#5f6368` | Body text |
| `--slate-600` | `#3c4043` | Subheadings |
| `--slate-700` | `#202124` | Primary text |
| `--sand-50` | `#fdfcfb` | Hero background |
| `--sand-100` | `#f9f6f2` | Section alternates |
| `--sand-200` | `#f0ebe3` | Warm accents |
| `--sand-300` | `#e4dcd0` | Borders, dividers |

### Semantic Tokens

```css
:root {
  /* Backgrounds */
  --background: var(--sand-50);
  --background-alt: var(--sage-50);
  --background-card: #ffffff;
  --background-footer: var(--sage-900);

  /* Foreground / Text */
  --foreground: var(--slate-700);
  --foreground-muted: var(--slate-500);
  --foreground-inverse: var(--sand-50);

  /* Primary (CTA) */
  --primary: var(--sage-600);
  --primary-hover: var(--sage-700);
  --primary-foreground: #ffffff;

  /* Accent */
  --accent: var(--sage-400);
  --accent-foreground: var(--sage-800);

  /* Borders */
  --border: var(--slate-200);
  --border-muted: var(--sand-300);

  /* Radius */
  --radius: 0.5rem;
  --radius-lg: 1rem;
  --radius-full: 9999px;
}
```

### Typography Scale

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| H1 (Hero) | Playfair Display | 4rem / 64px | 700 | 1.1 |
| H2 (Section) | Playfair Display | 2.5rem / 40px | 600 | 1.2 |
| H3 (Card) | Inter | 1.5rem / 24px | 600 | 1.3 |
| Body | Inter | 1rem / 16px | 400 | 1.6 |
| Body Large | Inter | 1.125rem / 18px | 400 | 1.6 |
| Caption | Inter | 0.875rem / 14px | 400 | 1.5 |
| CTA Button | Inter | 1.125rem / 18px | 600 | 1 |

---

## Site Architecture

### Single-Page Section Flow

```
┌─────────────────────────────────────────────────┐
│  1. HERO                                        │
│     - Headline + Subheadline                    │
│     - CTA #1: "Book Your Consultation"          │
│     - Trust badges row                          │
├─────────────────────────────────────────────────┤
│  2. PROBLEM / EMPATHY                           │
│     - Pain points addressed                     │
│     - Emotional connection                      │
├─────────────────────────────────────────────────┤
│  3. SERVICES                                    │
│     - 3-column grid                             │
│     - Sustainable Xeriscaping                   │
│     - Smart Irrigation                          │
│     - Native Plant Gardens                      │
│     - CTA #2: "Book Your Consultation"          │
├─────────────────────────────────────────────────┤
│  4. BEFORE/AFTER SHOWCASE                       │
│     - 2x Comparison Slider Components           │
│     - Project metrics overlay                   │
├─────────────────────────────────────────────────┤
│  5. SOCIAL PROOF                                │
│     - Testimonial carousel (3 stories)          │
│     - Marcus T., Sarah L., Henderson Family     │
│     - Star ratings + location tags              │
├─────────────────────────────────────────────────┤
│  6. OUR PROCESS                                 │
│     - 4-step visual timeline                    │
│     - Discovery → Design → Install → Maintain   │
├─────────────────────────────────────────────────┤
│  7. FAQ ACCORDION                               │
│     - 4 objection-handling questions            │
│     - Expandable answers                        │
├─────────────────────────────────────────────────┤
│  8. FINAL PITCH / FOOTER CTA                    │
│     - Landscape background image                │
│     - CTA #3: "Book Your Consultation"          │
│     - Contact info + social links               │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  FLOATING MOBILE CTA (Mobile Only)              │
│     - Fixed bottom dock                         │
│     - Appears after scrolling past hero         │
│     - "Book Your Consultation" button           │
└─────────────────────────────────────────────────┘
```

---

## Component Inventory

### Core Components

| Component | Description | Priority |
|-----------|-------------|----------|
| `HeroSection` | Full-width hero with headline, subhead, CTA | P0 |
| `TrustBadges` | Horizontal row of certification logos | P0 |
| `ServiceCard` | Icon + title + description card | P0 |
| `ServicesGrid` | 3-column responsive grid | P0 |
| `ComparisonSlider` | Before/after image slider | P0 |
| `TestimonialCard` | Quote + avatar + name + rating | P0 |
| `TestimonialCarousel` | Auto-rotating testimonial display | P1 |
| `ProcessTimeline` | 4-step horizontal/vertical timeline | P1 |
| `FAQAccordion` | Expandable Q&A section | P0 |
| `FooterCTA` | Full-width CTA banner with background | P0 |
| `BookingModal` | Form modal for consultation requests | P0 |
| `FloatingCTA` | Mobile-only fixed bottom button | P0 |
| `Footer` | Contact info, links, copyright | P1 |

### Utility Components

| Component | Description |
|-----------|-------------|
| `ScrollReveal` | Intersection Observer wrapper for animations |
| `SectionWrapper` | Consistent padding/max-width container |
| `Badge` | Small pill for tags/certifications |
| `StarRating` | 5-star display component |

---

## CTA Strategy

### CTA Placement (Minimum 3)

1. **Hero CTA** — Primary, above the fold, immediate visibility
2. **Services CTA** — After presenting value proposition
3. **Footer CTA** — Final conversion opportunity before exit

### CTA Design Specifications

```
┌──────────────────────────────────────┐
│     Book Your Consultation →         │
│                                      │
│  Background: var(--sage-600)         │
│  Hover: var(--sage-700)              │
│  Text: #ffffff                       │
│  Padding: 1rem 2rem                  │
│  Border-radius: var(--radius-full)   │
│  Font: Inter 600 18px                │
│  Subtle pulse animation on idle      │
└──────────────────────────────────────┘
```

### Floating Mobile CTA

- **Visibility:** Mobile only (< 768px)
- **Trigger:** Appears after scrolling 100vh (past hero)
- **Position:** Fixed bottom, full-width dock
- **Z-index:** 50
- **Animation:** Slide up on appear, subtle shadow

---

## Booking Modal Specifications

### Form Fields

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Full Name | Text | Yes | Min 2 chars |
| Email | Email | Yes | Valid email format |
| Phone | Tel | No | Valid phone format |
| Property Type | Select | Yes | Residential / Commercial |
| Project Interest | Multi-select | No | Xeriscaping, Irrigation, Native Plants |
| Preferred Contact | Radio | Yes | Email / Phone / Either |
| Message | Textarea | No | Max 500 chars |

### Modal Behavior

- **Trigger:** Any CTA button click
- **Animation:** Fade in + scale up
- **Backdrop:** Semi-transparent overlay (click to close)
- **Close:** X button + Escape key
- **Success:** Confirmation message + auto-close after 3s
- **Error:** Inline validation + toast notification

### Data Storage

- **Primary:** Vercel KV or Postgres (for lead persistence)
- **Email:** Resend API (immediate notification to Elias)
- **Tracking:** Vercel Analytics event on submission

---

## Animation & Interaction Guidelines

### Scroll Reveal Animations

| Element | Animation | Delay | Duration |
|---------|-----------|-------|----------|
| Section headings | Fade up | 0ms | 600ms |
| Service cards | Fade up + stagger | 100ms each | 500ms |
| Testimonials | Fade in | 0ms | 700ms |
| Process steps | Slide in from left | 150ms stagger | 500ms |
| FAQ items | Fade up | 50ms stagger | 400ms |

### CTA Pulse Animation

```css
@keyframes pulse-subtle {
  0%, 100% { box-shadow: 0 0 0 0 rgba(99, 122, 74, 0.4); }
  50% { box-shadow: 0 0 0 12px rgba(99, 122, 74, 0); }
}
```

### WCAG 2.1 AA Compliance

- **Reduced motion:** Respect `prefers-reduced-motion` media query
- **Focus states:** Visible focus rings on all interactive elements
- **Color contrast:** All text meets 4.5:1 minimum ratio
- **Animation timing:** No flashing content > 3 times/second

---

## Performance Targets

### Core Web Vitals Goals

| Metric | Target | Priority |
|--------|--------|----------|
| LCP (Largest Contentful Paint) | < 2.5s | P0 |
| FID (First Input Delay) | < 100ms | P0 |
| CLS (Cumulative Layout Shift) | < 0.1 | P0 |
| TTFB (Time to First Byte) | < 200ms | P1 |

### Optimization Strategies

- Next.js Image component for all images
- Font subsetting (Latin only)
- Lazy load below-fold sections
- Preload critical assets
- Static generation where possible

---

## SEO Strategy

### Local SEO Focus

- **Title:** "GreenHorizon Landscapes | Sustainable Landscaping in [City Name]"
- **Meta description:** Include "consultation," "sustainable," "[City]"
- **Schema markup:** LocalBusiness, Service, FAQPage
- **Open Graph:** Optimized for social sharing

### Keywords to Target

- Sustainable landscaping [City]
- Xeriscaping services
- Smart irrigation installation
- Native plant garden design
- Eco-friendly landscaping

---

## Technical Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS + CSS Variables |
| Components | shadcn/ui + custom |
| Animations | CSS + Intersection Observer |
| Forms | React Hook Form + Zod |
| Email | Resend API |
| Analytics | Vercel Analytics |
| Hosting | Vercel |
| Images | Next.js Image + Generated assets |

---

## Implementation Phases

### Phase 1: MVP (Current Sprint)

- [x] Design token system
- [ ] Hero section with CTA #1
- [ ] Services grid with CTA #2
- [ ] Before/after comparison sliders (2)
- [ ] Testimonial section
- [ ] Process timeline
- [ ] FAQ accordion
- [ ] Footer CTA section (#3)
- [ ] Booking modal with form
- [ ] Floating mobile CTA
- [ ] Scroll reveal animations
- [ ] Resend email integration
- [ ] Vercel Analytics setup
- [ ] WCAG 2.1 AA compliance audit
- [ ] Core Web Vitals optimization
- [ ] SEO metadata + schema

### Phase 2: Post-Launch Roadmap

- [ ] Portfolio/gallery page
- [ ] Educational blog section
- [ ] Simple CMS for testimonial rotation
- [ ] A/B testing for CTA variations
- [ ] Lead scoring integration

---

## File Structure

```
/vercel/share/v0-project/
├── app/
│   ├── globals.css          # Design tokens + base styles
│   ├── layout.tsx            # Root layout + fonts + metadata
│   ├── page.tsx              # Single-page landing
│   └── api/
│       └── contact/
│           └── route.ts      # Form submission handler
├── components/
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── before-after.tsx
│   │   ├── testimonials.tsx
│   │   ├── process.tsx
│   │   ├── faq.tsx
│   │   └── footer-cta.tsx
│   ├── booking-modal.tsx
│   ├── floating-cta.tsx
│   ├── comparison-slider.tsx
│   ├── scroll-reveal.tsx
│   └── ui/                   # shadcn components
├── lib/
│   ├── utils.ts
│   └── resend.ts             # Email utility
├── public/
│   └── images/
│       ├── before-after/
│       ├── trust-badges/
│       └── hero/
└── IMPLEMENTATION_KICKSTART.md
```

---

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Monthly Bookings | 15+ | Form submissions |
| Conversion Rate | 3-5% | Visitors → Bookings |
| Bounce Rate | < 40% | Vercel Analytics |
| Avg. Time on Page | > 2 min | Vercel Analytics |
| Mobile Conversion | Equal to desktop | Segmented analytics |
| Page Load (LCP) | < 2.5s | Vercel Speed Insights |

---

## Approval Checklist

Before implementation begins, confirm:

- [ ] Design tokens approved (Sage/Slate/Sand palette)
- [ ] Copy finalized for all sections
- [ ] Testimonial content verified
- [ ] Trust badge assets identified (placeholder OK)
- [ ] Elias's email for Resend notifications
- [ ] Custom domain ready for Vercel
- [ ] Local area/city name for SEO

---

*Document Version: 1.0*  
*Created: March 2026*  
*Status: Ready for Implementation*
