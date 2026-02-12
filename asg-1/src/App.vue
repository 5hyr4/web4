<script setup>
import TextComponent from './components/TextComponent.vue';
import CountComponent from './components/CountComponent.vue';
import ListComponent from './components/ListComponent.vue';
import LinkImageComponent from './components/LinkImageComponent.vue';
import ObjectComponent from './components/ObjectComponent.vue';

</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <BasicComponent />
  <CountComponent />  
  <TextComponent />
  <ListComponent />
  <LinkImageComponent />
  <ObjectComponent />
</template>


<style scoped>
</style>

