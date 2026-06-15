# Toronto College of Dental Assisting — Website

A multi-page marketing site that closely mirrors the look and feel of toronto-college-dental.org: clean white layout, light cyan/teal accent bar at the top, navy headings, orange CTA buttons, big hero with overlay text, and a clear top nav.

## Pages (TanStack Start routes)

- `/` — Home
- `/program` — Program (Dental Assisting curriculum, duration, schedule, outcomes)
- `/facility` — Facility (photo grid + description)
- `/testimonials` — Student testimonials
- `/faq` — FAQ (accordion)
- `/contact` — Contact (address, phone, email, hours, embedded map placeholder, display-only contact form)
- `/apply` — Apply (display-only application form: personal info, program of interest, education background, message)

Each route gets its own `head()` metadata (title, description, og:title, og:description).

## Shared layout (in `__root.tsx`)

- **Top utility bar** (cyan): social icons (Facebook, Instagram, Twitter, Email) on the left.
- **Header**: logo placeholder on the left ("Toronto College of Dental Assisting" lockup), phone/email block on the right with a phone icon.
- **Primary nav**: HOME • PROGRAM • FACILITY • TESTIMONIALS • FAQ • CONTACT • APPLY (active link highlighted in cyan, like the reference).
- **Footer**: 3 columns — about blurb, quick links, contact info; cyan accent strip; copyright.
- Mobile: hamburger menu drawer.

## Home page sections

1. **Hero**: full-width image (generated dental-college building/classroom), overlay with eyebrow text "START YOUR DENTAL CAREER WITH US", big white headline ("Your Pathway to a Dental Assisting Career"), subhead, orange "LEARN MORE" button → `/program`.
2. **Intro / welcome**: short paragraph + "Why choose us" with 3–4 icon-and-text feature cards (Experienced Instructors, Modern Facility, Hands-on Training, Career Support).
3. **Program highlight card**: image + short program summary + CTA to `/program`.
4. **Stats strip**: graduates, years operating, instructors, placement rate.
5. **Testimonial preview**: 2–3 quote cards + link to `/testimonials`.
6. **CTA band**: cyan background, "Ready to start?" + orange Apply button.

## Visual system

- **Colors** (in `src/styles.css` as oklch tokens):
  - Background white, foreground deep navy `#1a2a3a`
  - Primary cyan/teal `#5fc8d6` (used for accent bar, links, active nav)
  - Accent orange `#f08a3e` (used for CTA buttons — matches reference's "LEARN MORE" button)
  - Muted background light gray `#f6f8fa`
- **Typography**: Inter/system sans for body, semibold uppercase for nav labels, large bold serif-feeling sans for hero headline (matching reference's clean modern look).
- **Components**: shadcn Button (default + cta variant for orange), Card, Accordion (FAQ), basic form fields.
- **Imagery**: 3–4 generated images — hero (modern dental college exterior/classroom), facility photos, classroom/training shots.

## Content placeholders

I'll use realistic placeholder copy you can edit later. Contact details (phone/email/address) will be obvious placeholders (e.g. "(416) 000-0000", "info@torontocollegedentalassisting.ca", "Toronto, ON") since you said "phone, email, address" without specifics.

## Out of scope (display-only)

- Contact form and Apply form submit buttons render but do not POST anywhere. No backend / Lovable Cloud enabled. We can wire these up later when you're ready.

## Technical notes

- TanStack Start file-based routes under `src/routes/`.
- Shared `Header` and `Footer` components in `src/components/site/`.
- Design tokens defined in `src/styles.css` under `@theme inline` + `:root`.
- Generated hero/facility imagery saved to `src/assets/` and imported as ES6 modules.
- No external libs beyond what's already installed (shadcn/ui, lucide-react).
