import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGtag from 'vue-gtag'

import i18n from '@/lang'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.use(
  VueGtag,
  {
    appName: 'imadelcass.netlify.app',
    pageTrackerScreenviewEnabled: true,
    config: { id: 'G-0TJZKY5TNF' }
  },
  router
)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
