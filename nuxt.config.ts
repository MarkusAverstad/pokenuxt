import { resolve } from 'path'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  devtools: { enabled: true },
  srcDir: './src',
  alias: {
    '@stores': resolve(__dirname, './src/stores'),
    '@types': resolve(__dirname, './src/types'),
    '@utils': resolve(__dirname, './src/utils'),
  },
  compatibilityDate: '2024-11-01',
  typescript: {
    typeCheck: true,
  },
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
})
