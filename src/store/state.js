import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    collapse: false,
    windowWidth: window.innerWidth
  },
  mutations: {
    toggleHero(state) {
      state.collapse = !state.collapse
    },
    setWidth(state, newWidth) {
      state.windowWidth = newWidth
    }
  }
})
