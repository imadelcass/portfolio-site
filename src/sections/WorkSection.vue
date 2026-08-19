<template>
  <section id="work" class="scroll-mt-24 py-24 sm:py-28">
    <div class="mx-auto max-w-content px-5 sm:px-8">
      <div class="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div class="max-w-2xl">
          <p class="section-label">{{ t('work.label') }}</p>
          <h2 class="section-title mt-3">{{ t('work.title') }}</h2>
          <p class="mt-4 text-base text-navy/65 dark:text-cream/60">{{ t('work.subtitle') }}</p>
        </div>

        <!-- Filters -->
        <div
          class="-mx-5 flex max-w-full gap-1 overflow-x-auto px-5 sm:mx-0 sm:inline-flex sm:rounded-lg sm:border sm:border-sand/70 sm:bg-white/70 sm:p-1 sm:px-1 dark:sm:border-white/10 dark:sm:bg-navy-mid/60"
          role="tablist"
        >
          <button
            v-for="tab in tabs"
            :key="tab"
            type="button"
            role="tab"
            :aria-selected="filter === tab"
            class="shrink-0 whitespace-nowrap rounded-md border border-sand/70 px-4 py-2 text-sm font-medium transition-colors sm:border-0 dark:border-white/10 dark:sm:border-0"
            :class="
              filter === tab
                ? 'bg-navy text-cream dark:bg-gold dark:text-navy'
                : 'text-navy/60 hover:text-navy dark:text-cream/60 dark:hover:text-cream'
            "
            @click="setFilter(tab)"
          >
            {{ t(`work.filter-${tab}`) }}
          </button>
        </div>
      </div>

      <TransitionGroup
        tag="div"
        class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-3"
        leave-active-class="absolute transition duration-200 ease-in"
        leave-to-class="opacity-0"
        move-class="transition-transform duration-300"
      >
        <ProjectCard v-for="project in visible" :key="project.id" :project="project" />
      </TransitionGroup>

      <p v-if="!visible.length" class="mt-12 text-center text-navy/50 dark:text-cream/40">
        {{ t('work.empty') }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/data/projects'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

const tabs = ['all', 'mobile', 'web']

// The filter lives in the URL so a filtered view can be linked to and shared.
const filter = computed(() => (tabs.includes(route.query.tab) ? route.query.tab : 'all'))

const visible = computed(() =>
  filter.value === 'all' ? projects : projects.filter((p) => p.type === filter.value)
)

const setFilter = (tab) => {
  router.replace({
    name: 'home',
    params: { lang: route.params.lang },
    query: tab === 'all' ? {} : { tab },
    hash: '#work'
  })
}
</script>
