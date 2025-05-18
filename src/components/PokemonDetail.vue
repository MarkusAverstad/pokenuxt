<script setup lang="ts">
import type { PokemonDetails } from '@types'

const props = defineProps<{
  pokemon: PokemonDetails
}>()

const englishFlavorText = computed(() => {
  return props.pokemon.flavor_text_entries
    .find(entry => entry.language.name === 'en')
    ?.flavor_text.replace(/[\n\f]/g, ' ') || ''
})

const { getTypeColor } = useTypeColors()
</script>

<template>
  <article
    class="w-full max-w-4xl mx-auto p-6"
    :aria-label="`Details for ${pokemon.name} pokemon`"
  >
    <!-- Pokemon Header -->
    <header class="mb-8 text-center">
      <h1 class="text-4xl font-bold capitalize mb-3">
        <span class="text-gray-500 mr-2">#{{ pokemon.id }}</span>
        {{ pokemon.name }}
      </h1>

      <div class="flex justify-center gap-2 mb-4">
        <span
          v-for="typeSlot in pokemon.types"
          :key="typeSlot.slot"
          :class="[
            getTypeColor(typeSlot.type.name),
            'px-4 py-1 rounded-full text-white font-medium capitalize text-sm',
          ]"
        >
          {{ typeSlot.type.name }}
        </span>
      </div>
      <p class="text-gray-600 max-w-2xl mx-auto">
        {{ englishFlavorText }}
      </p>
    </header>

    <div class="grid md:grid-cols-2 gap-6">
      <section class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
          Sprites
        </h2>
        <div class="grid grid-cols-2 gap-4">
          <PokemonSprite
            :name="pokemon.name"
            :url="pokemon.sprites.front_default"
            label="Front"
            class="bg-gray-50 rounded-lg p-2"
          />

          <PokemonSprite
            v-if="pokemon.sprites.back_default"
            :name="pokemon.name"
            :url="pokemon.sprites.back_default"
            label="Back"
            class="bg-gray-50 rounded-lg p-2"
          />

          <PokemonSprite
            :name="pokemon.name"
            :url="pokemon.sprites.front_shiny"
            label="Shiny Front"
            :shiny="true"
            class="bg-gray-50 rounded-lg p-2"
          />

          <PokemonSprite
            v-if="pokemon.sprites.back_shiny"
            :name="pokemon.name"
            :url="pokemon.sprites.back_shiny"
            label="Shiny Back"
            :shiny="true"
            class="bg-gray-50 rounded-lg p-2"
          />
        </div>
      </section>

      <section class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 class="text-xl font-semibold mb-4 text-gray-700 flex items-center">
          Details
        </h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span class="text-gray-600 font-medium">ID</span>
            <span class="text-gray-900">#{{ pokemon.id }}</span>
          </div>

          <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span class="text-gray-600 font-medium">Name</span>
            <span class="text-gray-900 capitalize">{{ pokemon.name }}</span>
          </div>

          <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span class="text-gray-600 font-medium">Types</span>
            <div class="flex gap-2">
              <span
                v-for="typeSlot in pokemon.types"
                :key="typeSlot.slot"
                :class="[
                  getTypeColor(typeSlot.type.name),
                  'px-3 py-1 rounded-full text-white font-medium capitalize text-sm',
                ]"
              >
                {{ typeSlot.type.name }}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <footer class="mt-8 flex justify-center">
      <nuxt-link
        v-if="Number(pokemon.id) > 1"
        :to="`/pokemon/${Number(pokemon.id) - 1}`"
        class="px-4 py-2 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors mx-2 flex items-center"
      >
        <Icon
          name="ph:caret-left-bold"
          class="mr-1"
        />
        Previous
      </nuxt-link>

      <nuxt-link
        :to="`/pokemon/${Number(pokemon.id) + 1}`"
        class="px-4 py-2 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors mx-2 flex items-center"
      >
        Next
        <Icon
          name="ph:caret-right-bold"
          class="ml-1"
        />
      </nuxt-link>
    </footer>
  </article>
</template>
