<template>
  <div class="competence">
    <Title title="Competence" />
    <div class="rounded max-w-full br:p-4 br:px-16 text-xl text-gray-700 text-justify">
      <p class="bio__intro leading-relaxed mb-4">
        I'm currently working as Consultant at Novatec Gmbh. As such I'm offering a wide range of competences.
      </p>
      <p class="leading-relaxed mb-4">
        I've had experience doing architectural work, especially regarding frontend for projects with customers like
        banks, insurances, etc. My main focus is frontend architect, including scaling big application, microfrontend,
        refactoring existing legacy webapp.
      </p>
      <p class="leading-relaxed mb-4">
        Furthermore, I enjoy hacking new ideas into prototypes, reworking cool ideas with modern solutions and sometimes
        a bit of UI/UX design. I also really enjoy working on Mobile-First/-Native applications. My forte is
        versatility, the following technologies are ones I've used in projects.
      </p>
      <div
        class="leading-relaxed mb-4 grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-auto"
        style="overflow-wrap: break-word"
      >
        <div class="frontend">
          <b>Frontend</b>
          <br />
          Angular
          <br />
          React
          <br />
          Vue
        </div>
        <div class="backend">
          <b>Backend</b>
          <br />
          Flask/FastAPI/Tornado
          <br />
          Spring Boot
          <br />
          Nodejs
        </div>
        <div class="other">
          <b>Other frameworks</b>
          <br />
          Android
          <br />
          Gstreamer/FFmpeg
          <br />
          OpenCV
        </div>
        <div class="dev">
          <b>Languages</b>
          <br />
          JavaScript (ES6/TypeScript)
          <br />
          Python
          <br />
          Java
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue'
export default {
  name: 'Competence',
  components: {
    Title
  }
}
</script>

<style scoped></style>
