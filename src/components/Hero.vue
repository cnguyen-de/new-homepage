<template>
  <div
    class="hero hero--pattern bg-gray-900 min-h-screen min-w-screen text-gray-200"
    :class="{
      'hero--desktop-minimal': collapse && windowWidth > breakpointWidth,
      'hero--mobile-minimal': collapse && windowWidth <= breakpointWidth,
      'min-w-screen': !collapse && windowWidth > breakpointWidth
    }"
  >
    <div class="hero__profile" v-show="!displayInfo || windowWidth > breakpointWidth">
      <Avatar />
      <div class="entrance-from-bottom">
        <div class="text-4xl xl:text-5xl">Chi Nguyen</div>
        <div class="text-2xl xl:text-3xl novatec">
          Consultant and Frontend Architect at
          <Novatec />
        </div>
      </div>
    </div>
    <Navbar />
  </div>
</template>

<script>
import Avatar from './Avatar.vue'
import Novatec from './Novatec.vue'
import Navbar from './Navbar.vue'

export default {
  name: 'Hero',
  components: {
    Avatar,
    Novatec,
    Navbar
  },
  data() {
    return {
      displayInfo: this.$store.state.collapse,
      breakpointWidth: this.$store.state.breakpointWidth
    }
  },
  watch: {
    collapse(state) {
      if (!state) {
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

<style scoped>
.hero {
  transition: 0.5s ease-in-out;
  width: 100%;
  height: 100%;
}
.hero--pattern {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
}
.hero--desktop-minimal {
  padding: 0 3rem 0 1rem;
  clip-path: polygon(0 0, 100% 0%, 87% 100%, 0 100%);
  width: 37%;
  transition: 0.5 ease-in-out;
}
.hero--mobile-minimal {
  min-height: 64px;
  transition: 0.5 ease-in-out;
  background-image: unset;
}

.entrance-from-bottom {
  animation-duration: 1s;
  animation-name: entranceFromBottom;
}
@keyframes entranceFromBottom {
  from {
    opacity: 0;
    transform: translateY(80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
