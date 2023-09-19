import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMath(.*)*',
      name: '404',
      component: () => import('../views/NotFoundView.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/gifs',
      name: 'gifs',
      component: () => import('../views/GifsView.vue'),
    },
    {
      path: '/stikers',
      name: 'stikers',
      component: () => import('../views/StikersView.vue'),
    },
  ]
})

export default router
