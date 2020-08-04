<template>
  <div
    class="hero hero--pattern relative bg-gray-900 min-h-screen max-h-screen text-gray-200"
    :class="{
      'hero--desktop-minimal': collapse && windowWidth > breakpointWidth,
      'hero--mobile-minimal': collapse && windowWidth <= breakpointWidth,
      'min-w-screen': !collapse && windowWidth > breakpointWidth
    }"
  >
    <div class="hero__profile" :class="{ 'hero__profile--hidden': displayInfo && windowWidth <= breakpointWidth }">
      <Avatar />
      <div class="entrance-from-bottom pb-6">
        <div class="text-xl xs:text-3xl sm:text-4xl xl:text-5xl">Chi Nguyen</div>
        <div class="text-base px-2 xs:text-xl sm:text-2xl xl:text-3xl font-light">
          Consultant and Frontend Architect at
          <Novatec />
        </div>
      </div>
    </div>
    <Navbar
      :class="{
        'move-to-top': collapse && windowWidth <= breakpointWidth,
        'move-back-down-mobile': typeof currentRoute !== 'undefined' && !collapse && windowWidth <= breakpointWidth && windowWidth < 640,
        'move-back-down-tablet': typeof currentRoute !== 'undefined' && !collapse && windowWidth <= breakpointWidth && windowWidth >= 640
      }"
    />
    <!-- 
    <Contact
      class="mb-4"
      :class="{ 'pr-2/12': collapse && windowWidth > breakpointWidth }"
      v-if="!displayInfo || windowWidth > breakpointWidth"
      v-bind:white="true"
    />
     -->
  </div>
</template>

<script>
import Avatar from '../components/Avatar.vue'
import Novatec from '../components/Novatec.vue'
import Navbar from '../components/Navbar.vue'

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
      currentRoute: this.$route.currentRoute,
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
    },
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.currentRoute = to
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
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
}
.hero--pattern {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
}
.hero--desktop-minimal {
  padding: 0 3rem 0 1rem;
  width: 37%;
  min-width: 37%;
  transition: 0.5 ease-in-out;
  clip-path: polygon(0 0, 100% 0%, 87% 100%, 0 100%);
}
.hero--mobile-minimal {
  min-height: 48px;
  transition: 0.5 ease-in-out;
  background-image: unset;
  /*   clip-path: polygon(0 0, 100% 0%, 100% 75%, 0 100%);
 */
}
.hero__profile {
  height: 100%;
  transition: 0.5 ease-in-out;
}
.hero__profile--hidden {
  height: 0;
  transition: 0.5 ease-in-out;
}
.move-to-top {
  animation-duration: 0.5s;
  animation-name: moveToTop;
}
@keyframes moveToTop {
  from {
    transform: translateY(424px);
    transition-timing-function: ease-in-out;
  }
  to {
    transform: translateY(0);
    transition-timing-function: ease-in-out;
  }
}

.move-back-down-mobile {
  animation-duration: 0.5s;
  animation-name: moveBackDown;
}
@keyframes moveBackDown {
  from {
    transform: translateY(0);
    transition-timing-function: ease-in-out;
  }
  to {
    transform: translateY(424px);
    transition-timing-function: ease-in-out;
  }
}
.move-back-down-tablet {
  animation-duration: 0.5s;
  animation-name: moveBackDownTablet;
}
@keyframes moveBackDownTablet {
  from {
    transform: translateY(0);
    transition-timing-function: ease-in-out;
  }
  to {
    transform: translateY(538px);
    transition-timing-function: ease-in-out;
  }
}

.entrance-from-bottom {
  animation-duration: 1s;
  animation-name: entranceFromBottom;
}
@keyframes entranceFromBottom {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
