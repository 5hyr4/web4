<script setup>
// --- Configuration ---
const auth = btoa('ngy_56fl8di6:zySp mrVk lPvR IFOx M8PZ tH5b'); // Use your App Password
const baseUrl = 'https://ngy.582mi.com/headless/wp-json/wp/v2';

import { ref, reactive, onMounted } from 'vue';

const movieList = ref([]);
const fetchingList = ref(true);
const selectedId = ref(null);
const isUpdating = ref(false);
const showSuccessModal = ref(false);

const movieData = reactive({
  title: '',
  acf: { synopsis: '', year: '', poster: null }
});

const fetchMovieList = async () => {
  try {
    const res = await fetch(`${baseUrl}/movies?per_page=50`, { headers: { 'Authorization': `Basic ${auth}` } });
    movieList.value = await res.json();
  } finally { fetchingList.value = false; }
};

const selectMovie = (movie) => {
  selectedId.value = movie.id;
  movieData.title = movie.title.rendered;
  movieData.acf.synopsis = movie.acf.synopsis?.simple_value_formatted || '';
  movieData.acf.year = movie.acf.year?.simple_value_formatted || ''; 
  movieData.acf.poster = movie.acf.poster || null;
};

const handleUpdate = async () => {
  isUpdating.value = true;
  try {
    const res = await fetch(`${baseUrl}/movies/${selectedId.value}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Basic ${auth}` },
      body: JSON.stringify({
        title: movieData.title,
        acf: { synopsis: movieData.acf.synopsis, year: movieData.acf.year }
      })
    });
    if (res.ok) { showSuccessModal.value = true; await fetchMovieList(); }
  } finally { isUpdating.value = false; }
};

onMounted(fetchMovieList);
</script>

<template>
  <div class="edit-manager component-container">
    <h2 class="main-title">Manage & Edit Movies</h2>
    
    <ul v-if="!fetchingList" class="movie-grid">
      <li v-for="movie in movieList" :key="movie.id" :class="['movie-card', { active: selectedId === movie.id }]" @click="selectMovie(movie)">
        <div class="card-poster" v-if="movie.acf.poster" v-html="movie.acf.poster.simple_value_formatted"></div>
        <div class="card-content">
          <strong>{{ movie.title.rendered }}</strong>
          <span v-if="movie.acf.year">({{ movie.acf.year.simple_value_formatted }})</span>
        </div>
      </li>
    </ul>

    <section v-if="selectedId" class="edit-form-section">
      <div class="form-header">
        <div v-if="movieData.acf.poster" v-html="movieData.acf.poster.simple_value_formatted" class="form-preview-html"></div>
        <h3>Editing: {{ movieData.title }}</h3>
      </div>
      <form @submit.prevent="handleUpdate" class="wp-form">
        <div class="form-group"><label>Title</label><input v-model="movieData.title" type="text" /></div>
        <div class="form-group"><label>Synopsis</label><textarea v-model="movieData.acf.synopsis"></textarea></div>
        <div class="form-group"><label>Year</label><input v-model="movieData.acf.year" type="number" /></div>
        <div class="form-actions">
          <button type="submit" class="primary-btn" :disabled="isUpdating">Save Update</button>
          <button type="button" @click="selectedId = null" class="secondary-btn">Close</button>
        </div>
      </form>
    </section>

    <div v-if="showSuccessModal" class="modal-overlay">
      <div class="modal">
        <h3>✓ Success</h3>
        <p>Movie updated on WordPress.</p>
        <button @click="showSuccessModal = false" class="primary-btn">Dismiss</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.component-container { max-width: 1100px; margin: 3rem auto; padding: 2.5rem; background: #fff; border-radius: 16px; border: 1px solid #e1e8ed; font-family: 'Inter', sans-serif; }
.main-title { font-size: 1.75rem; font-weight: 800; color: #1a202c; margin-bottom: 2rem; border-bottom: 2px solid #edf2f7; padding-bottom: 1rem; }
.movie-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1.5rem; list-style: none; padding: 0; margin-bottom: 3rem; }
.movie-card { border: 1px solid #e1e8ed; border-radius: 12px; overflow: hidden; cursor: pointer; transition: 0.3s ease; }
.movie-card.active { border-color: #3498db; background: #f0f7ff; box-shadow: 0 0 0 2px #3498db; }
.card-poster :deep(img) { width: 100%; height: 140px; object-fit: cover; }
.card-content { padding: 12px; font-size: 0.9rem; }
.edit-form-section { background: #f8fafc; padding: 2rem; border-radius: 12px; border: 1px solid #e1e8ed; }
.form-header { display: flex; align-items: center; gap: 1.5rem; margin-bottom: 2rem; }
.form-preview-html :deep(img) { width: 70px; height: 100px; object-fit: cover; border-radius: 6px; }
.wp-form { display: flex; flex-direction: column; gap: 1.5rem; }
.form-group { display: flex; flex-direction: column; gap: 0.5rem; }
label { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #4a5568; }
input, textarea { padding: 12px; border: 2px solid #edf2f7; border-radius: 8px; background: #fff; }
.form-actions { display: flex; gap: 1rem; }
.primary-btn { flex: 1; padding: 14px; background: #3498db; color: #fff; border: none; border-radius: 10px; cursor: pointer; font-weight: 600; }
.secondary-btn { flex: 1; padding: 14px; background: #edf2f7; color: #4a5568; border: none; border-radius: 10px; cursor: pointer; font-weight: 600; }
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 1000; }
.modal { background: #fff; padding: 2.5rem; border-radius: 16px; text-align: center; width: 320px; }
</style>