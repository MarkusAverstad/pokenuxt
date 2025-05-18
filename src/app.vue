<script setup lang="ts">
import '@unocss/reset/tailwind.css'
import { usePokemonStore } from '@stores'

const { fetchPokemonPage, pokemonCount } = usePokemonStore()

await fetchPokemonPage()

useHead({
  title: 'PokéNuxt',
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
    <NuxtLayout>
      <header class="bg-white shadow-sm sticky top-0 z-10">
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center space-x-6">
              <NuxtLink
                to="/"
                class="text-gray-700 hover:text-blue-600 font-medium
                       transition-colors duration-200"
              >
                Home
              </NuxtLink>
              <NuxtLink
                to="/search"
                class="text-gray-700 hover:text-blue-600 font-medium
                       transition-colors duration-200"
              >
                Search
              </NuxtLink>
            </div>
            <RandomPokemonButton />
          </div>
        </nav>
      </header>

      <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NuxtPage />
      </main>
    </NuxtLayout>
  </div>
</template>
