import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createHead } from 'unhead';
import routes from 'virtual:generated-pages';  // Import auto-generated routes

// Initialize the Head Manager
const head = createHead();

// Create the router instance with auto-generated routes
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create and mount the Vue app
createApp(App)
  .use(router)  // First use the router
  .use(head)    // Then apply the head manager
  .mount('#app');
