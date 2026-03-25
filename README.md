# Advanced Portfolio

A production-style portfolio starter built with Next.js, TypeScript, Tailwind, and Framer Motion.

## Features

- Advanced hero section with animated UI and bold visual identity.
- Project showcase with impact-focused case study cards.
- Structured sections for About, Skills, Projects, and Contact.
- Mobile-first responsive layout.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
## 1) Install dependencies

```bash
npm install
```

## 2) Start development

```bash
npm run dev
```

Open `http://localhost:3000`.

## 3) Customize quickly

- Replace placeholder URLs in `lib/projects.ts`.
- Update contact links in `components/contact.tsx`.
- Update hero/about copy in `components/hero.tsx` and `components/about.tsx`.
## 4) Deploy

1. Push to GitHub.
2. Import repository in Vercel.
3. Deploy.

## Suggested Next Upgrades

- Add a dedicated case study page per project (`/projects/[slug]`).
- Add analytics (PostHog or Vercel Analytics).
- Add SEO-rich metadata per page and OG image generation.
- Add automated tests (`Vitest` + `Playwright`).

## Advanced Version Roadmap (Best Portfolio Plan)

Follow these phases in order. Each phase has a clear output and "done" checks.

### Phase 1: Foundation Hardening (Day 1)

1. Replace all placeholder links and content.
2. Ensure every project in `lib/projects.ts` has real GitHub + live/demo links.
3. Add production metadata in `app/layout.tsx` (`title`, `description`, `openGraph`, `twitter`).
4. Set canonical URL and social preview image in `public/`.

Done checks:
- No `yourusername` placeholders remain.
- Portfolio has valid OG preview on social share.
- Lighthouse SEO score is 95+.

### Phase 2: Case Study Architecture (Days 2-3)

1. Convert projects to slug-based data model in `lib/projects.ts`.
2. Add a dynamic page route: `app/projects/[slug]/page.tsx`.
3. For each project, include:
   - Problem
   - Constraints
   - Architecture
   - Key decisions and tradeoffs
   - Results/metrics
   - Screenshots
   - Stack and links
4. Update `components/projects.tsx` cards to link to each case study page.

Done checks:
- Every project card opens a detailed case study page.
- Each case study contains measurable impact metrics.

### Phase 3: Real-Time Credibility Layer (Day 4)

1. Add GitHub stats fetcher in `lib/github.ts` (stars, forks, last updated, commits).
2. Create a route handler `app/api/github/route.ts` with caching.
3. Render live project stats in `components/projects.tsx`.
4. Add graceful fallbacks if API rate limit is hit.

Done checks:
- Portfolio shows live GitHub stats.
- UI still works when GitHub API fails.

### Phase 4: Premium UX + Motion + Accessibility (Day 7)

1. Keep animations purposeful in Framer Motion (hero, section reveal, card hover).
2. Add reduced-motion support and keyboard navigation coverage.
3. Add light/dark theme toggle with consistent tokens.
4. Improve contact CTA with clear actions (email, LinkedIn, resume download).

Done checks:
- Smooth on mobile and desktop.
- Passes keyboard navigation and contrast checks.
- Animation does not reduce readability or performance.

## Final Quality Gate (Must pass before calling it "best")

1. Performance:
   - Lighthouse: Performance 90+, Accessibility 95+, SEO 95+.
2. Content quality:
   - Every project has quantified outcomes and concrete decisions.
3. Reliability:
   - API routes have error handling and fallback UI.
4. Recruiter flow:
   - Home -> projects -> case study -> contact in under 3 clicks.
5. Production readiness:
   - Clean copy, no placeholders, no broken links, no console errors.

## Optional Next Step: I Can Implement This For You

If you want, next I can start Phase 2 immediately by creating:

1. `app/projects/[slug]/page.tsx`
2. Upgraded `lib/projects.ts` with case-study schema
3. Linked project cards in `components/projects.tsx`
