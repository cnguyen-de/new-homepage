import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import { store } from '../store/state'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bio',
    name: 'About me',
    component: () => import('../components/Bio.vue')
  },
  {
    path: '/competence',
    name: 'Competence',
    component: () => import('../components/Competence.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../components/Portfolio.vue')
  },
  /* 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/About.vue')
  },
   */
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.fullPath !== '/') {
    if (!store.state.collapse) {
      store.commit('toggleHero', true)
    }
  } else {
    store.commit('toggleHero', false)
  }
  next()
})

export default router
