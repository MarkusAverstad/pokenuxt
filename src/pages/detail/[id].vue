<script setup lang="ts">
import type { PokemonDetails } from '@types'

const route = useRoute()
const { data: pokemon } = await useFetch<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)
</script>

<template>
  <div class="flex justify-center items-center w-full h-screen">
    <PokemonDetail
      v-if="!!pokemon"
      :pokemon="pokemon"
    />
  </div>
</template>
