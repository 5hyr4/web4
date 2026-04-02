<script setup>
defineProps(["overview"])
</script>

<template>
  <section id="overview">
    <h2>Overview</h2>
    <p>{{ overview.description }}</p>
    <p><strong>Goal:</strong> {{ overview.goal }}</p>
  </section>
</template>