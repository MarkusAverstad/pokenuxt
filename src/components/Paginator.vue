<script setup lang="ts">
const pokemonStore = usePokemonStore()
</script>

<template>
  <nav aria-label="Pokémon list pagination">
    <div class="flex justify-center items-center space-x-4">
      <button
        :disabled="!pokemonStore.hasPreviousPage"
        class="px-4 py-2 rounded-lg font-medium transition-colors duration-200
                   disabled:opacity-50 disabled:cursor-not-allowed
                   bg-blue-500 text-white hover:bg-blue-600 disabled:hover:bg-blue-500"
        :aria-label="`Go to page ${pokemonStore.currentPage - 1}`"
        @click="pokemonStore.goToPreviousPage"
      >
        <span class="flex items-center">
          <Icon
            name="ph:caret-left-bold"
            class="w-5 h-5 mr-1"
            aria-hidden="true"
          />
          Previous
        </span>
      </button>

      <div
        class="text-gray-700 font-medium"
        role="status"
        aria-live="polite"
      >
        Page {{ pokemonStore.currentPage }} of {{ pokemonStore.totalPages }}
      </div>

      <button
        :disabled="!pokemonStore.hasNextPage"
        class="px-4 py-2 rounded-lg font-medium transition-colors duration-200
                   disabled:opacity-50 disabled:cursor-not-allowed
                   bg-blue-500 text-white hover:bg-blue-600 disabled:hover:bg-blue-500"
        :aria-label="`Go to page ${pokemonStore.currentPage + 1}`"
        @click="pokemonStore.goToNextPage"
      >
        <span class="flex items-center">
          Next
          <Icon
            name="ph:caret-right-bold"
            class="w-5 h-5 ml-1"
            aria-hidden="true"
          />
        </span>
      </button>
    </div>
  </nav>
</template>
