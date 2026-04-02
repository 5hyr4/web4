<script setup>
defineProps(["results"])
</script>

<template>
  <section id="results">

    <h2 class="section-title">Final Results</h2>

    <div class="grid">

      <article 
        v-for="item in results.posts" 
        :key="item.id"
        class="grid-item"
      >
        <img :src="item.src" alt="" />
      </article>

    </div>

  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 10px;
  max-width: 600px;
  margin: 0 auto;
}

.grid-item {
  aspect-ratio: 1 / 1; 
  overflow: hidden;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.gallery {
  display: grid;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  width: 250px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
}

img, video {
  width: 100%;
  border-radius: 8px;
}
</style>