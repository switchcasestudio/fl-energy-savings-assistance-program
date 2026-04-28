# Energy Efficiency Saving Foundation — Landing Page

Single-page React landing page built with Vite.

## Stack

- React 18
- Vite 5
- CSS Modules (scoped per component)
- Plain `.js` files (JSX enabled via Vite config)

## Setup

```bash
npm install
npm run dev
```

Open <http://localhost:5173>.

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/
│   ├── icons/          # Inline SVG icon components
│   ├── TopBar/
│   ├── Header/
│   ├── Hero/
│   ├── Programs/
│   │   └── ProgramCard/
│   ├── HowItWorks/
│   │   └── Step/
│   ├── CTA/
│   └── Footer/
├── data/               # Static content (programs, steps)
├── hooks/              # Custom hooks (useReveal)
├── styles/
│   ├── tokens.css      # Design tokens / CSS variables
│   └── global.css      # Reset + base styles
├── App.js
└── main.js
```

## Design tokens

All colors, fonts, and spacing live in `src/styles/tokens.css`. Edit there to retheme.
