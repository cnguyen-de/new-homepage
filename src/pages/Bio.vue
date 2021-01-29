<template>
  <div class="bio">
    <Title title="About me" />
    <div class="max-w-full br:p-4 br:px-16 text-xl text-gray-700 text-justify">
      <div class="image-container m-auto w-40 mb-4">
        <div class="relative h-40 w-40 rounded-full" v-show="collapse && windowWidth <= breakpointWidth">
          <img
            class="absolute top-0 h-full w-full rounded-full object-cover"
            style="object-position: 20% 0;"
            src="../assets/avatar-1.webp"
          />
        </div>
      </div>

      <p class="bio__intro leading-relaxed mb-4">
        Hi, I'm Chi. I'm 29 and live in Frankfurt am Main, Germany.
      </p>

      <p class="leading-relaxed mb-4">
        In my free time, I'm always tinkering with something. Some of my side projects include creating websites with
        the latest technologies or smart home automation as well as networking with devices like Raspberry Pi, Unifi.
      </p>
      <p class="leading-relaxed mb-4">
        Other than techonologies, I love reading books and novels. I've also played classical guitar for over 10 years.
      </p>
      <p>
        You're welcome to contact me using the following methods:
      </p>
    </div>

    <Contact class="mt-4" />
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import Contact from '../components/Contact.vue'

export default {
  name: 'Bio',
  components: {
    Title,
    Contact
  },
  data() {
    return {
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

<style scoped></style>
