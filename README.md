# Bibian Nyaeru Robert — Portfolio (React + Vite + Tailwind CSS)

A fast, responsive, SEO-friendly personal portfolio built with React, Vite, and Tailwind CSS. Structured so you can add new projects, publications, or roles by editing one file — no need to touch component code.

## Project structure

```
├── src/
│   ├── components/       # One component per section (Hero, Projects, Publications, etc.)
│   ├── data/
│   │   └── content.js    # ALL your content lives here — edit this to update the site
│   ├── App.jsx            # Assembles all sections in order
│   ├── main.jsx            # React entry point
│   └── index.css          # Tailwind directives + base styles
├── public/
│   ├── images/             # Put your photo and project screenshots here
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── index.html              # Root HTML + SEO meta tags
├── tailwind.config.js      # Your color palette and fonts
├── vite.config.js
└── .github/workflows/deploy.yml   # Auto-deploys to GitHub Pages on every push
```

## 1. Local setup

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`) with hot-reload — edit any file and the browser updates instantly.

## 2. Adding your content

Everything you'll want to update regularly lives in **`src/data/content.js`**:

- **`social`** — your email, LinkedIn, GitHub URLs
- **`hero`** — your name and tagline
- **`about`** — bio paragraphs and the fact card (location, role, education, etc.)
- **`projects`** — add a new object to this array for each project (title, description, tags, image path, repo/demo links)
- **`awards`** — your awards list
- **`skillGroups`** — your skills, grouped by category
- **`experience`** — your work history timeline
- **`publications`** — your papers (add a `url` once you have DOI links)
- **`community`** — capacity-building and outreach items

No JSX or component knowledge needed — just edit the arrays and objects, save, and the page updates.

## 3. Adding images

1. Add your headshot and project screenshots to `public/images/`.
2. In `src/components/Hero.jsx`, replace the placeholder `<span>` block with:
   ```jsx
   <img src="/images/profile.jpg" alt="Bibian Nyaeru Robert" className="h-full w-full object-cover" />
   ```
3. For projects, set the `image` field in `src/data/content.js` to `/images/your-file.jpg` — the placeholder disappears automatically once `image` is set.

## 4. Adding your CV

Drop your CV PDF into `public/` as `cv.pdf` — the Contact section already links to `/cv.pdf`.

## 5. Deploying to GitHub Pages

### Option A — Automatic (recommended)
This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys automatically every time you push to `main`.

1. Create a repository on GitHub (e.g. `your-username.github.io` for a user site, or any name for a project site).
2. Push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
3. In your repo, go to **Settings → Pages**, and under "Build and deployment," set **Source** to `GitHub Actions`.
4. Push any change to `main` and the workflow will build and publish automatically. Your site will be live at `https://your-username.github.io` (user site) or `https://your-username.github.io/your-repo` (project site).

**Important — if using a project site (not `username.github.io`):** open `vite.config.js` and change:
```js
base: '/',
```
to:
```js
base: '/your-repo-name/',
```
Otherwise your CSS/JS won't load correctly once deployed.

### Option B — Manual deploy with `gh-pages`
If you'd rather deploy manually without GitHub Actions:
```bash
npm run build
npm run deploy
```
This builds the site and pushes the `dist/` folder to a `gh-pages` branch, which GitHub Pages can serve directly (set Pages source to the `gh-pages` branch in repo Settings).

## 6. Editing the design

- **Colors**: `tailwind.config.js` — the `ink`, `secondary`, `paper`, `surface`, `accent`, and `accentDark` values control the entire palette.
- **Fonts**: loaded via Google Fonts in `index.html` (Space Grotesk, Inter, IBM Plex Mono).
- **Layout/sections**: each section is its own file in `src/components/` — reorder sections by editing the order in `src/App.jsx`.

## 7. SEO

Meta tags, Open Graph tags, and basic structured data (JSON-LD) are already set up in `index.html`. Before deploying:
- Update the placeholder `your-username.github.io` URLs in `index.html`, `public/robots.txt`, and `public/sitemap.xml` to your actual site URL.
- Add a real Open Graph preview image at `public/images/og-cover.jpg` (recommended size: 1200×630px).
