# Project Overview: YumeTattoos / Pekkas

This project is a high-end, visually stunning digital experience for **YumeTattoos**, a studio specializing in "Pekkas" (freckle micropigmentation). The goal is to create a "Luxury, Ethereal, and Feminine" one-page experience that integrates cinematic motion, interactive storytelling, and an AI-driven booking concierge.

## 🏗️ Architecture & Tech Stack

The workspace is structured as a monorepo-style setup with two main applications:

- **`yumetattoos/`**: The primary production site.
  - **Framework**: Next.js 16.2.6 (App Router)
  - **Styling**: Tailwind CSS 4 (PostCSS integration)
  - **Animations**: GSAP 3.15, Framer Motion 12, Lenis (Smooth Scroll)
  - **AI**: Vercel AI SDK + Anthropic (Claude 3.5/Opus) for "The Ritual" (Booking Bot)
- **`web/`**: A parallel or previous iteration of the web experience.
  - Similar stack to `yumetattoos/` but focused on core component development.
- **`docs/`**: Creative direction and copy decks.

### Key Technologies
- **Next.js 16**: Note the `AGENTS.md` warning—this version may have breaking changes from standard training data.
- **GSAP & Lenis**: Used for "Kinetic Scrolling" and complex scroll-triggered sequences.
- **Vercel AI SDK**: Powers the "Beauty Concierge" booking bot.

## 🎨 Design Standards (Visual Excellence)

Every interaction must adhere to the "High-End, Feminine, and Aesthetic" vision:

- **Palette**: Champagne (#F7E7CE), Soft Nude (#E3C5AF), Deep Ink (#2C2C2C), Pale Rose (#FADADD).
- **Typography**: Elegant Serif (Playfair Display) for luxury, Modern Sans-serif (Inter) for readability.
- **Motion Principles**:
  - **Non-Linear Discovery**: Organic, staggered layouts in the portfolio.
  - **Atmospheric Backgrounds**: Slow-drifting multi-stop gradients.
  - **Optimistic UI**: Immediate feedback (<100ms) for all interactions.
  - **Glassmorphism**: Consistent use of backdrop-blur and transparency for cards and sidebars.

## 🛠️ Building and Running

Commands should be run within the respective subdirectories (`web/` or `yumetattoos/`):

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Start**: `npm run start`
- **Lint**: `npm run lint`

## 📜 Development Conventions

1. **Surgical Updates**: Follow existing patterns in `src/components/` and `src/app/`.
2. **Visual Audits**: Use the `/audit` command (defined in global personal memory) to verify UI/UX against the 2026 Visual Excellence standards.
3. **AI Booking Bot**: Refer to `docs/creative_direction.md` for the "Concierge Language" and "Ethereal Transitions" required for "The Ritual".
4. **Smooth Scrolling**: Lenis is globally integrated; ensure scroll-triggered animations (GSAP) are synchronized.

## 📁 Key Files
- `docs/creative_direction.md`: The "Source of Truth" for the brand's voice and visual feel.
- `web/DESIGN_SPEC.md`: Detailed roadmap and component specifications.
- `yumetattoos/src/app/api/chat/route.ts`: Implementation of the AI booking logic.
- `web/src/components/ui/RadialScrollGallery.tsx`: A key high-density UI component.
