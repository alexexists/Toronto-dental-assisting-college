# Toronto College of Dental Assisting

Marketing site for Toronto College of Dental Assisting — built with [Lovable](https://lovable.dev), running on **TanStack Start** (React + Vite + Nitro).

## Local development

**Requirements:** Node.js 20+ (Node 22 recommended — see `.nvmrc`)

```bash
npm install
npm run dev
```

Open **http://localhost:8080**. The dev server hot-reloads as you edit files.

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server |
| `npm run build` | Production build (creates `dist/` + `.netlify/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## Project structure (what you edit)

```
src/
  routes/          # Pages (file-based routing)
  components/site/ # Header, Footer, layout
  components/ui/   # shadcn/ui components
  assets/          # Images (logo, photos)
  styles.css       # Theme tokens & global styles
```

You do **not** need a separate `client/` folder. All site code lives in `src/`. Images go in `src/assets/` and are imported in your components.

## Build output (auto-generated — do not commit)

When you run `npm run build`, two folders are created:

| Folder | Purpose |
|--------|---------|
| `dist/` | Static files Netlify serves (JS, CSS, cache headers) |
| `.netlify/` | Serverless functions for page rendering (SSR) |

These are **generated on every build**. They are listed in `.gitignore` — you never push them to GitHub. Netlify runs `npm run build` on its servers and creates them fresh each deploy.

> **Note:** `dist/client` is not used. The Netlify preset outputs static assets directly to `dist/`.

## GitHub Desktop workflow

Yes — GitHub Desktop is the right tool for this project.

1. Open **GitHub Desktop** → **File → Add Local Repository**
2. Choose this folder (`Toronto-dental-assisting-college`)
3. If prompted, click **create a repository** here
4. Review changed files — you should see `src/`, `package.json`, `netlify.toml`, etc.
   - **Do not** worry about `dist/`, `node_modules/`, or `.netlify/` — they are ignored
5. Write a commit message (e.g. "Initial site") → **Commit to main**
6. **Publish repository** to GitHub (creates the remote repo for you)

After that, every time you make changes: commit in GitHub Desktop → **Push origin**.

## Deploy to Netlify

Netlify builds from your GitHub repo automatically. You only push source code; Netlify handles the build.

### First-time setup

1. Push the repo to GitHub (via GitHub Desktop)
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**
3. Choose **GitHub** and select your repository
4. Netlify reads `netlify.toml` automatically:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 22
5. Click **Deploy site**

### After setup

Every push to `main` triggers a new deploy. Check the **Deploys** tab in Netlify if something fails — the build log will show errors.

### Custom domain (later)

In Netlify: **Site configuration → Domain management** → add your domain and follow DNS instructions.

## Pages

- `/` — Home
- `/programs` — Programs overview
- `/programs/intra-oral-dental-assisting` — Level I & II
- `/programs/dental-assisting-level-ii` — Level II
- `/facility` — Facility photos
- `/testimonials` — Student testimonials
- `/faq` — FAQ
- `/contact` — Contact info
- `/apply` — Application form
