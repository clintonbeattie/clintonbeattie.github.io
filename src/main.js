import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { createHead } from 'unhead';

const head = createHead();

createApp(App)
  .use(router)  // The order of use() matters here, but this is correct
  .use(head)    // Use head after router
  .mount('#app');