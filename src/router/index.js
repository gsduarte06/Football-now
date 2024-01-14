import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/LandingView.vue'
import Login from '../views/LoginView.vue'
import Game from '../views/GameView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
      meta: {
        title: 'Landing'
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/game',
      name: 'Game',
      component: Game,
      meta: {
        title: 'Game'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // EXTRA: muda o titulo da tab no browser, consoante a rota
  if (to.meta.title) {
    document.title = to.meta.title
  }

  next()
})

export default router
