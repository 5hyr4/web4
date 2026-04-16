<script setup>
const postData = {
title: 'Inception',
content: 'A mind-bending thriller about dreams within dreams',
status: 'publish', // Use 'draft' if you don't want it live immediately
acf: {
synopsis: 'A mind-bending thriller about dreams within dreams',
year: '2010',
}
};

const username = 'ngy_56fl8di6';
const appPassword = 'zySp mrVk lPvR IFOx M8PZ tH5b';

fetch('https://ngy.582mi.com/headless/wp-json/wp/v2/movies', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': 'Basic ' + btoa(`${username}:${appPassword}`)
},
body: JSON.stringify(postData)
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
</script>

<template>
<p>Executing REST on Wordpress</p>
</template>