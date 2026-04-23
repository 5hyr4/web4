<script setup>
import { ref, onMounted } from 'vue';

// ### Initialize state with null or empty values

const posts = ref([]);
const isLoading = ref(true);
const errorMessage = ref('');

// 2. Define the asynchronous fetch function
const fetchPosts = async () => {
  try {
    const response = await fetch('https://shyra70.582helvetica.com/cms/wp-json/wp/v2/movies');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Update our reactive ref with the data
    posts.value = await response.json();
  } catch (err) {
    errorMessage.value = err.message;
  } finally {
    // Stop the loading indicator regardless of success or failure
    isLoading.value = false;
  }
};

// 3. Trigger the fetch when the component is added to the DOM
onMounted(() => {
  fetchPosts();
});
</script>

<template>
  <div class="container">
    <h1>Latest Posts</h1>

    <div v-if="isLoading" class="loading">
      Retrieving posts...
    </div>

    <div v-else-if="errorMessage" class="error">
      Error: {{ errorMessage }}
    </div>

    <ul v-else>
      <li v-for="post in posts" :key="post.id">
        <p>{{ post.title.rendered }}</p>
    

      </li>
    </ul>
  </div>
</template>
