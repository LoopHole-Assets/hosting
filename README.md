# LoopHole InfoTech — React (Vite) Conversion

This repository was converted into a small React + Vite project. The original static HTML files remain in the repo, but the React app is the new primary entry.

Quick start

1. Install dependencies:

```powershell
npm install
```

2. Run dev server:

```powershell
npm run dev
```

3. Open http://localhost:5173

Build & deploy

```powershell
npm run build
npm run preview
```

Notes

- Routes are client-side: `/`, `/services`, `/about`, `/team`, `/contact`.
- When deploying to a static host, ensure requests fallback to `index.html` (single-page app routing). For Netlify add a `_redirects` or in GitHub Pages use 404 fallback technique.
- The app reuses the existing `assets/css/styles.css` and `assets/img/*` files.
