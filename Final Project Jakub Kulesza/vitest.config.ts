import { defineConfig } from 'vitest/config'
import { appConfig } from './vite.config';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  ...appConfig,
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    coverage: {
        provider: 'v8'
    }
  },
})
