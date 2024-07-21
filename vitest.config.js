import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**', 'stories/*', 'components/**.stories.js'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      watch: false,
      coverage: {
        provider: 'istanbul',
        exclude: ["src/stories/*", ".eslintrc.cjs", ".storybook/*", "test/*", "dist/", "**/*.stories.js", "src/main.js"]
      }
    }
  })
)
