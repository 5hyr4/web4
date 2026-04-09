<script setup>
defineProps(["event"])
</script>

<template>
  <section id="event">
    <h2>Event</h2>
    <p>{{ event.description }}</p>
    <p><strong>Goal:</strong> {{ event.goal }}</p>
    <p>{{ event.concept }}</p>

  </section>
</template>