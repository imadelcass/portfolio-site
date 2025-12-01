<template>
  <section class="text-gray-600 dark:text-gray-400 p-4 md:p-8 mx-auto body-font">
    <div class="container mx-auto">
      <!-- Header for Resume -->
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold tracking-wide text-indigo-500 uppercase">
          📝 {{ $t('resume') }} 🧑‍💻
        </h1>
      </div>

      <!-- Experiences Section -->
      <div>
        <div class="uppercase tracking-widest text-indigo-500 text-xs font-medium title-font mb-6">
          {{ $t('experiences') }}
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            v-for="exp in experiences"
            :key="exp.id"
            class="flex flex-col rounded-lg p-4 shadow-sm bg-white dark:bg-gray-800"
          >
            <h3 class="font-medium text-indigo-600 dark:text-indigo-400 text-lg mb-1">
              {{ exp.company }}
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-300 italic mb-2">{{ exp.dates }}</p>
            <h4 class="text-gray-800 dark:text-gray-200 font-medium text-sm mb-2">
              {{ exp.title }}
            </h4>
            <p class="text-gray-600 dark:text-gray-400 text-sm" v-html="exp.desc"></p>
          </div>
        </div>
      </div>

      <!-- Projects Section -->
      <div class="mt-10">
        <div class="uppercase tracking-widest text-indigo-500 text-xs font-medium mb-6">
          {{ $t('projects') }}
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            v-for="proj in projects"
            :key="proj.id"
            class="flex flex-col rounded-lg p-6 shadow-sm transition-shadow bg-white dark:bg-gray-800"
          >
            <h3 class="font-semibold text-indigo-600 dark:text-indigo-400 text-lg">
              {{ proj.name }}
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-300 italic mb-2">{{ proj.type }} app</p>
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-3">
              <span
                v-for="tag in proj.stack"
                :key="tag"
                class="bg-indigo-50 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-200 text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {{ tag }}
              </span>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-300 italic mb-3">{{ proj.dates }}</p>
            <p
              class="text-gray-700 dark:text-gray-200 text-sm leading-relaxed"
              v-html="proj.desc"
            ></p>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <div class="mt-10">
        <div class="uppercase tracking-widest text-indigo-500 text-xs font-medium title-font mb-6">
          {{ $t('education') }}
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            v-for="edu in educations"
            :key="edu.id"
            class="flex flex-col rounded-lg p-4 shadow-sm bg-white dark:bg-gray-800"
          >
            <h3 class="font-medium text-indigo-600 dark:text-indigo-400 text-lg mb-1">
              {{ edu.school }}
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-300 italic mb-2">{{ edu.dates }}</p>
            <p class="text-gray-800 dark:text-gray-200 text-sm">{{ edu.degree }}</p>
          </div>
        </div>
      </div>

      <!-- Soft Skills Section -->
      <div class="mt-10">
        <div class="uppercase tracking-widest text-indigo-500 text-xs font-medium title-font mb-4">
          {{ $t('soft-skills') }}
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="skill in softSkills" :key="skill.id" class="p-2">
            <div class="dark:text-gray-400 text-sm font-medium mb-2">
              {{ skill.name }}
            </div>
            <div class="w-full h-2 bg-gray-200 rounded-full">
              <div
                class="h-full text-center text-xs text-white bg-indigo-500 rounded-full"
                :class="skill.level"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Coding Skills Section -->
      <div class="mt-10">
        <div class="uppercase tracking-widest text-indigo-500 text-xs font-medium title-font mb-4">
          {{ $t('coding-skills') }}
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="skill in hardSkills" :key="skill.id" class="p-2">
            <div class="dark:text-gray-400 text-sm font-medium mb-2">
              {{ skill.name }}
            </div>
            <div class="w-full h-2 bg-gray-200 rounded-full">
              <div
                class="h-full text-center text-xs text-white bg-indigo-500 rounded-full"
                :class="skill.level"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Download Resume Button -->
      <div class="flex justify-center mt-10 pb-4">
        <button
          class="rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          @click="downloadFile"
        >
          {{ $t('download-resume') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import fileUrl from '../../public/files/cv.pdf'
import { t } from '@/lang'

const experiences = ref([
  {
    company: 'BRAINBYTES',
    title: t('experiences-info.brainbytes.title'),
    desc: t('experiences-info.brainbytes.desc'),
    location: 'Agadir, Morocco',
    dates: t('experiences-info.brainbytes.dates')
  },
  {
    company: 'WISE SYSTEMS',
    title: t('experiences-info.wise-systems.title'),
    desc: t('experiences-info.wise-systems.desc'),
    location: 'Agadir, Morocco',
    dates: t('experiences-info.wise-systems.dates')
  }
])

const projects = ref([
  {
    id: 5,
    type: 'web',
    stack: ['JavaScript', 'VueJS', 'NuxtJS', 'Pinia', 'I18n', 'PrimeVue', 'TailwindCSS'],
    name: t('projects-info.azora-shop.name'),
    desc: t('projects-info.azora-shop.short-desc')
  },
  {
    id: 6,
    type: 'mobile',
    stack: ['JavaScript', 'Ionic', 'Capacitor', 'VueJs', 'Php', 'Laravel', 'MySQL'],
    name: t('projects-info.delivery-man.name'),
    desc: t('projects-info.delivery-man.short-desc')
  },
  {
    id: 1,
    type: 'web',
    stack: ['CakePHP', 'MySQL', 'Docker', 'Puppeteer', 'WebSockets', 'Laravel', 'Vue'],
    name: t('projects-info.elevateguru.name'),
    desc: t('projects-info.elevateguru.short-desc')
  },
  {
    id: 2,
    type: 'web',
    stack: ['JavaScript', 'Vue', 'Php', 'Laravel', 'MySQL'],
    name: t('projects-info.agriwise.name'),
    desc: t('projects-info.agriwise.short-desc')
  },
  {
    id: 3,
    type: 'web',
    stack: ['JavaScript', 'Vue', 'Php', 'Laravel', 'MySQL'],
    name: t('projects-info.ma3ahid.name'),
    desc: t('projects-info.ma3ahid.short-desc')
  },
  {
    id: 4,
    type: 'mobile',
    stack: ['JavaScript', 'React Native', 'Php', 'Laravel', 'MySQL'],
    name: t('projects-info.bimma-ewd.name'),
    desc: t('projects-info.bimma-ewd.short-desc')
  },
  {
    id: 7,
    type: 'mobile',
    stack: ['TypeScript', 'Expo', 'React Native'],
    name: t('projects-info.scantel.name'),
    desc: t('projects-info.scantel.short-desc')
  }
])

const educations = ref([
  {
    id: 1,
    school: t('educations.institute-agadir.school'),
    location: t('educations.institute-agadir.location'),
    dates: t('educations.institute-agadir.dates'),
    degree: t('educations.institute-agadir.degree')
  },
  {
    id: 2,
    school: t('educations.essaada-agadir.school'),
    location: t('educations.essaada-agadir.location'),
    dates: t('educations.essaada-agadir.dates'),
    degree: t('educations.essaada-agadir.degree')
  }
])

const hardSkills = ref([
  {
    name: 'Html',
    level: 'w-4/5'
  },
  {
    name: 'Css',
    level: 'w-4/5'
  },
  {
    name: 'JavaScript',
    level: 'w-4/5'
  },
  {
    name: 'Vue',
    level: 'w-4/5'
  },
  {
    name: 'React',
    level: 'w-3/5'
  },
  {
    name: 'Php',
    level: 'w-3/4'
  },
  {
    name: 'Laravel',
    level: 'w-3/4'
  },
  {
    name: 'MySQL',
    level: 'w-3/4'
  },
  {
    name: 'React Native',
    level: 'w-3/4'
  },
  {
    name: 'Ionic',
    level: 'w-3/4'
  }
])

const softSkills = ref([
  {
    name: t('communication'),
    level: 'w-4/5'
  },
  {
    name: t('problem-solving'),
    level: 'w-4/5'
  },
  {
    name: t('time-management'),
    level: 'w-4/5'
  },
  {
    name: t('teamwork'),
    level: 'w-4/5'
  }
])

const downloadFile = () => {
  const link = document.createElement('a')
  link.href = fileUrl
  link.setAttribute('download', '')

  link.click()
}
</script>
