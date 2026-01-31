# PRD: Petal GTD Landing Page

## Introduction

Create a modern, clean landing page for Petal GTD - a web-based GTD (Getting Things Done) productivity application inspired by Things 3. The landing page will serve as the primary marketing and conversion tool to drive users to sign up and start using the live app.

The design philosophy combines clean minimalism (Apple/Things 3 style) with modern animated elements (Aceternity style), featuring lots of whitespace, subtle animations, and a professional aesthetic that reflects the productivity-focused nature of the application.

### Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Aceternity UI Pro components (from `/Users/kerone/Downloads/Aceternity UI Pro/component-packs`)
- **Animations**: Framer Motion
- **Reference**: Agenlabs Agency Template structure

## Goals

- Drive user signups for the live Petal GTD application
- Showcase key features and benefits of the GTD workflow
- Communicate the clean, focused design philosophy of the app
- Provide clear call-to-actions throughout the page
- Ensure responsive design for desktop and mobile
- Achieve fast page load times (< 2 seconds)

## User Stories

### US-001: Project Setup and Configuration

**Description:** As a developer, I need to initialize the Next.js project with all required dependencies and configurations.

**Acceptance Criteria:**

- [ ] Create Next.js 14+ project with App Router (`create-next-app`)
- [ ] Configure TypeScript strict mode
- [ ] Install and configure Tailwind CSS with custom theme
- [ ] Install Framer Motion for animations
- [ ] Set up project structure: `/app`, `/components`, `/lib`, `/constants`, `/public`
- [ ] Configure `cn` utility function for className merging
- [ ] Add Inter or SF Pro font configuration
- [ ] Typecheck/lint passes
- [ ] Project runs successfully with `npm run dev`

### US-002: Navbar Component

**Description:** As a user, I want a clean navigation bar so I can access different sections and the signup button.

**Acceptance Criteria:**

- [ ] Create sticky navbar component at top of page
- [ ] Display Petal GTD logo on the left
- [ ] Navigation links: Features, Showcase, Pricing (if applicable)
- [ ] "Get Started" / "Sign Up" button on the right with primary styling
- [ ] Responsive: hamburger menu on mobile
- [ ] Subtle background blur effect on scroll
- [ ] Smooth scroll to sections on click
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-003: Hero Section

**Description:** As a user, I want an impactful hero section that immediately communicates what Petal GTD does and encourages me to sign up.

**Acceptance Criteria:**

- [ ] Large, bold headline: "Get Things Done, Beautifully" or similar
- [ ] Subheadline explaining the GTD workflow and Things 3-inspired design
- [ ] Primary CTA button: "Start for Free" linking to app signup
- [ ] Secondary CTA button: "Learn More" or "Watch Demo"
- [ ] Hero image/mockup showing the Petal GTD app interface
- [ ] Subtle animated background (grid pattern or beams from Aceternity)
- [ ] Responsive layout: stacked on mobile, side-by-side on desktop
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

**Component Reference:**
- Hero components from `/Users/kerone/Downloads/Aceternity UI Pro/component-packs/hero/`
- Background patterns from `/Users/kerone/Downloads/Aceternity UI Pro/component-packs/backgrounds/`

### US-004: Features Section

**Description:** As a user, I want to understand the key features of Petal GTD so I can evaluate if it meets my needs.

**Acceptance Criteria:**

- [ ] Section title: "Everything you need to stay productive"
- [ ] Display 4-6 key features in a grid or bento layout
- [ ] Features to highlight:
  - Inbox capture (quick task entry)
  - Today view (focus on what matters)
  - Projects & Areas organization
  - Upcoming calendar view
  - Tags and filtering
  - Dark/Light mode
- [ ] Each feature has: icon, title, brief description
- [ ] Subtle hover animations on feature cards
- [ ] Optional: animated illustrations or app screenshots for each feature
- [ ] Responsive grid: 1 column mobile, 2-3 columns tablet, 3 columns desktop
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

