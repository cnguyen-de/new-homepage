<template>
  <div class="details p-6 flex-grow">
    <div class="header">
      <div class="details__return-button h-12 w-12 p-2 m-2 bg-gray-700 rounded text-gray-200 float-right">
        <router-link class="font-bold text-2xl" to="/">X</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Details',
  methods: {}
}
</script>

<style scoped></style>
