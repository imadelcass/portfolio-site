import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import i18n from '@/lang'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:lang(en|fr)?',
      name: 'home',
      component: Home
    },
    {
      path: '/:lang(en|fr)?/project/:slug',
      name: 'project',
      component: Project
    },
    // The old multi-page URLs now resolve to sections of the single page,
    // so existing links and search results keep working.
    { path: '/:lang(en|fr)?/portfolio', redirect: (to) => ({ name: 'home', params: to.params, hash: '#work' }) },
    { path: '/:lang(en|fr)?/resume', redirect: (to) => ({ name: 'home', params: to.params, hash: '#experience' }) },
    { path: '/:lang(en|fr)?/contact', redirect: (to) => ({ name: 'home', params: to.params, hash: '#contact' }) },
    { path: '/:catchAll(.*)', redirect: { name: 'home' } }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 80 }
    // Only jump to the top when the page itself changes, not on filter/query changes.
    if (to.path !== from.path) return { top: 0 }
  }
})

router.beforeEach((to) => {
  const lang = to.params.lang
  if (lang && i18n.global.locale !== lang) i18n.global.locale = lang
  document.documentElement.lang = i18n.global.locale
  document.title = i18n.global.t('meta.title')
  return true
})

export default router
