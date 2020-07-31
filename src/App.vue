<template>
  <div id="app">
    <Hero />
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
export default {
  name: 'App',
  components: {
    Hero
  }
}
//  font-family: 'Open Sans', sans-serif !important;
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

#app {
  font-family: 'Source Sans Pro', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
