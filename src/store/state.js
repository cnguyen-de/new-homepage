import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    collapse: false,
    windowWidth: window.innerWidth
  },
  mutations: {
    toggleHero(state, status) {
      state.collapse = status
    },
    setWidth(state, newWidth) {
      state.windowWidth = newWidth
    }
  }
})
