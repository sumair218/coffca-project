# Coffca — Coffee & Bakery Landing Page

A React + Tailwind CSS landing page, built with Vite.

## Setup

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production-ready files will be in the `dist/` folder — upload that folder to any static host (Vercel, Netlify, GitHub Pages, etc).

## Adding your own images

Open `src/data/siteData.js` and edit the `images` object:

```js
const images = {
  hero: "your-hero-image-url-or-path",
  coffeeItems: ["img1", "img2", "img3", "img4"],
  dessertItems: ["img1", "img2", "img3", "img4"],
  beansBanner: "...",
  avatar: "...",
  footerBeans: "...",
};
```

To use local images instead of URLs:
1. Put your image files in `src/assets/`
2. Import them at the top of `src/data/siteData.js`, e.g. `import hero from "../assets/hero.jpg";`
3. Use the imported variable in place of the URL string, e.g. `hero,`

## Pages

The navigation works without an extra router dependency. It uses hash paths so each view works on a static host:

- `#/` — Home
- `#/coffee` — Coffee menu
- `#/bakery` — Bakery menu
- `#/shop` — Full shop menu
- `#/about` — About Coffca
- `#/login` — Sign in form
- `#/cart` — Shopping cart and checkout entry

The cart works in the browser session. Product cards add items, the cart badge shows the item count, and quantities can be changed before checkout. The sign-in page includes sign in, sign up, Google, and Apple action states. Connect those provider buttons to real OAuth credentials when a backend/auth provider is available.

## Project structure

```
coffca-project/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx      # React entry point
    ├── App.jsx       # Page composition and section markup
    ├── components/
    │   ├── ProductCard.jsx
    │   └── ProductRow.jsx
    ├── data/
    │   └── siteData.js # Images, products, navigation, and footer data
    └── index.css       # Tailwind imports and global styles
```
