<script setup>
defineProps(["links"])
</script>

<template>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.id">
        <a :href="'#' + link.id">
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>


<style scoped>
nav {
  background: #000231;
  padding: 15px;
}

ul {
  display: flex;
  gap: 20px;
  list-style: none;
  justify-content: center;
}

a {
  color: white;
  text-decoration: none;
  font-family: "Outfit", sans-serif;
}

a:hover {
  color: #F5B700;
}
</style>