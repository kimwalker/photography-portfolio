# Kim Walker — Photography Portfolio

Built with Astro + Decap CMS, hosted on Netlify.

## Tech stack

- **Astro** — static site generator
- **Decap CMS** — git-based headless CMS at `/admin`
- **Netlify** — hosting + CMS auth (Netlify Identity + Git Gateway)

## Local development

```bash
npm install
npm run dev
# → http://localhost:4321
```

## CMS workflow

Access the CMS at `photos.kim/admin`

### Adding a photo

1. Go to **Photos → New Photo**
2. Upload your image
3. Add a title (internal reference only)
4. Check **Featured on Home** to include it in the homepage grid
5. Add project slugs if it belongs to a project (e.g. `domestic-office`)
6. Add collection slugs if it belongs to a collection (e.g. `street`)
7. Publish — Netlify rebuilds automatically (~30s)

### Creating a project

1. Go to **Projects → New Project**
2. Fill in title, slug (e.g. `domestic-office`), date, optional description
3. Upload a cover image
4. Set display order (1 = first, 2 = second, etc.)
5. Publish
6. Go back to each photo and add this project's slug to tag them in

### Creating a collection

Same as projects. Collections appear in the nav automatically once one exists.

### Image appears in both a project and a collection?

Just add both slugs to the photo — it'll appear in both places from a single upload.

## Build

```bash
npm run build
# Output → dist/
```

## File structure

```
src/
  content/
    photos/       ← JSON files created by CMS
    projects/     ← JSON files created by CMS
    galleries/    ← JSON files created by CMS
    config.ts     ← Astro content collection schemas
  layouts/
    Layout.astro  ← Base layout + nav
  pages/
    index.astro             ← Homepage masonry grid
    about.astro             ← About page
    projects/
      index.astro           ← Projects grid
      [slug].astro          ← Project detail
    collections/
      index.astro           ← Collections grid
      [slug].astro          ← Collection detail
public/
  admin/
    config.yml    ← Decap CMS config
    index.html    ← CMS entry point
  images/
    uploads/      ← Photo uploads from CMS
```
