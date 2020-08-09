<template>
  <div class="competence">
    <Title title="Competence" />
    <div class="rounded max-w-full br:p-4 br:px-16 text-xl text-gray-700 text-justify">
      <p class="bio__intro leading-relaxed mb-4">
        I'm currently working as Consultant at Novatec Gmbh. As such I'm offering a wide range of
        competences.
      </p>
      <p class="leading-relaxed mb-4">
        I've had experience doing architectural work, especially regarding frontend for several
        projects. I've also worked on Mobile-First/-Native applications. My forte is versatility,
        the following technologies are ones I've used in projects.
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
    <!-- 
    <div class="p-16 login bg-white w-2/3 rounded text-left flex flex-col">
      <h1 class="text-center text-2xl"></h1>
      <div class="relative">
        <ion-icon class="h-6 w-6 absolute ml-3 mt-2" name="person-outline"></ion-icon>
        <input
          class="login__username w-full h-10 rounded-full mb-4 px-10 bg-gray-200 outline-none hover:bg-gray-300 appearance-none border-2 focus:outline-none focus:bg-white focus:border-blue-500"
          name="username"
          type="text"
          autocomplete="off"
        />
      </div>
      <div class="relative">
        <ion-icon class="h-6 w-6 absolute ml-3 mt-2" name="key-outline"></ion-icon>
        <input
          class="login__password w-full h-10 rounded-full mb-8 px-10 bg-gray-200 hover:bg-gray-300 outline-none appearance-none border-2 focus:outline-none focus:bg-white focus:border-blue-500"
          name="password"
          type="password"
        />
      </div>
      <button class="login__button p-2 h-10 w-24 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold outline-none select-none">
        Log in
      </button>

      <div class=""></div>
    </div>
     -->
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
