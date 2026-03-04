<script setup>
defineProps([
    "character"
])

import {ref} from 'vue'

const bounce = ref(false)

const startBounce = () => {
    bounce.value = true
    setTimeout(() => {
        bounce.value= false
    }, 1500)
}


</script>

<template>
    <span :class="{bounce: bounce}" @mouseover="startBounce" :style="{ color:bounce ? `rgb(${Math.random() *256}, ${Math.random() *256}, ${Math.random() *256})` : 'black'}">{{ character ==  " "? "&nbsp;" :character}}</span>
</template>

<style scroped>
span {
    font-size: 5rem;
    display: inline-block;
    transform-origin: center bottom;
}
.bounce {
    animation: bounce 1.5s ease-in-out;
}

@keyframes bounce {
    0% {
        transform: rotate(15deg);
    }
    15% {
        transform: rotate(-15deg);
    }
    30% {
        transform: rotate(10deg);
    }
    45% {
        transform: rotate(-10deg);
    }
    
}
</style>