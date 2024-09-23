import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export const appConfig = {
  plugins: [react()],
}

// https://vitejs.dev/config/
export default defineConfig({
  ...appConfig
})
