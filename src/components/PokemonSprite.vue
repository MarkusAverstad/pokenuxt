<script setup lang="ts">
interface PokemonSpriteProps {
  label: string
  name: string
  url: string
  shiny?: boolean
}

const props = withDefaults(defineProps<PokemonSpriteProps>(), {
  shiny: false,
})
</script>

<template>
  <div
    v-if="!!props.url"
    class="flex flex-col items-center bg-white rounded-lg p-4 shadow-sm"
    role="figure"
    :aria-label="`${props.label} sprite of ${props.name}`"
  >
    <img
      class="w-24 h-24 object-contain"
      :src="props.url"
      :alt="`A ${props.shiny ? 'shiny ' : ''}${props.name}`"
      loading="lazy"
      decoding="async"
    >
    <span
      class="text-sm text-gray-600 mt-2"
      aria-hidden="true"
    >
      {{ props.label }}
    </span>
  </div>
</template>
