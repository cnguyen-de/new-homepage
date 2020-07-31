<template>
  <div id="app">
    <div class="flex bg-gray-800">
      <Hero />
      <Bio v-if="displayInfo" />
    </div>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Bio from './components/Bio.vue'

export default {
  name: 'App',
  components: {
    Hero,
    Bio
  },
  data() {
    return {
      displayInfo: false
    }
  },
  watch: {
    collapse(state) {
      if (state) {
        setTimeout(() => {
          this.displayInfo = state
        }, 500)
      } else {
        this.displayInfo = state
      }
    }
  },
  computed: {
    collapse() {
      return this.$store.state.collapse
    }
  }
}
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