**Component Reference:**
- Feature sections from `/Users/kerone/Downloads/Aceternity UI Pro/component-packs/feature-sections/`
- Bento grids from `/Users/kerone/Downloads/Aceternity UI Pro/component-packs/bento-grids/`

### US-005: App Showcase Section

**Description:** As a user, I want to see what the actual application looks like so I can visualize using it.

**Acceptance Criteria:**

- [ ] Section title: "A GTD experience you'll love"
- [ ] Large, high-quality screenshots or mockups of the app
- [ ] Show multiple views: Today view, Inbox, Project detail
- [ ] Interactive element: tabs or carousel to switch between views
- [ ] Browser-frame mockup wrapper for screenshots
- [ ] Subtle shadow and depth effects
- [ ] Responsive: full-width on mobile, centered with padding on desktop
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

**Component Reference:**
- Cards from `/Users/kerone/Downloads/Aceternity UI Pro/component-packs/cards/`

### US-006: Social Proof / Trust Section

**Description:** As a user, I want to see that others trust and use Petal GTD.

**Acceptance Criteria:**

- [ ] Display trust indicators (can be placeholder for now)
- [ ] "Trusted by X+ productive people" counter
- [ ] Optional: logo cloud of companies/tools that integrate
- [ ] Optional: featured testimonial quote
- [ ] Minimalist design that doesn't distract from main content
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

**Component Reference:**
- Logo clouds from `/Users/kerone/Downloads/Aceternity UI Pro/component-packs/logo-clouds/`
- Testimonials from `/Users/kerone/Downloads/Aceternity UI Pro/component-packs/testimonials/`

### US-007: Call-to-Action Section

**Description:** As a user, I want a clear final call-to-action before the footer to encourage signup.

**Acceptance Criteria:**

- [ ] Compelling headline: "Ready to get things done?"
- [ ] Brief value proposition reminder
- [ ] Large, prominent "Get Started Free" button
- [ ] Secondary text: "No credit card required" or similar
- [ ] Visually distinct section (gradient background or card style)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

**Component Reference:**
- CTA sections from `/Users/kerone/Downloads/Aceternity UI Pro/component-packs/cta-sections/`

### US-008: Footer Component

**Description:** As a user, I want a footer with useful links and information.

**Acceptance Criteria:**

- [ ] Petal GTD logo and brief tagline
- [ ] Navigation links: Features, Pricing, About, Contact
- [ ] Legal links: Privacy Policy, Terms of Service
- [ ] Social media icons (placeholder links)
- [ ] Copyright notice with current year
- [ ] Clean, minimal design consistent with page style
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

**Component Reference:**
- Footers from `/Users/kerone/Downloads/Aceternity UI Pro/component-packs/footers/`

### US-009: Responsive Design & Polish

**Description:** As a user, I want the landing page to work well on all devices.

**Acceptance Criteria:**

- [ ] Test and fix layout issues on mobile (< 640px)
- [ ] Test and fix layout issues on tablet (640px - 1024px)
- [ ] Test and fix layout issues on desktop (> 1024px)
- [ ] Ensure touch-friendly tap targets on mobile
- [ ] Verify all animations are performant (no jank)
- [ ] Add smooth scroll behavior for anchor links
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-010: Dark Mode Support

**Description:** As a user, I want the landing page to support dark mode to match my system preference.

**Acceptance Criteria:**

- [ ] Implement dark mode using `next-themes` or Tailwind dark mode
- [ ] All sections properly styled for both light and dark modes
- [ ] Theme toggle in navbar (optional, can default to system)
- [ ] Smooth transition between themes
- [ ] Images/mockups adapted for both themes (or use neutral backgrounds)
- [ ] Typecheck passes
- [ ] Verify in browser using dev-browser skill

### US-011: SEO & Meta Tags

**Description:** As a developer, I need to configure SEO meta tags for better discoverability.

**Acceptance Criteria:**

