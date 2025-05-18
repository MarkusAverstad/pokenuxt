<script setup lang="ts">
import '@unocss/reset/tailwind.css'
import { usePokemonStore } from '@stores'

const { fetchPokemonPage } = usePokemonStore()
await fetchPokemonPage()

useHead({
  title: 'PokéNuxt',
  htmlAttrs: {
    lang: 'en', // Add language attribute
  },
  bodyAttrs: {
    class: 'bg-stone-100',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Skip Link -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2
             bg-blue-600 text-white px-4 py-2 rounded-md z-50"
    >
      Skip to main content
    </a>

    <NuxtLayout>
      <header
        class="bg-white shadow-sm sticky top-0 z-10"
        role="banner"
      >
        <nav
          class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center space-x-6">
              <NuxtLink
                to="/"
                class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Home
              </NuxtLink>
              <NuxtLink
                to="/search"
                class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Search
              </NuxtLink>
            </div>
            <div class="py-3">
              <div class="max-w-6xl mx-auto px-4">
                <h1 class="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
                  Welcome to PokéNuxt!
                </h1>
              </div>
            </div>
            <RandomPokemonButton />
          </div>
        </nav>
      </header>

      <main
        id="main-content"
        class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8"
        tabindex="-1"
      >
        <NuxtPage />
      </main>
    </NuxtLayout>
  </div>
</template>

<style>
/* Ensure focus styles are visible */
*:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}
</style>
