<script setup>
// --- Configuration ---
const auth = btoa('h0Cg CzRI HhEb 8Gpl KQkY 4Fiv'); // Use your App Password
const baseUrl = 'https://shyra70.582helvetica.com/cms/wp-json/wp/v2';

import { reactive, ref } from 'vue';

const isSubmitting = ref(false);
const selectedFile = ref(null);
const message = ref('');
const statusClass = ref('');

const recipeData = reactive({
  title: '',
  status: 'publish',
  acf: { description: '', time: '', poster: null }
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
  message.value = 'Uploading recipe data...';
  try {
    const posterId = await uploadPoster();
    if (posterId) recipeData.acf.poster = posterId;
    const res = await fetch(`${baseUrl}/recipes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Basic ${auth}` },
      body: JSON.stringify(recipeData)
    });
    if (res.ok) {
      message.value = "Recipe added successfully!";
      statusClass.value = "success";
      recipeData.title = ''; recipeData.acf.description = ''; recipeData.acf.ingredients = ''; recipeData.acf.instructions = ''; recipeData.acf.time = '';
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
    <h2 class="main-title">Post New Recipe</h2>
    <form @submit.prevent="handleFormSubmit" class="wp-form">
      <section class="form-group">
        <label>Recipe Title</label>
        <input v-model="recipeData.title" type="text" placeholder="Recipe name" required />
      </section>
      <section class="form-group">
        <label>Description</label>
        <textarea v-model="recipeData.acf.description" placeholder="Recipe description..."></textarea>
      </section>
            <section class="form-group">
        <label>Ingredients</label>
        <textarea v-model="recipeData.acf.ingredients" placeholder="List of ingredients..."></textarea>
      </section>
        <section class="form-group">
        <label>Instructions</label>
        <textarea v-model="recipeData.acf.instructions" placeholder="Recipe instructions..."></textarea>
      </section>
      <section class="form-group">
        <label>Time</label>
        <input v-model="recipeData.acf.time" type="text" placeholder="30 minutes" />
      </section>
      <section class="form-group">
        <label>Recipe Poster</label>
        <input type="file" @change="handleFileChange" accept="image/*" />
      </section>
      <button type="submit" class="primary-btn" :disabled="isSubmitting">
        {{ isSubmitting ? 'Processing...' : 'Post Recipe' }}
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