# BOFA Website — Feature Backlog

**Last Updated:** March 25, 2026

---

## Priority Tiers

| Tier | Label | Timeline | Criteria |
|------|-------|----------|----------|
| P0 | Launch Blocker | This week | Site cannot go live without this |
| P1 | Launch Polish | Before launch | Professional but not blocking |
| P2 | Post-Launch | Month 1-2 | Enhances credibility and conversion |
| P3 | Growth | Quarter 2+ | Revenue-justified investments |

---

## P0 — Launch Blockers

- [ ] **Web3Forms access key** — contact form doesn't send without it
  - File: `src/app/contact/page.tsx` line 36
  - Action: Register at web3forms.com, get key, replace placeholder
  - Effort: 15 minutes

- [ ] **Replace placeholder images** — ~45 images across the site
  - See CHECKLIST.md for exact locations and dimensions
  - Action: Photograph job sites, team, equipment
  - Effort: 8-12 hours (photography + processing)

- [ ] **Real team member info** — About page shows "[Team Member Name]"
  - File: `src/app/about/page.tsx`
  - Action: Get names, titles, bios, headshots from team
  - Effort: 2-3 hours

- [ ] **Verify contact info consistency** — address/phone/email on every page
  - Address: 1185 Avenue of the Americas, 3rd Floor, New York, NY 10036
  - Phone: (212) 202-0699
  - Email: info@bofaire.com
  - Action: Search and replace any inconsistencies
  - Effort: 30 minutes

---

## P1 — Launch Polish

- [ ] **Google Analytics (GA4)** — track traffic from day one
  - File: `src/app/layout.tsx`
  - Effort: 15 minutes

- [ ] **Sitemap.xml** — search engine indexing
  - Generate from page routes
  - Effort: 30 minutes

- [ ] **robots.txt** — search engine crawl rules
  - Effort: 10 minutes

- [ ] **JSON-LD structured data** — Organization, Service, BreadcrumbList
  - Improves search appearance (rich snippets)
  - Effort: 3 hours

- [ ] **Custom 404 page** — branded "page not found"
  - Effort: 1 hour

- [ ] **Open Graph images** — social sharing previews
  - Create branded OG image template
  - Effort: 2 hours

- [ ] **Security headers** — CSP, X-Frame-Options, HSTS
  - File: `next.config.mjs`
  - Effort: 1 hour

---

## P2 — Post-Launch Enhancements

- [ ] **Client testimonials** — quotes from satisfied clients on home + project pages
  - Requires client permission
  - Effort: 4 hours (design + implementation)

- [ ] **Before/after project photos** — visual proof of work quality
  - Requires photography
  - Effort: 4 hours

- [ ] **FAQ page** — reduce repetitive inquiry calls
  - Common questions about process, timeline, certifications
  - Effort: 3 hours

- [ ] **Accessibility audit** — WCAG 2.1 AA compliance
  - ARIA labels, keyboard nav, screen reader testing
  - Effort: 4 hours

- [ ] **Lighthouse performance optimization** — target 90+ all categories
  - Image optimization, lazy loading, critical CSS
  - Effort: 4 hours

- [ ] **Social media links** — LinkedIn, Facebook in header/footer
  - Effort: 30 minutes

- [ ] **Email newsletter signup** — build contact list for future marketing
  - Integration: Mailchimp or ConvertKit
  - Effort: 4 hours

---

## P3 — Growth Features

- [ ] **Blog / News section** — content marketing, SEO authority
  - Project updates, industry news, compliance guides
  - Effort: 8 hours (setup + first 3 posts)

- [ ] **CMS integration** — non-technical content editing
  - Options: Sanity, Contentful, or Strapi
  - Enables team to update content without code
  - Effort: 16-24 hours

- [ ] **Client portal** — project status tracking
  - Login, view project progress, documents, invoices
  - Effort: 40+ hours (separate app)

- [ ] **Automated bid PDF generation** — export bid proposals from web form
  - Currently using docx library for Word docs
  - Add PDF export option
  - Effort: 8 hours

- [ ] **Multi-project bid management** — track all active bids
  - Dashboard for open/won/lost bids
  - Effort: 20+ hours

- [ ] **Google Reviews integration** — display reviews on site
  - Builds trust, social proof
  - Effort: 4 hours

- [ ] **Careers / jobs page** — when hiring picks up
  - Job listings, application form
  - Effort: 6 hours

- [ ] **Spanish language support** — expand market reach
  - Full site translation
  - Effort: 16+ hours

---

## Ideas Parking Lot

These aren't committed — just captured for future consideration:

- Interactive project map (show completed jobs on a map)
- Safety incident counter ("X days without incident")
- Certification badge verification links
- Vendor/subcontractor portal
- Equipment inventory / capabilities page
- Drone inspection service page
- Environmental impact calculator
- Time-lapse project videos
- Employee spotlight series
- Industry compliance newsletter
