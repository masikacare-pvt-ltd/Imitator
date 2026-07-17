# IMITATOR — Elite AI Digital Transformation

Production-grade Next.js website for IMITATOR, an elite AI digital transformation agency.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Fonts**: Inter + Playfair Display via `next/font`
- **Images**: `next/image` with AVIF/WebP optimization
- **Linting**: ESLint with `eslint-config-next`

## Project Structure

```
app/                    # Next.js App Router pages
  layout.tsx            # Root layout with fonts and metadata
  globals.css           # Global design system and CSS variables
  page.tsx              # Homepage (/)
  careers/              # /careers
  contact/              # /contact
  privacy/              # /privacy
  terms/                # /terms
  sitemap.ts            # /sitemap.xml
  robots.ts             # /robots.txt

components/
  sections/             # Homepage sections
    HeroSection
    AboutSection
    IndustriesSection
    ServicesSection
    WorkSection
    WorkflowSection
    FaqSection
    TestimonialsSection
    MissionSection
    VisionSection
  Navbar               # Glassmorphism floating navbar
  Footer               # Dark footer with social icons
  BackLink             # Back navigation for inner pages
  ReturnToTop          # Scroll progress ring button
  HomeClient           # Client-side interactions for homepage
  LegalPageLayout      # Shared layout for Privacy/Terms
  LegalClient          # Client-side interactions for legal pages

hooks/
  useScrollReveal      # IntersectionObserver scroll reveal
  useBlurTypeText      # Cinematic blur-to-clear word animation
  useReturnToTop       # Return-to-top scroll progress
  useMagneticEffect    # Mouse-tracking magnetic hover

public/                # Static assets (images)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

## Pages

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/careers` | Careers — Join the Vanguard |
| `/contact` | Contact — Initiate Connection |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/sitemap.xml` | Sitemap |
| `/robots.txt` | Robots |
