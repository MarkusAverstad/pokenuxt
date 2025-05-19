<script setup lang="ts">
import type { PokemonDetails } from '@types'

const props = defineProps<{
  pokemon: PokemonDetails
}>()

const englishFlavorText = computed(() => {
  return props.pokemon.flavorText
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
    <header class="mb-8 text-center">
      <h1 class="text-4xl font-bold capitalize mb-3">
        <span
          class="text-gray-500 mr-2"
          aria-label="Pokémon number"
        >
          #{{ pokemon.id }}
        </span>
        {{ pokemon.name }}
      </h1>

      <div
        class="flex justify-center gap-2 mb-4"
        role="list"
        aria-label="Pokémon types"
      >
        <span
          v-for="typeSlot in pokemon.types"
          :key="typeSlot.slot"
          :class="[
            getTypeColor(typeSlot.type.name),
            'px-4 py-1 rounded-full text-white font-medium capitalize text-sm',
          ]"
          role="listitem"
        >
          {{ typeSlot.type.name }}
        </span>
      </div>
      <p
        class="text-gray-600 max-w-2xl mx-auto"
        aria-label="Pokémon description"
      >
        {{ englishFlavorText }}
      </p>
    </header>

    <div class="grid md:grid-cols-2 gap-6">
      <section
        class="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        aria-labelledby="sprites-heading"
      >
        <h2
          id="sprites-heading"
          class="text-xl font-semibold mb-4 text-gray-700 flex items-center"
        >
          Sprites
        </h2>
        <div
          class="grid grid-cols-2 gap-4"
          role="group"
          aria-label="Pokémon sprites gallery"
        >
          <PokemonSprite
            :name="pokemon.name"
            :url="pokemon.sprites.front_default"
            label="Front"
          />

          <PokemonSprite
            v-if="pokemon.sprites.back_default"
            :name="pokemon.name"
            :url="pokemon.sprites.back_default"
            label="Back"
          />

          <PokemonSprite
            :name="pokemon.name"
            :url="pokemon.sprites.front_shiny"
            label="Shiny Front"
            :shiny="true"
          />

          <PokemonSprite
            v-if="pokemon.sprites.back_shiny"
            :name="pokemon.name"
            :url="pokemon.sprites.back_shiny"
            label="Shiny Back"
            :shiny="true"
          />
        </div>
      </section>

      <section
        class="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        aria-labelledby="details-heading"
      >
        <h2
          id="details-heading"
          class="text-xl font-semibold mb-4 text-gray-700 flex items-center"
        >
          Details
        </h2>
        <div class="space-y-4">
          <div
            class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            role="group"
            aria-label="Pokémon ID"
          >
            <span class="text-gray-600 font-medium">ID</span>
            <span class="text-gray-900">#{{ pokemon.id }}</span>
          </div>

          <div
            class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            role="group"
            aria-label="Pokémon name"
          >
            <span class="text-gray-600 font-medium">Name</span>
            <span class="text-gray-900 capitalize">{{ pokemon.name }}</span>
          </div>

          <div
            class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            role="group"
            aria-label="Pokémon types list"
          >
            <span class="text-gray-600 font-medium">Type</span>
            <div
              class="flex gap-2"
              role="list"
            >
              <span
                v-for="typeSlot in pokemon.types"
                :key="typeSlot.slot"
                :class="[
                  getTypeColor(typeSlot.type.name),
                  'px-3 py-1 rounded-full text-white font-medium capitalize text-sm',
                ]"
                role="listitem"
              >
                {{ typeSlot.type.name }}
              </span>
            </div>
          </div>

          <div
            class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            role="group"
            aria-label="Pokémon ability"
          >
            <span class="text-gray-600 font-medium">Ability</span>
            <span class="text-gray-900 capitalize">{{ pokemon.ability.name }}</span>
          </div>

          <div
            v-if="pokemon.hiddenAbility"
            class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            role="group"
            aria-label="Pokémon hidden ability"
          >
            <span class="text-gray-600 font-medium">Hidden Ability</span>
            <span class="text-gray-900 capitalize">{{ pokemon.hiddenAbility.name }}</span>
          </div>
        </div>
      </section>
    </div>

    <footer
      class="mt-8 flex justify-center"
      role="contentinfo"
      aria-label="Pokémon navigation"
    >
      <nuxt-link
        v-if="Number(pokemon.id) > 1"
        :to="`/pokemon/${Number(pokemon.id) - 1}`"
        class="px-4 py-2 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors mx-2 flex items-center"
        :aria-label="`Go to previous Pokémon number ${Number(pokemon.id) - 1}`"
      >
        <Icon
          name="ph:caret-left-bold"
          class="mr-1"
          aria-hidden="true"
        />
        Previous
      </nuxt-link>

      <nuxt-link
        :to="`/pokemon/${Number(pokemon.id) + 1}`"
        class="px-4 py-2 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors mx-2 flex items-center"
        :aria-label="`Go to next Pokémon number ${Number(pokemon.id) + 1}`"
      >
        Next
        <Icon
          name="ph:caret-right-bold"
          class="ml-1"
          aria-hidden="true"
        />
      </nuxt-link>
    </footer>
  </article>
</template>
