export const formatPokemonName = (name: string) => {
  // Handle special cases first
  const specialCases: Record<string, string> = {
    'nidoran-f': 'Nidoran♀',
    'nidoran-m': 'Nidoran♂',
    'mr-mime': 'Mr. Mime',
    'mime-jr': 'Mime Jr.',
    'type-null': 'Type: Null',
    'ho-oh': 'Ho-Oh',
    'porygon-z': 'Porygon-Z',
    // Add more special cases as needed
  }

  if (name in specialCases) {
    return specialCases[name]
  }

  // General formatting:
  // 1. Split by hyphens
  // 2. Capitalize each word
  // 3. Join with spaces
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
