# DESIGN SPECIFICATION: YumeTattoos One-Page Experience

## 1. Project Overview
**Client:** YumeTattoos
**Core Service:** Specialized Micropigmentation for Freckles (Pekkas).
**Goal:** A high-end, visually stunning one-page website that tells a story, impresses the user with seamless transitions, and converts visitors into booked appointments via an AI booking bot.

## 2. Visual Identity & Aesthetic
**Mood:** Luxury, Ethereal, Feminine, Japanese-inspired Minimalism.
**Palette:**
- **Primary:** Champagne (#F7E7CE) / Soft Nude (#E3C5AF)
- **Accent:** Deep Ink (#2C2C2C) / Pale Rose (#FADADD)
- **Background:** Off-white / Creamy gradients.

**Typography:**
- **Headings:** Elegant Serif (e.g., *Playfair Display* or *Cormorant Garamond*) - represents luxury and timelessness.
- **Body:** Modern Sans-serif (e.g., *Inter* or *Montserrat*) - ensures readability and cleanliness.

**Visual Elements:**
- Soft shadows, glassmorphism (frosted glass), organic shapes, and high-resolution close-up photography of skin and freckles.

## 3. Storytelling Flow (One-Page)
The site is a linear narrative where scrolling triggers cinematic transitions.

### Section 1: The Awakening (Hero)
- **Visual:** Full-screen cinematic video/animation (Remotion). A slow, ethereal zoom into a high-detail shot of natural freckles.
- **Content:** "YUME: The Art of Natural Beauty".
- **Transition:** Fade-out of video $\rightarrow$ Slide-up of the next section.

### Section 2: The Philosophy (About)
- **Visual:** Split screen. One side: Artistic portrait of Yume. Other side: Minimalist text.
- **Content:** Highlighting 10+ years of experience. "Enhancing what nature gave you".
- **Transition:** Parallax scroll where the image moves slower than the text.

### Section 3: The Art of Freckles (Services)
- **Visual:** Interactive cards with "reveal" animations.
- **Content:**
    - **Permanent Freckles:** Timeless, bold, long-lasting.
    - **Semi-permanent Freckles:** Subtle, seasonal, evolving.
- **Transition:** "Before & After" slider for each service. User drags a handle to see the transformation.

### Section 4: The Portfolio (Gallery)
- **Visual:** Horizontal "infinite" scroll gallery.
- **Content:** Curated best work. Each image expands on click to a full-screen view.
- **Transition:** GSAP-powered smooth scrolling (Lenis).

### Section 5: The Ritual (Booking)
- **Visual:** A clean, minimal interface. The "Booking Bot" appears as a sophisticated chat interface.
- **Content:** "Reserve your moment of beauty".
- **Transition:** Soft glow effect around the chat window.

## 4. The Booking Bot (AI Assistant)
An AI agent designed to handle the initial booking phase.
- **Capabilities:**
    - Explain the difference between permanent and semi-permanent.
    - Check availability (integrated with a calendar).
    - Request deposits for reservation.
    - Send payment links.
- **Flow:**
    `Greeting` $\rightarrow$ `Service Choice` $\rightarrow$ `Date/Time` $\rightarrow$ `Deposit Request` $\rightarrow$ `Payment` $\rightarrow$ `Confirmation`.

## 5. Technical Stack
- **Framework:** Next.js 16 (App Router).
- **Styling:** Tailwind CSS.
- **Animations:** 
    - **Framer Motion:** Page and element transitions.
    - **GSAP:** Complex scroll-triggered sequences.
    - **Remotion:** Pre-rendered cinematic hero assets.
- **AI/Bot:** Vercel AI SDK + Claude 3.5 Sonnet / Opus.
- **Payments:** MercadoPago / Stripe API for deposits.
- **Deployment:** Vercel.

## 6. Implementation Roadmap
1. **Phase 1: Foundation** $\rightarrow$ Next.js setup, Design System (Tailwind config).
2. **Phase 2: Storyboard** $\rightarrow$ Implementing the section layout and basic routing.
3. **Phase 3: Motion Design** $\rightarrow$ Integrating GSAP and Framer Motion for the "Wow" effect.
4. **Phase 4: Content Integration** $\rightarrow$ Adding high-res assets and copywriting.
5. **Phase 5: Bot Development** $\rightarrow$ Building the AI booking flow.
6. **Phase 6: Polish & Deploy** $\rightarrow$ Vercel deployment and performance audit.
