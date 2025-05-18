![logo.png](src/public/logo.png){width=30%}

# PokéNuxt – Take‑Home Challenge

Welcome! Your mission is to build **PokéNuxt**—a Nuxt 3 web app styled with UnoCSS (Tailwind‑like) that fetches data from the public [PokeAPI](https://pokeapi.co).  
The project is intentionally scoped so you can complete it in about four days. Feel free to install **any dependency** that helps you.

We recommend you to use **Typescript** for the whole project, but it’s not mandatory.

---

## 🚀 Quick Start

1. Clone the repository you received (it already contains Nuxt, UnoCSS and testing boilerplate).
2. Install deps:

        yarn install

3. Launch dev server:

        yarn dev

4. Build & preview:

        yarn build
        yarn preview

---

## 🗺️ What to Build

| # | Feature                                                                                      | Why we ask for it                 |
|---|----------------------------------------------------------------------------------------------|-----------------------------------|
| 1 | **Pokémon list** (paginated).                                                                | Shows data handling               |
| 2 | **Search / filter** by name **and** type.                                                    | Tests composables & derived state |
| 3 | **Detail page** at `/pokemon/[name]` displaying artwork, base stats and types.               | Checks dynamic routing            |
| 4 | **SSR buildable** (`yarn build`)                                                             | Verifies server-side rendering    |
| 5 | **Responsive UI** using UnoCSS utilities.                                                    | Evaluates styling approach        |
| 6 | **Accessibility basics**: semantic landmarks, focus states.                                  | Good product hygiene              |
| 7 | **Unit tests** for at least one composable *and* one component of your choice. (`yarn test`) | Shows quality mindset             |

---

## ✨ Bonus Ideas (completely optional)

* Infinite scroll
* Dark/light mode toggle
* E2E tests (Playwright / Cypress)
* CI pipeline (lint + test + deploy on push)
* Internationalization (English + one more language)
* Stats radar chart

---

## 🆘 Nuxt / Vue Crash‑Course

* **Pages directory** ➜ file‑based routing (`/pages/pokemon/[name].vue`).
* **`script setup`** ➜ Composition API + `<template>` in one file.
* **`useFetch(url)`** ➜ SSR‑friendly wrapper around `$fetch`.
* **Pinia** ➜ lightweight global store (`defineStore`).
* **UnoCSS** ➜ Tailwind‑style utilities—class names like `bg-red-500 p-4 rounded-md`.
* **Testing** ➜ Vitest + Vue Test Utils are pre‑installed; run `yarn test`.

---

## 📦 Useful Commands

        yarn dev             # Start dev server with HMR

        yarn test            # Run unit tests with Vitest

        yarn build           # Build for production
        yarn preview         # Preview production build

        yarn lint            # Check code style
        yarn lint:fix        # Fix code style

---

## 📨 Submission

1. Push code to **your own** Git repo, on the platform of your choice (GitHub, GitLab, etc.)
2. Send us the link to your repo so we can review the challenge. Make sure we can access it. 😊

---

Good luck & have fun! 🍀

![Pikachu](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png)


**Pages:**
1. - Home page showing the paginated list of Pokémon with a loading overlay `index.vue`
2. - Dynamic Pokémon detail page showing individual Pokémon information with loading and error states `[id].vue`

**Components:**
1. - Grid display of Pokémon cards with: `PokemonList.vue`
- Responsive grid layout
- Empty state handling
- Accessible grid structure
- Card hover effects

2. - Reusable component for displaying Pokémon sprites: `PokemonSprite.vue`
- Handles both regular and shiny sprites
- Lazy loading of images
- Accessible image descriptions
- Fallback handling when URL is not available

3. - Button component that: `RandomPokemonButton.vue`
- Generates random Pokémon selection
- Navigates to random Pokémon detail page
- Shows tooltip with total count

4. `Paginator` (referenced but not shown) - Navigation component for Pokémon list pagination
5. `PokemonDetail` (referenced but not shown) - Detailed view component for individual Pokémon

**Composables:**
1. - Manages individual Pokémon data: `usePokemonDetails`
- Fetches both species and Pokémon data
- Handles loading states
- Error management
- Combines data into unified format

2. `useFormatPokemonId` (referenced) - Utility for formatting Pokémon IDs

**Stores:**
1. - Manages global Pokémon state:
- Handles pagination
- Stores Pokémon list data
- Tracks loading states
- Maintains total Pokémon count

`usePokemonStore`

The application follows a clean architecture with:
- Clear separation of concerns
- Reusable components
- Centralized state management
- Strong accessibility focus
- Error handling and loading states
- Responsive design
- Data formatting utilities

The app uses modern Vue.js features including:
- Composition API with `<script setup>`
- TypeScript integration
- Vue Router for navigation
- Pinia for state management
- UnoCSS for styling
