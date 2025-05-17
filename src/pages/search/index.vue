<script setup lang="ts">
import { usePokemonStore } from '@stores'

const pokemonStore = usePokemonStore()

await pokemonStore.fetchTypes()
await pokemonStore.fetchAllPokemon()
</script>

<template>
  <div>
    <div>
      <button
        v-for="type in pokemonStore.types"
        :key="'type_' + type.name"
        :class="[
          'px-3 py-1 rounded capitalize',
          pokemonStore.selectedType === type.name
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 hover:bg-gray-300',
        ]"
        class="capitalize"
        @click="pokemonStore.filterByType(type.name)"
      >
        {{ type.name }}
      </button>
    </div>
    <input
      v-model="pokemonStore.searchQuery"
      class="px-4 py-2 border border-gray-300 rounded"
      type="text"
      placeholder="Search Pokémon..."
    >
    <div>
      <PokemonList :pokemon-list="pokemonStore.searchResults" />
    </div>
  </div>
</template>
