# BOFA — Product Requirements Document

## Identity

| Field | Value |
|-------|-------|
| **Company** | BOFA — Breath of Fresh Aire |
| **Platform** | Corporate website + internal bid tooling |
| **One-Line Purpose** | Position BOFA as the enterprise-grade environmental remediation & general contracting firm that government agencies, healthcare systems, and Fortune 500 facilities trust with their most complex projects. |
| **Website** | www.bofaire.com |
| **Repository** | https://github.com/MDx-Vision/bofa-website |

---

## Brand Positioning

### Voice Framework

BOFA operates at the intersection of three enterprise brand archetypes:

1. **Deloitte / McKinsey** — Authoritative, data-driven, enterprise gravitas. "We've done this at scale." One headline that makes the facilities director feel exposed. Three numbers. A single sentence. Done.

2. **Apple / Stripe** — Clean, minimal, confident. Let the work speak. Less words, more impact. Hero image. Six words. White space.

3. **Palantir / Anduril** — Mission-critical, serious. "We solve problems others can't." No feature lists. No diagrams. Just confidence.

### Tone Rules

- Never explain what we do — **demonstrate** it
- Never list features — **state capabilities as facts**
- Never sell — **assert authority**
- Copy should feel like it was written by a Fortune 100 company, not a local contractor
- Every page should pass the "would a CIO take this seriously?" test

### Competitive Moat

BOFA is not a local abatement shop. BOFA is:
- EPA-certified, OSHA-compliant, fully bonded
- Operating across government, healthcare, education, commercial, and residential sectors
- Handling $50K–$500K+ projects with full regulatory documentation
- The firm you call when compliance failure is not an option

---

## Non-Goals (What We Do NOT Build)

| Non-Goal | Reason |
|----------|--------|
| E-commerce / online payments | We're B2B/B2G — contracts, not carts |
| User accounts / client login | Not needed for v1 — future enhancement |
| Blog / content marketing | Not until brand authority is established on-site |
| Multi-language support | English-only market for now |
| Real-time chat / chatbot | Phone and form are sufficient |
| Job board / careers page | Not a hiring priority right now |
| Competitor comparison pages | We don't acknowledge competitors |
| Pricing calculators | Every project is custom-scoped |

---

## Hard Constraints

### Legal / Regulatory
- All remediation claims must be accurate (EPA, OSHA, AHERA, ICRA references)
- No guarantees of outcomes — compliance language only
- Privacy Policy and Terms of Service must be present and accurate
- Contact form must disclose data handling (Web3Forms)

### Technical
- **Static export only** — no server-side rendering, no API routes
- **Next.js 14 App Router** — no Pages Router
- **Tailwind CSS** — no external CSS frameworks
- **TypeScript** — no plain JavaScript files
- **Web3Forms** — external form handler, no backend
- **GitHub Pages** — primary deployment target

### Business
- All business info must match official records:
  - Address: 1185 Avenue of the Americas, 3rd Floor, New York, NY 10036
  - Phone: (212) 202-0699
  - Email: info@bofaire.com
- Certifications displayed must be verifiable
- Project case studies require client approval before using real names

---

## AI Rules

### Framework Rules
- Always use Next.js App Router patterns (not Pages Router)
- Always use TypeScript with proper type definitions
- Always use Tailwind utility classes (no inline styles, no CSS modules)
- Components go in `src/components/`
- Page data goes in `src/lib/`
- Static assets go in `public/`

### Security Rules
- Never hardcode API keys in source (use environment variables)
- Never expose internal business logic in client-side code
- Always sanitize form inputs before submission
- Never store PII in localStorage or cookies

### Content Rules
- Never use placeholder text in production builds
- Never use stock photo watermarked images
- Always include alt text on images
- Always maintain heading hierarchy (h1 → h2 → h3)
- Never use "click here" or "learn more" as link text without context

### Quality Rules
- Every page must score 90+ on Lighthouse
- Every page must pass WCAG 2.1 AA accessibility
- Every form must have proper validation and error states
- Every image must have defined dimensions (no layout shift)

---

## Architecture Overview

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (meta, fonts, header/footer)
│   ├── page.tsx            # Home — hero, capabilities, sectors, CTA
│   ├── about/              # Company story, values, team, certifications
│   ├── contact/            # Web3Forms contact form + info sidebar
│   ├── solutions/          # 7 solutions (listing + [slug] detail pages)
│   ├── sectors/            # 5 sectors (listing + [slug] detail pages)
│   ├── projects/           # 6 projects (listing + [slug] detail pages)
│   ├── bid/                # Internal bid builder tool
│   ├── request-bid/        # Client-facing bid request form
│   ├── privacy/            # Privacy Policy
│   └── terms/              # Terms of Service
├── components/
│   ├── Header.tsx          # Fixed nav with solutions dropdown
│   └── Footer.tsx          # Sitemap footer with certifications
└── lib/
    ├── solutions-data.ts   # 7 solutions with approach/compliance data
    ├── sectors-data.ts     # 5 sectors with services/highlights
    └── projects-data.ts    # 6 case studies with challenge/solution/results
```

### Key Integrations
- **Web3Forms** — contact form email delivery
- **GitHub Pages** — static hosting
- **docx library** — Word document generation for bid proposals

---

## Development Plan

### Phase 1: Foundation (COMPLETE)
- [x] Next.js 14 project setup with TypeScript + Tailwind
- [x] App Router page structure
- [x] Header with responsive nav + solutions dropdown
- [x] Footer with sitemap links
- [x] All 7 solution pages with content
- [x] All 5 sector pages with content
- [x] All 6 project case study pages
- [x] Contact form with Web3Forms integration
- [x] Privacy Policy and Terms of Service
- [x] Bid Builder and Request Bid pages

### Phase 2: Content & Assets (IN PROGRESS)
- [ ] Replace ~45 placeholder images with real photos
- [ ] Populate real team member info (About page)
- [ ] Update project case studies with real client data
- [ ] Get and configure Web3Forms access key
- [ ] Add real phone number across site ✅ (212) 202-0699

### Phase 3: Enterprise Polish
- [ ] Add JSON-LD structured data (Organization, BreadcrumbList, Service)
- [ ] Implement security headers in next.config.mjs
- [ ] Add Google Analytics (GA4)
- [ ] ARIA labels and keyboard navigation
- [ ] Custom 404/500 error pages
- [ ] Lighthouse audit — target 90+ all categories
- [ ] Sitemap.xml and robots.txt

### Phase 4: Growth
- [ ] Testimonials section with client quotes
- [ ] Blog / news section
- [ ] FAQ page
- [ ] Newsletter signup
- [ ] Social media integration
- [ ] CMS integration (Sanity or Contentful)
