<template>
  <div class="details p-3 flex-grow">
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
