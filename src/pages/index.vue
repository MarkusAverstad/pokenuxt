<script setup lang="ts">
import { usePokemonStore } from '@stores'

const pokemonStore = usePokemonStore()
await pokemonStore.fetchPokemonPage(1)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow w-full max-w-6xl mx-auto p-4 pb-20">
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

      <div class="bg-white rounded-lg shadow-sm p-6">
        <PokemonList
          :pokemon-list="pokemonStore.getPokemonList"
          class="min-h-[300px]"
        />
      </div>
    </div>

    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div class="max-w-6xl mx-auto p-4">
        <Paginator />
      </div>
    </div>
  </div>
</template>
