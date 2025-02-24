import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from '@/lang'
import ElementPlus from 'element-plus'
import VueGtag from 'vue-gtag'
import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/main.css'

const app = createApp(App)

app.use(
  VueGtag,
  {
    appName: 'My application',
    pageTrackerScreenviewEnabled: true,
    config: { id: 'G-0TJZKY5TNF' }
  },
  router
)

app.use(i18n)
app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.mount('#app')
