# Rhordway™ Luxury Tour Ads Campaign Landing Page

High-converting advertising landing page built specifically for Rhordway's paid Meta (Instagram/Facebook), Google Search, and Display campaigns promoting two exclusive 2026 holiday packages:
1. **Doha + Zanzibar Dual Escape** (Dec 12–19, 2026 · 7 Nights · ₦4,350,000 per person sharing)
2. **Doha Formula 1 Grand Prix Race Weekend** (Nov 25 – Dec 1, 2026 · 6 Nights · Double Occupancy ₦3,400,000 / Single Occupancy ₦4,150,000)

---

## Key Features

- **Luxury Editorial Design System**: Bespoke dark navy (`#0c1a2e`) & warm sand aesthetic, Plus Jakarta Sans & Playfair Display typography, high-res photography.
- **Interactive Experience Selector**: Direct comparison of departure windows, stay durations, hotel ratings, and pricing.
- **Dynamic Occupancy Toggle**: Instant rate calculation for solo and sharing travellers on the Grand Prix package.
- **Live Collation Desk**:
  - Live party size counter (1 to 10 guests).
  - Dynamic total price calculation in Nigerian Naira (₦).
  - Instant official Rhordway PDF Reservation Dossier generation using `jspdf`.
  - Direct 1-click WhatsApp dispatch to `+234 816 420 6030` with pre-filled guest details and booking reference.
- **Trust Architecture**: Inclusions breakdown, 4 confidence pillars, transparent 3-step reservation flow, and FAQ accordion.

---

## Project Structure

```
tour-ads/
├── app/
│   ├── globals.css          # Design system tokens, utilities & animations
│   ├── layout.tsx           # Metadata, OpenGraph & typography
│   └── page.tsx             # Main orchestrated campaign landing page
├── components/
│   ├── ActivityGallery.tsx        # Filterable photo mosaic of excursions
│   ├── BookingSteps.tsx           # 3-step transparent reservation blueprint
│   ├── DohaZanzibarFeature.tsx    # 7-night dual destination deep dive
│   ├── GrandPrixFeature.tsx       # 6-night F1 race weekend deep dive
│   ├── TourCampaignHero.tsx       # Campaign hero with departure cards
│   ├── TourCollationDesk.tsx      # Interactive calculator, PDF & WhatsApp
│   ├── TourExperienceSelector.tsx # Side-by-side package cards
│   ├── TourFAQ.tsx                # Accordion FAQ
│   ├── TourFinalCTA.tsx           # High-impact closing banner
│   ├── TourScrollObserver.tsx     # Smooth scroll & header backdrop observer
│   ├── TourSiteFooter.tsx         # Campaign footer & contact details
│   ├── TourSiteHeader.tsx         # Sticky glass navigation bar
│   └── TravelConfidence.tsx       # 4 trust pillars
├── config/
│   ├── siteConfig.ts        # Rhordway contact & brand config
│   └── tourPackages.ts      # Structured data for all tour packages
├── utils/
│   ├── pdfGenerator.ts      # Generates official branded PDF reservation dossier
│   └── whatsapp.ts          # Builds pre-filled WhatsApp booking messages
├── public/
│   └── assets/images/       # High-res photography & assets
├── package.json
├── tsconfig.json
└── next.config.mjs
```

---

## Running Locally

```bash
cd tour-ads
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploying to Vercel

### Standalone Deployment (Recommended for dedicated campaign domain):
1. In your Vercel Dashboard, import the repository `https://github.com/affolabi/RHORDWAY`.
2. Set **Root Directory** to `tour-ads`.
3. Framework Preset: **Next.js**.
4. Click **Deploy**.
