<script setup>
import LetterBounce from '@/components/LetterBounce.vue';
</script>

<template>
<LetterBounce character="H"/>
<LetterBounce v-for="character in 'Hello World'" :key="character" :character="character" />
</template>