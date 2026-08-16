# Nikhil Barot — Portfolio

Next.js 15 + Tailwind CSS v4 portfolio. All copy lives in one file
(`src/lib/data.ts`) so you can update content without touching components.

## Run it locally in VS Code

1. Open this folder in VS Code: `code .`
2. Install recommended extensions when prompted (or manually):
   - **Tailwind CSS IntelliSense** — autocomplete for class names
   - **ES7+ React/Redux snippets** — optional, handy shortcuts
3. Install dependencies and start the dev server:
   ```bash
   npm install
   npm run dev
   ```
4. Open http://localhost:3000 — it hot-reloads as you save.

## Where to edit things

| What you want to change | Where |
|---|---|
| Your name, tagline, stats, email/links | `src/lib/data.ts` → `profile` |
| Projects | `src/lib/data.ts` → `projects` |
| Research write-ups | `src/lib/data.ts` → `research` |
| Work experience | `src/lib/data.ts` → `experience` |
| Skills bars | `src/lib/data.ts` → `skills` |
| Education | `src/lib/data.ts` → `education` |
| Personal/journey photos + captions | `src/lib/data.ts` → `journey` |
| Colors, fonts | `src/app/globals.css` (the `:root` block at the top) |

## Adding your own images

Drop image files straight into `public/images/` — e.g. `me-conference.jpg`,
`project-screenshot.png`. Then reference them in `src/lib/data.ts` as
`/images/me-conference.jpg` (no `public` prefix — Next.js serves that folder
at the root automatically).

Placeholder images are already in `public/images/` so the site looks correct
out of the box — swap them out with real photos/screenshots whenever you're
ready, same filenames or update the paths in `data.ts`.

Recommended photo sizes: project screenshots ~1200x800px (16:9-ish), personal
photos ~1000x750px (4:3). Anything reasonable works — the layout crops to fit.

To add a downloadable resume, drop `resume.pdf` into `public/` — it's already
linked from `profile.resumeUrl`.

## Checking work in with git

```bash
git init
git add .
git commit -m "Initial portfolio scaffold"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

VS Code's built-in **Source Control** tab (left sidebar, branch icon) does all
of the above through the UI if you'd rather not use the terminal — stage
changes, write a commit message, and click the checkmark, then "Sync Changes"
to push.

## Deploying

**Easiest — Vercel (same company that makes Next.js, free tier is plenty):**
1. Push this repo to GitHub.
2. Go to vercel.com -> New Project -> import the repo -> Deploy.
3. Every push to `main` auto-deploys from then on.

**Alternative — GitHub Pages (static export):**
Next.js can export to static HTML if you don't need server features:
```bash
# add to next.config.ts: output: "export"
npm run build
# static site is generated in /out — publish that folder via GitHub Pages
```
Vercel is simpler and is what most Next.js portfolios use in practice.

## Design notes

- Palette, type, and the animated ECG line in the hero are intentional choices
  tied to the ECG-research content — see `src/components/EcgLine.tsx` if you
  want to adjust or remove it.
- Section labels use bracketed mono tags (`[projects]`, `[research]`) instead
  of numbered markers, echoing a data/log aesthetic.
