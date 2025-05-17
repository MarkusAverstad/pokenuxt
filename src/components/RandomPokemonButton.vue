<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  numPokemon: {
    type: Number as PropType<number>,
    required: true,
  },
})

const goToRandom = () => {
  const randomId = Math.floor(Math.random() * props.numPokemon) + 1
  navigateTo(`/pokemon/${randomId}`)
}
</script>

<template>
  <button @click="goToRandom">
    Random Pokémon
  </button>
</template>
