<template>
  <span class="pl-1 whitespace-no-wrap">
    <svg
      class="accent-color-gradients"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 0 0"
      height="0"
      width="0"
      style="position: absolute;"
    >
      <defs>
        <linearGradient id="accent-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" class="stop-1" style="stop-opacity: 1"></stop>
          <stop offset="100%" class="stop-0" style="stop-opacity: 1"></stop>
        </linearGradient>
      </defs>
    </svg>
    <svg class="relative inline-block" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 300 300">
      <path
        id="signet"
        d="M15.06,132.13C-4.9,326.06,62.33,213.91,134,92.59,218.67-50.73,279.32-6.24,291.77,250.73,300.73,435.32,41.23-122,15.06,132.13Z"
        transform="translate(-0.5 -0.88)"
        fill="none"
        stroke="url(#accent-gradient)"
        stroke-miterlimit="10"
        stroke-width="22"
      ></path>
    </svg>
    Novatec
  </span>
</template>

<script>
export default {
  name: 'Novatec'
}
</script>

<style scoped>
.stop-0 {
  stop-color: #36bcee;
}
.stop-1 {
  stop-color: #1faf98;
}
</style>
