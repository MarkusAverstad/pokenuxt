<script setup lang="ts">
import { usePokemonStore } from '@stores'
import TypeFilterButtons from '@/components/TypeFilterButtons.vue'

const pokemonStore = usePokemonStore()

await pokemonStore.fetchTypes()
await pokemonStore.fetchAllPokemon()
</script>

<template>
  <div class="w-full max-w-6xl mx-auto p-4">
    <!-- Search Section -->
    <div class="mb-8 bg-white rounded-lg shadow-sm p-6">
      <TypeFilterButtons />
      <!-- Search Input -->
      <div>
        <label
          for="pokemon-search"
          class="block text-lg font-semibold text-gray-700 mb-3"
        >
          Search Pokémon
        </label>
        <div class="relative">
          <input
            id="pokemon-search"
            v-model="pokemonStore.searchQuery"
            type="search"
            placeholder="Enter pokemon name..."
            class="w-full px-4 py-3 border border-gray-200 rounded-lg
                   placeholder-gray-400 focus:border-blue-500 focus:ring-2
                   focus:ring-blue-500 focus:outline-none transition-all"
          >
          <span
            v-if="pokemonStore.searchQuery"
            class="absolute right-3 top-1/2 -translate-y-1/2
                   text-gray-400 cursor-pointer hover:text-gray-600"
            @click="pokemonStore.searchQuery = ''"
          >
            ✕
          </span>
        </div>
      </div>
    </div>

    <!-- Pokemon List -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <PokemonList
        :pokemon-list="pokemonStore.searchResults"
        class="min-h-[200px]"
      />
    </div>
  </div>
</template>
