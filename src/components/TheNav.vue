<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
    :class="
      scrolled || menuOpen
        ? 'border-b border-sand/60 bg-cream/90 backdrop-blur dark:border-white/10 dark:bg-navy/90'
        : 'border-b border-transparent'
    "
  >
    <nav class="mx-auto flex h-20 max-w-content items-center justify-between px-5 sm:px-8">
      <!-- Wordmark -->
      <RouterLink :to="homeLink" class="group flex items-center gap-2.5" @click="closeMenu">
        <span
          class="flex h-9 w-9 items-center justify-center rounded-md font-display text-base font-bold transition"
          :class="onDark ? 'bg-gold text-navy group-hover:bg-cream' : 'bg-navy text-gold group-hover:bg-gold group-hover:text-navy dark:bg-gold dark:text-navy'"
        >
          IE
        </span>
        <span
          class="font-display text-lg font-bold tracking-wide"
          :class="onDark ? 'text-cream' : 'text-navy dark:text-cream'"
        >
          Imad El Cass
        </span>
      </RouterLink>

      <!-- Desktop links -->
      <ul class="hidden items-center gap-1 lg:flex">
        <li v-for="item in sections" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="rounded-md px-3.5 py-2 text-sm font-medium transition-colors"
            :class="
              active === item.id
                ? 'text-gold'
                : onDark
                  ? 'text-cream/70 hover:text-cream'
                  : 'text-navy/70 hover:text-navy dark:text-cream/60 dark:hover:text-cream'
            "
            @click="onNavClick($event, item.id)"
          >
            {{ t(`nav.${item.id}`) }}
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-1.5">
        <!-- Language -->
        <button
          type="button"
          class="rounded-md px-2.5 py-2 text-sm font-semibold uppercase tracking-wide transition-colors hover:text-gold"
          :class="onDark ? 'text-cream/70' : 'text-navy/60 dark:text-cream/60'"
          :aria-label="t('a11y.lang')"
          @click="toggleLang"
        >
          {{ otherLocale }}
        </button>

        <!-- Theme -->
        <button
          type="button"
          class="rounded-md p-2 transition-colors hover:text-gold"
          :class="onDark ? 'text-cream/70' : 'text-navy/60 dark:text-cream/60'"
          :aria-label="t('a11y.theme')"
          @click="mode.toggle()"
        >
          <svg
            v-if="mode.isDark"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
            />
          </svg>
          <svg
            v-else
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
          </svg>
        </button>

        <!-- Mobile menu button -->
        <button
          type="button"
          class="rounded-md p-2 transition-colors hover:text-gold lg:hidden"
          :class="onDark ? 'text-cream' : 'text-navy dark:text-cream'"
          :aria-label="t('nav.menu')"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <svg
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
          >
            <template v-if="menuOpen">
              <path d="M6 6l12 12M18 6L6 18" />
            </template>
            <template v-else>
              <path d="M4 7h16M4 12h16M4 17h16" />
            </template>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile drawer -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <ul v-if="menuOpen" class="border-t border-sand/60 px-5 pb-5 pt-2 dark:border-white/10 lg:hidden">
        <li v-for="item in sections" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="block rounded-md px-3 py-3 text-base font-medium transition-colors"
            :class="active === item.id ? 'text-gold' : 'text-navy/80 dark:text-cream/70'"
            @click="onNavClick($event, item.id)"
          >
            {{ t(`nav.${item.id}`) }}
          </a>
        </li>
      </ul>
    </Transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useModeStore } from '@/stores/modeStore'

const { t, locale } = useI18n()
const mode = useModeStore()
const router = useRouter()
const route = useRoute()

const sections = [{ id: 'about' }, { id: 'skills' }, { id: 'work' }, { id: 'experience' }, { id: 'contact' }]

const scrolled = ref(false)
const menuOpen = ref(false)
const active = ref('')

// Until the header gets its own background, it floats over the dark hero band.
const onDark = computed(() => !scrolled.value && !menuOpen.value)

const homeLink = computed(() => ({ name: 'home', params: { lang: route.params.lang } }))
const otherLocale = computed(() => (locale.value === 'fr' ? 'en' : 'fr'))

const closeMenu = () => (menuOpen.value = false)

const toggleLang = () => {
  const next = otherLocale.value
  locale.value = next
  router.push({
    name: route.name,
    params: { ...route.params, lang: next },
    query: route.query,
    hash: route.hash
  })
}

// Navigating to a hash from a project page has to go home first.
const onNavClick = (event, id) => {
  closeMenu()
  if (route.name !== 'home') {
    event.preventDefault()
    router.push({ name: 'home', params: { lang: route.params.lang }, hash: `#${id}` })
  }
}

let observer
const onScroll = () => (scrolled.value = window.scrollY > 12)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  // Scroll-spy: the section occupying the middle of the viewport wins.
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) active.value = e.target.id
      })
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  )
  sections.forEach(({ id }) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
})
</script>
