<template>
    <div>
      <h1>Home</h1>
    </div>
</template>
  
<script setup>
    import { useHead } from 'unhead';

    useHead({
        title: 'Home Page',
        meta: [
            {
                name: 'description',
                content: 'The home page of our example app.',
            },
        ],
    });
</script>
  
<style scoped>
/* Add your styles here */
</style>
  