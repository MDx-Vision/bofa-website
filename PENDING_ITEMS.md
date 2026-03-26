# BOFA Website — Pending Items

**Last Updated:** March 25, 2026

## Summary

| Status | Count |
|--------|-------|
| Blocked (external dependency) | 2 |
| Pending | 14 |
| Completed | 12 |

---

## Blocked Items

These require action outside of code:

| # | Item | Blocker | Owner |
|---|------|---------|-------|
| B1 | Web3Forms access key | Need to register at web3forms.com and get key | Rafael |
| B2 | Real project photos (~45 images) | Need photos from completed job sites | Rafael |

---

## Manual Verification Required

| # | Item | How to Verify |
|---|------|---------------|
| V1 | Contact form sends email | Submit test form after Web3Forms key is added |
| V2 | Phone number correct everywhere | Search codebase for old number, confirm (212) 202-0699 |
| V3 | Address correct everywhere | Confirm 1185 Avenue of the Americas, 3rd Floor |
| V4 | All nav links work | Click every link in header + footer on desktop + mobile |
| V5 | Bid form PDF prints correctly | Open bid-form.html, fill sample data, Print → Save as PDF |

---

## Pending Items

### Content (Phase 2)

- [ ] Replace placeholder images across all pages (~45 total)
  - Home: 1 featured project
  - About: 1 company photo, 1 safety photo, 4 team headshots
  - Sectors: 5 category images
  - Projects: 6 card images + 18 detail images (3 per project)
  - Sectors detail: 5 featured images
  - Contact: 1 map/location image
- [ ] Add real team member names, titles, bios, headshots (About page)
- [ ] Update project case studies with real client info
- [ ] Add client testimonials / quotes
- [ ] Write real company history (About page — founding story, milestones)

### Configuration (Phase 2)

- [ ] Get Web3Forms access key → add to `src/app/contact/page.tsx` line 36
- [ ] Set up Google Analytics (GA4) tracking code
- [ ] Create sitemap.xml
- [ ] Create robots.txt
- [ ] Configure custom domain (bofaire.com) DNS

### Technical (Phase 3)

- [ ] Add JSON-LD structured data (Organization, Service, BreadcrumbList)
- [ ] Add security headers to next.config.mjs (CSP, X-Frame-Options, etc.)
- [ ] Add ARIA labels to Header dropdown and mobile menu
- [ ] Add keyboard navigation support
- [ ] Create custom 404 page
- [ ] Create custom 500/error page
- [ ] Add error boundary components
- [ ] Run Lighthouse audit — fix until 90+ all categories
- [ ] Add Open Graph images for social sharing

---

## Completed Items

- [x] Next.js 14 project setup (App Router, TypeScript, Tailwind)
- [x] All page routes created (home, about, contact, solutions, sectors, projects, bid, request-bid, privacy, terms)
- [x] Header with responsive nav + solutions dropdown
- [x] Footer with sitemap + certifications
- [x] 7 solution detail pages with approach/compliance content
- [x] 5 sector detail pages with services/highlights
- [x] 6 project case study pages (challenge/solution/results)
- [x] Contact form with Web3Forms integration (pending key)
- [x] Privacy Policy page
- [x] Terms of Service page
- [x] Bid Builder page + standalone HTML bid form
- [x] Phone number updated to (212) 202-0699 across all pages

---

## Notes

- **Image specs** are documented in CHECKLIST.md with exact dimensions and aspect ratios
- **Brand voice** guidelines are in PRD.md — all new copy must follow enterprise positioning rules
- **Address** was updated to 1185 Avenue of the Americas, 3rd Floor, NY 10036 on bid-related pages; verify consistency across all pages
