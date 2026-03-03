# LilByte Mobile App

A React Native (Expo) mobile app for **LilByte Tech Studio** — matching the website's dark-mode design system.

## Features

- **Home** — Hero section, services preview, workflow steps, tech stack, quick stats, and CTA
- **Services** — All service offerings with feature lists
- **Team** — Team member grid with culture blocks; tap for full profile
- **Contact** — Contact form (connected to website backend API), quick actions (Book a Call / Email)
- **More** — Navigation hub to About, Portfolio, Pricing, FAQ, and external links

### Additional Screens
- **About** — Company story, mission, values, process, and stats
- **Portfolio** — Demo products showcase with capabilities grid
- **Pricing** — Three-tier pricing with payment terms
- **FAQ** — Expandable accordion FAQ
- **Team Profile** — Full member bio, skills, tools, highlights

## Tech Stack
- **Expo SDK 52** / React Native
- **Expo Router** (file-based navigation)
- **expo-linear-gradient** for gradient effects
- **@expo/vector-icons** (Ionicons)
- **TypeScript**

## Getting Started

```bash
cd app
npm install
npx expo start
```

Scan the QR code with **Expo Go** on your phone, or press:
- `a` for Android emulator
- `i` for iOS simulator
- `w` for web browser

## Backend

The contact form connects to the website's Next.js API at `/api/contact`. Update the `API_BASE_URL` in `src/api/contact.ts` to point to your deployed website URL.

## Project Structure

```
app/
├── app/                    # Expo Router screens
│   ├── _layout.tsx         # Root layout with tab navigation
│   ├── index.tsx           # Home screen
│   ├── services.tsx        # Services screen
│   ├── team.tsx            # Team grid screen
│   ├── contact.tsx         # Contact form screen
│   ├── more.tsx            # More / menu screen
│   ├── about.tsx           # About screen
│   ├── faq.tsx             # FAQ screen
│   ├── pricing.tsx         # Pricing screen
│   ├── portfolio.tsx       # Portfolio screen
│   └── team-profile.tsx    # Team member profile screen
├── src/
│   ├── api/                # API service layer
│   ├── components/ui/      # Reusable UI components
│   ├── data/               # App data (team, services, pricing, FAQ, portfolio)
│   └── theme/              # Design tokens & colors
├── assets/                 # App icons & splash screen
├── app.json                # Expo configuration
└── package.json
```

## Design System

Matches the website's dark-mode theme:
- Background: `#05070E`
- Card: `#0F172A`
- Primary: `#3B82F6` (Blue)
- Accent: `#22D3EE` (Cyan)
- Text: `#E2E8F0` (Slate-200)
- Muted: `#94A3B8` (Slate-400)
