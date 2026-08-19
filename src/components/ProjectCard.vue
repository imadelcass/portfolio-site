<template>
  <article
    class="card group flex flex-col overflow-hidden hover:-translate-y-1 hover:border-gold/60 hover:shadow-xl hover:shadow-navy/5 dark:hover:shadow-black/20"
  >
    <!-- Preview -->
    <RouterLink
      :to="detailLink"
      class="relative block overflow-hidden bg-cream/70 dark:bg-navy/50"
      :aria-label="`${project.name} — ${t('work.view')}`"
    >
      <div class="flex aspect-[16/10] items-center justify-center p-6">
        <!-- Mobile apps show a real screenshot; web projects show the logo -->
        <img
          v-if="preview"
          :src="preview"
          :alt="project.name"
          loading="lazy"
          class="transition-transform duration-500 group-hover:scale-[1.04]"
          :class="
            project.shotOrientation === 'portrait'
              ? 'h-[135%] w-auto rounded-lg object-contain shadow-lg'
              : 'max-h-full max-w-full rounded-md object-contain'
          "
        />
        <img
          v-else
          :src="project.logo"
          :alt="project.name"
          loading="lazy"
          class="max-h-20 max-w-[70%] object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <span
        v-if="project.store === 'play'"
        class="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md bg-navy/85 px-2.5 py-1.5 text-[11px] font-semibold text-gold backdrop-blur"
      >
        <svg class="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            d="M3.6 1.8a1 1 0 0 0-.6.9v18.6a1 1 0 0 0 .6.9l10.1-10.2L3.6 1.8zm12 8.1L5.9 1.1l11.4 6.6-1.7 2.2zm2.9 1.7 3.2 1.9c.9.5.9 1.5 0 2l-3.2 1.9-2-2.9 2-2.9zM5.9 22.9l9.7-8.8 1.7 2.2-11.4 6.6z"
          />
        </svg>
        {{ t('work.play-store') }}
      </span>
    </RouterLink>

    <!-- Body -->
    <div class="flex flex-1 flex-col p-6">
      <div class="flex items-start gap-3">
        <img
          v-if="project.store === 'play'"
          :src="project.logo"
          :alt="`${project.name} icon`"
          loading="lazy"
          class="h-10 w-10 shrink-0 rounded-lg object-cover"
        />
        <div class="min-w-0">
          <h3 class="font-display text-xl font-bold leading-tight text-navy dark:text-cream">
            <RouterLink :to="detailLink" class="transition-colors hover:text-gold">
              {{ project.name }}
            </RouterLink>
          </h3>
          <p class="mt-0.5 text-xs font-medium uppercase tracking-wide text-gold">
            {{ t(project.tagline) }}
          </p>
        </div>
      </div>

      <p class="mt-4 line-clamp-3 text-sm leading-relaxed text-navy/70 dark:text-cream/60">
        {{ t(project.desc) }}
      </p>

      <ul class="mt-5 flex flex-wrap gap-1.5">
        <li v-for="tech in project.stack.slice(0, 4)" :key="tech" class="chip">{{ tech }}</li>
        <li v-if="project.stack.length > 4" class="chip border-dashed">
          +{{ project.stack.length - 4 }}
        </li>
      </ul>

      <div class="mt-6 flex items-center justify-between border-t border-sand/60 pt-4 dark:border-white/10">
        <RouterLink
          :to="detailLink"
          class="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-gold dark:text-cream"
        >
          {{ t('work.view') }}
          <svg
            class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </RouterLink>

        <a
          v-if="project.url"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-navy/45 transition-colors hover:text-gold dark:text-cream/40"
          :aria-label="`${project.name} — ${t('work.live')}`"
        >
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
          </svg>
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const props = defineProps({ project: { type: Object, required: true } })

const { t } = useI18n()
const route = useRoute()

const preview = computed(() => props.project.imgs?.[0] || null)

const detailLink = computed(() => ({
  name: 'project',
  params: { slug: props.project.slug, lang: route.params.lang }
}))
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
