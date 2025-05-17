<script setup lang="ts">
import '@unocss/reset/tailwind.css'
import { usePokemonStore } from '@stores'

const { fetchPokemonPage, pokemonCount } = usePokemonStore()

await fetchPokemonPage()

useHead({
  title: 'PokéNuxt',
  bodyAttrs: {
    class: 'bg-stone-100', // Setting the background color and margin for the body
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico', // Setting the favicon for the website
    },
  ],
})
</script>

<template>
  <div>
    <NuxtLayout>
      <header>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/search">Search</NuxtLink>
        <RandomPokemonButton :num-pokemon="pokemonCount" />
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
