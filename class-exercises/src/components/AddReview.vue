<script setup>
import { ref } from 'vue';
const props = defineProps(['users', 'movies']); const emit = defineEmits(['success']);
const form = ref({ user_id: '', movie_id: '', score: 0, review_text: '' });
const submit = async () => {
  await fetch('https://ngy.582mi.com/web4/api/index.php', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form.value)
  });
  form.value = { user_id: '', movie_id: '', score: 0, review_text: '' };
  emit('success');
};
</script>
<template>
  <div class="form-card review">
    <h3>Write Review</h3>
    <select v-model="form.user_id"><option value="" disabled>User</option><option v-for="u in users" :key="u.user_id" :value="u.user_id">{{ u.username }}</option></select>
    <select v-model="form.movie_id"><option value="" disabled>Movie</option><option v-for="m in movies" :key="m.movie_id" :value="m.movie_id">{{ m.title }}</option></select>
    <div class="stars-input"><span v-for="n in 10" @click="form.score = n" :class="{active: n <= form.score}">★</span></div>
    <textarea v-model="form.review_text" placeholder="Thoughts?"></textarea>
    <button @click="submit">Publish</button>
  </div>
</template>
<style scoped>
.form-card { background: #f1f5f9; padding: 1.5rem; border-radius: 15px; border: 2px solid #cbd5e1; margin-bottom: 1.5rem; display: grid; gap: 1rem; }
.review { border-top: 5px solid #2563eb; background: #eff6ff; }
.stars-input { font-size: 1.8rem; cursor: pointer; color: #cbd5e1; }
.stars-input .active { color: #fbbf24; }
button { background: #2563eb; color: white; border: none; padding: 0.8rem; border-radius: 8px; font-weight: 800; cursor: pointer; }
</style>