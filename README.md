# KAZ — Minimal Pixel / Retro-Game Developer Portfolio

A responsive, keyboard-accessible personal developer portfolio for **Mohammad Kazim (KAZ)**, built with **React 18**, **TypeScript** (strict mode), **Vite**, and **Tailwind CSS** in an authentic 8-bit / retro-arcade HUD aesthetic.

---

## 👾 Visual & Interaction Design System

- **Color Palette**:
  - Background: `#0A0A0A`
  - Panels & Cards: `#111111`
  - Primary Text: `#E8E8E0`
  - Muted Text: `#6B6B66`
  - Borders & Dividers: `2px solid #2A2A2A`
  - Pixel Accent: `#7CFF6B` (Retro terminal green — used exclusively for the caret, the hero name accent, interactive hover states, active quest badges, and the primary email link)
- **Typography**:
  - Headings & HUD: `Press Start 2P` (Google Fonts, uppercase, small pixel scale)
  - Body & Descriptions: `VT323` (Google Fonts, 24px, rendered with `image-rendering: pixelated` and `-webkit-font-smoothing: none`)
- **Pixel Geometry**:
  - Hard pixel shadows (`4px 4px 0 ...`) with 0 blur
  - Strict square borders (`border-radius: 0`)
  - No gradients, blurs, or glow effects
  - Stepped animations (`steps(1)`, `steps(2)`, `steps(4)`) for authentic retro-game display refresh
- **Accessibility & Motion**:
  - Respects `prefers-reduced-motion` across all components (disables typewriter cycling, eliminates motion delays, shows static text immediately)
  - Full keyboard accessibility with high-contrast `2px #7CFF6B` focus outlines
  - Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)

---

## 📁 Project Structure

```
kaz-portfolio/
├── index.html               # Entry HTML with Google Fonts & viewport configuration
├── package.json             # React 18, Vite, TypeScript, Tailwind CSS
├── postcss.config.js        # PostCSS configuration with Tailwind & Autoprefixer
├── tailwind.config.js       # Color tokens, pixel fonts, custom stepped easings
├── tsconfig.json            # Strict TypeScript compiler options
├── tsconfig.node.json       # Node environment compiler options
├── vite.config.ts           # Vite configuration with relative base path (./) for GitHub Pages
└── src/
    ├── main.tsx             # React DOM root entry
    ├── App.tsx              # Single-page semantic application shell
    ├── index.css            # CSS variables, typography, pixel rules, animations
    ├── theme/
    │   └── tokens.ts        # Design tokens as typed constants
    ├── config/
    │   ├── site.ts          # Personal data: name, lede, location, availability, links
    │   ├── quests.ts        # Typed quest list (Draft Arena, StudyNotion, etc.)
    │   ├── inventory.ts     # Skills grouped by category (Frontend, Backend, Workflow)
    │   └── typewriter.ts    # Hero typewriter strings and interval timings
    ├── hooks/
    │   ├── useReducedMotion.ts  # Media query listener for prefers-reduced-motion
    │   ├── useTypewriter.ts     # Stepped typewriter controller with auto-loop
    │   └── usePopIn.ts          # IntersectionObserver stepped viewport pop-in hook
    └── components/
        ├── Hud.tsx              # Sticky top HUD header with 720px responsive navigation
        ├── Hero.tsx             # Player 1 badge, 3-line name, typewriter, lede, buttons
        ├── Typewriter.tsx       # Cycling typewriter element with blinking pixel block caret
        ├── QuestLog.tsx         # Quest log section with active quest counter
        ├── QuestCard.tsx        # Stepped hover quest card with tags & status badges
        ├── Inventory.tsx        # Inventory section
        ├── InventoryGroup.tsx   # Skill category slots with responsive grid
        ├── Contact.tsx          # "Continue?" section with email link & external buttons
        ├── Footer.tsx           # Pixel HUD footer
        ├── PixelButton.tsx      # Reusable 4px hard-shadow button with press-down motion
        └── Pop.tsx              # Viewport reveal wrapper utilizing steps(4) keyframes
```

---

## 🚀 Setup & Development

### 1. Installation
Install project dependencies:
```bash
npm install
```

### 2. Development Server
Start the local Vite dev server:
```bash
npm run dev
```
Open `http://localhost:3000` (or the port Vite outputs) in your browser.

### 3. Production Build
Compile TypeScript and generate an optimized production bundle:
```bash
npm run build
```
This builds static assets into the `dist/` directory.

### 4. GitHub Pages Deployment
Because `vite.config.ts` has `base: './'`, the generated `dist/` directory can be published directly to GitHub Pages, Netlify, Vercel, or any static host without configuration modifications.

---

## 🛠️ Customization & Scalability Guide

### How to Add a New Quest
All quests are configured in `src/config/quests.ts`. Simply add a new object to the `quests` array:

```typescript
// src/config/quests.ts
export const quests: readonly Quest[] = [
  // Existing quests...
  {
    id: 'QUEST 03',
    title: 'Your Project Title',
    description: 'Brief description of the project, architecture, and features.',
    tags: ['React', 'TypeScript', 'Node.js'],
    status: 'active', // 'active' renders "In progress" with green accent border
                      // 'dev' renders "In dev" with muted border
  },
];
```
The active quest counter in the Quest Log heading (`X active`) updates automatically.

### How to Update Skills / Inventory
Skills are defined in `src/config/inventory.ts`. You can add items or new categories:

```typescript
// src/config/inventory.ts
export const inventoryGroups: readonly InventoryGroup[] = [
  {
    label: 'Frontend',
    items: [
      { name: 'React', category: 'lib' },
      { name: 'Vue', category: 'lib' }, // Added skill
    ],
  },
  // Add an entire new group if needed:
  {
    label: 'DevOps',
    items: [
      { name: 'Docker', category: 'container' },
      { name: 'AWS', category: 'cloud' },
    ],
  },
];
```

### How to Change Contact Details & Social Links
All contact details and social media profiles are centralized in `src/config/site.ts`:

```typescript
// src/config/site.ts
export const siteConfig: SiteConfig = {
  // Update email, GitHub, LinkedIn:
  email: 'your-email@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  // ...
};
```

### How to Update the Resume
Replace public/resume.pdf to update your resume. The site links to /resume.pdf automatically.
If `public/resume.pdf` is missing at build time, the site still builds without errors. Simply place your resume PDF at `public/resume.pdf`.

### How to Modify the Hero Typewriter Phrases
Change the cycling lines in `src/config/typewriter.ts`:

```typescript
// src/config/typewriter.ts
export const typewriterLines: readonly string[] = [
  'fullstack developer',
  'react · typescript · node',
  'building things that ship',
];
```

---

## 📱 Responsive Testing Breakpoints

The design is optimized and verified across viewports:
- **Mobile (375px)**: HUD navigation hides automatically; hero and quest cards stack into a clean single column.
- **Tablet (768px)**: HUD navigation is displayed; quest cards show status badges in the top right.
- **Desktop (1040px - 1280px+)**: Constrained to a max width of 1040px with 24px side gutters for optimal pixel sharpness.
