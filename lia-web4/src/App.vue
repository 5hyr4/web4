<script setup>
// import WpApi from './components/WpApi.vue';
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <nav>
  <router-link to="/home-page">HomePage</router-link>
  <router-link to="/recipe-gallery">RecipeGallery</router-link>
  <router-link to="/post-recipe">PostRecipe</router-link>
  <router-link to="/edit-recipe">EditRecipe</router-link>
  <router-link to="/delete-recipe">DeleteRecipe</router-link>

</nav>

<router-view />


</template>

<style scoped></style>
