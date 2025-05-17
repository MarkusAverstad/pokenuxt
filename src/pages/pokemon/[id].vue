<script setup lang="ts">
const route = useRoute()

const { pokemon, isLoading, error, fetchPokemonDetails } = usePokemonDetails()

onMounted(async () => {
  await fetchPokemonDetails(route.params.id as string)
})
</script>

<template>
  <div class="flex justify-center items-center w-full h-screen">
    <div v-if="isLoading">
      Loading...
    </div>
    <PokemonDetail
      v-else-if="!!pokemon"
      :pokemon="pokemon"
    />
    <div v-else-if="!!error">
      Error!
    </div>
  </div>
</template>
