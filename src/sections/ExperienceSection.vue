<template>
  <section
    id="experience"
    class="scroll-mt-24 border-y border-sand/60 bg-white/60 py-24 dark:border-white/10 dark:bg-navy-mid/30 sm:py-28"
  >
    <div class="mx-auto max-w-content px-5 sm:px-8">
      <div class="max-w-2xl">
        <p class="section-label">{{ t('experience.label') }}</p>
        <h2 class="section-title mt-3">{{ t('experience.title') }}</h2>
      </div>

      <div class="mt-12 grid gap-14 lg:grid-cols-[1.6fr,1fr] lg:gap-20">
        <!-- Timeline -->
        <ol class="relative space-y-10 border-l border-sand dark:border-white/10">
          <li v-for="job in experience" :key="job.id" class="relative pl-8">
            <span
              class="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-2 border-cream bg-gold dark:border-navy-mid"
              aria-hidden="true"
            />

            <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 class="font-display text-xl font-bold text-navy dark:text-cream">
                {{ t(`experience.${job.id}.role`) }}
              </h3>
              <p class="text-xs font-semibold text-gold">{{ job.period }} · {{ job.length }}</p>
            </div>

            <p class="mt-1 text-sm text-navy/55 dark:text-cream/50">
              {{ job.company }} · {{ job.location }}
            </p>

            <ul class="mt-4 space-y-2">
              <li
                v-for="n in 3"
                :key="n"
                class="flex gap-3 text-sm leading-relaxed text-navy/75 dark:text-cream/65"
              >
                <span class="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                <span>{{ t(`experience.${job.id}.b${n}`) }}</span>
              </li>
            </ul>

            <ul class="mt-4 flex flex-wrap gap-1.5">
              <li v-for="tech in job.stack" :key="tech" class="chip">{{ tech }}</li>
            </ul>
          </li>
        </ol>

        <!-- Sidebar: education + languages -->
        <div class="space-y-12">
          <div>
            <h3 class="section-label">{{ t('experience.education-title') }}</h3>
            <ul class="mt-5 space-y-5">
              <li v-for="item in education" :key="item.id">
                <p class="text-sm font-semibold leading-snug text-navy dark:text-cream">
                  {{ t(`education.${item.id}`) }}
                </p>
                <p class="mt-1 text-xs text-navy/55 dark:text-cream/45">{{ item.org }}</p>
                <p class="text-xs text-gold">{{ item.period }}</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="section-label">{{ t('experience.languages-title') }}</h3>
            <ul class="mt-5 space-y-4">
              <li v-for="lang in languages" :key="lang.id">
                <div class="flex items-baseline justify-between text-sm">
                  <span class="font-medium text-navy dark:text-cream">{{ t(`languages.${lang.id}`) }}</span>
                  <span class="text-xs text-navy/50 dark:text-cream/40">{{ t(`languages.${lang.level}`) }}</span>
                </div>
                <div class="mt-2 h-1 overflow-hidden rounded-full bg-sand/70 dark:bg-white/10">
                  <div class="h-full rounded-full bg-gold" :style="{ width: `${lang.pct}%` }" />
                </div>
              </li>
            </ul>
          </div>

          <a href="/files/cv.pdf" download class="btn-primary w-full">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3v12M7 11l5 5 5-5M5 21h14" />
            </svg>
            {{ t('hero.cta-cv') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { experience, education, languages } from '@/data/resume'

const { t } = useI18n()
</script>
