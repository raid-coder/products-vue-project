<script setup>
import NavBar from "./components/NavBar.vue"
</script>

<template>
  <header>
    <div class="wrapper">
      <NavBar/>
    </div>
    <main>
      <router-view/>
    </main>
  </header>
</template>

<style>
*{
  box-sizing: border-box;
}
html{
  font-family: Arial, Helvetica, sans-serif;
}

</style>

./stores/shoes