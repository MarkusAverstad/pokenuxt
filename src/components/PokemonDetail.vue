<script lang="ts">
import type { PokemonDetails } from '@types'

export default defineComponent(
  {
    props: {
      pokemon: {
        type: Object as PropType<PokemonDetails>,
        required: true,
      },
    },
  })
</script>

<template>
  <div
    v-if="pokemon !== null"
    class="flex w-[600px] border border-black justify-center items-center flex-col"
  >
    <div class="flex">
      <PokemonSprite
        :name="pokemon.name"
        :url="pokemon.sprites.front_default"
      />
      <PokemonSprite
        :name="pokemon.name"
        :url="pokemon.sprites.back_default"
      />
      <PokemonSprite
        :name="pokemon.name"
        :shiny="true"
        :url="pokemon.sprites.front_shiny"
      />
      <PokemonSprite
        :name="pokemon.name"
        :shiny="true"
        :url="pokemon.sprites.back_shiny"
      />
    </div>

    <div class="flex justify-center capitalize border border-black p-4 w-full">
      {{ '#' + pokemon.id }}
      {{ pokemon.name }}
    </div>
  </div>
</template>
