<template>
  <section class="relative overflow-hidden bg-navy pt-32 pb-20 sm:pt-40 sm:pb-28">
    <!-- Ambient texture: a soft gold wash and a fine grid, no gradient slab -->
    <div
      class="pointer-events-none absolute -right-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-gold/10 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.055]"
      aria-hidden="true"
      style="
        background-image: linear-gradient(#c8963e 1px, transparent 1px),
          linear-gradient(90deg, #c8963e 1px, transparent 1px);
        background-size: 64px 64px;
      "
    />

    <div class="relative mx-auto max-w-content px-5 sm:px-8">
      <div class="grid items-center gap-14 lg:grid-cols-[1.15fr,0.85fr] lg:gap-20">
        <!-- Copy -->
        <div class="animate-fade-up">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs font-medium text-gold-light"
          >
            <span class="relative flex h-1.5 w-1.5">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
              <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            {{ t('hero.available') }}
          </span>

          <h1 class="mt-7 font-display text-5xl font-bold leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            Imad<br />El Cass
          </h1>

          <div class="mt-5 flex items-center gap-4">
            <span class="h-px w-12 bg-gold" aria-hidden="true" />
            <p class="text-sm font-medium uppercase tracking-label text-gold">{{ t('hero.role') }}</p>
          </div>

          <p class="mt-7 max-w-xl text-lg leading-relaxed text-cream/70">
            {{ t('hero.tagline') }}
          </p>

          <div class="mt-10 flex flex-wrap items-center gap-3">
            <a href="#work" class="btn-primary">
              {{ t('hero.cta-work') }}
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="/files/cv.pdf" download class="btn border border-cream/25 text-cream hover:border-gold hover:text-gold">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3v12M7 11l5 5 5-5M5 21h14" />
              </svg>
              {{ t('hero.cta-cv') }}
            </a>
          </div>

          <!-- Stats -->
          <dl class="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-cream/10 pt-8">
            <div v-for="s in stats" :key="s.id">
              <dt class="font-display text-3xl font-bold lining-nums text-gold sm:text-4xl">{{ s.value }}</dt>
              <dd class="mt-1 text-xs leading-snug text-cream/50">{{ t(`stats.${s.id}`) }}</dd>
            </div>
          </dl>
        </div>

        <!-- Portrait -->
        <div class="relative mx-auto w-full max-w-sm lg:mx-0">
          <div class="absolute -inset-3 rounded-full border border-gold/25" aria-hidden="true" />
          <div class="relative overflow-hidden rounded-full ring-1 ring-gold/40">
            <img
              :src="portrait"
              :srcset="`${portrait} 640w, ${portrait2x} 1000w`"
              sizes="(min-width: 1024px) 24rem, 20rem"
              :alt="t('a11y.profile-alt')"
              width="640"
              height="640"
              class="aspect-square w-full object-cover"
            />
          </div>
          <p
            class="absolute -bottom-4 left-1/2 w-max max-w-[95%] -translate-x-1/2 text-balance rounded-md bg-gold px-4 py-2 text-center text-xs font-semibold text-navy shadow-lg"
          >
            {{ t('about.location') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import portrait from '@/assets/img/profile-headshot.webp'
import portrait2x from '@/assets/img/profile-headshot@2x.webp'
import { stats } from '@/data/resume'

const { t } = useI18n()
</script>
