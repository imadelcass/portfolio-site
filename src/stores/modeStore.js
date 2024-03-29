import { defineStore } from 'pinia'

export const useModeStore = defineStore('mode', {
  state: () => ({
    isDark: false
  }),
  actions: {
    setMode(value) {
      this.isDark = value
    }
  }
})
