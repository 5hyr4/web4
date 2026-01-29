<script setup>

import { ref } from "vue";
let count = ref(0);
</script>

<template>
  <div>
    <h1>Count is: {{ count }}</h1>
    <button @click="count--">Decrement</button>
  </div>
</template>

<style scoped>
div {
  color: mediumslateblue;
}

button {
  color: rgb(255, 255, 255);
  background-color: tomato;
  width: 100px;
}
</style>