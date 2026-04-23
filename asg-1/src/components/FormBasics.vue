<script></script>

<template>
  <form action="https://ngy.582mi.com/web4/requests/" method="POST">
    <label for="q">Search:</label>
    <input type="text" id="q" name="q">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <label for="password">Password:</label>
    <input type="password" id="passsword" name="password">

    <label for="alive">Alive:</label>
    <input type="checkbox" id="alive" name="alive">

    <label for="alive">Drinks:</label>
    <input type="radio" id="drinks" name="drinks" value="Water">Water
    <input type="radio" id="drinks" name="drinks" value="Water">Soda


    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
  </form>
</template>

<style scoped>
label {
  display: block;
  margin-top: 1rem;
}
</style>