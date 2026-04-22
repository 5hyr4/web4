<script setup>
// import BasicComponent from './components/BasicComponent.vue';
// import BasicReactivity from './components/BasicReactivity.vue';
import TwoWayBind from './components/TwoWayBind.vue';
import TaskManager from './components/TaskManager.vue';
import PropEx from './components/PropEx.vue';
import LetterBounce from './components/LetterBounce.vue';
import WpApiBasics from './components/WpApiBasics.vue';
import WpApiExplore from './components/WpApiExplore.vue';
import FormBasics from './components/FormBasics.vue';
import FetchBasics from './components/FetchBasics.vue';
import MovieRatings from './components/MovieRatings.vue';

// import LettersView from './components/LettersView.vue'

</script>

<template>
  <h1>Demo</h1>

  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/wp-api-basics">WpApiBasics</router-link>
    <router-link to="/wp-headless-basics">WpHeadlessBasics</router-link>
    <router-link to="/wp-api-explore">WpApiExplore</router-link>
    <router-link to="/fetch-basics">FetchBasics</router-link>
    <router-link to="/letters-view">LettersView</router-link>
    <router-link to="/wp-rest-view">WpRestView</router-link>
    <router-link to="/add-review">AddReview</router-link>
    <router-link to="/basic-component">BasicComponent</router-link>
    <router-link to="/basic-reactivity">BasicReactivity</router-link>
    <router-link to="/database-admin">DatabaseAdmin</router-link>
    <router-link to="/prop-ex">PropEx</router-link>
    <router-link to="/task-manager">TaskManager</router-link>
    <router-link to="/two-way-bind">TwoWayBind</router-link>


    

  </nav>

  <router-view />
  <!-- <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p> -->

  <!-- <LetterBounce character="H"/>
  <LetterBounce v-for="character in 'Hello World'" :key="character" :character="character" />

  <img src="./assets/olivcelso-nature-10106842_640" alt=""> -->
  <!-- <BasicReactivity></BasicReactivity>

  <BasicComponent />
  <BasicComponent />
  <BasicComponent />
  <BasicComponent /> -->

  <!-- <TwoWayBind />
  <TaskManager />
  <PropEx text="1" color="red"/>
  <PropEx text="1" color="green"/>
  <PropEx text="1" color="blue"/>
  <PropEx text="1" color="yellow"/>
  <WpApiBasics />
  <WpApiExplore /> -->
  <!-- <FormBasics />
  <FetchBasics />
  <MovieRatings />
   -->

</template>


<style scoped></style>
