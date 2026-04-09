<script setup>
defineProps(["team"])
</script>

<template>
  <section>
    <h2>Team</h2>
    <p><ul class="team-list">
      <li v-for="member in team" :key="member.name">
        {{ member.name }} — {{ member.role }}
      </li>
    </ul>
  </p>
  </section>
</template>

<style scoped>
.team-list {
  list-style: none;
  padding: 0;
}

.team-list li {
  margin: 8px 0;
}

.team-list {
  list-style: none;
  padding: 0;
  text-align: left;
}
</style>