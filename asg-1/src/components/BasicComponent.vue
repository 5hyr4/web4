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


const Url = ref("https://sandbox.582multi.media/")

const ImageUrl = ref("https://cdn.shopify.com/s/files/1/0578/3820/7151/files/trees-tree-a-tree-define-tree.jpg?v=1742773820")

const isFirst = ref(true);

const secondUrl = "https://vuejs.org/";
const secondImageUrl = "https://wallpapercave.com/wp/f65vJAG.jpg";

const toggleLinkImage = () => {
  isFirst.value = !isFirst.value;
};



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

<div>
  <img
    :src="isFirst ? ImageUrl : secondImageUrl"
    alt="Toggle Image"
    width="300"
  />

  <p>
    <a
      :href="isFirst ? Url : secondUrl"
      target="_blank"
    >
      Click here!
    </a>
  </p>

  <button @click="toggleLinkImage">
    Toggle image & link
  </button>
</div>


</template>

<style scoped>

.item-text {
  margin-left: 6px;
}
</style>