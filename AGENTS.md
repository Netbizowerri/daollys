# Da Ollys Integrated Services — Agent Guide

## Quick start
- `npm install` then `npm run dev` (Vite on port 3000, host 0.0.0.0)
- `GEMINI_API_KEY` required in `.env.local` (copy from `.env.example`)
- `npm run lint` runs `tsc --noEmit` (no separate linter/formatter)
- Clean: `npm run clean` removes `dist/` and `server.js`

## Architecture
- **SPA** — React 19 + React Router v7 (HashRouter) + Tailwind v4 + Vite 6
- **Entry**: `index.html` → `src/main.tsx` → `src/App.tsx`
- **Path alias**: `@/` maps to project root (used in imports)
- **No server code yet** — `metadata.json` declares `MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API` but no Express routes exist. `express` and `tsx` are in dependencies for future use.
- `@google/genai` (v2) is the Gemini SDK; no `@google/generative-ai` v1

## Routes
| Path | Component |
|---|---|
| `/` | Homepage |
| `/about`, `/contact` | Static pages |
| `/services/:serviceSlug` | ServicePage (dynamic from data) |
| `/book/:serviceSlug` | BookingPage (dynamic forms) |
| `/privacy-policy`, `/terms-and-conditions`, `/disclaimer` | LegalPage |
| `/thank-you` | ThankYou |
| `*` | NotFound |

## Data & types
- **Data**: `src/data/services.ts` — single source with `SERVICES[]`, `TRAVEL_PACKAGES[]`, `TESTIMONIALS[]`, `LUXURY_FLEET[]`
- **Types**: `src/types.ts` — `ServiceDetail`, `TravelPackage`, `Testimonial`
- Add new services/travel packages by extending these arrays; slugs drive routes automatically

## Styling conventions
- **Tailwind v4** — `@import "tailwindcss"` + `@theme` directives (no `tailwind.config.js`)
- **Brand colors**: navy `#0C1B4D` / gold `#D4A537` — defined as theme tokens in `src/index.css`
- **Utility classes** defined in `src/index.css`: `.text-gold-gradient`, `.bg-gold-gradient`, `.glass-light`, `.glass-dark`
- **Font**: Poppins imported via Google Fonts link in `index.css`
- **Animation**: `motion` from package `motion` (framer-motion wrapper) — use for mount/route transitions

## Key patterns
- **Router**: `HashRouter` (not BrowserRouter) — all internal links must use hash routing
- **Form routes**: `/book/:serviceSlug` drives `src/components/forms/BookingForms.tsx` which switches form type
- **Mobile nav**: `BottomActionBar` (mobile-only) + slide-in `MobileNavTray`
- **WhatsApp**: floating `WhatsAppButton` component on all pages

## Source files (`src/`)
```
src/
  main.tsx                 # React root mount
  App.tsx                  # Routes + layout shell
  types.ts                 # Shared TypeScript interfaces
  index.css                # Tailwind + brand theme + custom utilities
  data/services.ts         — all service/travel/testimonial data
  pages/                   — 8 page components
  components/
    layout/                — Header, Footer, WhatsAppButton, BottomActionBar, MobileNavTray
    forms/BookingForms.tsx — booking form per service slug
    shared/                — GlassCard, PageTransition
  skills/                  — Agent skill instructions (reference, do not edit)