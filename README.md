# Haysimo Water — Website Redesign

A fresh, animated, fully responsive redesign of haysimowater.com, built with
React, Tailwind CSS, and Framer Motion.

## Stack

- **React 19** + **Vite** — fast dev server & build
- **React Router** — client-side routing across 4 pages
- **Tailwind CSS** — utility-first styling, custom design tokens
- **Framer Motion** — page transitions, scroll reveals, micro-interactions
- **lucide-react** — icon set

## Pages

- `/` — Home
- `/about` — About Us
- `/products` — Products
- `/contact` — Contact

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Design notes

- **Palette**: Somali-flag blue (`horizon` / `sky`) with a warm gold accent
  (`gold`), on an off-white "foam" background. Defined as custom Tailwind
  tokens in `tailwind.config.js`.
- **Type**: Fraunces (display headings) paired with Plus Jakarta Sans (body/UI),
  loaded via Google Fonts in `index.html`.
- **Signature motif**: an animated flowing wave (`src/components/WaveDivider.jsx`)
  and ripple/droplet accents throughout, tying the visual language back to water.
- **Images**: sourced directly from the live haysimowater.com media library.
  Every image goes through `src/components/ImageWithFallback.jsx`, which
  automatically swaps in a themed placeholder if a given URL ever becomes
  unavailable (hotlink protection, moved asset, etc.) — so the layout never
  breaks.
- **Contact form**: submits via `mailto:`, opening the visitor's email client
  pre-filled with their message. No backend required. Swap in a form service
  (e.g. Formspree) in `src/pages/Contact.jsx` if you'd like real submissions
  without opening a mail client.

## Project structure

```
src/
  components/   Reusable UI (Navbar, Footer, ProductCard, WaveDivider, etc.)
  pages/        Home.jsx, About.jsx, Products.jsx, Contact.jsx
  data/         site.js — all copy, image URLs, product & contact data
```

To update copy, contact details, or swap products, edit `src/data/site.js` —
everything else reads from there.
