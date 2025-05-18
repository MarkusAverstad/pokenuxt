<script setup lang="ts">
const route = useRoute()
const { pokemon, isLoading, error, fetchPokemonDetails } = usePokemonDetails()

onMounted(async () => {
  await fetchPokemonDetails(route.params.id as string)
})
</script>

<template>
  <main class="min-h-screen bg-slate-100 p-4 md:p-8">
    <div class="container mx-auto max-w-4xl">
      <!-- Loading State -->
      <div
        v-if="isLoading"
        class="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md"
        role="status"
        aria-label="Loading Pokémon details"
      >
        <div class="flex flex-col items-center gap-4 py-12">
          <div class="animate-spin w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full" />
          <div class="text-gray-600 font-medium">
            Loading Pokémon details...
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div
        v-else-if="!!error"
        class="w-full max-w-2xl mx-auto p-6 bg-red-50 rounded-lg shadow-md"
        role="alert"
      >
        <div class="flex flex-col items-center gap-4 py-12">
          <span class="text-xl font-semibold text-red-600">Error!</span>
          <p class="text-red-500">
            Failed to load Pokémon details
          </p>
        </div>
      </div>

      <!-- Pokémon Details -->
      <PokemonDetail
        v-else-if="!!pokemon"
        :pokemon="pokemon"
        class="bg-white rounded-lg shadow-md transition-all hover:shadow-lg"
      />
    </div>
  </main>
</template>
