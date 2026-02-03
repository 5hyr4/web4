<script setup>

import { ref } from "vue";
let count = ref(0);
const text = ref("");

const increment = ref(count.value++)
const decrement = ref(count.value--)
const reset = ref(count.value = 0)

const resetText = () => {
  text.value = "";
};

const textList = ref([

{label: "Tomato", done: false},
{label: "Onions", done: false},
{label: "Egg", done: false},
{label: "Bread", done: false},
{label: "Banana", done: false},

]);

</script>

<template>
  <div>
    <h1>Count is: {{ count }}</h1>
    <button @click="count++">{{increment}}Increment</button>
    <button @click="count--">{{decrement}}Decrement</button>
    <button @click="count = 0">{{reset}}Reset</button>
  </div>

  <div>
  <p>{{text}}</p>
  <input type="text" v-model="text" />
  <button @click="resetText">Reset</button>
</div>

<div>
    <ul>
        <li v-for="(item, index) in textList" :key="index">
            <input type="checkbox" v-model="item.done" />

            <span class="item-text">
                {{ item.label }}
            </span>

        </li>
    </ul>
</div>

</template>

<style scoped>

.item-text {
  margin-left: 6px;
}
</style>