# Task Plan: BOFA Website Launch

## Goal
Complete and launch the BOFA (Breath of Fresh Aire) corporate website with all content, working contact form, and deployment.

## Current Phase
Phase 3

## Phases

### Phase 1: Setup & Structure
- [x] Create Next.js project with App Router
- [x] Set up Tailwind CSS styling
- [x] Create page structure (home, about, contact, solutions, sectors, projects)
- [x] Build Header and Footer components
- [x] Create data files for solutions, sectors, projects
- **Status:** complete

### Phase 2: Core Features
- [x] Add logo to header
- [x] Fix header styling (solid white, no transparency)
- [x] Integrate Web3Forms for contact form
- [x] Create Privacy Policy page
- [x] Create Terms of Service page
- [x] Add placeholder phone number
- **Status:** complete

### Phase 3: Content & Assets
- [ ] Get Web3Forms access key and add to contact form
- [ ] Replace placeholder images (~25 images)
- [ ] Add real team member info (About page)
- [ ] Add real phone number
- [ ] Add real project details and photos
- **Status:** in_progress

### Phase 4: Testing & Optimization
- [ ] Test contact form submission
- [ ] Test all page links
- [ ] Mobile responsiveness check
- [ ] Optimize images (WebP format)
- [ ] Check Lighthouse scores
- **Status:** pending

### Phase 5: Deployment
- [ ] Choose deployment platform (Vercel/Netlify/other)
- [ ] Configure domain (www.bofaire.com)
- [ ] Deploy to production
- [ ] Final QA on live site
- **Status:** pending

## Key Questions
1. What email should receive contact form submissions?
2. What is the real business phone number?
3. Where will the site be deployed (Vercel, Netlify, etc.)?

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| Next.js 14 with App Router | Modern React framework with static export |
| Tailwind CSS | Rapid styling with utility classes |
| Web3Forms for contact | Works with static sites, free tier |
| Static export | Simple hosting, fast performance |
| Private GitHub repo | Keep code private until ready |

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| Logo PDF not PNG | 1 | Converted with sips/PIL |
| Port 3000 in use | 1 | Used port 3002 |
| GitHub Pages needs public repo | 1 | Deferred deployment, will use Vercel/Netlify |

## Notes
- See CHECKLIST.md for detailed launch checklist
- See .claude/CLAUDE.md for project context
- ~25 placeholder images need real photos
- Web3Forms key needed before contact form works
