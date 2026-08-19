<template>
  <section id="contact" class="scroll-mt-24 py-24 sm:py-28">
    <div class="mx-auto max-w-content px-5 sm:px-8">
      <div class="grid gap-12 lg:grid-cols-[0.85fr,1.15fr] lg:gap-20">
        <div>
          <p class="section-label">{{ t('contact.label') }}</p>
          <h2 class="section-title mt-3">{{ t('contact.title') }}</h2>
          <p class="mt-5 text-base leading-relaxed text-navy/70 dark:text-cream/65">
            {{ t('contact.subtitle') }}
          </p>

          <p class="mt-10 text-xs font-semibold uppercase tracking-label text-navy/40 dark:text-cream/35">
            {{ t('contact.or-direct') }}
          </p>
          <ul class="mt-4 space-y-3 text-sm">
            <li>
              <a
                :href="`mailto:${contact.email}`"
                class="inline-flex items-center gap-3 text-navy transition-colors hover:text-gold dark:text-cream"
              >
                <svg class="h-4 w-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" />
                </svg>
                {{ contact.email }}
              </a>
            </li>
            <li>
              <a
                :href="`tel:${contact.phone.replace(/\s/g, '')}`"
                class="inline-flex items-center gap-3 text-navy transition-colors hover:text-gold dark:text-cream"
              >
                <svg class="h-4 w-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" />
                </svg>
                {{ contact.phone }}
              </a>
            </li>
            <li>
              <a
                :href="contact.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-3 text-navy transition-colors hover:text-gold dark:text-cream"
              >
                <svg class="h-4 w-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="2" /><path d="M7 10v7M7 7v.01M12 17v-4a2.5 2.5 0 0 1 5 0v4M12 17v-7" />
                </svg>
                linkedin.com/in/imad-elcass
              </a>
            </li>
          </ul>
        </div>

        <!-- Form -->
        <div class="card p-7 sm:p-9">
          <Transition
            mode="out-in"
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-2"
            leave-active-class="transition duration-150 ease-in"
            leave-to-class="opacity-0"
          >
            <div v-if="sent" key="sent" class="flex flex-col items-center py-12 text-center">
              <span class="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
                <svg class="h-7 w-7 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m4 12 5 5L20 6" />
                </svg>
              </span>
              <p class="mt-5 font-display text-2xl font-bold text-navy dark:text-cream">
                {{ t('contact.success-title') }}
              </p>
              <p class="mt-2 text-sm text-navy/60 dark:text-cream/55">{{ t('contact.success-body') }}</p>
            </div>

            <form v-else key="form" class="space-y-5" novalidate @submit.prevent="submit">
              <div>
                <label for="name" class="mb-1.5 block text-sm font-medium text-navy dark:text-cream">
                  {{ t('contact.name') }}
                </label>
                <input
                  id="name"
                  v-model.trim="form.name"
                  type="text"
                  name="name"
                  :placeholder="t('contact.name-ph')"
                  class="field"
                  :class="errors.name && 'field-error'"
                />
                <p v-if="errors.name" class="mt-1.5 text-xs text-red-600 dark:text-red-400">{{ errors.name }}</p>
              </div>

              <div>
                <label for="email" class="mb-1.5 block text-sm font-medium text-navy dark:text-cream">
                  {{ t('contact.email') }}
                </label>
                <input
                  id="email"
                  v-model.trim="form.email"
                  type="email"
                  name="email"
                  :placeholder="t('contact.email-ph')"
                  class="field"
                  :class="errors.email && 'field-error'"
                />
                <p v-if="errors.email" class="mt-1.5 text-xs text-red-600 dark:text-red-400">{{ errors.email }}</p>
              </div>

              <div>
                <label for="message" class="mb-1.5 block text-sm font-medium text-navy dark:text-cream">
                  {{ t('contact.message') }}
                </label>
                <textarea
                  id="message"
                  v-model.trim="form.message"
                  name="message"
                  rows="5"
                  :placeholder="t('contact.message-ph')"
                  class="field resize-y"
                  :class="errors.message && 'field-error'"
                />
                <p v-if="errors.message" class="mt-1.5 text-xs text-red-600 dark:text-red-400">
                  {{ errors.message }}
                </p>
              </div>

              <p v-if="failed" class="text-sm text-red-600 dark:text-red-400">{{ t('contact.error') }}</p>

              <button type="submit" class="btn-primary w-full" :disabled="sending">
                <span v-if="sending">{{ t('contact.sending') }}</span>
                <template v-else>
                  {{ t('contact.submit') }}
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </template>
              </button>
            </form>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { contact } from '@/data/resume'

const { t } = useI18n()

// Existing Formspree endpoint — carried over from the previous contact page.
const FORMSPREE = 'https://formspree.io/f/mvonjwag'

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const sending = ref(false)
const sent = ref(false)
const failed = ref(false)

const validate = () => {
  errors.name = form.name ? '' : t('contact.required')
  errors.message = form.message ? '' : t('contact.required')
  if (!form.email) errors.email = t('contact.required')
  else errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : t('contact.invalid-email')
  return !errors.name && !errors.email && !errors.message
}

const submit = async () => {
  failed.value = false
  if (!validate()) return

  sending.value = true
  try {
    const res = await fetch(FORMSPREE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...form })
    })
    if (!res.ok) throw new Error(`Formspree responded ${res.status}`)
    sent.value = true
  } catch (e) {
    failed.value = true
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
.field {
  @apply w-full rounded-lg border px-4 py-3 text-sm transition-colors;
  @apply border-sand bg-cream/40 text-navy placeholder:text-navy/35;
  @apply focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold;
  @apply dark:border-white/10 dark:bg-navy/40 dark:text-cream dark:placeholder:text-cream/30;
}
.field-error {
  @apply border-red-500 dark:border-red-500;
}
</style>
