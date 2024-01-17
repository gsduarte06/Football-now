import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/LandingView.vue'
import Login from '../views/LoginView.vue'
import Game from '../views/GameView.vue'
import Main from '../views/MainView.vue'
import News from '../views/NewsView.vue'
//import Table from '../views/ClassificationView.vue'
import { UserStore } from '@/stores/users';


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
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      meta: {
        title: 'Main'
      }
    },
    {
      path: '/news',
      name: 'News',
      component: News,
      meta: {
        title: 'News'
      }
    },
  ]
});
router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)

  if (to.meta.requiresAuth && !UserStore().getLoggedInUser) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: "/login",
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    };
  }
});

export default router
