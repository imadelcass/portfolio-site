import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import Portfolio from '../views/Portfolio.vue'
import Resume from '../views/Resume.vue'
import Contact from '../views/Contact.vue'
import { t } from '@/lang'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:lang(en|fr)?',
      name: 'home',
      component: Home,
      meta: { title: 'Home' }
    },
    {
      path: '/:lang(en|fr)?/portfolio',
      name: 'portfolio',
      component: Portfolio,
      meta: { title: 'Portfolio' }
    },
    {
      path: '/:lang(en|fr)?/project/:slug',
      name: 'project',
      component: Project,
      meta: { title: 'Project' }
    },
    {
      path: '/:lang(en|fr)?/resume',
      name: 'resume',
      component: Resume,
      meta: { title: 'Resume' }
    },
    {
      path: '/:lang(en|fr)?/contact',
      name: 'contact',
      component: Contact,
      meta: { title: 'Contact' }
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'home' }
    }
  ]
})

// Set the document title dynamically based on the route meta
router.beforeEach((to, from, next) => {
  document.title = t(to.name)
  next()
})

export default router
