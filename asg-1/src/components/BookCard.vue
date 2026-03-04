<script setup>
defineProps([
  "title",
  "author",
  "year",
  "genre",
  "isRead"
])
</script>

<template>
  <div class="book-info">
    <h3>{{ title }}</h3>
    <p>Author: {{ author }}</p>
    <p>Year: {{ year }}</p>
    <p>Genre: {{ genre }}</p>

    <p :class="{ read: isRead }">
      Read: {{ isRead }}
    </p>

    <button @click="toggleRead(item)">
      Toggle Read
    </button>

  </div>
</template>

<style scoped>
.book-info {
  border: 1px solid #5f5862;
  background-color: #bdc8ff80;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.read {
  color: rgb(31, 33, 196);
  font-weight: bold;
}


</style>
