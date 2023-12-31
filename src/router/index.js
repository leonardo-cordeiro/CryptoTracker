import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/coins',
      name: 'coins',
      component: () => import('@/views/CoinsView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: () => import('@/views/WalletView.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // if (to.path === '/login' && auth.currentUser) {
  // next('/')
  // return
  // }

  if (to.matched.some((record) => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return
  } else next()
})

export default router
