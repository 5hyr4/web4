<script setup>
import { ref } from "vue";
import BookCard from "./BookCard.vue";

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

const newTitle = ref('')
const newAuthor = ref('')
const newYear = ref('')
const newGenre = ref('')
const newIsRead = ref(false)

const addBook = () => {
  if (
    newTitle.value.trim() === '' ||
    newAuthor.value.trim() === '' ||
    newYear.value === '' ||
    newGenre.value.trim() === ''
  ) return

  books.value.push({
    id: Date.now(),
    title: newTitle.value,
    author: newAuthor.value,
    year: newYear.value,
    genre: newGenre.value,
    isRead: newIsRead.value
  })

  newTitle.value = ''
  newAuthor.value = ''
  newYear.value = ''
  newGenre.value = ''
  newIsRead.value = false
}

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

  <h2>Add a New Book</h2>

  <section>
  <input v-model="newTitle" placeholder="Title" />
  <input v-model="newAuthor" placeholder="Author" />
  <input 
  v-model.number="newYear" 
  type="number" 
  min="1900" 
  max="2026"
  placeholder="Year" />
  <input v-model="newGenre" placeholder="Genre" />

  <label>
    <input type="checkbox" v-model="newIsRead" />
    Read?
  </label>

  <button @click="addBook">Add Book</button>
  </section>

    <button @click="toggleRead(item)">
    Toggle Read
  </button>

  <h2>Book Array</h2>

  <section id="book-card">
  <BookCard
    v-for="item in books"
    :key="item.id"
    :title="item.title"
    :author="item.author"
    :year="item.year"
    :genre="item.genre"
    :isRead="item.isRead">

    <button @click="toggleRead(item)">
      Toggle Read</button>
  </BookCard>
  </section>

</template>

<style scoped>
.book-info {
  border: 1px solid #5f5862;
  background-color: #bdc8ff80;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

#book-card {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.read {
  color: rgb(31, 33, 196);
  font-weight: bold;
}
</style>
