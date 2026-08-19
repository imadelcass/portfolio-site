<template>
  <section
    id="skills"
    class="scroll-mt-24 border-y border-sand/60 bg-white/60 py-24 dark:border-white/10 dark:bg-navy-mid/30 sm:py-28"
  >
    <div class="mx-auto max-w-content px-5 sm:px-8">
      <div class="max-w-2xl">
        <p class="section-label">{{ t('skills.label') }}</p>
        <h2 class="section-title mt-3">{{ t('skills.title') }}</h2>
      </div>

      <div class="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="group in skillGroups" :key="group.key">
          <h3 class="flex items-center gap-2.5 text-sm font-semibold text-navy dark:text-cream">
            <span class="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden="true" />
            {{ t(`skills.${group.key}`) }}
          </h3>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li v-for="item in group.items" :key="item" class="chip">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { skillGroups } from '@/data/resume'

const { t } = useI18n()
</script>
