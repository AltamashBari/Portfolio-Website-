# Altamash Bari — Architecture Portfolio

A premium, editorial, 3D-accented portfolio for **Altamash Bari**, architect. Built
to read like a world-class studio site: image-first, minimal, with strong typography,
asymmetric grids, cursor-tracked 3D project cards, and full case studies. All content
and imagery come from Altamash's own portfolio.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (tokens via `@theme` in `app/globals.css`, no config file)
- **Motion** (`motion/react`) for reveals, 3D tilt cards, parallax, count-ups, page transitions
- **next/font** (Cormorant Garamond + Archivo), **next/image** for all imagery
- **@phosphor-icons/react** for icons

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages static / SSG)
npm run start    # serve the production build
npm run lint     # eslint
```

## Project structure

```
app/
  layout.tsx              Fonts, metadata, Person + FAQPage JSON-LD, Header/Footer
  page.tsx                Home page (composes the sections)
  template.tsx            Per-navigation page transition
  globals.css             Design tokens (@theme) + base styles
  opengraph-image.tsx     Generated social share card
  icon.tsx                Generated favicon (A monogram)
  sitemap.ts / robots.ts  SEO endpoints
  not-found.tsx           404
  projects/
    page.tsx              Projects index (/projects)
    [slug]/page.tsx       Case study (SSG, per-project metadata + CreativeWork & Breadcrumb JSON-LD)
components/
  layout/    Header, Footer
  sections/  Hero, About, FeaturedProjects, ProjectCard, Expertise, Experience,
             Stats, Recognition, Faq, Contact
  project/   ProjectHero, ProjectMeta, ProjectStory, ProjectNav
  motion/    Reveal, MaskedImage, AnimatedHeading, ParallaxImage, CountUp, TiltFrame
  ui/        Container, Button
lib/
  types.ts     Shared TypeScript interfaces
  content.ts   Profile, nav, capabilities, experience, stats, certifications, skills, FAQs
  projects.ts  The six projects + helpers
  seo.ts       Site URL, Person / CreativeWork / FAQ / Breadcrumb JSON-LD builders
public/portfolio/   All imagery (portrait, project covers, presentation sheets)
```

## Updating content

Everything a non-developer needs to change lives in **two files** plus images.

### 1. Profile, contact, experience, expertise, stats, certifications, FAQs
Edit **`lib/content.ts`** (`profile` object + the arrays). Changing `profile.name`
updates the header, footer, titles, and JSON-LD everywhere.

### 2. Projects
Edit **`lib/projects.ts`**. Copy a project object, change its fields, and set `slug`
(URL-safe; it becomes `/projects/{slug}`). New project pages and sitemap entries are
generated automatically.

### 3. Images
All imagery lives in **`public/portfolio/`**, extracted from the source portfolio PDF:
- `altamash.jpg` — the portrait (About section).
- `{folder}/cover.jpg` — each project's hero render (card + case-study hero).
- `{folder}/01.jpg`, `02.jpg`, … — presentation sheets shown in the case study.

To swap an image, drop a new file at the same path (keep the `width`/`height` in
`lib/projects.ts` matching the real pixel size to avoid layout shift). The `alt` and
`caption` text is written per image.

### 4. Colours and fonts
- **Palette**: edit the `@theme` block in `app/globals.css` (each `--color-*` token
  becomes a Tailwind utility). One locked warm-paper theme with a single olive accent.
- **Fonts**: change the `next/font` imports in `app/layout.tsx` and the
  `--font-display` / `--font-sans` aliases in `app/globals.css`.

### 5. Domain / SEO
Set `NEXT_PUBLIC_SITE_URL` (e.g. in `.env.local` or your host) to the production URL.
It drives canonical URLs, the sitemap, robots, and absolute OG / JSON-LD URLs.

## SEO / AEO / AIEO

- **SEO**: per-page metadata + titles, OpenGraph + Twitter cards, generated OG image,
  sitemap, robots, semantic HTML, `next/image`.
- **AEO** (answer engines): a real FAQ section rendered from `lib/content.ts` with a
  matching **FAQPage** JSON-LD, so questions like "Who is Altamash Bari?" are machine
  answerable.
- **AIEO** (AI engines): a rich **Person** entity (jobTitle, alumniOf, worksFor,
  knowsAbout, sameAs to LinkedIn/Issuu, work locations) plus **CreativeWork** per
  project and **BreadcrumbList** on case studies.

## The contact form
`components/sections/Contact.tsx` validates on the client and currently **simulates**
submission (see the `TODO` comment). To make it live, POST to a Next.js Route Handler
or a form service (Formspree, Resend, etc.). The email fallback works today.

## Design & motion notes
- **One locked light "warm paper" theme** (deliberate, editorial).
- **World-class 3D**: `TiltFrame` gives project cards a cursor-tracked perspective tilt
  with spring physics and a moving light glare (motion values, no re-renders). It falls
  back to flat on touch and under `prefers-reduced-motion`.
- All motion honours `prefers-reduced-motion`; image reveals are built so images always
  end visible.
- **Accessibility**: semantic landmarks, skip link, visible focus, labelled form fields,
  WCAG AA colour contrast. **Performance**: static / SSG pages, `next/image`, `next/font`.
