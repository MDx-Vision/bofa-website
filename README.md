# BOFA - Breath of Fresh Aire

Corporate website for BOFA, an environmental remediation and general contracting company.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Static export

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home
│   ├── about/            # About Us
│   ├── contact/          # Contact Form
│   ├── solutions/        # Services
│   ├── sectors/          # Industries Served
│   ├── projects/         # Portfolio
│   ├── privacy/          # Privacy Policy
│   └── terms/            # Terms of Service
├── components/
│   ├── Header.tsx        # Navigation
│   └── Footer.tsx        # Footer
└── lib/
    ├── solutions-data.ts # Services content
    ├── sectors-data.ts   # Sectors content
    └── projects-data.ts  # Projects content
```

## Configuration

### Contact Form

The contact form uses [Web3Forms](https://web3forms.com) for email submissions.

1. Get a free access key at https://web3forms.com
2. Add your key to `src/app/contact/page.tsx` line 36

### Deployment

For GitHub Pages deployment, add to `next.config.mjs`:

```js
basePath: "/bofa-website"
```

## Checklist

See [CHECKLIST.md](./CHECKLIST.md) for launch checklist and pending tasks.

## License

Private - All rights reserved.
