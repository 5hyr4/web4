<script setup>
import { ref } from "vue";

const count = ref(0);

const add = () => {
  count.value++;
};

const subtract = () => {
  count.value--;
};

const reset = () => {
  count.value = 0;
};
</script>

<template>
  <section>
    <h2>Counter</h2>
    <p>Count: {{ count }}</p>

    <button @click="add">Increase</button>
    <button @click="subtract">Decrease</button>
    <button @click="reset">Reset</button>
  </section>
</template>
