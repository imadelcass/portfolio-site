<template>
  <div v-if="project">
    <!-- Header -->
    <header class="relative overflow-hidden bg-navy pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div
        class="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div class="relative mx-auto max-w-content px-5 sm:px-8">
        <RouterLink
          :to="backLink"
          class="inline-flex items-center gap-2 text-sm font-medium text-cream/60 transition-colors hover:text-gold"
        >
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          {{ t('project.back') }}
        </RouterLink>

        <div class="mt-8 flex flex-wrap items-start gap-6">
          <img
            :src="project.logo"
            :alt="`${project.name} logo`"
            class="h-16 w-16 shrink-0 rounded-xl bg-white/95 object-contain p-2"
          />
          <div class="min-w-0 flex-1">
            <h1 class="font-display text-4xl font-bold text-cream sm:text-5xl">{{ project.name }}</h1>
            <p class="mt-2 text-sm font-medium uppercase tracking-label text-gold">
              {{ t(project.tagline) }}
            </p>
          </div>
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
          <a v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer" class="btn-primary">
            <svg v-if="project.store === 'play'" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M3.6 1.8a1 1 0 0 0-.6.9v18.6a1 1 0 0 0 .6.9l10.1-10.2L3.6 1.8zm12 8.1L5.9 1.1l11.4 6.6-1.7 2.2zm2.9 1.7 3.2 1.9c.9.5.9 1.5 0 2l-3.2 1.9-2-2.9 2-2.9zM5.9 22.9l9.7-8.8 1.7 2.2-11.4 6.6z"
              />
            </svg>
            <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
            </svg>
            {{ project.store === 'play' ? t('project.play') : t('project.visit') }}
          </a>
        </div>
      </div>
    </header>

    <!-- Body -->
    <div class="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
      <div class="grid gap-12 lg:grid-cols-[1.5fr,1fr] lg:gap-20">
        <div>
          <h2 class="section-label">{{ t('project.about') }}</h2>
          <p class="mt-5 text-base leading-relaxed text-navy/75 dark:text-cream/70 sm:text-lg">
            {{ t(project.body) }}
          </p>
        </div>

        <div>
          <h2 class="section-label">{{ t('project.stack') }}</h2>
          <ul class="mt-5 flex flex-wrap gap-2">
            <li v-for="tech in project.stack" :key="tech" class="chip">{{ tech }}</li>
          </ul>
        </div>
      </div>

      <!-- Gallery -->
      <section v-if="project.imgs?.length" class="mt-16">
        <h2 class="section-label">{{ t('project.gallery') }}</h2>

        <!-- Phone screenshots scroll horizontally; wide shots stack in a grid -->
        <div
          v-if="project.shotOrientation === 'portrait'"
          class="-mx-5 mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8"
        >
          <img
            v-for="(img, i) in project.imgs"
            :key="i"
            :src="img"
            :alt="`${project.name} — ${i + 1}`"
            loading="lazy"
            class="w-52 shrink-0 snap-start rounded-xl border border-sand/60 shadow-md dark:border-white/10 sm:w-60"
          />
        </div>

        <div v-else class="mt-6 grid gap-5 sm:grid-cols-2">
          <img
            v-for="(img, i) in project.imgs"
            :key="i"
            :src="img"
            :alt="`${project.name} — ${i + 1}`"
            loading="lazy"
            class="w-full rounded-xl border border-sand/60 bg-white shadow-sm dark:border-white/10"
          />
        </div>
      </section>

      <!-- Next projects -->
      <section v-if="others.length" class="mt-20 border-t border-sand/60 pt-12 dark:border-white/10">
        <h2 class="section-label">{{ t('work.title') }}</h2>
        <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard v-for="p in others" :key="p.id" :project="p" />
        </div>
      </section>
    </div>
  </div>

  <!-- Unknown slug -->
  <div v-else class="mx-auto flex max-w-content flex-col items-center px-5 py-40 text-center">
    <p class="font-display text-2xl font-bold text-navy dark:text-cream">{{ t('project.not-found') }}</p>
    <RouterLink :to="backLink" class="btn-primary mt-8">{{ t('project.back') }}</RouterLink>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects, findProject } from '@/data/projects'

const { t } = useI18n()
const route = useRoute()

const project = computed(() => findProject(route.params.slug))

const backLink = computed(() => ({
  name: 'home',
  params: { lang: route.params.lang },
  hash: '#work'
}))

// Same category first, so a mobile app suggests other mobile apps.
const others = computed(() => {
  if (!project.value) return []
  const rest = projects.filter((p) => p.slug !== project.value.slug)
  const same = rest.filter((p) => p.type === project.value.type)
  return [...same, ...rest.filter((p) => p.type !== project.value.type)].slice(0, 3)
})

watch(
  project,
  (p) => {
    if (p) document.title = `${p.name} — Imad El Cass`
  },
  { immediate: true }
)
</script>
