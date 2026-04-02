<script setup>
defineProps(["reflection"])
</script>

<template>
  <section id="capyskill">
    <h2>Capyskill & Reflection</h2>

    <h3>Capyskill: {{ reflection.skill }}</h3>
    <p>{{ reflection.description }}</p>

    <h3>Personal Reflection</h3>
    <p>{{ reflection.personal }}</p>
  </section>
</template>

