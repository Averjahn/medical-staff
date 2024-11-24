<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>