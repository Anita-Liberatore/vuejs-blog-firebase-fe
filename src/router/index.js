import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Blogs from '../views/Blogs.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeView',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'blogs',
      component: Blogs
    }
  ]
})

export default router
