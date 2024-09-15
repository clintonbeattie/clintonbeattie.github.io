<template>
    <div>
      <h1>Blog List</h1>
  
      <h2>UX Blogs</h2>
      <ul>
        <li v-for="route in uxBlogRoutes" :key="route.path">
          <router-link :to="route.path">{{ route.name || route.path }}</router-link>
        </li>
      </ul>
  
      <h2>Accessibility Blogs</h2>
      <ul>
        <li v-for="route in accessibilityBlogRoutes" :key="route.path">
          <router-link :to="route.path">{{ route.name || route.path }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'BlogIndex',
    computed: {
      uxBlogRoutes() {
        const router = useRouter();
        // Filter routes that start with '/blog/ux/'
        return router.getRoutes().filter(route => route.path.startsWith('/blog/ux/'));
      },
      accessibilityBlogRoutes() {
        const router = useRouter();
        // Filter routes that start with '/blog/accessibility/'
        return router.getRoutes().filter(route => route.path.startsWith('/blog/accessibility/'));
      }
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  
  h2 {
    color: #2c3e50;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  a {
    color: #42b983;
    text-decoration: none;
  }
  </style>
  