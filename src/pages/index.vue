<script setup lang="ts">
import { usePokemonStore } from '@stores'

const pokemonStore = usePokemonStore()
</script>

<template>
  <div>
    <div>Welcome to PokéNuxt!</div>

    <div
      v-if="pokemonStore.isLoading"
      class="absolute flex items-center justify-center w-[160px] h-[50px] bg-white border border-black p-4"
    >
      Loading...
    </div>

    <PokemonList :pokemon-list="pokemonStore.getPokemonList" />
    <div v-if="pokemonStore.getPokemonList.length">
      <button
        :disabled="!pokemonStore.hasPreviousPage"
        @click="pokemonStore.goToPreviousPage"
      >
        Previous page
      </button>
      <button
        :disabled="!pokemonStore.hasNextPage"
        @click="pokemonStore.goToNextPage"
      >
        Next page
      </button>
    </div>
  </div>
</template>
