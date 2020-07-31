<template>
  <div
    class="hero hero--pattern bg-gray-900 min-h-screen min-w-screen text-gray-200"
    :class="{
      'hero--minimal': collapse && windowWidth > 850,
      'min-w-screen': !collapse && windowWidth > 850
    }"
  >
    <Avatar />
    <div class="hero__intro entrance-from-bottom">
      <div class="text-5xl">Chi Nguyen</div>
      <div class="text-3xl novatec">
        Consultant and Frontend Architect at
        <Novatec />
      </div>
      <div class="text-xl italic font-bold pt-2">Website currently under reconstruction!</div>
    </div>

    <div class="hero__navigation inline-flex justify-evenly flex-wrap">
      <div v-for="link in links.slice(1, -1)" :key="link.name">
        <div class="navigation-button-wrapper p-2 m-2 bg-blue-800 rounded">
          <router-link :to="{ name: link.name }">{{ link.name }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar.vue'
import Novatec from './Novatec.vue'
import routes from '../router/index'

export default {
  name: 'Hero',
  components: {
    Avatar,
    Novatec
  },
  data() {
    return {
      links: routes.options.routes
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
}
.hero--minimal {
  padding: 0 4rem 0 1rem;
  clip-path: polygon(0 0, 100% 0%, 87% 100%, 0 100%);
  width: 40%;
  transition: 0.5 ease-in-out;
}
.hero--pattern {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
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
