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

`index.vue`
- Home page showing a paginated list of Pokémon 

`pokemon/[id].vue`
- Dynamic Pokémon detail page showing individual Pokémon information with loading and error states

**Components:**

`PokemonList.vue`
- Grid display of Pokémon cards with: 
  - Responsive grid layout
  - Empty state handling
  - Accessible grid structure
  - Card hover effects

`PokemonSprite.vue`
- Reusable component for displaying Pokémon sprites: 
  - Handles both regular and shiny sprites
  - Lazy loading of images
  - Accessible image descriptions
  - Fallback handling when URL is not available

`RandomPokemonButton.vue`
- Button component that: 
  - Generates random Pokémon selection
  - Navigates to random Pokémon detail page
  - Shows tooltip with total count

`Paginator` 
- Navigation component for Pokémon list pagination


`PokemonDetail` 
- Detailed view component for individual Pokémon

**Composables:**

`usePokemonDetails`
- Manages individual Pokémon data: 
- Fetches both species and Pokémon data
- Handles loading states
- Error management
- Combines data into unified format

`useFormatPokemonId`
- Utility for formatting Pokémon IDs

**Stores:**

`usePokemonStore`
- Manages global Pokémon state:
- Handles pagination
- Stores Pokémon list data
- Tracks loading states
- Maintains total Pokémon count

Known bugs:
- You can pass right by the last numbered pokemon (1025) on pokemon detail page

Improvements:
- More tests, there can always be more tests
- UI is a little clinical and stale, could pop more. Should look like a Pokédex
- usePokemonStore became too cluttered, needs to be split up
- 