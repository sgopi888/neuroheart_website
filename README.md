# NeuroHeart Website

NeuroHeart is a marketing website for the NeuroHeart iOS app. It is built with Next.js and presents the product, pricing, beta signup, and legal pages.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Commit and Push Changes

```bash 
git add .
git commit -m "chore: Update pricing to free daily credits system"
git push
```

## Project Structure

- `src/app` - routes, metadata, API handlers
- `src/components` - homepage, layout, legal, and shared UI components
- `public` - static assets

## Deployment

The app is intended to run behind Nginx with PM2 on Ubuntu. Local deployment notes are kept out of git.

### Founder Music Page

The founder music page is available at:

```text
https://neuroheart.ai/founder/music
```

The source page is stored at `public/founder-music-v2.html`. A rewrite in
`next.config.ts` serves the static page at the clean `/founder/music` URL.

To publish changes, push `main` from the local repository:

```bash
git push origin main
```

Then update the production server:

```bash
cd /var/www/neuroheart.ai
git pull origin main
npm run build
pm2 restart neuroheart
```

Verify the deployed route:

```bash
curl -I https://neuroheart.ai/founder/music
```

## License

## Photo Gallery

The gallery is served at `/gallery`. Add JPG, JPEG, PNG, WebP, or AVIF photos to
`gallery/` in this repository. `npm run dev` and `npm run build` automatically
generate optimized, auto-oriented WebP images and the photo list. Generated
files in `public/gallery-generated/` are ignored by git. EXIF metadata is removed
from published images when Sharp is available; the original photos remain in
the repository. On servers whose CPU cannot load Sharp, generation automatically
falls back to original images using a JavaScript dimension reader. This keeps
deployment working, but images retain their metadata and original file sizes.
Export appropriately sized, metadata-free photos before adding them on such
servers. Set `GALLERY_ORIGINAL_IMAGES=1` to explicitly use this compatibility mode.

Filenames become captions: `Formal Gala Award Presentation.png` works as-is.
Optionally use `2026-10 - Award Receiving.jpg` for a date and caption. Dated
photos appear newest first, followed by undated photos alphabetically. Convert
HEIC photos to JPG first. Delete a source photo to remove it on the next build.
After adding photos while the development server is running, restart it to
regenerate the gallery. No separate generator command is needed.

Local preview (from `neuroheart-website/`):

```bash
npm ci
npm run dev
# Open http://localhost:3000/gallery
```

Publish new photos:

```bash
git add gallery/
git commit -m "Add gallery photos"
git push origin main
```

Until automatic deployment is configured, run on the production server:

```bash
cd /var/www/neuroheart.ai
git pull --ff-only origin main
npm ci
npm run build
pm2 restart neuroheart --update-env
curl --fail -I https://neuroheart.ai/gallery
```

For automatic deployment, `.github/workflows/deploy.yml` runs on pushes to
`main` after you set the GitHub repository variable `ENABLE_AUTO_DEPLOY` to
`true`. Configure repository secrets `DEPLOY_HOST`, `DEPLOY_USER`,
`DEPLOY_SSH_KEY` (a dedicated private SSH key), and `DEPLOY_KNOWN_HOSTS`
(the server's verified SSH known-hosts entry). Install the matching public key
in the deploy user's `authorized_keys`. That user needs access to the existing
checkout at `/var/www/neuroheart.ai`, its git remote, Node/npm, and the PM2
process named `neuroheart`. Keep the production checkout clean. The workflow
builds successfully before restarting; it does not configure a new server.

For the initial implementation commit, include `package.json`,
`package-lock.json`, `.gitignore`, `.github/workflows/deploy.yml`,
`scripts/build-gallery.mjs`, `src/app/gallery/`, `src/components/gallery/`,
the gallery links in Navbar/Footer, `src/app/sitemap.ts`, and this README,
along with `gallery/`. Review existing local changes before committing.

This project is licensed under the MIT License. See `LICENSE`.
