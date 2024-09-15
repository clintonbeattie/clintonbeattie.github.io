import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';  // Import auto-generated routes

const router = createRouter({
  history: createWebHistory('/'),
  routes,  // Use auto-generated routes from vite-plugin-pages
});

export default router;
