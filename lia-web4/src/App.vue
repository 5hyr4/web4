<script setup>
// import WpApi from './components/WpApi.vue';
</script>

<template>
  <header class="app-name">
<h1 class="title-script">Daily Scoop</h1>  
</header>
<p></p>

  <nav>
  <router-link to="/">Home</router-link>
  <router-link to="/recipe-gallery">Gallery</router-link>
  <router-link to="/post-recipe">Post</router-link>
  <router-link to="/edit-recipe">Edit</router-link>
  <router-link to="/delete-recipe">Delete</router-link>

</nav>

<router-view />


</template>

<style scoped>

</style>
