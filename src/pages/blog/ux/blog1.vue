<template>
    <div>
        <h1>Blog 1</h1>
        <p>This is the blog 1 page of the application.</p>
    </div>
</template>
  
<script setup>
  import { useHead } from 'unhead';

  useHead({
      title: 'Blog 1 Page',
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
  