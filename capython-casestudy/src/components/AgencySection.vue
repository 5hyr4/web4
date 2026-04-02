<script setup>
defineProps(["agency"])
</script>

<template>
  <section id="agency">
    <h2>Agency & Event</h2>
    <p>Agency: {{ agency.name }}</p>
    <p>Role: {{ agency.role }}</p>
    <p>Client: {{ agency.client }}</p>
    <p>Event: {{ agency.event }}</p>
  </section>
</template>