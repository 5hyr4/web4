<script setup>
defineProps(["capyskill", "reflection"])
</script>

<template>
  <section id="capyskill">

    <h2 class="section-title">Capyskill & Reflection</h2>

    <!-- CAPYSKILL -->
    <h3>{{ capyskill.skill }}</h3>
    <p>{{ capyskill.description }}</p>

    <!-- REFLECTION -->
    <h3>Reflection</h3>
    <p>{{ reflection }}</p>

  </section>
</template>