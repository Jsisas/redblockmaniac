import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Vacuum from '@/components/b230/literature/Vacuum.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/b230',
      name: 'b230',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/B230.vue'),
      children: [
        {
          path: 'vacuum',
          component: Vacuum
        }
      ]
    },
    {
      path: '/green_books',
      name: 'Green Books',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GreenBooks.vue')
    }
  ]
})

export default router
