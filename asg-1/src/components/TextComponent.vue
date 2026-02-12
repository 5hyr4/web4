<script setup>
import { ref } from "vue";

const originalText = "Hello";
const text = ref(originalText);

const updateText = (event) => {
  text.value = event.target.value;
};

const resetText = () => {
  text.value = originalText;
};
</script>

<template>
  <section>
    <p>{{ text }}</p>

    <input type="text" @input="updateText" />

    <button @click="resetText">Reset Text</button>
  </section>
</template>
