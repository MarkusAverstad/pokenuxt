<script setup lang="ts">
import { usePokemonStore } from '@stores'

const pokemonStore = usePokemonStore()
await pokemonStore.fetchPokemonPage(1)
</script>

<template>
  <main
    class="min-h-screen flex flex-col"
    aria-label="Pokemon list page"
  >
    <!-- Loading Overlay -->
    <div
      v-if="pokemonStore.isLoading"
      class="fixed top-4 right-4 z-50"
      role="status"
      aria-live="polite"
    >
      <div class="bg-white rounded-lg shadow-xl p-4 flex items-center space-x-3">
        <div
          class="animate-spin w-5 h-5 border-3 border-blue-500 border-t-transparent rounded-full"
          aria-hidden="true"
        />
        <span class="text-gray-700 font-medium">Loading...</span>
      </div>
    </div>

    <div
      class="flex-grow w-full max-w-6xl mx-auto p-4 pb-20"
      :aria-busy="pokemonStore.isLoading"
    >
      <section
        class="bg-white rounded-lg shadow-sm p-6"
        aria-labelledby="pokemon-list-heading"
      >
        <h2
          id="pokemon-list-heading"
          class="sr-only"
        >
          Pokémon List
        </h2>

        <PokemonList
          :pokemon-list="pokemonStore.getPokemonList"
          class="min-h-[300px]"
        />
      </section>
    </div>

    <div
      class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg"
      role="navigation"
      aria-label="Pagination navigation"
    >
      <div class="max-w-6xl mx-auto p-4">
        <Paginator />
      </div>
    </div>

    <!-- Live Region for Status Updates -->
    <div
      aria-live="polite"
      aria-atomic="true"
      class="sr-only"
    >
      {{ pokemonStore.isLoading ? 'Loading Pokemon list...'
        : `Showing ${pokemonStore.getPokemonList.length} Pokemon` }}
    </div>
  </main>
</template>
