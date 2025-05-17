<script setup lang="ts">
import type { FormattedPokemonSpecies } from '@types'

interface PokemonListProps {
  pokemonList?: FormattedPokemonSpecies[]
}

withDefaults(defineProps<PokemonListProps>(), {
  pokemonList: () => [] as FormattedPokemonSpecies[],
})
</script>

<template>
  <div>
    <div
      v-for="(pokemonSpecies, index) in (pokemonList)"
      :key="'pokemon_' + index"
    >
      <NuxtLink
        :to="`detail/${pokemonSpecies.name}`"
      >
        {{ pokemonSpecies.formattedName }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
