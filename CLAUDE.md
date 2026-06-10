# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal resume website built with **Next.js 14** (App Router) and deployed to **GitHub Pages**. The site showcases Kittinan Kannahong's portfolio with sections for profile, about, skills, and experiences. It features a dark theme with red accent colors and smooth scrolling animations.

**Technology Stack:**
- Next.js 14.2.4 with static site generation
- React 18 with `'use client'` directive throughout
- Tailwind CSS + DaisyUI for styling
- Lucide React, FontAwesome, and React Icons for iconography
- React Slick for image carousels

## Development Commands

### Basic Development
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build production version (outputs to `./out` directory)
- `npm run start` - Start production server (note: not typically used with static export)
- `npm run lint` - Run ESLint

### Deployment
The project automatically deploys to GitHub Pages via GitHub Actions workflow (`.github/workflows/nextjs.yml`) when pushing to the `main` branch. The workflow:
- Detects npm as package manager
- Uses Node.js 20
- Builds static site with `next build`
- Deploys `./out` directory to GitHub Pages

## Architecture & Project Structure

### Key Architecture Decisions
- **Static Export**: Configured for GitHub Pages deployment with `images.unoptimized: true`
- **Base Path**: Originally configured for `/tii-kittinan-pages` (currently commented out)
- **Client-Side Routing**: Uses hash-based navigation with smooth scrolling
- **Font Loading**: Uses Google Fonts (Archivo Black, Kode Mono) with custom CSS imports

### Directory Structure
```
app/
├── layout.js              # Root layout with Navbar, Footer, ThemeProvider
├── page.js               # Main page — imports and renders all sections
├── globals.css           # Tailwind base + animation keyframes
├── contexts/
│   └── ThemeContext.js   # Dark/light theme toggle (localStorage + system pref)
├── hooks/
│   └── useIntersectionObserver.js  # Scroll animation hooks (see below)
└── components/
    ├── layout/
    │   ├── Navbar.js     # Navigation with active-section indicator (IntersectionObserver)
    │   └── Footer.js     # Footer with social links
    ├── sections/
    │   ├── Hero.js       # Hero/profile section (replaces Yourself.js)
    │   ├── About.js      # About + education timeline (replaces Abort.js)
    │   ├── Skills.js     # Tab-based tech stack grid
    │   └── Projects.js   # Project cards + modal (replaces Experiences.js)
    └── ui/
        ├── ProfileImage.js  # Profile image with gradient ring (replaces Imageprofire.js)
        └── Loading.js       # Loading component
```

> **Legacy files kept but unused:** `Yourself.js`, `Abort.js`, `Experiences.js`, `Imageprofire.js`

### Public Assets Structure
```
public/image/
├── resume_kittinan.pdf              # Downloadable resume (also at app/resumefile/)
├── icontitle/icons8.png             # Favicon
├── internshipall/                   # Internship photos
├── HealthCalendar/                  # Health Calendar project screenshots
├── esp32cam/                        # ESP32 Cam project screenshots
├── rice/                            # Rice disease detection project
├── projectclude/                    # Projectclude screenshots
├── smart-spender/                   # Smart Spender project (filenames have spaces — use encodeURIComponent)
└── ics-test/                        # ICS test project (1.png, 2.png, 3.jpg)
```

## Key Implementation Details

### Client-Side Architecture
**CRITICAL:** All components in this project use `'use client'` directive. This is intentional and necessary because:
- Navigation uses hash-based smooth scrolling with DOM manipulation
- Interactive components (mobile menu, animations, carousels) require browser APIs
- No server components are used despite Next.js 14 App Router

### Navigation System
The site uses a custom hash-based navigation system:
- **Navbar** (`app/components/layout/Navbar.js`): Handles section scrolling via `scrollIntoView({ behavior: "smooth" })`
- **URL Cleanup**: After navigation, `history.replaceState()` clears hash/path to keep URL clean
- **Initial Load**: `app/page.js` includes `useEffect` that checks URL path/hash on mount and scrolls to appropriate section
- **Mobile Menu**: Animated hamburger menu with staggered item reveals

### Styling System
- **Tailwind CSS** with **DaisyUI** plugin for component styles
- Custom CSS animations defined in `app/globals.css` (keyframes: `slideInUp`, `fadeInScale`, `bounceIn`, `fade-in`)
- Dark theme background: `bg-[#181818]` with red accents (`red-600`, `red-500`)
- **Custom Fonts**: Google Fonts imported via CSS
  - `Archivo Black` - Headings/titles
  - `Kode Mono` - Body text (monospace style)
