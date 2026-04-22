<script setup>
import TextComponent from './components/TextComponent.vue';
import CountComponent from './components/CountComponent.vue';
import ListComponent from './components/ListComponent.vue';
import LinkImageComponent from './components/LinkImageComponent.vue';
import ObjectComponent from './components/ObjectComponent.vue';
import BookCard from './components/BookCard.vue';
import SampleApi from './components/SampleApi.vue';

</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <nav>
    <router-link to="/basic-component">BasicComponent</router-link>
    <router-link to="/book-card">BookCard</router-link>
    <router-link to="/count-component">CountComponent</router-link>
    <router-link to="/link-image-component">LinkImageComponent</router-link>
    <router-link to="/list-component">ListComponent</router-link>
    <router-link to="/object-component">ObjectComponent</router-link>
    <router-link to="/sample-api">SampleApi</router-link>
    <router-link to="/text-component">TextComponent</router-link>


  </nav>

  <router-view />


  <!-- <BasicComponent />
  <CountComponent />  
  <TextComponent />
  <ListComponent />
  <LinkImageComponent />
  <ObjectComponent />
  <BookCard />
  <SampleApi /> -->
</template>


<style scoped>
</style>

