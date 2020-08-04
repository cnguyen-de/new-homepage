<template>
  <div class="title pb-4 my-0 mb-1 br:my-3 header relative inline-block min-w-full">
    <div class="text-3xl sm:text-4xl md:text-5xl font-light">{{ title }}</div>
    <router-link class="font-bold" to="/">
      <div
        class="details__back-button h-10 w-10 p-2 br:h-12 br:w-12 rounded text-gray-200 hover:bg-gray-400 absolute left-0 top-1 md:top-4"
      >
        <svg
          class="details__back-button--desktop h-8 w-8 text-gray-800"
          v-if="windowWidth > breakpointWidth"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
        >
          <path d="M7 14l7-6.5L7 1M1.5 14l7-6.5-7-6.5" stroke="currentColor" stroke-linecap="square"></path>
        </svg>
        <svg
          class="details__back-button--desktop h-6 w-6 text-gray-800"
          v-if="windowWidth <= breakpointWidth"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
        >
          <path d="M1 7l6.5 7L14 7M1 1.5l6.5 7 6.5-7" stroke="currentColor" stroke-linecap="square"></path>
        </svg>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: String
  },
  data() {
    return {
      breakpointWidth: this.$store.state.breakpointWidth
    }
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth
    }
  }
}
</script>

<style scoped></style>
