<script setup lang="ts">
interface PokemonSpriteProps {
  name: string
  url?: string
  shiny?: boolean
}

const props = withDefaults(defineProps<PokemonSpriteProps>(), {
  shiny: false,
  url: undefined,
})
</script>

<template>
  <img
    v-if="!!props.url"
    :src="props.url"
    :alt="`A ${props.shiny ? 'shiny ' : ''}${props.name}`"
  >
</template>
