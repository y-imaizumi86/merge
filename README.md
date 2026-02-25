# MERGE

**Slide. Combine. Conquer.**
A modern 2048 puzzle game built with Vue 3 and Nuxt, designed as a PWA for seamless mobile play.

## ✨ Features

- **Classic 2048 Gameplay:** Slide tiles to merge matching numbers and reach the highest score.
- **Keyboard & Swipe Controls:** Play with arrow keys on desktop or swipe gestures on mobile.
- **Tile Animations:** Smooth pop-in effects for new and merged tiles.
- **PWA Ready:** Installable as a native-like app on any device.
- **Responsive Design:** Optimized for both desktop and mobile screens.

## 🛠 Tech Stack

![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Nuxt](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxt&logoColor=#00DC82)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

- **Framework:** [Nuxt](https://nuxt.com/) (v4)
- **UI Library:** [Vue 3](https://vuejs.org/) (Composition API)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Utilities:** [VueUse](https://vueuse.org/) (Swipe detection)
- **Font:** [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)
- **PWA:** [@vite-pwa/nuxt](https://vite-pwa-org.netlify.app/frameworks/nuxt)
- **Package Manager:** [Bun](https://bun.sh/)
- **Deployment:** Cloudflare Pages

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `bun install`      | Installs dependencies                        |
| `bun run dev`      | Starts local dev server at `localhost:3000`  |
| `bun run build`    | Build your production site                   |
| `bun run preview`  | Preview your build locally, before deploying |
| `bun run lint`     | Run ESLint & Stylelint                       |
| `bun run lint:fix` | Auto-fix lint issues                         |

## 📂 Project Structure

```text
/
├── app/
│   ├── app.vue              # Root component
│   ├── components/
│   │   ├── GameBoard.vue     # 4×4 grid board
│   │   ├── GameTile.vue      # Individual tile with dynamic colors
│   │   ├── GameHeader.vue    # Score display & restart button
│   │   └── GameOverlay.vue   # Game over overlay
│   └── composables/
│       └── useGameBoard.ts   # Core game logic & state management
├── public/                   # Static assets (icons, favicon)
├── tailwind.config.ts        # Custom theme (2048 color palette)
└── nuxt.config.ts            # Nuxt & PWA configuration
```
