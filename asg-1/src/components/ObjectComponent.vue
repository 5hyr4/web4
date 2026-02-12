<script setup>
import { ref } from "vue";

const book = ref({
  title: "Once Upon a Broken Heart",
  author: "Stephanie Garber",
  year: 2021,
  genre: "Fantasy",
  isRead: true
})

const books = ref([
  {
    id: 1,
    title: "Once Upon a Broken Heart",
    author: "Stephanie Garber",
    year: 2021,
    genre: "Fantasy",
    isRead: true
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian",
    isRead: false
  },
  {
    id: 3,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2008,
    genre: "Sci-Fi",
    isRead: true
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance",
    isRead: false
  },
  {
    id: 5,
    title: "I Hope This Doesn't Find You",
    author: "Ann Liang",
    year: 2024,
    genre: "Romance",
    isRead: true
  }
])

const toggleRead = (book) => {
  book.isRead = !book.isRead
}
</script>

<template>
    <h2>Book Object</h2>

<section v-if="book">
  <p>Title: {{ book.title }}</p>
  <p>Author: {{ book.author }}</p>
  <p>Year: {{ book.year }}</p>
  <p>Genre: {{ book.genre }}</p>
  <p>Read: {{ book.isRead }}</p>
</section>

<h2>Book Array</h2>

<div class="book-info" v-for="item in books" :key="item.id">
  <h3>{{ item.title }}</h3>
  <p>Author: {{ item.author }}</p>
  <p>Year: {{ item.year }}</p>
  <p>Genre: {{ item.genre }}</p>

  <p :class="{ read: item.isRead }">
    Read: {{ item.isRead }}
  </p>

  <button @click="toggleRead(item)">
    Toggle Read
  </button>
</div>

</template>

<style scoped>
.book-info {
  border: 1px solid #ccc;
  background-color: #bdc8ff;
  padding: 1rem;
  margin-bottom: 1rem;
}

.read {
  color: rgb(31, 33, 196);
  font-weight: bold;
}

</style>