<template>
  <section id="about" class="scroll-mt-24 py-24 sm:py-28">
    <div class="mx-auto max-w-content px-5 sm:px-8">
      <div class="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:gap-20">
        <div>
          <p class="section-label">{{ t('about.label') }}</p>
          <h2 class="section-title mt-3">{{ t('about.title') }}</h2>
          <div class="mt-6 h-px w-16 bg-gold" aria-hidden="true" />
        </div>

        <div class="space-y-5 text-base leading-relaxed text-navy/75 dark:text-cream/70 sm:text-lg">
          <p>{{ t('about.p1') }}</p>
          <p>{{ t('about.p2') }}</p>
          <p>{{ t('about.p3') }}</p>

          <ul class="flex flex-wrap gap-x-6 gap-y-3 pt-4 text-sm">
            <li class="flex items-center gap-2.5">
              <svg class="h-4 w-4 shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {{ contact.location }}
            </li>
            <li class="flex items-center gap-2.5">
              <svg class="h-4 w-4 shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 6 10-6" />
              </svg>
              <a :href="`mailto:${contact.email}`" class="transition-colors hover:text-gold">{{ contact.email }}</a>
            </li>
            <li class="flex items-center gap-2.5">
              <svg class="h-4 w-4 shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="6" y="2" width="12" height="20" rx="2" />
                <path d="M11 18h2" />
              </svg>
              <a :href="`tel:${contact.phone.replace(/\s/g, '')}`" class="transition-colors hover:text-gold">
                {{ contact.phone }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { contact } from '@/data/resume'

const { t } = useI18n()
</script>
