import { defineStore } from 'pinia'

export const useModeStore = defineStore('mode', {
  state: () => ({
    isDark: false
  }),
  actions: {
    setMode(value) {
      this.isDark = value
      // Set the dark mode class on the body element
      document.body.classList.toggle('dark', value)
    }
  }
})
