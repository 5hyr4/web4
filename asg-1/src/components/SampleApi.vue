<script setup>
import { ref, onMounted } from 'vue';

const posts = ref([]);
const isLoading = ref(true);
const errorMessage = ref('');

const fetchPosts = async () => {
  try {
    const response = await fetch('https://api.sampleapis.com/wines/reds');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    posts.value = await response.json();
  } catch (err) {
    errorMessage.value = err.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchPosts();
});
</script>


<template>
  <div class="container">
    <h1>Wines</h1>

    <div v-if="isLoading" class="loading">
      Retrieving wines...
    </div>

    <div v-else-if="errorMessage" class="error">
      Error: {{ errorMessage }}
    </div>

    <ul v-else>
      <li v-for="wine in posts" :key="wine.id">
        <p>{{ wine.winery }}</p>
        <p>{{ wine.location }}</p>
        <p>{{ wine.rating.average }}</p>
        <p>{{ wine.rating.reviews }}</p>

        <img :src="wine.image" :alt="wine.wine" />
      </li>
    </ul>
  </div>
</template>
  