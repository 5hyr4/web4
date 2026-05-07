<script setup>
// --- Configuration ---
const auth = btoa('h0Cg CzRI HhEb 8Gpl KQkY 4Fiv'); // Use your App Password
const baseUrl = 'https://shyra70.582helvetica.com/cms/wp-json/wp/v2';

import { ref, onMounted } from 'vue';

const recipes = ref([]);
const isFetching = ref(true);
const errorMessage = ref('');

/**
 * Fetch all recipes for the gallery
 */
const fetchRecipes = async () => {
  isFetching.value = true;
  try {
    const res = await fetch(`${baseUrl}/recipe?acf_format=standard`, {
      headers: { 'Authorization': `Basic ${auth}` }
    });
    
    if (!res.ok) throw new Error("Could not sync with recipe library.");
    
    recipes.value = await res.json();
  } catch (err) {
    errorMessage.value = err.message;
  } finally {
    isFetching.value = false;
  }
};

onMounted(fetchRecipes);
</script>

<template>
  <div class="component-container">
    <header class="recipe-header">
      <h2 class="main-title">Recipe Gallery</h2>
      <p class="subtitle">Browse the complete collection of titles and synopses.</p>
    </header>

    <div v-if="isFetching" class="status-msg">
      <div class="spinner"></div>
      <p>Loading collection...</p>
    </div>

    <div v-else-if="errorMessage" class="status-bar error">
      {{ errorMessage }}
    </div>

    <div v-else class="recipe-grid">
      <div v-for="recipe in recipes" :key="recipe.id" class="recipe-card">
        <div class="poster-frame">
          <div 
            v-if="recipe.acf.poster" 
            v-html="recipe.acf.poster.simple_value_formatted" 
            class="poster-html"
          ></div>
          <div v-else class="poster-placeholder">
            <span>No Poster Available</span>
          </div>
        </div>

        <div class="recipe-meta">
          <h3 class="recipe-title">{{ recipe.title.rendered }}</h3>
          <span class="recipe-time" v-if="recipe.acf.year">
            {{ recipe.acf.year.simple_value_formatted }}
          </span>
          <p class="recipe-description" v-if="recipe.acf.description">
            {{ recipe.acf.description.simple_value_formatted }}
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
.recipe-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
  gap: 2rem; 
}

.recipe-card { 
  background: #fff; 
  border-radius: 12px; 
  border: 1px solid #e2e8f0; 
  overflow: hidden; 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.recipe-card:hover { 
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
.recipe-meta { padding: 1.5rem; }

.recipe-title { 
  font-size: 1.25rem; 
  font-weight: 700; 
  color: #1e293b; 
  margin-bottom: 0.25rem; 
}

.recipe-time { 
  display: inline-block; 
  font-size: 0.85rem; 
  font-weight: 600; 
  color: #3498db; 
  background: #ebf5fb; 
  padding: 2px 8px; 
  border-radius: 4px; 
  margin-bottom: 1rem;
}

.recipe-description { 
  color: #475569; 
  font-size: 0.9rem; 
  line-height: 1.6; 
  display: -webkit-box;
  /* -webkit-line-clamp: 4; */
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