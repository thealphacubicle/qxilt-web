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

## Cursor / VS Code

- **Auto-setup on open**: A task runs `git pull && npm install` when you open the project. Enable it via **Tasks: Manage Automatic Tasks in Folder** → **Allow Automatic Tasks in Folder**.
- **Manual setup**: Run **Tasks: Run Task** → **Setup: Pull & Install** or **Setup: Install Dependencies**.

## GitHub Codespaces

Click **Code** → **Codespaces** → **Create codespace on main** to open the repo in a browser-based dev environment. The devcontainer runs `npm install` on create and `git pull && npm install` on each start.

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
