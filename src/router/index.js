import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Resume from '../views/Resume.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router
