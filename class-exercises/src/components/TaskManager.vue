<script setup>
import { ref } from 'vue'
import PropEx from './PropEx.vue'

const tasks = ref([
  { id: 1, text: 'Brew Coffee', completed: false }
])

// 1. Create a ref to track the new task input
const newTaskText = ref('')

const addTask = () => {
  // Prevent adding empty tasks
  if (newTaskText.value.trim() === '') return

  // 2. Push new object to the array
  tasks.value.push({
    id: Date.now(), // Simple unique ID
    text: newTaskText.value,
    completed: false
  })

  // 3. Clear the input field
  newTaskText.value = ''
}

const toggleTask = (task) => {
  task.completed = !task.completed
}
</script>

<template>
  <div class="app-container">
    <h2>Task Manager</h2>

    <div class="input-group">
      <input 
        v-model="newTaskText" 
        @keyup.enter="addTask"
        placeholder="What needs to be done?"
      />
      <button @click="addTask">Add Task</button>
    </div>

    <ul>
      <li v-for="task in tasks" :key="task.id">
        <PropEx :class="{ 'is-done': task.completed }">{{ task.text }}</PropEx>
        <button @click="toggleTask(task)">Check</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.is-done { text-decoration: line-through; color: #888; }
.input-group { margin-bottom: 20px; }
</style>