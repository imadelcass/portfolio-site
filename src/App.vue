<template>
  <div :class="modeStore.isDark ? 'dark' : ''">
    <div class="bg-gray-100 dark:bg-slate-800 min-h-screen">
      <navbar />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { useModeStore } from '@/stores/modeStore'

const modeStore = useModeStore()

</script>
