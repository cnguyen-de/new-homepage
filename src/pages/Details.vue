<template>
  <div class="details py-4 sm:py-12 px-6 sm:px-16 w-full bg-gray-100">
    <router-view></router-view>
    <!-- 
    <div class="absolute min-w-full bottom-0">
      <Contact class="mb-4" v-if="collapse && windowWidth <= breakpointWidth" />
    </div>
 -->
  </div>
</template>

<script>
/* import Contact from '../components/Contact.vue'
 */
export default {
  name: 'Details'
  /* 
  components: {
    Contact
  },
  data() {
    return {
      breakpointWidth: this.$store.state.breakpointWidth
    }
  },
  methods: {},
  computed: {
    collapse() {
      return this.$store.state.collapse
    },
    windowWidth() {
      return this.$store.state.windowWidth
    }
  }
   */
}
</script>

<style scoped></style>
