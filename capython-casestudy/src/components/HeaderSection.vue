<script setup>
defineProps(["title", "name"])
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
    <p>Case Study by {{ name }}</p>
  </header>
</template>
<style scoped>

header {
    padding: 230px;
}

h1 {
    display: grid;
    text-align: center;
    font-size: 100px;
    color: #F5B700;
}

p {
    display: grid;
    text-align: center; 
    color: #F5B700;
}
</style>