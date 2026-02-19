# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

---

## Project Overview

Single-page portfolio site for a frontend engineer. Magazine/editorial style — typography-forward, smart, clean. See `PRD.md` for full requirements and `mockups/` for visual reference.

---

## Critical Rules

**These rules are non-negotiable. Violations will require immediate refactoring.**

### 1. Design Fidelity

All UI code MUST adhere to the design tokens and visual direction defined in this file and `PRD.md`. Do not introduce colors, fonts, or spacing that deviate from the system.

### 2. Git Workflow

- **ALWAYS** create a new branch for feature development
- Branch naming: `feature/<section-name>`, `fix/<bug-name>`, `refactor/<scope>`
- **NEVER** commit directly to `main`

### 3. Pre-Commit Checklist

Before committing ANY work, **ALL** of these must pass:

```bash
npm run lint      # Zero errors, zero warnings
npm run build     # Successful production build
```

### 4. Component Architecture

- **Server Components by default.** Only add `"use client"` when the component needs interactivity (event handlers, Framer Motion, hooks).
- **One component per file.** Keep components focused on a single responsibility.
- **Composition over complexity.** Prefer small, composable pieces over monolithic components.

### 5. Accessibility

- WCAG 2.1 AA compliance is required, not optional
- All images need descriptive alt text
- All interactive elements need keyboard support
- Respect `prefers-reduced-motion` for all animations

---

## Quick Reference

### Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Run production server
npm run lint         # Run ESLint

# Git Workflow
git checkout -b feature/<name>    # Create feature branch
npm run lint && npm run build     # Verify before commit
git add <files>                   # Stage specific files
git commit -m "feat: description" # Commit with conventional message
```

### Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

feat:     New feature or section
fix:      Bug fix
refactor: Code change that neither fixes nor adds
style:    Formatting, Tailwind changes, no logic change
docs:     Documentation only
chore:    Maintenance tasks, dependency updates
```

---

## Tech Stack

| Layer       | Choice                          |
| ----------- | ------------------------------- |
| Framework   | Next.js (App Router)            |
| Language    | TypeScript (strict mode)        |
| Styling     | Tailwind CSS                    |
| Animation   | Framer Motion                   |
| Fonts       | Playfair Display + Inter via `next/font/google` |
| Deployment  | Vercel                          |

---

## Design Tokens

Use these exact values. They MUST be configured in `tailwind.config.ts` as custom theme extensions.

| Token        | Value     | Usage                                      |
|--------------|-----------|--------------------------------------------|
| `cream`      | `#FAFAF5` | Page background                            |
| `charcoal`   | `#1A1A1A` | Primary text                               |
| `deep-blue`  | `#1E3A5F` | Accent — CTAs, links, interactive elements |
| `sage`       | `#8B9D8B` | Secondary — muted text, subtle accents     |
| `warm-gray`  | `#EDEAE5` | Dividers, card backgrounds, borders        |

### Typography

| Role        | Font             | Usage                              |
|-------------|------------------|------------------------------------|
| Headings    | Playfair Display | Section titles, hero name, serif   |
| Body        | Inter            | Paragraphs, nav, UI text           |
| Accents     | Monospace        | Tech tags, code references         |

---

## Architecture

### Directory Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, global styles
│   ├── page.tsx          # Single page — composes all sections
│   └── globals.css       # Tailwind directives + custom styles
│
├── components/
│   ├── sections/         # One file per page section
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── SkillsExperience.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Resume.tsx
│   │   └── Footer.tsx
│   ├── ui/               # Shared reusable components
│   └── index.ts          # Barrel exports
│
├── data/                 # Static content (projects, skills, experience)
│
└── lib/                  # Utility functions, helpers
    └── hooks/            # Custom React hooks

public/
├── resume.pdf            # Downloadable resume
└── images/               # Project screenshots, portrait photo
```

### Import Conventions

Use `@/*` for all imports from `src/`:

```typescript
// Good
import { Hero } from '@/components';
import { projects } from '@/data/projects';

// Bad
import Hero from '../../../components/sections/Hero';
```

Components are barrel-exported from `src/components/index.ts`:

```typescript
// Good — single import for multiple components
import { Navbar, Hero, About, Footer } from '@/components';

// Acceptable — direct import for single component
import Hero from '@/components/sections/Hero';
```

---

## Section Order & Navigation

### Page Sections

Hero → About → Skills & Experience → Projects → Contact → Resume → Footer

### Nav Anchors

About, Experience, Projects, Contact, Resume

Each section component should have an `id` prop matching its anchor name for smooth scroll navigation.

---

## Code Patterns

### Section Component Template

```typescript
// src/components/sections/SectionName.tsx
import { motion } from 'framer-motion';

export default function SectionName() {
  return (
    <section id="section-anchor" className="py-24 px-6 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section content */}
      </motion.div>
    </section>
  );
}
```

### Responsive Approach

Mobile-first with Tailwind breakpoints:

```typescript
// Good — mobile first, then scale up
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Bad — desktop first
<div className="grid grid-cols-3 sm:grid-cols-1">
```

### Content Placeholders

Sections that need personal content should use realistic placeholder text with clear markers:

```typescript
// Good — realistic placeholder with TODO
const bio = "I'm a frontend engineer with 5+ years of experience..."; // TODO: Replace with actual bio

// Bad — lorem ipsum
const bio = "Lorem ipsum dolor sit amet...";
```

---

## Animation Guidelines

| Interaction        | Approach                                                                 |
|--------------------|--------------------------------------------------------------------------|
| Scroll reveal      | `whileInView` + fade-in + slide-up (12–20px). Use `once: true`.         |
| Hero parallax      | `useMotionValue` + `useTransform` tracking mouse position.              |
| Project expansion  | `AnimatePresence` + `layout` prop. One expanded at a time.              |
| Hover states       | Subtle scale (1.02–1.05) or color transition.                           |
| Transitions        | 0.3s–0.6s duration. `ease` or low-bounce spring.                        |
| Touch devices      | Disable cursor-driven effects. Fall back to static layout.              |
| Reduced motion     | Wrap all motion in `prefers-reduced-motion` checks. Respect user prefs. |

---

## Adding a New Section or Feature

### Checklist

1. [ ] Create feature branch: `git checkout -b feature/<name>`
2. [ ] Create component in `src/components/sections/` or `src/components/ui/`
3. [ ] Export from `src/components/index.ts`
4. [ ] Add to page composition in `src/app/page.tsx`
5. [ ] Add static data to `src/data/` if needed
6. [ ] Ensure responsive behavior (mobile → tablet → desktop)
7. [ ] Verify accessibility (keyboard nav, screen reader, alt text)
8. [ ] Run `npm run lint` — must pass with zero errors
9. [ ] Run `npm run build` — must succeed
10. [ ] Commit with conventional commit message
