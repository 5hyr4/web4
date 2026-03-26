<script setup>
// import BasicComponent from './components/BasicComponent.vue';
// import BasicReactivity from './components/BasicReactivity.vue';
import TwoWayBind from './components/TwoWayBind.vue';
import TaskManager from './components/TaskManager.vue';
import PropEx from './components/PropEx.vue';
import LetterBounce from './components/LetterBounce.vue';
import WpApiBasics from './components/WpApiBasics.vue';
import WpApiExplore from './components/WpApiExplore.vue';

</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <LetterBounce character="H"/>
  <LetterBounce v-for="character in 'Hello World'" :key="character" :character="character" />

  <img src="./assets/olivcelso-nature-10106842_640" alt="">
  <!-- <BasicReactivity></BasicReactivity>

  <BasicComponent />
  <BasicComponent />
  <BasicComponent />
  <BasicComponent /> -->

  <TwoWayBind />
  <TaskManager />
  <PropEx text="1" color="red"/>
  <PropEx text="1" color="green"/>
  <PropEx text="1" color="blue"/>
  <PropEx text="1" color="yellow"/>
  <WpApiBasics />
  

</template>


<style scoped></style>
