<script setup lang="ts">
import { usePokemonStore } from '@stores'
import TypeFilterButtons from '@/components/TypeFilterButtons.vue'

const pokemonStore = usePokemonStore()

await pokemonStore.fetchTypes()
await pokemonStore.fetchAllPokemon()
</script>

<template>
  <main class="w-full max-w-6xl mx-auto p-4">
    <!-- Search Section -->
    <section
      class="mb-8 bg-white rounded-lg shadow-sm p-6"
      aria-labelledby="search-heading"
    >
      <h2
        id="search-heading"
        class="sr-only"
      >
        Pokémon Search and Filters
      </h2>

      <TypeFilterButtons />

      <div
        role="search"
        class="max-w-md"
      >
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
                   focus:ring-blue-500 focus:outline-none transition-all
                   [&::-webkit-search-cancel-button]:appearance-none"
            :aria-describedby="pokemonStore.searchResults.length
              ? 'search-results'
              : undefined"
          >
          <button
            v-if="pokemonStore.searchQuery"
            type="button"
            class="absolute right-3 top-1/2 -translate-y-1/2
                   text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
            @click="pokemonStore.searchQuery = ''"
          >
            <Icon
              name="ph:x-bold"
              class="w-5 h-5"
              aria-hidden="true"
            />
          </button>
        </div>
        <div
          id="search-results"
          class="sr-only"
          aria-live="polite"
        >
          {{ pokemonStore.searchResults.length }} Pokémon found
        </div>
      </div>
    </section>

    <!-- Pokemon List -->
    <section
      class="bg-white rounded-lg shadow-sm p-6"
      aria-labelledby="results-heading"
    >
      <h2
        id="results-heading"
        class="sr-only"
      >
        Pokémon Results
      </h2>
      <PokemonList
        :pokemon-list="pokemonStore.searchResults"
        class="min-h-[200px]"
      />
    </section>
  </main>
</template>
