# AuroraSoft — Premium Software House Website

Modern corporate website for a software house with a minimalist, professional, and tech-forward look. Powered by Next.js (App Router) + TypeScript + Tailwind with reusable components and subtle animations.

## Features
- Subtle 3D hero with glassmorphism and floating blobs (hero only)
- Repeatable bottom fade-in on scroll using `IntersectionObserver`
- Complete pages: Home, Work (portfolio + category filter), Services (icon cards), Team (avatar carousel, center scale 1.5x), Contact (form + map + socials)
- Premium design: generous white space, large typography, refined hover effects
- Centralized project data for consistent content across pages

## Tech Stack
- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS (custom theme + animations)
- Icons: `lucide-react` (primary), `react-icons` (supplementary)
- Font: Inter (Google Fonts)

## Getting Started
- Install dependencies: `npm install`
- Dev server: `npm run dev` and open `http://localhost:3000/`
- Production build: `npm run build`
- Start production locally: `npm start`

## Project Structure
- Routing: App Router in `src/app/`
  - Home: `src/app/page.tsx`
  - Work: `src/app/work/page.tsx`
  - Services: `src/app/services/page.tsx`
  - Team: `src/app/team/page.tsx`
  - Contact: `src/app/contact/page.tsx`
- Global styles: `src/app/globals.css` — Tailwind layers and utilities (`.glass`, `.hero-shape`, `.reveal`)
- Tailwind config: `tailwind.config.js` — brand palette, `shadow-soft`, `float` and `fadeInUp` keyframes
- Project data: `src/data/projects.ts` — shared dataset for Work & Featured Work
- Core components:
  - `src/components/Hero3D.tsx` — subtle hero 3D panel
  - `src/components/Reveal.tsx` — repeatable scroll fade-in
  - `src/components/ProjectCard.tsx` — portfolio cards with hover scale and tags
  - `src/components/ServiceCard.tsx` — minimal service cards with icons
  - `src/components/TeamCarousel.tsx` — horizontal avatar carousel with center scaling

## Pages
- Home: `src/app/page.tsx`
- Work: `src/app/work/page.tsx`
- Services: `src/app/services/page.tsx`
- Team: `src/app/team/page.tsx`
- Contact: `src/app/contact/page.tsx`

## Animations
- Float (hero blobs): defined in `tailwind.config.js` and used in `Hero3D.tsx`
- Fade-in up (scroll reveal): `animation.fadeInUp` applied via `.reveal.in-view`
- `Reveal` component:
  - Uses `IntersectionObserver` with a `threshold` of 0.2 to toggle `in-view`
  - Replays animation whenever the element leaves and re-enters the viewport
  - Usage: wrap an element with `<Reveal delay={i * 80}>...</Reveal>`

## Customization
- Brand colors: edit in `tailwind.config.js`
- Font: update imports in `src/app/globals.css`
- Logo & brand name: `src/components/Navbar.tsx` and `src/components/Footer.tsx`
- Projects data: `src/data/projects.ts` (consumed by Work & Featured Work)
- Team: update list in `src/components/TeamCarousel.tsx`
- Map: change iframe `src` in `src/app/contact/page.tsx`
- Copy: adjust texts directly in their page files

## Accessibility Principles
- Provide `alt` text on images, labels on inputs, and sufficient contrast
- Keep animations subtle to reduce distraction

## Security
- Do not store secrets in the repo
- Avoid embedding API keys in the client; use server-side env where needed

## Deploy
- Build output is located in `.next/`
- Recommended hosting: Vercel (native). Self-host: `npm run build` then `npm start` (Next.js Node server)

## License
- Add a license according to your organization’s requirements