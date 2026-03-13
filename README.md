# Qxilt Web

Docs-first website for [Qxilt](https://qxilt.com) — trust infrastructure for AI agents.

## Tech stack

- **Next.js 16** — React framework
- **Nextra 4** — MDX documentation
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations
- **next-themes** — Dark/light mode

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push to GitHub and connect the repo in [Vercel](https://vercel.com)
2. Or use the CLI:

```bash
npm i -g vercel
vercel
```

The site is configured for the default Vercel domain.

## Project structure

```
├── app/
│   ├── layout.tsx      # Root layout (Navbar, ThemeProvider)
│   ├── page.tsx        # Homepage
│   ├── api/page.tsx    # API placeholder
│   └── docs/           # Documentation (Nextra)
├── content/            # MDX docs content
├── components/         # React components
└── lib/                # Utilities
```
