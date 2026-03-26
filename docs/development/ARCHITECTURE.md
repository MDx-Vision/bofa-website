# BOFA Website — Technical Architecture

**Last Updated:** March 25, 2026

---

## Tech Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| Framework | Next.js | 14.2.20 | App Router, static export |
| Language | TypeScript | 5.7.2 | Type safety |
| Styling | Tailwind CSS | 3.4.17 | Utility-first CSS |
| Runtime | React | 18.3.1 | UI components |
| Doc Generation | docx | 9.6.1 | Word document bid proposals |
| Linting | ESLint | 8.57.1 | Code quality |
| Build | PostCSS + Autoprefixer | 8.4.49 / 10.4.20 | CSS processing |
| Hosting | GitHub Pages | — | Static file serving |
| Forms | Web3Forms | External API | Contact form email delivery |

---

## Folder Structure

```
bofa-website/
├── .claude/
│   ├── CLAUDE.md              # AI context — Claude reads this first
│   └── launch.json            # Dev server configuration
├── docs/
│   ├── QA_STRATEGY.md         # Testing, quality gates, checklists
│   ├── development/
│   │   └── ARCHITECTURE.md    # This file — tech details
│   └── planning/
│       └── FEATURE_BACKLOG.md # Future features
├── public/
│   ├── bofa-logo.png          # Company logo
│   ├── bid-form.html          # Standalone bid form (print to PDF)
│   └── (images)               # Static assets
├── src/
│   ├── app/                   # Next.js App Router pages
│   ├── components/            # Shared React components
│   └── lib/                   # Data and utilities
├── PRD.md                     # Product requirements + brand rules
├── PENDING_ITEMS.md           # Task tracker
├── CHECKLIST.md               # Launch checklist with image specs
├── next.config.mjs            # Next.js configuration
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

---

## Page Routes

| Route | File | Type | Description |
|-------|------|------|-------------|
| `/` | `app/page.tsx` | Static | Home — hero, capabilities, sectors, CTA |
| `/about` | `app/about/page.tsx` | Static | Company story, values, team, certs |
| `/contact` | `app/contact/page.tsx` | Client | Contact form (Web3Forms) |
| `/solutions` | `app/solutions/page.tsx` | Static | Solutions index (7 services) |
| `/solutions/[slug]` | `app/solutions/[slug]/page.tsx` | Static | Solution detail page |
| `/sectors` | `app/sectors/page.tsx` | Static | Sectors index (5 industries) |
| `/sectors/[slug]` | `app/sectors/[slug]/page.tsx` | Static | Sector detail page |
| `/projects` | `app/projects/page.tsx` | Static | Project portfolio (6 case studies) |
| `/projects/[slug]` | `app/projects/[slug]/page.tsx` | Static | Project detail page |
| `/bid` | `app/bid/page.tsx` | Client | Internal bid builder tool |
| `/request-bid` | `app/request-bid/page.tsx` | Client | Client bid request form |
| `/privacy` | `app/privacy/page.tsx` | Static | Privacy Policy |
| `/terms` | `app/terms/page.tsx` | Static | Terms of Service |

**Static** = Server-rendered at build time, no client JavaScript
**Client** = Uses `"use client"` for interactivity (forms, state)

---

## Data Models

### Solution (`src/lib/solutions-data.ts`)

```typescript
{
  slug: string              // URL path segment
  title: string             // Display name
  description: string       // Card/meta description
  heroDescription: string   // Hero section copy
  overview: string[]        // 3 paragraphs
  approach: {
    title: string
    description: string
    steps: { title, description }[]  // 4 steps
  }
  compliance: {
    title: string
    description: string
  }
  sectors: string[]         // Cross-referenced sectors
}
```

**Entries:** Asbestos Abatement, Lead Paint Removal, Mold Remediation, Hazardous Material Management, Construction Management, Renovation & Restoration, Selective Demolition

### Sector (`src/lib/sectors-data.ts`)

```typescript
{
  slug: string
  title: string
  description: string
  heroDescription: string
  overview: string[]        // 3 paragraphs
  services: string[]        // Applicable solutions
  highlights: string[]      // Sector-specific expertise
}
```

**Entries:** Government & Municipal, Healthcare Facilities, Educational Institutions, Commercial & Industrial, Residential

### Project (`src/lib/projects-data.ts`)

```typescript
{
  slug: string
  title: string
  sector: string
  location: string
  year: string
  services: string[]
  description: string
  challenge: string
  solution: string
  results: string
  featured: boolean         // Show on homepage
}
```

**Entries:** 6 case studies across all sectors

---

## Components

| Component | File | Props | Description |
|-----------|------|-------|-------------|
| Header | `components/Header.tsx` | — | Fixed nav, logo, solutions dropdown, mobile menu |
| Footer | `components/Footer.tsx` | — | Sitemap grid, certifications, copyright |
| ContactForm | `app/contact/page.tsx` (inline) | — | Web3Forms integration with validation |

### Header Navigation Structure

```
Logo | Solutions ▾ | Sectors | Projects | About | Bid Builder | Request a Bid | [Contact Us]
        ├── Environmental Remediation
        │   ├── Asbestos Abatement
        │   ├── Lead Paint Removal
        │   ├── Mold Remediation
        │   └── Hazardous Material Management
        └── General Contracting
            ├── Construction Management
            ├── Renovation & Restoration
            └── Selective Demolition
```

---

## External Integrations

| Service | Purpose | Config Location | Status |
|---------|---------|-----------------|--------|
| Web3Forms | Contact form email delivery | `src/app/contact/page.tsx` line 36 | Needs access key |
| GitHub Pages | Static hosting | GitHub repo settings | Active |
| Google Analytics | Traffic tracking | `src/app/layout.tsx` (TBD) | Not configured |

---

## Build & Deploy

### Local Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (port 3000)
npm run build        # Production build → /out directory
npm run lint         # Run ESLint
npx serve out        # Preview production build locally
```

### Production Build Output
- Static HTML/CSS/JS files in `/out`
- No server required — pure static files
- Images unoptimized (required for static export)

### GitHub Pages Deployment
- Push to `main` branch
- GitHub Actions builds and deploys automatically
- Live at: https://mdx-vision.github.io/bofa-website/
- For GitHub Pages, `basePath: "/bofa-website"` needed in next.config.mjs

### Custom Domain Deployment
- Remove `basePath` from next.config.mjs
- Configure DNS CNAME for bofaire.com → GitHub Pages
- Add CNAME file to public/ directory

---

## Design System

### Colors (from Tailwind config)

| Token | Hex | Usage |
|-------|-----|-------|
| Primary (Navy) | `#1e3a5f` | Headers, buttons, section backgrounds |
| Primary Light | `#2d5a8e` | Hover states, accents |
| Accent (Gold) | `#c9a84c` | CTAs, highlights, certification badges |
| Text Dark | `#1a1a1a` | Body text |
| Text Light | `#ffffff` | Text on dark backgrounds |
| Background | `#f8f9fa` | Page backgrounds, alternating sections |
| Border | `#e5e7eb` | Card borders, dividers |

### Typography
- **Font:** Inter (Google Fonts, swap display)
- **Headings:** Bold, navy, tight tracking
- **Body:** Regular, dark gray, relaxed leading

### Spacing
- Section padding: `py-16` to `py-24`
- Container max-width: `max-w-7xl mx-auto px-4`
- Card gaps: `gap-6` to `gap-8`

### Breakpoints
- Mobile: default (< 640px)
- Tablet: `sm:` (640px) / `md:` (768px)
- Desktop: `lg:` (1024px) / `xl:` (1280px)
