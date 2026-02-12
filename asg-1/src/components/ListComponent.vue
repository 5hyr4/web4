<script setup>
import { ref } from "vue";

const tomatoVisible = ref(true);
const onionVisible = ref(true);
const eggVisible = ref(true);

const hideTomato = () => {
  tomatoVisible.value = false;
};

const hideOnion = () => {
  onionVisible.value = false;
};

const hideEgg = () => {
  eggVisible.value = false;
};
</script>

<template>
  <section>

    <p v-if="tomatoVisible" @click="hideTomato">
      Tomato
    </p>

    <p v-if="onionVisible" @click="hideOnion">
      Onion
    </p>

    <p v-if="eggVisible" @click="hideEgg">
      Egg
    </p>

  </section>
</template>
