<script setup lang="ts">
import { usePokemonStore } from '@stores'
import { ref, onMounted, onUnmounted } from 'vue'

const pokemonStore = usePokemonStore()
const { getTypeColor } = useTypeColors()
const isMenuOpen = ref(false)
const isMobile = ref(false)

const selectedType = computed(() => 
  pokemonStore.types.find(type => type.name === pokemonStore.selectedType)
)

onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768 // md breakpoint
  }
  
  checkMobile()
  window.addEventListener('resize', checkMobile)
  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
  })
})
</script>

<template>
  <div class="mb-6">
    <!-- Mobile Filter Toggle -->
    <button 
      class="w-full md:hidden px-4 py-2 mb-2 bg-white rounded-lg shadow-sm
             border border-gray-200 flex items-center justify-between
             hover:bg-gray-50 transition-colors"
      @click="isMenuOpen = !isMenuOpen"
    >
      <div class="flex items-center gap-2">
        <span class="text-lg font-semibold text-gray-700">Filter by Type</span>
        <span 
          v-if="selectedType"
          :class="[
            getTypeColor(selectedType.name),
            'px-3 py-0.5 text-sm text-white rounded-full capitalize'
          ]"
        >
          {{ selectedType.name }}
        </span>
      </div>
      <Icon
        :name="isMenuOpen ? 'ph:caret-up-bold' : 'ph:caret-down-bold'"
        class="text-gray-500"
      />
    </button>

    <!-- Desktop Title -->
    <h2 class="hidden md:block text-lg font-semibold text-gray-700 mb-3">
      Filter by Type
      <span 
        v-if="selectedType"
        :class="[
          getTypeColor(selectedType.name),
          'ml-2 px-3 py-0.5 text-sm text-white rounded-full capitalize'
        ]"
      >
        {{ selectedType.name }}
      </span>
    </h2>

    <!-- Filter Content - Always visible on desktop -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div 
        v-show="isMenuOpen || !isMobile"
        class="mt-2 p-4 md:p-0 bg-white md:bg-transparent rounded-lg shadow-sm md:shadow-none border border-gray-200 md:border-0"
      >
        <div class="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          <button
            v-for="type in pokemonStore.types"
            :key="'type_' + type.name"
            :class="[
              'w-full px-3 py-1.5 rounded-full font-medium transition-all duration-200',
              'text-white text-sm whitespace-nowrap',
              pokemonStore.selectedType === type.name
                ? [getTypeColor(type.name), 'shadow-inner opacity-80 scale-90 ring-4 ring-gray-900/20 outline outline-2 outline-offset-2 outline-black/40']
                : [getTypeColor(type.name), `hover:${getTypeColor(type.name).replace('bg-', 'bg-')}-600`],
            ]"
            @click="pokemonStore.filterByType(type.name)"
          >
            <span class="capitalize">{{ type.name }}</span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  overflow: hidden;
}
</style>