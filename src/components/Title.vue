<template>
  <div class="mt-0 br:mt-3 header relative inline-block min-w-full">
    <div class="text-2xl sm:text-3xl md:text-4xl tracking-wide">{{ title }}</div>

    <div class="details__return-button h-8 w-8 rounded text-gray-200 absolute top-0 left-0">
      <router-link class="font-bold" to="/">
        <svg
          class="details__back-button--desktop"
          v-if="windowWidth > breakpointWidth"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-b</title>
          <path
            d="M64,256c0,106,86,192,192,192s192-86,192-192S362,64,256,64,64,150,64,256Z"
            style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
          />
          <polyline
            points="216 352 312 256 216 160"
            style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
          />
        </svg>
        <svg
          class="details__back-button--mobile"
          v-if="windowWidth <= breakpointWidth"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-b</title>
          <path
            d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z"
            style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
          />
          <polyline
            points="352 216 256 312 160 216"
            style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
          />
        </svg>
      </router-link>
    </div>
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
