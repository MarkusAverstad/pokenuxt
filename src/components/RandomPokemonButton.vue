<script setup lang="ts">
const { pokemonCount } = usePokemonStore()

const goToRandom = () => {
  const randomId = Math.floor(Math.random() * pokemonCount) + 1
  navigateTo(`/pokemon/${randomId}`)
}
</script>

<template>
  <button
    class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2
                     rounded-lg transition-colors duration-200 shadow-sm
                     hover:shadow-md"
    @click="goToRandom"
  >
    Random Pokémon
  </button>
</template>
