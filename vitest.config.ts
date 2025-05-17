import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    include: ['**/*.{test,spec}.{mjs,cjs,ts}'],
    exclude: ['node_modules', 'dist', '.nuxt', '.output'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: [
        'src/**/*.{ts,vue}',
      ],
      exclude: [
        'node_modules/',
        '**/*.d.ts',
        '**/*.test.ts',
        '**/*.config.ts',
        '.nuxt/**',
        'dist/**',
      ],
    },
  },
})
