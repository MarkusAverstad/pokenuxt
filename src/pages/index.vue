<script setup lang="ts">
import { usePokemonStore } from '@stores'

const pokemonStore = usePokemonStore()
</script>

<template>
  <div class="space-y-8">
    <!-- Welcome Section -->
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">
        Welcome to PokéNuxt!
      </h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Explore the world of Pokémon with our comprehensive Pokédex
      </p>
    </div>

    <!-- Loading Overlay -->
    <div
      v-if="pokemonStore.isLoading"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-xl p-6 flex items-center space-x-3">
        <div class="animate-spin w-6 h-6 border-3 border-blue-500 border-t-transparent rounded-full" />
        <span class="text-gray-700 font-medium">Loading...</span>
      </div>
    </div>

    <!-- Pokemon List Section -->
    <div class="space-y-6">
      <PokemonList
        :pokemon-list="pokemonStore.getPokemonList"
        class="min-h-[300px]"
      />

      <!-- Pagination -->
      <div
        v-if="pokemonStore.getPokemonList.length"
        class="flex items-center justify-center space-x-4 py-4"
      >
        <button
          :disabled="!pokemonStore.hasPreviousPage"
          class="px-4 py-2 rounded-lg font-medium transition-colors duration-200
                 disabled:opacity-50 disabled:cursor-not-allowed
                 bg-blue-500 text-white hover:bg-blue-600 disabled:hover:bg-blue-500"
          @click="pokemonStore.goToPreviousPage"
        >
          <span class="flex items-center">
            <Icon
              name="ph:caret-left-bold"
              class="w-5 h-5 mr-1"
            />
            Previous
          </span>
        </button>

        <div class="text-gray-700 font-medium">
          Page {{ pokemonStore.currentPage }} of {{ pokemonStore.totalPages }}
        </div>

        <button
          :disabled="!pokemonStore.hasNextPage"
          class="px-4 py-2 rounded-lg font-medium transition-colors duration-200
                 disabled:opacity-50 disabled:cursor-not-allowed
                 bg-blue-500 text-white hover:bg-blue-600 disabled:hover:bg-blue-500"
          @click="pokemonStore.goToNextPage"
        >
          <span class="flex items-center">
            Next
            <Icon
              name="ph:caret-right-bold"
              class="w-5 h-5 ml-1"
            />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
