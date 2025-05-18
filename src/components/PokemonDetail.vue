<script setup lang="ts">
import type { PokemonDetails } from '@types'

defineProps<{
  pokemon: PokemonDetails
}>()
</script>

<template>
  <article
    class="w-full max-w-2xl mx-auto p-6"
    :aria-label="`Details for ${pokemon.name} pokemon`"
  >
    <!-- Pokemon Header -->
    <header class="mb-8 text-center">
      <h1 class="text-3xl font-bold capitalize mb-2">
        <span class="text-gray-500 mr-2">#{{ pokemon.id }}</span>
        {{ pokemon.name }}
      </h1>
    </header>

    <!-- Sprites Grid -->
    <div class="bg-gray-50 rounded-xl p-6 mb-8">
      <h2 class="text-xl font-semibold mb-4 text-gray-700">
        Sprites
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <PokemonSprite
          :name="pokemon.name"
          :url="pokemon.sprites.front_default"
          label="Front"
        />

        <PokemonSprite
          v-if="pokemon.sprites.back_default"
          :name="pokemon.name"
          :url="pokemon.sprites.back_default"
          label="Back"
        />

        <PokemonSprite
          :name="pokemon.name"
          :url="pokemon.sprites.front_shiny"
          label="Shiny Front"
          :shiny="true"
        />

        <PokemonSprite
          v-if="pokemon.sprites.back_shiny"
          :name="pokemon.name"
          :url="pokemon.sprites.back_shiny"
          label="Shiny Back"
          :shiny="true"
        />
      </div>
    </div>

    <!-- Additional Info -->
    <footer class="bg-white rounded-xl p-6 shadow-sm">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <span class="text-gray-600">ID:</span>
          <span class="font-medium">{{ pokemon.id }}</span>
        </div>
        <div class="flex items-center space-x-2">
          <span class="text-gray-600">Name:</span>
          <span class="font-medium capitalize">{{ pokemon.name }}</span>
        </div>
      </div>
    </footer>
  </article>
</template>
