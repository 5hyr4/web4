<script setup>
defineProps(["agency"])
</script>

<template>
  <section id="agency">
    <h2>Agency</h2>
    <p>Agency: {{ agency.name }}</p>
    <p>Role: {{ agency.role }}</p>
    <p>{{ agency.description }}</p>
  </section>
</template>