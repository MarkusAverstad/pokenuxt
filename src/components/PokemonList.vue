<script setup lang="ts">
import type { FormattedPokemonSpecies } from '@types'

const { formatId } = useFormatPokemonId()

interface PokemonListProps {
  pokemonList?: FormattedPokemonSpecies[]
}

withDefaults(defineProps<PokemonListProps>(), {
  pokemonList: () => [] as FormattedPokemonSpecies[],
})
</script>

<template>
  <div
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
    role="grid"
    aria-label="Pokemon list"
  >
    <div
      v-for="(pokemonSpecies, index) in pokemonList"
      :key="'pokemon_' + index"
      data-test="pokemon-card"
      class="group"
      role="gridcell"
    >
      <NuxtLink
        :to="`/pokemon/${pokemonSpecies.name}`"
        class="block bg-white rounded-lg p-4 shadow-sm
               hover:shadow-md transition-all duration-200
               border border-gray-100 hover:border-blue-200
               transform hover:-translate-y-1"
        :aria-label="`View details for ${pokemonSpecies.formattedName}, Pokemon number ${formatId(pokemonSpecies.url)}`"
      >
        <div
          class="flex flex-col items-center justify-center min-h-[80px]"
          role="presentation"
        >
          <h3
            class="font-medium text-gray-800 group-hover:text-blue-600
                   transition-colors duration-200 capitalize text-center"
          >
            {{ pokemonSpecies.formattedName }}
          </h3>
          <span
            class="text-sm text-gray-500 mt-1"
            aria-label="Pokemon number"
          >
            #{{ formatId(pokemonSpecies.url) }}
          </span>
        </div>
      </NuxtLink>
    </div>

    <!-- Empty State -->
    <div
      v-if="!pokemonList?.length"
      class="col-span-full flex flex-col items-center justify-center py-12 text-gray-500"
      role="status"
      aria-live="polite"
    >
      <Icon
        name="ph:magnifying-glass"
        class="w-16 h-16 mb-4 text-gray-300"
        aria-hidden="true"
      />
      <p class="text-lg font-medium">
        No Pokémon found
      </p>
      <p class="text-sm">
        Try adjusting your search or filters
      </p>
    </div>
  </div>
</template>
