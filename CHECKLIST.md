# BOFA Website Launch Checklist

## Critical (Before Launch)

### Contact Form
- [ ] Go to https://web3forms.com and get access key
- [ ] Add key to `src/app/contact/page.tsx` line 36
- [ ] Test form submission

### Business Information
- [x] Replace phone number — updated to (212) 202-0699 across all pages

---

## Placeholder Images to Replace

### Home Page (`src/app/page.tsx`)
- [ ] Featured project image (line 193-194)

### About Page (`src/app/about/page.tsx`)
- [ ] Company/team image (line 125-126)
- [ ] Safety/training image (line 229)
- [ ] Team member 1 photo
- [ ] Team member 2 photo
- [ ] Team member 3 photo
- [ ] Team member 4 photo

### Sectors Page (`src/app/sectors/page.tsx`)
- [ ] Government & Municipal sector image
- [ ] Healthcare sector image
- [ ] Education sector image
- [ ] Commercial & Industrial sector image
- [ ] Residential sector image

### Projects Page (`src/app/projects/page.tsx`)
- [ ] Municipal Building Remediation image
- [ ] Hospital Wing Renovation image
- [ ] School District Summer Abatement image
- [ ] Industrial Facility Hazmat Cleanup image
- [ ] Historic Office Building Restoration image
- [ ] Residential Complex Mold Remediation image

### Individual Project Pages (`src/app/projects/[slug]/page.tsx`)
- [ ] Gallery images for each project (3 per project)

### Sector Detail Pages (`src/app/sectors/[slug]/page.tsx`)
- [ ] Featured project image for each sector

### Contact Page (`src/app/contact/page.tsx`)
- [ ] Map or location image (line 278-280)

---

## Content Updates

### About Page - Team Members
Update `src/app/about/page.tsx` (lines 56-77) with real info:

- [ ] Team Member 1: Name, title, bio, photo
- [ ] Team Member 2: Name, title, bio, photo
- [ ] Team Member 3: Name, title, bio, photo
- [ ] Team Member 4: Name, title, bio, photo

---

## Optional Enhancements

### Analytics
- [ ] Add Google Analytics tracking code
- [ ] Add to `src/app/layout.tsx`

### SEO
- [ ] Update meta descriptions for all pages
- [ ] Add Open Graph images
- [ ] Create sitemap.xml
- [ ] Create robots.txt

### Performance
- [ ] Optimize all images (WebP format)
- [ ] Test Lighthouse scores
- [ ] Verify mobile responsiveness

---

## Deployment

### GitHub Pages
- [ ] Add `basePath: "/bofa-website"` to `next.config.mjs`
- [ ] Run `npm run build`
- [ ] Push to main branch
- [ ] Enable GitHub Pages in repo settings

### Custom Domain
- [ ] Configure DNS for www.bofaire.com
- [ ] Add CNAME file to public folder
- [ ] Update basePath if using custom domain

---

## Image Specifications

Recommended sizes for placeholder replacements:

| Location | Aspect Ratio | Suggested Size |
|----------|--------------|----------------|
| Hero/Featured | 16:9 | 1920x1080 |
| Sector cards | 4:3 | 800x600 |
| Project cards | 16:10 | 800x500 |
| Team photos | 1:1 | 400x400 |
| Gallery images | 4:3 | 1200x900 |

---

## Notes

- All placeholder images show gray gradient with `[PLACEHOLDER: ...]` text
- CSS class `placeholder-image` in `globals.css` handles placeholder styling
- Images should be placed in `/public/images/` folder
- Use Next.js Image component for optimization
