# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal resume website built with **Next.js 14** and deployed to **GitHub Pages**. The site showcases Kittinan Kannahong's portfolio with sections for profile, about, skills, and experiences. It features a dark theme with red accent colors and smooth scrolling animations.

## Development Commands

### Basic Development
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Deployment
The project automatically deploys to GitHub Pages via GitHub Actions workflow when pushing to the `main` branch.

## Architecture & Project Structure

### Key Architecture Decisions
- **Static Export**: Configured for GitHub Pages deployment with `images.unoptimized: true`
- **Base Path**: Originally configured for `/tii-kittinan-pages` (currently commented out)
- **Client-Side Routing**: Uses hash-based navigation with smooth scrolling
- **Font Loading**: Uses Google Fonts (Archivo Black, Kode Mono) with custom CSS imports

### Directory Structure
```
app/
├── layout.js              # Root layout with Navbar and Footer
├── page.js               # Main page with section routing
├── globals.css           # Global styles, animations, and Tailwind config
├── components/           # Organized component structure
│   ├── layout/           # Layout components
│   │   ├── Navbar.js     # Navigation with responsive mobile menu
│   │   └── Footer.js     # Footer component
│   ├── sections/         # Page section components
│   │   ├── Yourself.js   # Hero/Profile section
│   │   ├── Abort.js      # About section
│   │   ├── Skills.js     # Skills section
│   │   └── Experiences.js # Experience/project section
│   ├── ui/               # Reusable UI components
│   │   ├── Imageprofire.js # Profile image component
│   │   ├── Loading.js    # Loading component
│   │   └── icons/        # Custom skill icon components
│   │       ├── Icondjango.js, Iconnext.js, etc.
│   └── gallery/          # Image gallery components
│       └── Internship.js # Internship photos carousel
```

### Public Assets Structure
```
public/image/
├── resume_kittinan.pdf              # Downloadable resume
├── icontitle/icons8.png             # Favicon
├── internshipall/                   # Internship photos
├── HealthCalendar/                  # Health Calendar project screenshots
├── esp32cam/                        # ESP32 Cam project screenshots
├── rice/                           # Rice disease detection project
└── projectclude/                   # Projectclude screenshots
```

## Key Implementation Details

### Navigation System
- Uses smooth scrolling with `scrollIntoView({ behavior: "smooth" })`
- URL hash cleanup with `history.replaceState()` after navigation
- Mobile-responsive hamburger menu with animations
- Active section highlighting

### Styling System
- **Tailwind CSS** with **DaisyUI** plugin
- Custom CSS animations defined in `globals.css`
- Dark theme with red accent colors (`#red-600`, `#red-500`)
- Custom font families: Archivo Black (headers), Kode Mono (body)

### Image Handling
- Next.js Image component with `unoptimized: true` for GitHub Pages
- Organized in `/public/image/` with project-specific folders
- Path references use absolute paths from public directory

### Animations
- Custom keyframes: `slideInUp`, `fadeInScale`, `bounceIn`, `fade-in`
- Staggered animation delays for sequential element reveals
- Scroll-triggered animations using CSS classes and inline delays

## Important Configuration

### Next.js Config (next.config.mjs)
- Static export configuration for GitHub Pages
- Image optimization disabled for compatibility
- Base path configuration (commented out when not needed)

### Tailwind Config
- Custom font families configured
- DaisyUI plugin integration
- Extended theme with gradient backgrounds

### GitHub Actions Workflow
- Automatic deployment on push to main branch
- Next.js static site generation
- Outputs to `./out` directory for Pages deployment

## Development Notes

### Path References
- Image paths in components use `/` prefix (referencing public directory)
- Some components reference `/tii-kittinan-pages/` base path (for deployment)
- Resume download link: `/image/resume_kittinan.pdf`

### Component Patterns
- All components use `'use client'` directive for client-side interactivity
- Consistent use of Tailwind classes with responsive breakpoints
- Custom icon components for tech stack visualization

### Animation Usage
- Elements use opacity-0 with animation classes for fade-in effects
- Sequential delays create staggered reveal animations
- Hover states and transitions throughout the interface