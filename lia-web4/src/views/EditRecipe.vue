<script setup>
const auth = btoa('shyra70:h0CgCzRIHhEb8GplKQkY4Fiv'); 
const baseUrl = 'https://shyra70.582helvetica.com/cms/wp-json/wp/v2';

import { ref, reactive, onMounted } from 'vue';

const recipeList = ref([]);
const fetchingList = ref(true);
const selectedId = ref(null);
const isUpdating = ref(false);
const showSuccessModal = ref(false);

const recipeData = reactive({
  title: '',
  acf: { description: '', ingredients: '', instructions: '', time: '', image: null }
});

const fetchRecipeList = async () => {
  try {
    const res = await fetch(`${baseUrl}/recipe?acf_format=standard`, { headers: { 'Authorization': `Basic ${auth}` } });
    recipeList.value = await res.json();
  } finally { fetchingList.value = false; }
};

const selectRecipe = (recipe) => {
  selectedId.value = recipe.id;
  recipeData.title = recipe.title.rendered;
  recipeData.acf.description = recipe.acf.description || '';
  recipeData.acf.ingredients = recipe.acf.ingredients || '';
  recipeData.acf.instructions = recipe.acf.instructions || '';
  recipeData.acf.time = recipe.acf.time || '';
  recipeData.acf.image = recipe.acf.image || null;
};

const handleUpdate = async () => {
  isUpdating.value = true;
  try {
    const res = await fetch(`${baseUrl}/recipe/${selectedId.value}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Basic ${auth}` },
      body: JSON.stringify({
        title: recipeData.title,
        acf: { description: recipeData.acf.description, ingredients: recipeData.acf.ingredients, instructions: recipeData.acf.instructions, time: recipeData.acf.time, image: recipeData.acf.image?.id || null
        }
      })
    });
    const data = await res.json();
    console.log(data);
    if (res.ok) { showSuccessModal.value = true; await fetchRecipeList(); }
  } finally { isUpdating.value = false; }
};

onMounted(fetchRecipeList);
</script>

<template>
  <div class="edit-manager component-container">
    <h2 class="main-title">Manage & Edit Recipes</h2>
    
    <ul v-if="!fetchingList" class="recipe-grid">
      <li v-for="recipe in recipeList" :key="recipe.id" :class="['recipe-card', { active: selectedId === recipe.id }]" @click="selectRecipe(recipe)">
        <div class="card-poster" v-if="recipe.acf?.image?.url">
          <img :src="recipe.acf.image.url" alt=""></div>        
          <div class="card-content">
          <strong>{{ recipe.title.rendered }}</strong>
          <span v-if="recipe.acf.time">({{ recipe.acf.time }})</span>
        </div>
      </li>
    </ul>

    <section v-if="selectedId" class="edit-form-section">
      <div class="form-header">
        <div
          v-if="recipeData.acf?.image?.url"
          class="form-preview-html"><img :src="recipeData.acf.image.url" alt=""></div>        
        <h3>Editing: {{ recipeData.title }}</h3>
      </div>
      <form @submit.prevent="handleUpdate" class="wp-form">
        <div class="form-group"><label>Title</label><input v-model="recipeData.title" type="text" /></div>
        <div class="form-group"><label>Description</label><textarea v-model="recipeData.acf.description"></textarea></div>
        <div class="form-group"><label>Ingredients</label><textarea v-model="recipeData.acf.ingredients"></textarea></div>
        <div class="form-group"><label>Instructions</label><textarea v-model="recipeData.acf.instructions"></textarea></div>
        <div class="form-group"><label>Time</label><input v-model="recipeData.acf.time" type="text" /></div>
        <div class="form-actions">
          <button type="submit" class="primary-btn" :disabled="isUpdating">Save Update</button>
          <button type="button" @click="selectedId = null" class="secondary-btn">Close</button>
        </div>
      </form>
    </section>

    <div v-if="showSuccessModal" class="modal-overlay">
      <div class="modal">
        <h3>✓ Success</h3>
        <p>Recipe updated on WordPress.</p>
        <button @click="showSuccessModal = false" class="primary-btn">Dismiss</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.component-container { max-width: 1100px; margin: 3rem auto; padding: 2.5rem; background: #fffdf9; border-radius: 16px; border: 1px solid #3662528d; font-family: 'Inter', sans-serif; }
.main-title { font-size: 1.75rem; font-weight: 800; color: #366252; margin-bottom: 2rem; border-bottom: 2px solid #edf2f7; padding-bottom: 1rem; }
.recipe-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1.5rem; list-style: none; padding: 0; margin-bottom: 3rem; }
.recipe-card { border: 1px solid #e1e8ed; border-radius: 12px; overflow: hidden; cursor: pointer; transition: 0.3s ease; }
.recipe-card.active { border-color: #3498db; background: #f0f7ff; box-shadow: 0 0 0 2px #3498db; }
.card-poster img { width: 100%; height: 140px; object-fit: cover; }
.card-content { padding: 12px; font-size: 0.9rem; }
.edit-form-section { background: #f8fafc; padding: 2rem; border-radius: 12px; border: 1px solid #e1e8ed; }
.form-header { display: flex; align-items: center; gap: 1.5rem; margin-bottom: 2rem; }
.form-preview-html img{ width: 70px; height: 100px; object-fit: cover; border-radius: 6px; }
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