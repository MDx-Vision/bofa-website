# BOFA Website Project

## Project Overview
Website for **BOFA (Breath of Fresh Aire)** - an environmental remediation and general contracting company based in New York.

**Tech Stack:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Static export (output: "export")

**Repository:** https://github.com/mdxvision/bofa-website.git

## Key Files & Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── contact/          # Contact form (Web3Forms)
│   ├── solutions/        # Solutions listing + [slug] pages
│   ├── sectors/          # Sectors listing + [slug] pages
│   ├── projects/         # Projects listing + [slug] pages
│   ├── privacy/          # Privacy Policy
│   └── terms/            # Terms of Service
├── components/
│   ├── Header.tsx        # Main navigation
│   └── Footer.tsx        # Site footer
└── lib/
    ├── solutions-data.ts # Solutions content
    ├── sectors-data.ts   # Sectors content
    └── projects-data.ts  # Projects content
```

## Important Configuration

### Contact Form
- Uses **Web3Forms** API for email submissions
- Access key location: `src/app/contact/page.tsx` line 36
- Replace `YOUR_WEB3FORMS_ACCESS_KEY` with actual key from https://web3forms.com

### Static Export
- Site is configured for static export in `next.config.mjs`
- No API routes (form uses external Web3Forms service)
- For GitHub Pages deployment, add `basePath: "/bofa-website"` back to next.config.mjs

## Business Information

- **Company:** BOFA - Breath of Fresh Aire
- **Website:** www.bofaire.com
- **Email:** info@bofaire.com
- **Phone:** (800) 555-0123 (PLACEHOLDER - needs real number)
- **Address:** 600 W 161st Street, Ste 4E, New York, NY 10032

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npx serve out
```

## Session Notes

**Last updated:** January 2025

### What's Done
- [x] Logo added to header (cropped, no reflection)
- [x] Fixed header (solid white, no transparency)
- [x] Contact form integrated with Web3Forms
- [x] Privacy Policy page created
- [x] Terms of Service page created
- [x] Phone number placeholder added

### What's Pending
- [ ] Get Web3Forms access key and add to contact form
- [ ] Replace placeholder images (~25 images needed)
- [ ] Add real team member info (About page)
- [ ] Add real phone number
- [ ] Add Google Analytics (optional)
