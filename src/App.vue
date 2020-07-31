<template>
  <div id="app">
    <div class="flex flex-grow bg-gray-200">
      <Hero v-show="!displayInfo || windowWidth > 850" />
      <Details v-if="displayInfo" />
    </div>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Details from './components/Details.vue'

export default {
  name: 'App',
  components: {
    Hero,
    Details
  },
  data() {
    return {
      displayInfo: this.$store.state.collapse
    }
  },
  mounted() {
    console.log(this.displayInfo)
    window.addEventListener('resize', () => {
      this.$store.commit('setWidth', window.innerWidth)
    })
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
    },
    windowWidth() {
      return this.$store.state.windowWidth
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
