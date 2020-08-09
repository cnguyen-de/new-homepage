<template>
  <div class="navbar inline-flex justify-evenly flex-wrap pt-2 ">
    <div v-for="link in links.slice(1, -1)" :key="link.name">
      <div class="navbar__link-wrapper m-auto ml-4 ">
        <router-link
          class="navbar__link relative text-xs xs:text-base sm:text-xl text-blue-300 font-normal tracking-wide hover:text-white"
          :class="{ selected: currentRoute == link.path }"
          :to="{ name: link.name }"
        >
          {{ link.name.toUpperCase() }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import routes from '../router/index'

export default {
  name: 'Navbar',
  data() {
    return {
      links: routes.options.routes,
      currentRoute: '',
      breakpointWidth: this.$store.state.breakpointWidth
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.currentRoute = to.path
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

<style scoped>
.navbar__link {
  transition-delay: 0.2;
  transform: translate(0%, 100%);
  transition: opacity 0.2s ease, transform 0.3s ease;
}
.navbar__link:before {
  content: '';
  position: absolute;
  background: white;
  width: 12px;
  height: 1px;
  top: 100%;
  transform: translate(0%, 0%);
  transition: all 0.3s ease;
  z-index: -1;
}
.navbar__link:hover:before {
  width: 100%;
}
.selected {
  color: white !important;
}
.selected:before {
  width: 100%;
}
</style>
