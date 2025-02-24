import { createI18n } from 'vue-i18n'
import en from './locales/en'
import fr from './locales/fr'

const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
    en,
    fr
  }
})

const t = i18n.global.t

export { t }

export default i18n
