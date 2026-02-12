<script setup>
    defineProps([
        "text",
        "color"
    ])
</script>

<template>
    <section :style="`border-color: ${color}`">
    <p>{{ text }}</p>
    <p>{{ color }}</p>
    </section>
</template>

<style scoped>
    section {
        border: 0.25rem dashed black;
        margin: 0.25rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
    }
</style>