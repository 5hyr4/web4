<script setup>
// --- Configuration ---
const auth = btoa('ngy_56fl8di6:zySp mrVk lPvR IFOx M8PZ tH5b'); // Use your App Password
const baseUrl = 'https://ngy.582mi.com/headless/wp-json/wp/v2';

import { ref, onMounted } from 'vue';

const movieList = ref([]);
const isFetching = ref(true);
const isDeleting = ref(false);
const itemToDelete = ref(null);

const fetchMovies = async () => {
  try {
    const res = await fetch(`${baseUrl}/movies?per_page=50`, { headers: { 'Authorization': `Basic ${auth}` } });
    movieList.value = await res.json();
  } finally { isFetching.value = false; }
};

const confirmDeletion = async () => {
  if (!itemToDelete.value) return;
  isDeleting.value = true;
  try {
    const res = await fetch(`${baseUrl}/movies/${itemToDelete.value.id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Basic ${auth}` }
    });
    if (res.ok) {
      movieList.value = movieList.value.filter(m => m.id !== itemToDelete.value.id);
      itemToDelete.value = null;
    }
  } finally { isDeleting.value = false; }
};

onMounted(fetchMovies);
</script>

<template>
  <div class="component-container">
    <h2 class="main-title">Movie Inventory</h2>
    <div v-if="isFetching" class="status-msg">Syncing Library...</div>
    <div v-else class="delete-grid">
      <div v-for="movie in movieList" :key="movie.id" class="delete-card">
        <div class="movie-info">
          <strong>{{ movie.title.rendered }}</strong>
          <span v-if="movie.acf.year">{{ movie.acf.year.simple_value_formatted }}</span>
        </div>
        <button @click="itemToDelete = movie" class="danger-btn">Delete</button>
      </div>
    </div>

    <div v-if="itemToDelete" class="modal-overlay">
      <div class="modal">
        <h3>Confirm Deletion</h3>
        <p>Remove <strong>{{ itemToDelete.title.rendered }}</strong>?</p>
        <div class="form-actions">
          <button @click="confirmDeletion" class="danger-btn" :disabled="isDeleting">Yes, Delete</button>
          <button @click="itemToDelete = null" class="secondary-btn">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.component-container { max-width: 900px; margin: 3rem auto; padding: 2.5rem; background: #fff; border-radius: 16px; border: 1px solid #e1e8ed; font-family: 'Inter', sans-serif; }
.main-title { font-size: 1.75rem; font-weight: 800; color: #1a202c; margin-bottom: 2rem; border-bottom: 2px solid #edf2f7; padding-bottom: 1rem; }
.delete-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
.delete-card { padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; }
.movie-info { display: flex; flex-direction: column; }
.movie-info strong { color: #1e293b; font-size: 1.05rem; }
.movie-info span { color: #64748b; font-size: 0.85rem; }
.danger-btn { background: #fee2e2; color: #b91c1c; border: none; padding: 8px 16px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: 0.2s; }
.danger-btn:hover { background: #ef4444; color: #fff; }
.secondary-btn { padding: 12px; background: #f1f5f9; color: #475569; border: none; border-radius: 8px; cursor: pointer; flex: 1; }
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 1000; }
.modal { background: #fff; padding: 2.5rem; border-radius: 16px; text-align: center; width: 350px; }
.form-actions { display: flex; gap: 1rem; margin-top: 1.5rem; }
.status-msg { text-align: center; color: #64748b; font-style: italic; }
</style>