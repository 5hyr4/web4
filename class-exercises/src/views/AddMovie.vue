<script setup>
// --- Configuration ---
const auth = btoa('ngy_56fl8di6:zySp mrVk lPvR IFOx M8PZ tH5b'); // Use your App Password
const baseUrl = 'https://ngy.582mi.com/headless/wp-json/wp/v2';

import { reactive, ref } from 'vue';

const isSubmitting = ref(false);
const selectedFile = ref(null);
const message = ref('');
const statusClass = ref('');

const movieData = reactive({
  title: '',
  status: 'publish',
  acf: { synopsis: '', year: '', poster: null }
});

const handleFileChange = (e) => { selectedFile.value = e.target.files[0]; };

const uploadPoster = async () => {
  if (!selectedFile.value) return null;
  const formData = new FormData();
  formData.append('file', selectedFile.value);
  const res = await fetch(`${baseUrl}/media`, {
    method: 'POST',
    headers: { 'Authorization': `Basic ${auth}` },
    body: formData
  });
  const media = await res.json();
  return media.id;
};

const handleFormSubmit = async () => {
  isSubmitting.value = true;
  message.value = 'Uploading movie data...';
  try {
    const posterId = await uploadPoster();
    if (posterId) movieData.acf.poster = posterId;
    const res = await fetch(`${baseUrl}/movies`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Basic ${auth}` },
      body: JSON.stringify(movieData)
    });
    if (res.ok) {
      message.value = "Movie added successfully!";
      statusClass.value = "success";
      movieData.title = ''; movieData.acf.synopsis = ''; movieData.acf.year = '';
    }
  } catch (err) {
    message.value = "Failed to connect to WordPress.";
    statusClass.value = "error";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="component-container">
    <h2 class="main-title">Add New Movie</h2>
    <form @submit.prevent="handleFormSubmit" class="wp-form">
      <section class="form-group">
        <label>Movie Title</label>
        <input v-model="movieData.title" type="text" placeholder="Inception" required />
      </section>
      <section class="form-group">
        <label>Synopsis</label>
        <textarea v-model="movieData.acf.synopsis" placeholder="Movie plot..."></textarea>
      </section>
      <section class="form-group">
        <label>Release Year</label>
        <input v-model="movieData.acf.year" type="number" placeholder="2010" />
      </section>
      <section class="form-group">
        <label>Movie Poster</label>
        <input type="file" @change="handleFileChange" accept="image/*" />
      </section>
      <button type="submit" class="primary-btn" :disabled="isSubmitting">
        {{ isSubmitting ? 'Processing...' : 'Add Movie' }}
      </button>
    </form>
    <div v-if="message" :class="['status-bar', statusClass]">{{ message }}</div>
  </div>
</template>

<style scoped>
.component-container { max-width: 650px; margin: 3rem auto; padding: 2.5rem; background: #fff; border-radius: 16px; border: 1px solid #e1e8ed; box-shadow: 0 10px 25px rgba(0,0,0,0.05); font-family: 'Inter', sans-serif; }
.main-title { font-size: 1.75rem; font-weight: 800; color: #1a202c; margin-bottom: 2rem; border-bottom: 2px solid #edf2f7; padding-bottom: 1rem; }
.wp-form { display: flex; flex-direction: column; gap: 1.5rem; }
.form-group { display: flex; flex-direction: column; gap: 0.5rem; }
label { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #4a5568; letter-spacing: 0.05em; }
input, textarea { padding: 12px 16px; border: 2px solid #edf2f7; border-radius: 10px; background: #f8fafc; font-size: 1rem; transition: all 0.2s; }
input:focus, textarea:focus { outline: none; border-color: #3498db; background: #fff; }
.primary-btn { padding: 16px; background: #3498db; color: #fff; font-weight: 700; border: none; border-radius: 10px; cursor: pointer; transition: background 0.2s; }
.primary-btn:disabled { background: #cbd5e0; }
.status-bar { margin-top: 1.5rem; padding: 1rem; border-radius: 10px; text-align: center; font-weight: 600; }
.success { background: #c6f6d5; color: #22543d; }
.error { background: #fed7d7; color: #822727; }
</style>