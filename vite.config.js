import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    vue(),
    Pages({
      // Options for customizing route generation
      extensions: ['vue'], // Only generate routes for .vue files
    }),
  ],
})