- [ ] Configure page title: "Petal GTD - Beautiful Task Management"
- [ ] Add meta description highlighting key benefits
- [ ] Configure Open Graph tags for social sharing
- [ ] Add favicon and app icons
- [ ] Configure sitemap.xml (optional for MVP)
- [ ] Typecheck passes

## Functional Requirements

### Layout & Structure

- FR-1: Landing page must be a single-page design with smooth section scrolling
- FR-2: Navigation must be sticky and visible on all viewport sizes
- FR-3: All interactive elements must have visible focus states for accessibility
- FR-4: Page must load within 2 seconds on 4G connection

### Visual Design

- FR-5: Primary color palette: Clean whites/grays with blue accent (Things 3-inspired)
- FR-6: Typography: Sans-serif font (Inter or SF Pro), clear hierarchy
- FR-7: Consistent spacing using 8px grid system
- FR-8: Border radius: rounded-lg (8px) for cards, rounded-full for buttons

### Interaction

- FR-9: CTA buttons must have hover and active states
- FR-10: Smooth scroll animation when clicking navigation links
- FR-11: Subtle entrance animations for sections as they come into view
- FR-12: Hero background animation must not affect performance

## Non-Goals (Out of Scope)

- Actual authentication/signup functionality (links to separate app)
- Pricing page (can be added later)
- Blog or content pages
- Internationalization (i18n)
- A/B testing infrastructure
- Analytics integration
- Contact form backend
- CMS integration

## Design Considerations

### UI/UX Principles

- **Minimalism**: Remove visual clutter, focus on essential content
- **Clarity**: Every element should serve a purpose
- **Consistency**: Use design tokens for colors, spacing, typography
- **Accessibility**: WCAG 2.1 AA compliance target

### Aceternity Components to Use

From `/Users/kerone/Downloads/Aceternity UI Pro/component-packs/`:

1. **Hero Section**: `hero/hero-1.tsx` or `hero/hero-3.tsx` (with beams/grid)
2. **Features**: `feature-sections/1.tsx` (bento grid) or `feature-sections/2.tsx`
3. **Backgrounds**: `backgrounds/` (grid patterns, beams)
4. **CTA**: `cta-sections/1.tsx` or `cta-sections/2.tsx`
5. **Testimonials**: `testimonials/1.tsx` (if adding social proof)
6. **Footer**: `footers/` (clean minimal footer)

### Reference Template

The Agenlabs Agency Template (`/Users/kerone/Downloads/Aceternity UI Pro/templates/agenlabs-agency-template/`) provides a good structural reference for:
- Page layout composition
- Component organization
- Container wrapper usage
- Responsive patterns

## Technical Considerations

### Dependencies

```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "framer-motion": "^11.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x",
    "next-themes": "^0.x",
    "react-wrap-balancer": "^1.x"
  }
}
```

### Project Structure

```
petal-ai-landing/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Showcase.tsx
│   ├── SocialProof.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── button.tsx
│       ├── container.tsx
│       └── ...
├── lib/
│   └── utils.ts
├── constants/
│   ├── features.ts
│   └── navigation.ts
├── public/
│   ├── images/
│   │   └── app-screenshots/
│   └── favicon.ico
└── tailwind.config.ts
```

### Performance

- Use Next.js Image component for optimized images
- Lazy load below-the-fold sections
- Minimize JavaScript bundle with dynamic imports
- Use CSS animations where possible over JS animations

## Success Metrics

- Page loads in under 2 seconds
- Lighthouse Performance score > 90
- Lighthouse Accessibility score > 90
- CTA buttons are visible without scrolling on desktop
- Mobile navigation is intuitive and functional
- All sections render correctly on Chrome, Safari, Firefox

## Open Questions

1. Do we have actual app screenshots/mockups to use, or should we create placeholder designs?
2. Is there an existing logo for Petal GTD, or should we design one?
3. What is the signup URL for the main application?
4. Should we include a pricing section in this initial version?
5. Are there any existing testimonials or user feedback to feature?
