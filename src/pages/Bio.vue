<template>
  <div class="bio">
    <Title title="About me" />
    <div class="rounded max-w-full br:p-4 br:px-16 text-lg text-gray-700 text-justify">
      <p class="bio__intro leading-relaxed mb-4">
        Consultant, Software Engineer, Fullstack, Multiplatform App, Microservice Architecture Design. I like to delve myself into the
        latest technologies and devices, my favorite quote is Sir Francis Bacon's "Knowledge is power".
      </p>
      <p class="leading-relaxed mb-4">
        Consultant, Software Engineer, Fullstack, Multiplatform App, Microservice Architecture Design. I like to delve myself into the
        latest technologies and devices, my favorite quote is Sir Francis Bacon's "Knowledge is power".
      </p>
      <p class="leading-relaxed mb-4">
        Consultant, Software Engineer, Fullstack, Multiplatform App, Microservice Architecture Design. I like to delve myself into the
        latest technologies and devices, my favorite quote is Sir Francis Bacon's "Knowledge is power".
      </p>
      <p class="leading-relaxed mb-4">
        Consultant, Software Engineer, Fullstack, Multiplatform App, Microservice Architecture Design. I like to delve myself into the
        latest technologies and devices, my favorite quote is Sir Francis Bacon's "Knowledge is power".
      </p>
    </div>

    <Contact />
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
  }
}
</script>

<style scoped></style>
