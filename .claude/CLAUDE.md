# BOFA Website — AI Context

> Claude reads this file first. It is the master context for all work on this project.

**Last Updated:** March 25, 2026

---

## Quick Reference

| Field | Value |
|-------|-------|
| **Company** | BOFA — Breath of Fresh Aire |
| **What** | Environmental remediation & general contracting |
| **Website** | www.bofaire.com |
| **Repo** | https://github.com/MDx-Vision/bofa-website |
| **Live** | https://mdx-vision.github.io/bofa-website/ |
| **Stack** | Next.js 14 (App Router) · TypeScript · Tailwind CSS · Static Export |

### Business Info (use these exactly)
- **Address:** 1185 Avenue of the Americas, 3rd Floor, New York, NY 10036
- **Phone:** (212) 202-0699
- **Email:** info@bofaire.com

---

## Documentation Map

```
Claude reads this first (CLAUDE.md)
       ↓
Check constraints & brand voice (PRD.md)
       ↓
Check what to work on (PENDING_ITEMS.md)
       ↓
Follow quality gates (docs/QA_STRATEGY.md)
       ↓
Reference architecture (docs/development/ARCHITECTURE.md)
       ↓
Future features (docs/planning/FEATURE_BACKLOG.md)
```

| File | Purpose |
|------|---------|
| `.claude/CLAUDE.md` | **This file** — current status, session history, commands |
| `PRD.md` | Product requirements, brand voice rules, non-goals, hard constraints |
| `PENDING_ITEMS.md` | Task tracker — blocked, pending, completed items |
| `CHECKLIST.md` | Launch checklist with image specs and dimensions |
| `docs/QA_STRATEGY.md` | Testing strategy, quality gates, checklists |
| `docs/development/ARCHITECTURE.md` | Tech stack, data models, folder structure, design system |
| `docs/planning/FEATURE_BACKLOG.md` | Feature backlog with priority tiers (P0–P3) |

---

## Current Status

**Site Completion: ~60%**

### What's Working
- All 13 page routes built and rendering
- 7 solution detail pages with full content
- 5 sector detail pages with full content
- 6 project case studies with challenge/solution/results
- Header with responsive nav + solutions dropdown
- Footer with sitemap + certifications
- Contact form integrated (needs Web3Forms key)
- Bid Builder page + standalone HTML bid form
- Privacy Policy + Terms of Service
- Phone number (212) 202-0699 across all pages

### What's Blocking Launch
1. **Web3Forms access key** — `src/app/contact/page.tsx` line 36
2. **~45 placeholder images** — see CHECKLIST.md for specs
3. **Real team member info** — About page has "[Team Member Name]"

### Known Issues
- Address inconsistency: some pages show old address (600 W 161st St), bid pages show new (1185 Ave of Americas) — needs full sweep
- `isScrolled` state in Header.tsx is tracked but not applied to styles
- No ARIA labels on dropdown menu or mobile nav

---

## Key Files

### Pages
| Route | File | Notes |
|-------|------|-------|
| Home | `src/app/page.tsx` | Hero, capabilities, sectors, featured project, CTA |
| About | `src/app/about/page.tsx` | Story, values, team (placeholders), certs |
| Contact | `src/app/contact/page.tsx` | Web3Forms form — **needs access key at line 36** |
| Solutions | `src/app/solutions/` | Index + 7 `[slug]` pages |
| Sectors | `src/app/sectors/` | Index + 5 `[slug]` pages |
| Projects | `src/app/projects/` | Index + 6 `[slug]` pages |
| Bid Builder | `src/app/bid/page.tsx` | Internal bid creation tool |
| Request Bid | `src/app/request-bid/page.tsx` | Client-facing bid request |
| Privacy | `src/app/privacy/page.tsx` | Privacy Policy |
| Terms | `src/app/terms/page.tsx` | Terms of Service |

### Data
| File | Content |
|------|---------|
| `src/lib/solutions-data.ts` | 7 solutions with approach steps + compliance |
| `src/lib/sectors-data.ts` | 5 sectors with services + highlights |
| `src/lib/projects-data.ts` | 6 case studies with challenge/solution/results |

### Components
| File | Description |
|------|-------------|
| `src/components/Header.tsx` | Fixed nav, logo, solutions dropdown, mobile menu |
| `src/components/Footer.tsx` | Sitemap grid, certs, copyright |

### Static Assets
| File | Description |
|------|-------------|
| `public/bofa-logo.png` | Company logo |
| `public/bid-form.html` | Standalone bid form (open in browser, print to PDF) |

---

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:3000
npm run build        # Production build → /out
npm run lint         # ESLint check
npx serve out        # Preview production build
```

---

## Brand Voice (Summary)

> Full rules in PRD.md

- **Deloitte tone:** Authoritative, data-driven. State facts, don't explain.
- **Apple tone:** Minimal, clean. Let the work speak.
- **Palantir tone:** Mission-critical. "We solve problems others can't."
- Never sell — assert authority. Never list features — state capabilities.
- Every page must pass: "Would a CIO take this seriously?"

---

## Session History

### Session: March 25, 2026
- Updated phone number (212) 202-0699 across all 8 files
- Created standalone bid form (public/bid-form.html)
- Created bid builder page (src/app/bid/page.tsx)
- Generated Word doc bid proposal for 9 Cannonball Rd, Pompton Lakes, NJ
- Made GitHub repo public
- Built full documentation system:
  - PRD.md (requirements + brand voice + constraints)
  - PENDING_ITEMS.md (task tracker)
  - docs/QA_STRATEGY.md (testing + quality gates)
  - docs/development/ARCHITECTURE.md (tech details)
  - docs/planning/FEATURE_BACKLOG.md (P0–P3 features)
  - Upgraded CLAUDE.md (this file)

### Session: January 2025 (Original Build)
- Next.js 14 project scaffolded
- All pages built (home, about, contact, solutions, sectors, projects, privacy, terms)
- Logo added to header
- Fixed header (solid white)
- Contact form integrated with Web3Forms
- Privacy Policy + Terms of Service created
