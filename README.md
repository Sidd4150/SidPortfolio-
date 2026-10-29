# Sid Shakya — Portfolio

Personal portfolio built with React 19, Vite, Tailwind CSS v4, and Lucide icons. Includes selected projects, engineering experience, education, skills, and direct contact links.

## Development

```sh
npm install
npm run dev
```

## Validation

```sh
npm run lint
npm run build
```

`npm run preview` serves the production build locally. The Vite base path supports GitHub Pages hosting at `/SidPortfolio-/`.

## Content and styling

- `src/data/portfolioData.js`: personal details, project links, work history, education, and skills.
- `src/App.jsx`: page layout, mobile navigation, expandable engineering details, and copy-email action.
- `src/index.css`: responsive layout, visual styles, focus indicators, and reduced-motion support.
- `public/alfv-site.webp`: captured ALFV website background for the featured project.
- `public/`: project screenshots and favicon assets.
- `index.html`: page title and search/social metadata.

## Useful next additions

- Add a current résumé PDF and a visible download link.
- Link OpenSupplyHub directly to contributed pull requests rather than the organization homepage.
- Add short case studies explaining project challenges, your decisions, and measured outcomes.
- Add a dedicated social preview image and custom domain when ready.

## Analytics

Vercel Web Analytics is installed through `@vercel/analytics` and mounted once in `src/main.jsx`. This portfolio uses React with Vite, so it uses `@vercel/analytics/react`.

1. Open the portfolio project in Vercel, select **Analytics**, and click **Enable**.
2. Deploy the updated source through your existing Vercel Git integration.
3. Visit the deployed site and check the Analytics dashboard for visitors and page views. If data does not appear, check content blockers.

No tracking ID or environment variable is needed. Collection requires a Vercel deployment; the GitHub Pages build does not provide Vercel's analytics endpoint. See the [setup guide](https://vercel.com/docs/analytics/quickstart).

## Deployment

```sh
npm run deploy
```

This builds and publishes the `dist` directory to the `gh-pages` branch.

In the repository’s **Settings → Pages**, select **Deploy from a branch**, choose **gh-pages**, and choose **/(root)**. Serving `main` directly will serve the Vite source rather than the production build.

The build uses `/SidPortfolio-/` for GitHub Pages and `/` when Vercel sets `VERCEL=1`. Commit and push source changes separately to preserve them on GitHub; the deployment command publishes only the compiled site.


## Vercel

Run `npx vercel --prod` from this directory. Vercel detects Vite, runs `npm run build`, and serves `dist`. The Vite config uses root asset paths on Vercel while preserving GitHub Pages deployment support.
