interface FlavorTextEntry {
  flavor_text: string
  language: {
    name: string
  }
  version: {
    name: string
    url: string
  }
}

export interface PokemonType {
  name: string
  url: string
}

interface TypeSlot {
  slot: number
  type: PokemonType
}

export interface AbilityEntry {
  name: string
  url: string
}

export interface AbilitySlot {
  is_hidden: boolean
  slot: number
  ability: AbilityEntry
}

export interface PokemonDetails {
  id: string
  name: string
  sprites: {
    front_default: string
    back_default?: string
    front_shiny: string
    back_shiny?: string
  }
  flavorText: FlavorTextEntry[]
  types: TypeSlot[]
  ability: AbilityEntry
  hiddenAbility?: AbilityEntry
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

interface PokemonInType {
  pokemon: PokemonSpecies
  slot: number
}

export interface TypeResponse {
  pokemon: PokemonInType[]
}
