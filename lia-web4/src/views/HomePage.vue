<script setup>
// --- Configuration ---
const auth = btoa('ngy_56fl8di6:zySp mrVk lPvR IFOx M8PZ tH5b'); // Use your App Password
const baseUrl = 'https://ngy.582mi.com/headless/wp-json/wp/v2';

import { ref, onMounted } from 'vue';

const movies = ref([]);
const isFetching = ref(true);
const errorMessage = ref('');

/**
 * Fetch all movies for the gallery
 */
const fetchMovies = async () => {
  isFetching.value = true;
  try {
    const res = await fetch(`${baseUrl}/movies?per_page=50&_fields=id,title,acf`, {
      headers: { 'Authorization': `Basic ${auth}` }
    });
    
    if (!res.ok) throw new Error("Could not sync with movie library.");
    
    movies.value = await res.json();
  } catch (err) {
    errorMessage.value = err.message;
  } finally {
    isFetching.value = false;
  }
};

onMounted(fetchMovies);
</script>

<template>
  <div class="component-container">
    <header class="gallery-header">
      <h2 class="main-title">Movie Gallery</h2>
      <p class="subtitle">Browse the complete collection of titles and synopses.</p>
    </header>

    <div v-if="isFetching" class="status-msg">
      <div class="spinner"></div>
      <p>Loading collection...</p>
    </div>

    <div v-else-if="errorMessage" class="status-bar error">
      {{ errorMessage }}
    </div>

    <div v-else class="movie-grid">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <div class="poster-frame">
          <div 
            v-if="movie.acf.poster" 
            v-html="movie.acf.poster.simple_value_formatted" 
            class="poster-html"
          ></div>
          <div v-else class="poster-placeholder">
            <span>No Poster Available</span>
          </div>
        </div>

        <div class="movie-meta">
          <h3 class="movie-title">{{ movie.title.rendered }}</h3>
          <span class="movie-year" v-if="movie.acf.year">
            {{ movie.acf.year.simple_value_formatted }}
          </span>
          <p class="movie-synopsis" v-if="movie.acf.synopsis">
            {{ movie.acf.synopsis.simple_value_formatted }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.component-container { 
  max-width: 1200px; 
  margin: 3rem auto; 
  padding: 2.5rem; 
  background: #fff; 
  border-radius: 16px; 
  border: 1px solid #e1e8ed; 
  box-shadow: 0 10px 25px rgba(0,0,0,0.05); 
  font-family: 'Inter', sans-serif; 
}

.gallery-header { margin-bottom: 3rem; }

.main-title { 
  font-size: 1.75rem; 
  font-weight: 800; 
  color: #1a202c; 
  margin-bottom: 0.5rem; 
  border-bottom: 2px solid #edf2f7; 
  padding-bottom: 1rem; 
}

.subtitle { color: #718096; font-size: 1rem; }

/* Grid Layout */
.movie-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
  gap: 2rem; 
}

.movie-card { 
  background: #fff; 
  border-radius: 12px; 
  border: 1px solid #e2e8f0; 
  overflow: hidden; 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.movie-card:hover { 
  transform: translateY(-8px); 
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Poster Styling */
.poster-frame { 
  width: 100%; 
  height: 400px; 
  background: #f1f5f9; 
  position: relative;
}

.poster-html :deep(img) { 
  width: 100%; 
  height: 400px; 
  object-fit: cover; 
  display: block;
}

.poster-placeholder { 
  height: 100%; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  color: #94a3b8; 
  font-size: 0.9rem;
  font-weight: 600;
}

/* Meta Styling */
.movie-meta { padding: 1.5rem; }

.movie-title { 
  font-size: 1.25rem; 
  font-weight: 700; 
  color: #1e293b; 
  margin-bottom: 0.25rem; 
}

.movie-year { 
  display: inline-block; 
  font-size: 0.85rem; 
  font-weight: 600; 
  color: #3498db; 
  background: #ebf5fb; 
  padding: 2px 8px; 
  border-radius: 4px; 
  margin-bottom: 1rem;
}

.movie-synopsis { 
  color: #475569; 
  font-size: 0.9rem; 
  line-height: 1.6; 
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

/* Loading Spinner */
.status-msg { text-align: center; padding: 5rem; color: #64748b; }
.spinner { 
  border: 4px solid #f1f5f9; 
  border-top: 4px solid #3498db; 
  border-radius: 50%; 
  width: 50px; 
  height: 50px; 
  animation: spin 1s linear infinite; 
  margin: 0 auto 1.5rem; 
}

@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

.status-bar.error { 
  background: #fed7d7; 
  color: #822727; 
  padding: 1rem; 
  border-radius: 10px; 
  text-align: center; 
}
</style>