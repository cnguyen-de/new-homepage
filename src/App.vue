<template>
  <div id="app">
    <div
      class="flex-grow bg-white min-h-screen"
      :class="{ 'flex-col': windowWidth <= breakpointWidth, flex: windowWidth > breakpointWidth }"
    >
      <Hero />
      <Details v-if="displayInfo" />
    </div>
  </div>
</template>

<script>
import Hero from './pages/Hero.vue'
import Details from './pages/Details.vue'

export default {
  name: 'App',
  components: {
    Hero,
    Details
  },
  data() {
    return {
      displayInfo: this.$store.state.collapse,
      breakpointWidth: this.$store.state.breakpointWidth
    }
  },
  mounted() {
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
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

#app {
  font-family: 'Source Sans Pro', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
