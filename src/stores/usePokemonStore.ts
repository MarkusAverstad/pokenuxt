import { defineStore } from 'pinia'
import type { FormattedPokemonSpecies, PokemonSpecies, PokemonSpeciesList, PokemonType, TypeResponse } from '@types'
import { formatPokemonName } from '@utils'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    // Pagination related
    pokemonCount: 0,
    currentPage: 1,
    itemsPerPage: 20,
    nextUrl: null as string | null,
    previousUrl: null as string | null,

    // Pokemon data
    species: [] as PokemonSpecies[],
    allPokemon: [] as PokemonSpecies[],
    types: [] as PokemonType[],

    // Filters
    searchQuery: '',
    selectedType: '',

    // UI state
    isLoading: false,
  }),

  actions: {
    // Main data fetching
    async fetchPokemonPage(page?: number) {
      if (page) {
        this.currentPage = page
      }

      const offset = (this.currentPage - 1) * this.itemsPerPage
      this.isLoading = true

      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species?limit=${this.itemsPerPage}&offset=${offset}`,
        )
        const data: PokemonSpeciesList = await response.json()
        this.species = data.results
        this.pokemonCount = data.count
        this.nextUrl = data.next
        this.previousUrl = data.previous
      }
      catch (error) {
        console.error('Failed to fetch Pokemon:', error)
      }
      finally {
        this.isLoading = false
      }
    },

    async fetchAllPokemon() {
      this.isLoading = true
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon-species?limit=10000')
        const data: PokemonSpeciesList = await response.json()
        this.allPokemon = data.results
      }
      catch (error) {
        console.error('Failed to fetch all Pokemon:', error)
      }
      finally {
        this.isLoading = false
      }
    },

    async fetchTypes() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/type')
        const data = await response.json()
        // Filter out unused types
        this.types = data.results.filter((type: PokemonType) => !['stellar', 'unknown'].includes(type.name))
      }
      catch (error) {
        console.error('Failed to fetch Pokemon types:', error)
      }
    },

    // Navigation
    async goToNextPage() {
      if (this.nextUrl) {
        this.currentPage++
        await this.fetchPokemonPage()
      }
    },

    async goToPreviousPage() {
      if (this.previousUrl) {
        this.currentPage--
        await this.fetchPokemonPage()
      }
    },

    async filterByType(typeName: string) {
      if (this.selectedType === typeName) {
        this.selectedType = ''
        await this.fetchPokemonPage() // Reset to normal list when deselecting
        return
      }

      this.selectedType = typeName
      if (!typeName) return

      this.isLoading = true
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`)
        const data: TypeResponse = await response.json()
        // Transform the nested pokemon data to match PokemonSpecies format
        this.species = data.pokemon.map(item => item.pokemon)
      }
      catch (error) {
        console.error('Failed to fetch Pokemon by type:', error)
      }
      finally {
        this.isLoading = false
      }
    },

    clearFilters() {
      this.searchQuery = ''
      this.selectedType = ''
      this.fetchPokemonPage(1)
    },
  },

  getters: {
    // Formatted Pokémon lists
    getPokemonList: (state): FormattedPokemonSpecies[] => {
      return state.species.map(pokemon => ({
        ...pokemon,
        formattedName: formatPokemonName(pokemon),
      }))
    },

    searchResults: (state): FormattedPokemonSpecies[] => {
      // If no search or type filter, return the current page of Pokemon
      if (!state.searchQuery && !state.selectedType)
        return state.species.map(pokemon => ({
          ...pokemon,
          formattedName: formatPokemonName(pokemon),
        }))

      const pokemonToSearch = state.selectedType ? state.species : state.allPokemon

      return pokemonToSearch
        .filter(pokemon =>
          pokemon.name.toLowerCase().includes(state.searchQuery.toLowerCase()),
        )
        .map(pokemon => ({
          ...pokemon,
          formattedName: formatPokemonName(pokemon),
        }))
    },

    // Pagination helpers
    totalPages: state => Math.ceil(state.pokemonCount / state.itemsPerPage),
    hasNextPage: state => state.nextUrl !== null,
    hasPreviousPage: state => state.previousUrl !== null,
  },
})
