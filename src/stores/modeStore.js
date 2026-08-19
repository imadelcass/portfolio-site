import { defineStore } from 'pinia'

// Theme lives on <html class="dark"> only — index.html sets it before first paint.
const read = () => {
  try {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
  } catch (e) { /* private mode */ }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const useModeStore = defineStore('mode', {
  state: () => ({ isDark: read() }),
  actions: {
    apply() {
      document.documentElement.classList.toggle('dark', this.isDark)
      try {
        localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
      } catch (e) { /* private mode */ }
    },
    toggle() {
      this.isDark = !this.isDark
      this.apply()
    },
    setMode(value) {
      this.isDark = value
      this.apply()
    }
  }
})
