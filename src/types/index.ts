export interface PokemonDetails {
  id: string
  name: string
  sprites: {
    front_default: string
    back_default?: string
    front_shiny: string
    back_shiny?: string
  }
}

export interface PokemonSpecies {
  name: string
  url: string
}

export interface FormattedPokemonSpecies extends PokemonSpecies {
  formattedName: string
}

export interface PokemonSpeciesList {
  count: number
  next: string | null
  previous: string | null
  results: PokemonSpecies[]
}

export interface PokemonType {
  name: string
  url: string
}

interface PokemonInType {
  pokemon: PokemonSpecies
  slot: number
}

export interface TypeResponse {
  pokemon: PokemonInType[]
}
