<template>
    <div>
        <h1>Blog 1</h1>
        <p>Accessibility</p>
    </div>
</template>
  
<script setup>
  import { useHead } from 'unhead';

  useHead({
      title: 'My first accessibility post',
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
  