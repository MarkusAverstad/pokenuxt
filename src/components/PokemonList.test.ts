import { mount } from '@vue/test-utils'
import PokemonList from './PokemonList.vue'

describe('PokemonList', () => {
  it('should render', () => {
    const pokemonListWrapper = createWrapper()

    expect(pokemonListWrapper.exists()).toBe(true)
    expect(pokemonListWrapper.findAll('[data-test="pokemon-card"]')).toHaveLength(2)
    const bulbasaurLink = pokemonListWrapper.find('nuxt-link-stub[to="/pokemon/bulbasaur"]')
    const charmanderLink = pokemonListWrapper.find('nuxt-link-stub[to="/pokemon/charmander"]')
    expect(bulbasaurLink.exists()).toBe(true)
    expect(charmanderLink.exists()).toBe(true)
  })

  it('should match snapshot', () => {
    const pokemonListWrapper = createWrapper()

    expect(pokemonListWrapper.findAll('[data-test="pokemon-card"]')).toHaveLength(2)
    expect(pokemonListWrapper.html()).toMatchSnapshot()
  })

  const createWrapper = (props = {}) => {
    return mount(PokemonList, {
      props: {
        pokemonList: [
          {
            name: 'bulbasaur',
            formattedName: 'Bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
          },
          {
            name: 'charmander',
            formattedName: 'Charmander',
            url: 'https://pokeapi.co/api/v2/pokemon/4/',
          },
        ],
        ...props,
      },
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    })
  }
})
