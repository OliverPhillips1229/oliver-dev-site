# Oliver.dev — React + Express on Heroku

## Stack
- React (Vite) client in `/client`
- Express static server in `/server`
- Heroku deployment via Node.js buildpack + Procfile
- Optional GitHub Pages for static hosting

## Branding
- Deep Navy `#0B2A33`, Bright Teal `#1BA7A3`, Warm Orange `#F0791B`
- Extended: `#123A46`, `#4EC9C6`, `#F5A266`, `#1C1F22`, `#6B7A86`, `#E6EEF2`, `#F8FBFD`, `#F2C94C`, `#F26B9A`

## Local Dev
```bash
npm install
npm --prefix client install
npm --prefix server install
npm run dev
```

## Build locally
```bash
npm --prefix client run build
node server/server.js
```

## Deploy to Heroku
```bash
heroku login
heroku create oliver-dev-site --stack heroku-24
heroku buildpacks:set heroku/nodejs -a oliver-dev-site
git init && git add . && git commit -m "init"
heroku git:remote -a oliver-dev-site
git push heroku HEAD:main
```

## Blog (MDX)
- Posts in `client/src/posts/*.mdx` with optional `meta` export:
```js
export const meta = { title: 'Title', date: 'YYYY-MM-DD', excerpt: '...', tags: ['one','two'] }
```
- Routes: `/blog` (index) and `/blog/:slug` (post)

## GitHub Projects Feed
Set `client/.env`:
```
VITE_GITHUB_USER=your-github-username
# optional:
# VITE_GITHUB_TOKEN=ghp_xxx
```

## Contact Form (Formspree)
Create `client/.env`:
```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxabcd
```

## Light/Dark Theme
- Toggle in header, persists via `localStorage`
- Customize in `client/src/styles/base.css`

## GitHub Pages (optional)
- Build: `npm --prefix client run build:pages`
- Workflow: `.github/workflows/gh-pages.yml` (enable Pages → GitHub Actions)
