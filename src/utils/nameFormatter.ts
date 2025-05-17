import type { PokemonSpecies } from '@types'

export const formatPokemonName = (pokemon: PokemonSpecies | { pokemon: PokemonSpecies }) => {
  // Handle nested pokemon object from type filtering
  const name = 'pokemon' in pokemon ? pokemon.pokemon.name : pokemon.name

  // Handle special cases first
  const specialCases: Record<string, string> = {
    'nidoran-f': 'Nidoran♀',
    'nidoran-m': 'Nidoran♂',
    'mr-mime': 'Mr. Mime',
    'mime-jr': 'Mime Jr.',
    'type-null': 'Type: Null',
    'ho-oh': 'Ho-Oh',
    'porygon-z': 'Porygon-Z',
    // TODO: Add more special cases as needed
  }

  if (name in specialCases) {
    return specialCases[name]
  }

  return name
    .replace('-mega', ' (Mega Evolution)')
    .replace('-gmax', ' (Gigantamax)')
    .replace('-totem', ' (Totem)')
    // TODO: Other suffixes go here
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
