# BOFA Website — QA Strategy

**Last Updated:** March 25, 2026

---

## Team Structure

| Role | Who | Responsibility |
|------|-----|----------------|
| Developer / QA | Claude (AI) | Code, testing, accessibility, performance |
| Product Owner | Rafael | Content approval, business requirements, final sign-off |
| Stakeholder | BOFA team | Image assets, client approvals, business info verification |

---

## Quality Gates

### Gate 1: Pre-Commit
Every code change must pass before committing:
- [ ] TypeScript compiles with zero errors (`npm run build`)
- [ ] ESLint passes with zero warnings (`npm run lint`)
- [ ] No hardcoded API keys or secrets in source
- [ ] No placeholder text (e.g., "Lorem ipsum", "[Team Member Name]")
- [ ] All new images have alt text
- [ ] Responsive: tested at mobile (375px), tablet (768px), desktop (1280px)

### Gate 2: Pre-Deploy
Before pushing to production:
- [ ] Full site build succeeds (`npm run build`)
- [ ] All navigation links work (header, footer, in-page CTAs)
- [ ] Contact form submits successfully (requires Web3Forms key)
- [ ] Bid form generates printable PDF
- [ ] No console errors in browser
- [ ] Lighthouse scores: Performance 90+, Accessibility 90+, Best Practices 90+, SEO 90+

### Gate 3: Post-Deploy
After deployment verification:
- [ ] Live site loads on custom domain
- [ ] SSL certificate valid
- [ ] All pages accessible (no 404s)
- [ ] Contact form sends email to info@bofaire.com
- [ ] Mobile menu opens/closes correctly
- [ ] Social sharing previews correct (Open Graph)

---

## Testing Approach

### Manual Testing Checklist

Since this is a static site with no backend, testing is primarily manual:

**Navigation Testing**
- [ ] Header logo links to home
- [ ] All header nav links resolve correctly
- [ ] Solutions dropdown shows all 7 solutions
- [ ] Mobile hamburger menu opens/closes
- [ ] Mobile menu links work and menu closes after click
- [ ] Footer links all resolve correctly
- [ ] Breadcrumb navigation works (if implemented)

**Content Testing**
- [ ] All 7 solution pages load with correct content
- [ ] All 5 sector pages load with correct content
- [ ] All 6 project pages load with correct content
- [ ] About page shows real team info (not placeholders)
- [ ] Contact info is consistent across all pages
- [ ] Phone number: (212) 202-0699
- [ ] Email: info@bofaire.com
- [ ] Address: 1185 Avenue of the Americas, 3rd Floor, New York, NY 10036

**Form Testing**
- [ ] Contact form validates required fields
- [ ] Contact form shows loading state during submission
- [ ] Contact form shows success message after submit
- [ ] Contact form shows error message on failure
- [ ] Bid form fields are all fillable
- [ ] Bid form "Print / Save as PDF" button works

**Responsive Testing**
- [ ] iPhone SE (375×667)
- [ ] iPhone 14 (390×844)
- [ ] iPad (768×1024)
- [ ] Desktop (1280×800)
- [ ] Desktop wide (1920×1080)

**Accessibility Testing**
- [ ] All images have descriptive alt text
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Focus states visible on all interactive elements
- [ ] Tab order is logical
- [ ] Screen reader can navigate all pages
- [ ] No content conveyed by color alone

---

## Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| Lighthouse Performance | 90+ | Chrome DevTools |
| Lighthouse Accessibility | 90+ | Chrome DevTools |
| Lighthouse Best Practices | 90+ | Chrome DevTools |
| Lighthouse SEO | 90+ | Chrome DevTools |
| First Contentful Paint | < 1.5s | Chrome DevTools |
| Largest Contentful Paint | < 2.5s | Chrome DevTools |
| Cumulative Layout Shift | < 0.1 | Chrome DevTools |
| Total Bundle Size | < 500KB | `npm run build` output |

---

## Security Checklist

- [ ] No API keys in source code (Web3Forms key in env variable)
- [ ] Security headers configured (CSP, X-Frame-Options, HSTS)
- [ ] No sensitive data in URL parameters
- [ ] Form submissions use HTTPS
- [ ] No mixed content warnings
- [ ] robots.txt doesn't expose sensitive paths
- [ ] No source maps in production build

---

## Deployment Workflow

```
1. Code changes made locally
2. Run `npm run build` — verify zero errors
3. Run `npm run lint` — verify zero warnings
4. Test locally with `npx serve out`
5. Commit with descriptive message
6. Push to main branch
7. GitHub Actions builds and deploys to GitHub Pages
8. Verify live site at https://mdx-vision.github.io/bofa-website/
9. (Future) Verify at https://www.bofaire.com
```

---

## Incident Response

If the live site has issues:

| Severity | Example | Response Time | Action |
|----------|---------|---------------|--------|
| P0 - Site Down | GitHub Pages outage, DNS failure | Immediate | Check GitHub status, verify DNS |
| P1 - Broken Feature | Contact form not sending, nav broken | Same day | Fix, test, deploy |
| P2 - Content Error | Wrong phone number, typo | Next business day | Fix and deploy |
| P3 - Enhancement | New feature request | Backlog | Add to FEATURE_BACKLOG.md |
