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

## Project Structure

- `src/app` - routes, metadata, API handlers
- `src/components` - homepage, layout, legal, and shared UI components
- `public` - static assets

## Deployment

The app is intended to run behind Nginx with PM2 on Ubuntu. Local deployment notes are kept out of git.

## License

This project is licensed under the MIT License. See `LICENSE`.
