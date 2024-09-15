<template>
    <div>
        <h1>Blog 2</h1>
        <p>This is the About page of the application.</p>
    </div>
</template>
  
<script setup>
  import { useHead } from 'unhead';

  useHead({
      title: 'About Page',
      meta: [
          {
              name: 'description',
              content: 'The about page of our example app.',
          },
      ],
  });
</script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  