<template>
  <footer class="border-t border-sand/60 bg-white/50 dark:border-white/10 dark:bg-navy-mid/40">
    <div
      class="mx-auto flex max-w-content flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row"
    >
      <div class="text-center md:text-left">
        <p class="font-display text-lg font-bold text-navy dark:text-cream">Imad El Cass</p>
        <p class="mt-1 text-sm text-navy/60 dark:text-cream/50">
          {{ t('footer.built') }} · {{ t('footer.stack') }}
        </p>
      </div>

      <div class="flex items-center gap-2">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-md p-2.5 text-navy/60 transition-colors hover:text-gold dark:text-cream/60 dark:hover:text-gold"
          :aria-label="t(link.label)"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path :d="link.path" />
          </svg>
        </a>
      </div>

      <p class="text-xs text-navy/50 dark:text-cream/40">© {{ year }} · {{ t('footer.rights') }}</p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { contact } from '@/data/resume'

const { t } = useI18n()
const year = new Date().getFullYear()

const links = [
  {
    label: 'a11y.linkedin',
    href: contact.linkedin,
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
  },
  {
    label: 'a11y.github',
    href: contact.github,
    path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
  },
  {
    label: 'a11y.play',
    href: contact.playStore,
    path: 'M3.6 1.8a1 1 0 0 0-.6.9v18.6a1 1 0 0 0 .6.9l10.1-10.2L3.6 1.8zm12 8.1L5.9 1.1l11.4 6.6-1.7 2.2zm2.9 1.7 3.2 1.9c.9.5.9 1.5 0 2l-3.2 1.9-2-2.9 2-2.9zM5.9 22.9l9.7-8.8 1.7 2.2-11.4 6.6z'
  }
]
</script>
