<script setup>
import { ref } from "vue";

const firstLink = "https://sandbox.582multi.media/";
const secondLink = "https://vuejs.org/";

const firstImage = "https://cdn.shopify.com/s/files/1/0578/3820/7151/files/trees-tree-a-tree-define-tree.jpg?v=1742773820";
const secondImage = "https://wallpapercave.com/wp/f65vJAG.jpg";

const currentLink = ref(firstLink);
const currentImage = ref(firstImage);

const toggleMedia = () => {
  if (currentLink.value === firstLink) {
    currentLink.value = secondLink;
    currentImage.value = secondImage;
  } else {
    currentLink.value = firstLink;
    currentImage.value = firstImage;
  }
};
</script>

<template>
  <section>
    <a :href="currentLink" target="_blank">Click here!</a>

    <p>
      <img :src="currentImage" 
      alt="Toggle Image"
      width="300">
    </p>

    <button @click="toggleMedia">Toggle</button>
  </section>
</template>
