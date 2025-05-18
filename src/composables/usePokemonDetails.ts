import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import type { PokemonDetails } from '@types'

interface PokemonError {
  message: string
}

export function usePokemonDetails() {
  const pokemonRef: Ref<PokemonDetails | null> = ref(null)
  const isLoadingRef = ref(false)
  const errorRef: Ref<PokemonError | null> = ref(null)

  async function fetchPokemonDetails(name: string) {
    isLoadingRef.value = true
    errorRef.value = null

    try {
      const [speciesResponse, pokemonResponse] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`),
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`),
      ])

      const [speciesData, pokemonData] = await Promise.all([
        speciesResponse.json(),
        pokemonResponse.json(),
      ])

      pokemonRef.value = {
        id: pokemonData.id,
        name: pokemonData.name,
        sprites: pokemonData.sprites,
        flavor_text_entries: speciesData.flavor_text_entries,
        types: pokemonData.types,
      }
    }
    catch (e) {
      errorRef.value = e as PokemonError
    }
    finally {
      isLoadingRef.value = false
    }
  }

  return {
    pokemon: computed(() => pokemonRef.value),
    isLoading: computed(() => isLoadingRef.value),
    error: computed(() => errorRef.value),
    fetchPokemonDetails,
  }
}
