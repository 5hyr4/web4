<script setup>
import { ref, computed } from 'vue';

const number1 = ref(10)
const number2 = ref(20)
const number3 = ref(30)
// const sum = ref(number1.value + number2.value + number3.value)

number1.value = 42;

const sum = computed(() => {
    return number1.value + number2.value + number3.value
})
</script>

<template>
  <div>
    <h2>Two Way Binding Example</h2>
    <input type="number" v-model="number1">
    <input type="number" v-model="number2">
    <input type="number" v-model="number3">

    <button >Calculate Sum</button>
    <p>Number 1: {{ number1 }}</p>
    <p>Number 2: {{ number2 }}</p>
    <p>Number 3: {{ number3 }}</p>

    <p>Sum: {{ sum }}</p>
  </div>
</template>