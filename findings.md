# Findings & Decisions

## Requirements
- Corporate website for BOFA (Breath of Fresh Aire)
- Environmental remediation and general contracting company
- Based in New York (600 W 161st Street, Ste 4E, New York, NY 10032)
- Pages: Home, About, Contact, Solutions, Sectors, Projects, Privacy, Terms
- Contact form that sends emails
- Professional, clean design with blue color scheme

## Research Findings
- BOFA stands for "Breath of Fresh Aire"
- Services: Asbestos abatement, lead paint removal, mold remediation, hazmat management, construction management, renovation, selective demolition
- Sectors served: Government/Municipal, Healthcare, Education, Commercial/Industrial, Residential
- Email: info@bofaire.com
- Website: www.bofaire.com

## Technical Decisions
| Decision | Rationale |
|----------|-----------|
| Next.js 14 | Modern React framework, great DX, static export support |
| App Router | Latest Next.js routing, better layouts |
| TypeScript | Type safety, better IDE support |
| Tailwind CSS | Rapid styling, consistent design system |
| Static Export | Simple deployment, fast CDN delivery |
| Web3Forms | Free, works with static sites, easy integration |
| CSS Variables | Easy theming, consistent colors |

## Issues Encountered
| Issue | Resolution |
|-------|------------|
| Logo files were PDFs disguised as PNGs | Used PIL to crop and convert properly |
| Logo had reflection taking up space | Cropped to remove whitespace |
| Transparent header not working well | Changed to solid white header |
| Port conflicts during development | Used port 3002 instead of 3000 |
| GitHub Pages requires public repo | Will use Vercel or Netlify instead |

## Resources
- GitHub Repo: https://github.com/mdxvision/bofa-website (private)
- Web3Forms: https://web3forms.com (for contact form)
- Logo source: /Users/rafaelrodriguez/bofa-website/logo.png
- Brand assets: /Users/rafaelrodriguez/Downloads/MasterIdealfolder/Bofaire/

## Visual/Browser Findings
- Logo is blue gradient with stylized "BOFA" text
- Tagline: "BREATH OF FRESH AIRE"
- Brand colors: Blue (#0066CC), Navy (#1a365d), Light blue (#38bdf8)
- Professional, corporate aesthetic

---
*Update this file after every 2 view/browser/search operations*
*This prevents visual information from being lost*
