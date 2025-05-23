describe('usePokemonDetails', () => {
  const mockResponse = (data: unknown): Response => new Response(
    JSON.stringify(data),
    {
      status: 200,
      headers: { 'Content-type': 'application/json' },
    },
  )

  const fetchSpy = vi.spyOn(global, 'fetch')
    .mockImplementation((url: RequestInfo | URL) =>
      Promise.resolve(mockResponse(url.toString().includes('species')
        ? {
            name: 'charmander-species',
            flavor_text_entries: [],
          }
        : {
            name: 'charmander',
            id: 4,
            sprites: [{ 'front-default': 'url-to-sprite' }],
            types: [],
            abilities: [
              { is_hidden: false, ability: { name: 'blaze' } },
              { is_hidden: true, ability: { name: 'solar-power' } },
            ],
          })))

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize with default values', () => {
    const { pokemon, isLoading, error } = usePokemonDetails()

    expect(pokemon.value).toBe(null)
    expect(isLoading.value).toBe(false)
    expect(error.value).toBe(null)
  })

  describe('fetchPokemonDetails', () => {
    it('should handle error', async () => {
      const { fetchPokemonDetails, error } = usePokemonDetails()

      const mockError = { message: 'I am Error' }
      fetchSpy.mockRejectedValueOnce(mockError)

      await fetchPokemonDetails('charmander')

      expect(error.value).toEqual(mockError)
    })

    it('should fetch from both /pokemon and /pokemon-species', async () => {
      const { fetchPokemonDetails } = usePokemonDetails()

      await fetchPokemonDetails('charmander')

      expect(fetch).toHaveBeenCalledTimes(2)
      expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon-species/charmander')
      expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/charmander')
    })

    it('should handle fetch', async () => {
      const { fetchPokemonDetails, pokemon } = usePokemonDetails()

      await fetchPokemonDetails('charmander')

      expect(pokemon.value).toEqual({
        id: 4,
        name: 'charmander-species',
        types: [],
        flavorText: [],
        ability: { name: 'blaze' },
        hiddenAbility: { name: 'solar-power' },
        sprites: [
          { 'front-default': 'url-to-sprite' },
        ],
      })
    })
  })
})
