<script setup>
defineProps(["team"])
</script>

<template>
  <section id="team">
    <h2>Team</h2>
    <ul>
      <li v-for="member in team" :key="member.name">
        {{ member.name }} — {{ member.role }}
      </li>
    </ul>
  </section>
</template>