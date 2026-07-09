# Taste Skill Guidelines — Anti-Generic, Premium UI Design

## 1. Aesthetic Integrity & Theme Cohesion
- **Anti-AI-Slop**: Avoid generic templates, random violet gradients, or unrequested telemetry lines (e.g., "SYSTEM STATUS: ACTIVE", "PORT: 3000"). Use clean, intentional display typography, high-contrast negative space, and a unified theme.
- **Color Token Consistency**: Adhere strictly to the defined brand palette:
  - Deep Navy (`#0C1B4D` and `#152869`) for authoritative structures and text.
  - Warm Gold (`#D4A537` and `#E8C874`) for premium branding, active highlights, and key action controls.
  - Soft backgrounds (pure white and `#F7F8FC`) to ensure content pops with exceptional contrast.
- **Glassmorphic Execution**: Apply authentic glassmorphism using combinations of translucent overlays (`bg-white/10` or `bg-white/60`), refined border lines (`border border-white/20`), backdrop blurring (`backdrop-blur-md`), and a very subtle glow shadow bloom on hover.

## 2. Advanced Typography (Poppins)
- **Primary & Headings**: Rely on *Poppins* as the primary brand font, using extra-bold weights (700–800) for display headers, medium weights (500) for subheadings, and normal weights (400) for body text with proper line heights.
- **Micro-Copy Elegance**: Use uppercase tracking, letter-spacing, and subtle muted coloring for labels, indicators, and small tags (e.g., `text-xs uppercase tracking-wider text-gold-500 font-semibold`).

## 3. Micro-Interactions & Transitions
- **Organic Motion**: Animations must be quick but fluid (200–350ms duration) using standard spring or cubic-bezier easing from Framer Motion (`motion`). Avoid dramatic bounces that delay the user experience.
- **Active Navigation**: Implement a premium mobile app-like experiences, such as a bottom navigation bar for quick thumbs-only access on mobile, alongside a full-bleed slide-in nav tray for browsing.
- **Hover Affirmations**: Interactive cards and buttons must transform subtly (e.g., scale-102, border-gold, low-opacity shadow glow) to affirm hover intent.
