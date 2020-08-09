<template>
  <div class="min-w-full bottom-0 mb-6">
    <div class="contact flex justify-evenly mx-auto pt-4 w-56 md:w-66 xl:w-96">
      <a href="mailto:c.nguyen.prog@gmail.com">
        <img class="w-8 h-8 md:w-12 md:h-12 " title="Gmail" src="../assets/gmail.png" />
      </a>
      <a href="https://twitter.com/chistweets">
        <img class="w-8 h-8 md:w-12 md:h-12 " title="Twitter" src="../assets/twitter-icon.png" />
      </a>
      <a href="https://www.xing.com/profile/Chi_Nguyen23/cv">
        <img class="w-8 h-8 md:w-12 md:h-12 " title="Xing" src="../assets/xing.png" />
      </a>
      <a href="https://www.linkedin.com/in/chi-nguyen-a950b5a1/">
        <img class="w-8 h-8 md:w-12 md:h-12 " title="LinkedIn" src="../assets/linkedin.png" />
      </a>
      <a href="https://github.com/cnguyen-de/">
        <img
          class="w-8 h-8 md:w-12 md:h-12 "
          :class="{ 'white-github': white }"
          title="Github"
          src="../assets/github.png"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    white: Boolean
  }
}
</script>
<style scoped>
.white-github {
  -webkit-filter: grayscale(1) invert(1);
  filter: grayscale(1) invert(1);
}
</style>
