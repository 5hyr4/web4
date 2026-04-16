<script setup>
import { ref } from 'vue';
const emit = defineEmits(['success']);
const movie = ref({ title: '', release_year: '' }); const user = ref({ username: '', email: '' });
const save = async (type, data, reset) => {
  await fetch(`https://ngy.582mi.com/web4/api/index.php?type=${type}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
  });
  reset(); emit('success');
};
</script>
<template>
  <div class="form-card admin">
    <h3>Admin Tools</h3>
    <div class="tool"><input v-model="movie.title" placeholder="Movie Title"><button @click="save('movie', movie, () => movie.title = '')">Add Movie</button></div>
    <div class="tool"><input v-model="user.username" placeholder="Username"><button @click="save('user', user, () => user.username = '')">Add User</button></div>
  </div>
</template>
<style scoped>
.admin { background: #f8fafc; border: 2px solid #e2e8f0; }
.tool { display: grid; grid-template-columns: 1fr auto; gap: 0.5rem; margin-bottom: 1rem; }
input { padding: 0.5rem; border-radius: 5px; border: 1px solid #cbd5e1; }
button { background: #1e293b; color: white; border: none; padding: 0.5rem; border-radius: 5px; cursor: pointer; }
</style>