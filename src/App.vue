<template>
  <div class="min-h-screen">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:font-semibold focus:text-navy"
    >
      {{ t('nav.menu') }}
    </a>

    <TheNav />

    <main id="main">
      <RouterView v-slot="{ Component }">
        <Transition
          mode="out-in"
          enter-active-class="transition-opacity duration-200 ease-out"
          enter-from-class="opacity-0"
          leave-active-class="transition-opacity duration-150 ease-in"
          leave-to-class="opacity-0"
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <TheFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import TheNav from './components/TheNav.vue'
import TheFooter from './components/TheFooter.vue'
import { useModeStore } from '@/stores/modeStore'
import { useTawkTo } from '@/composables/useTawkTo'

const { t } = useI18n()
const mode = useModeStore()

// index.html sets the class pre-paint; this keeps the store and the DOM in step.
onMounted(() => mode.apply())

useTawkTo()
</script>
