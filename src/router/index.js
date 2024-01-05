import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',

      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
