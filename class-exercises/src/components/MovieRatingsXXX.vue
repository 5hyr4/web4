<script setup>
import { ref, onMounted } from 'vue';
import AddReview from './AddReview.vue';
import DatabaseAdmin from './DatabaseAdmin.vue';

const API_URL = 'https://ngy.582mi.com/web4/api/index.php';
const ratings = ref([]); const movies = ref([]); const users = ref([]); const movieStats = ref([]);

const fetchData = async () => {
  const [r, m, u, s] = await Promise.all([
    fetch(API_URL).then(res => res.json()),
    fetch(`${API_URL}?action=get_movies`).then(res => res.json()),
    fetch(`${API_URL}?action=get_users`).then(res => res.json()),
    fetch(`${API_URL}?action=get_movie_stats`).then(res => res.json())
  ]);
  ratings.value = r; movies.value = m; users.value = u; movieStats.value = s;
};
onMounted(fetchData);
</script>

<template>
  <div class="container">
    <header class="main-header">
      <h1>CineRating</h1>
      <button @click="fetchData" class="refresh-btn">↻ Refresh</button>
    </header>

    <main class="content-grid">
      <div class="left-col">
        <section class="stats-section">
          <div class="badge">Movie Library & Averages</div>
          <div class="stats-grid">
            <div v-for="m in movieStats" :key="m.movie_id" class="stat-card">
              <div><strong>{{ m.title }}</strong><br><small>{{ m.release_year }}</small></div>
              <div class="avg-box">{{ m.avg_score || '0' }}</div>
            </div>
          </div>
        </section>

        <section class="feed-section">
          <div class="badge">Live Reviews</div>
          <div v-for="r in ratings" :key="r.rating_id" class="rating-card">
            <h3>{{ r.title }} <span class="score-pill">{{ r.score }}/10</span></h3>
            <p class="stars"> <span v-for="n in 10" :class="{filled: n <= r.score}">★</span> </p>
            <p class="review">"{{ r.review_text }}"</p>
            <small>@{{ r.username }}</small>
          </div>
        </section>
      </div>

      <aside class="right-col">
        <AddReview :users="users" :movies="movies" @success="fetchData" />
        <DatabaseAdmin @success="fetchData" />
      </aside>
    </main>
  </div>
</template>

<style scoped>
.container { max-width: 1100px; margin: 0 auto; font-family: sans-serif; }
.main-header { background: #0f172a; color: white; padding: 2rem; border-radius: 0 0 15px 15px; display: grid; grid-template-columns: 1fr auto; align-items: center; }
.content-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 2rem; margin-top: 2rem; }
.stats-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
.stat-card { background: white; padding: 1rem; border: 1px solid #e2e8f0; border-radius: 8px; display: grid; grid-template-columns: 1fr auto; align-items: center; }
.avg-box { background: #166534; color: white; padding: 5px 10px; border-radius: 5px; font-weight: 800; }
.rating-card { background: white; padding: 1.5rem; border: 1px solid #e2e8f0; border-left: 6px solid #22c55e; border-radius: 12px; margin-bottom: 1rem; }
.stars .filled { color: #fbbf24; }
.stars span { color: #e2e8f0; font-size: 1.2rem; }
.badge { font-weight: 800; text-transform: uppercase; font-size: 0.7rem; margin-bottom: 1rem; color: #64748b; }
.refresh-btn { background: #2563eb; color: white; border: none; padding: 0.7rem; border-radius: 8px; cursor: pointer; }
</style>