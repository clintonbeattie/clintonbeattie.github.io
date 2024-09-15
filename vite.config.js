import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import { createHead } from 'unhead';

export default defineConfig({
  plugins: [
    vue(),        // Vue plugin for Vite
    Pages(),      // Automatic route generation
    createHead()  // Head management for SEO and meta tags
  ]
});
