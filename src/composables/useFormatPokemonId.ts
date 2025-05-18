export function useFormatPokemonId() {
  const formatId = (source: string | number, padLength = 3): string => {
    if (typeof source === 'number') {
      return String(source).padStart(padLength, '0')
    }

    // If it's a URL, extract the ID
    if (source.includes('/')) {
      const parts = source.split('/')
      const id = parts[parts.length - 2]
      return String(id).padStart(padLength, '0')
    }

    // If it's already a string ID
    return String(source).padStart(padLength, '0')
  }

  return {
    formatId,
  }
}
