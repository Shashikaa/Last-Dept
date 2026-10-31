# LAST DEPT. — Series 01 Luxury 3D Footwear Flagship (Next.js 14 App Router)

A modular **Next.js 14 (App Router + TypeScript + Tailwind CSS + Framer Motion)** project modeled after the [LAST DEPT.](https://ascentastudio.com/last-dept/) concept store by [Ascenta Studio](https://ascentastudio.com/).

## Project Structure

```text
last-dept-nextjs/
├── public/
│   └── images/                          # High-res WebP sneaker & showroom assets
├── src/
│   ├── data/
│   │   └── sneakers.ts                  # Typed Series 01 dataset (10 silhouettes & EU sizes)
│   ├── context/
│   │   └── StoreContext.tsx             # Global state (Wall Camera Zoom, Bag, Wishlist, Compare, Modals)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx               # Fixed header with `← Collection` zoom-out button & Bag counter
│   │   │   └── Footer.tsx               # Minimalist architectural footer
│   │   ├── showroom/
│   │   │   ├── DisplayWall3D.tsx        # 2-Tier Acrylic Shelf Wall with in-place 3D camera scaling & LEDs
│   │   │   ├── ProductDetailOverlay.tsx # Floating Left & Right detail overlay (EU dropdown, pill CTA, accordion)
│   │   │   └── ShelfItemCard.tsx        # Individual sneaker hitbox & reactive 2700K LED light bleed
│   │   ├── scroll/
│   │   │   └── Scroll3DSection.tsx      # 3D perspective scroll-triggered architectural sections
│   │   └── modals/
│   │       ├── BagDrawer.tsx            # Slide-out shopping bag & Atelier allocation checkout
│   │       └── StudioNotesModal.tsx     # "About this store" / Studio Notes modal
│   └── app/
│       ├── globals.css                  # Custom acrylic shelf refraction, concrete wall & typography styles
│       ├── layout.tsx                   # Root layout wrapping Navbar, StoreProvider, Modals & Footer
│       ├── page.tsx                     # Home Page (`/`) — 3D Display Wall + 3D Scroll Showcase
│       ├── silhouettes/
│       │   └── page.tsx                 # Products Page (`/silhouettes`) — Catalog, filters & spec comparison
│       ├── atelier/
│       │   └── page.tsx                 # About Page (`/atelier`) — 148-step craft & material transparency
│       └── contact/
│           └── page.tsx                 # Contact Page (`/contact`) — Flagship showrooms & private booking
```

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
