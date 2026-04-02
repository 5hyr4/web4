<script setup>
import { ref } from 'vue';

// const reviews = ref([]);
//const reviewsLoading = ref(true);

// fetch('https://ngy.582mi.com/web4/api/')
  // .then(res => res.json())
 // .then(data => reviews.value = data)
  // .then(() => reviewsLoading.value = false)
  // .catch(err => console.error('Error:', err)); 

  fetch('https://ngy.582mi.com/web4/api/index.php?type=movie', {
  method: 'POST', // Specify the HTTP method
  headers: {
    'Content-Type': 'application/json', // Tell the server you're sending JSON
    'Authorization': 'Bearer your-token-here' // Optional: pass security tokens
  },
  body: JSON.stringify({ // The data must be converted to a string
    title: 'Wall-E',
    release_year: 2008,
    genre: 'Animation'
  })
})
.then(res => res.json())
.then(data => console.log('Movie Added:', data))
.catch(err => console.error('Error:', err));
</script>

<template>
  <section v-if="!reviewsLoading">
    {{ reviews }}
  </section>
</template>