- Font variables available: `--font-kode-mono`, `--font-archivo-black`

### Image Handling
- **Next.js Image component** with `unoptimized: true` (required for GitHub Pages static export)
- Images stored in `/public/image/` directory
- **Critical for GitHub Pages**: `next.config.mjs` sets `output: "export"` and `images.unoptimized: true`
- Project-specific subdirectories: `internshipall/`, `HealthCalendar/`, `esp32cam/`, `rice/`, `projectclude/`

### Theme System
`app/contexts/ThemeContext.js` provides dark/light mode:
- Reads from `localStorage` on mount, falls back to `prefers-color-scheme`
- Toggles `dark` class on `document.documentElement` (Tailwind `darkMode: 'class'`)
- `ThemeProvider` wraps the root layout; consume with `useTheme()` hook

### Custom Scroll Hooks (`app/hooks/useIntersectionObserver.js`)
Four hooks for scroll-triggered animations:
- `useIntersectionObserver(animationClass, options)` — single element, adds class when visible
- `useStaggeredIntersection(count, baseClass, staggerDelay, options)` — multiple elements with timed delay
- `useParallax(speed)` — returns `transform` style for parallax effects
- `useScrollFade(threshold)` — fades element based on scroll direction

### Animation Patterns
The project uses a consistent animation pattern:
- Elements start with `opacity-0` class
- Animation classes applied with inline style delays for staggered effects
- Example pattern: `className="opacity-0 animate-slideInUp" style={{ animationDelay: '0.1s' }}`
- Hover transitions on interactive elements (buttons, nav items, cards)

## Important Configuration

### Next.js Config (next.config.mjs)
```javascript
{
  output: "export",           // Static export for GitHub Pages
  images: {
    unoptimized: true,        // Required for static export
  },
  // basePath: "/tii-kittinan-pages",  // Uncomment when deploying to subpath
}
```

### GitHub Actions Workflow (.github/workflows/nextjs.yml)
- Triggers on push to `main` branch
- Uses Node.js 20 with npm
- Caches `.next/cache` for faster builds
- Deploys `./out` directory to GitHub Pages
- Allows one concurrent deployment (does not cancel in-progress runs)

## Common Development Tasks

### Adding a New Section
1. Create component in `app/components/sections/`
2. Add section in `app/page.js` with unique `id` attribute
3. Add navigation item to `menuItems` array in `app/components/layout/Navbar.js`
4. Apply consistent styling pattern (max-width, rounded, shadow, margin)

### Updating Images
- Place images in `/public/image/` with descriptive subdirectories
- Reference with `/image/your-path` (leading slash is critical)
- Use `Image` component from Next.js with `unoptimized` prop if needed
- Example: `/image/projectclude/screenshot.png`

### Modifying Animations
- Animation keyframes defined in `app/globals.css`
- Add custom keyframes following existing pattern
- Apply with inline delay: `style={{ animationDelay: '0.2s' }}`
- Base animation class: `opacity-0 animate-[animationName]`

### Working with Icons
- **Lucide React** (primary): Used in Navbar and throughout UI
- **FontAwesome**: Available via `@fortawesome/react-fontawesome`
- **React Icons**: Alternative icon library

## Important Notes

### Static Export Considerations
- This is a **static site** - no API routes, server actions, or dynamic routing
- All interactivity must be client-side (hence `'use client'` everywhere)
- Build output is in `./out` directory, not standard `.next`
- Test builds locally with `npm run build` before pushing

### Path Reference Gotchas
- Image paths must start with `/` (absolute from public directory)
- Some legacy code references `/tii-kittinan-pages/` base path - update these when adding basePath
- Resume download: `/image/resume_kittinan.pdf`
- Favicon path currently has typo: `/icon?/image/...` (should be `/image/`)

### Component Styling Patterns
- Container pattern: `max-w-screen-xl mx-auto rounded-2xl shadow-2xl mb-10`
- Text colors: `text-gray-300` for body, `text-red-600` for accents
- Hover states: `hover:text-red-400`, `transition-colors duration-300`
- Red accent borders: `border-red-600/30` (30% opacity)
- Backdrop blur: `backdrop-blur-md` for overlays
