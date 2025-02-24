<template>
  <section class="py-12 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-12">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h1 class="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
          {{ $t('portfolio') }}
        </h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {{ $t('portfolio-description') }}
        </p>
      </div>

      <!-- Tabs -->
      <div class="flex justify-center space-x-4 mb-8">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="px-6 py-2 rounded-lg font-semibold transition-colors focus:outline-none"
          :class="{
            'bg-indigo-500 text-white': activeTab === tab.id,
            'bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700':
              activeTab !== tab.id
          }"
          @click="onTabClicked(tab)"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, i) in filteredProjects"
          :key="i"
          class="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer"
          @click="navigateToDetail(project)"
        >
          <!-- Project Image -->
          <div class="h-48 bg-white dark:bg-gray-700 flex items-center justify-center">
            <img
              :src="project.logo"
              :alt="`${project.name} Logo`"
              class="h-full w-full object-contain object-center p-4"
            />
          </div>

          <!-- Project Details -->
          <div class="p-6">
            <h3
              class="text-lg font-bold text-gray-800 dark:text-white group-hover:text-indigo-500 transition-colors"
            >
              {{ project.name }}
            </h3>
            <p class="mt-2 text-gray-600 dark:text-gray-400 line-clamp-3">
              {{ project.desc }}
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="px-2 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-200 rounded text-sm font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { t } from '@/lang'

// Import project images
import bimma from '@/assets/img/bimma.png'
import elevateGuru from '@/assets/img/elevateGuru.png'
import agriwise from '@/assets/img/agriwise.png'
import maahid from '@/assets/img/maahid.png'
import azorashop from '@/assets/img/azorashop.png'
import m1 from '@/assets/img/m1.png'
import m2 from '@/assets/img/m2.png'
import m3 from '@/assets/img/m3.png'
import m4 from '@/assets/img/m4.png'
import m5 from '@/assets/img/m5.png'
import eg1 from '@/assets/img/eg1.svg'
import eg2 from '@/assets/img/eg2.svg'
import eg3 from '@/assets/img/eg3.svg'
import az1 from '@/assets/img/az1.png'
import az2 from '@/assets/img/az2.png'
import az3 from '@/assets/img/az3.png'
import az4 from '@/assets/img/az4.png'
import bimma1 from '@/assets/img/bimma1.png'
import bimma2 from '@/assets/img/bimma2.png'
import bimma3 from '@/assets/img/bimma3.png'
import bimma4 from '@/assets/img/bimma4.png'
import bimma5 from '@/assets/img/bimma5.png'
import bimma6 from '@/assets/img/bimma6.png'
import cod1 from '@/assets/img/cod1.png'
import cod2 from '@/assets/img/cod2.png'
import cod3 from '@/assets/img/cod3.png'

const router = useRouter()

// Define tabs
const tabs = [
  { id: 'web', label: t('web-apps') },
  { id: 'mobile', label: t('mobile-apps') }
]

// Define projects
const projects = ref([
  {
    id: 5,
    type: 'web',
    stack: ['JavaScript', 'VueJS', 'NuxtJS', 'Pinia', 'I18n', 'PrimeVue', 'TailwindCSS'],
    name: 'Azora Shop',
    slug: 'azora-shop',
    url: 'https://azorashop.netlify.app/',
    desc: t('projects-info.azora-shop.desc'),
    logo: azorashop,
    imgs: [az1, az2, az3, az4]
  },
  {
    id: 6,
    type: 'mobile',
    stack: ['JavaScript', 'Ionic', 'Capacitor', 'VueJs', 'Php', 'Laravel', 'MySQL'],
    name: 'COD Delivery Man',
    slug: 'cod-delivery-man',
    url: 'https://vermillion-sundae-963a42.netlify.app/',
    desc: t('projects-info.cod-delivery-man.desc'),
    logo: 'https://vermillion-sundae-963a42.netlify.app/assets/cod-power-group-logo-CEykfBH7.svg',
    imgs: [cod1, cod2, cod3]
  },
  {
    id: 1,
    type: 'web',
    stack: ['CakePHP', 'MySQL', 'Docker', 'Puppeteer', 'WebSockets', 'Laravel', 'Vue'],
    name: 'Elevate Guru',
    slug: 'elevateguru',
    url: 'https://www.elevateguru.com/en',
    desc: t('projects-info.elevateguru.desc'),
    logo: elevateGuru,
    imgs: [eg1, eg2, eg3]
  },
  {
    id: 2,
    type: 'web',
    stack: ['JavaScript', 'Vue', 'Php', 'Laravel', 'MySQL'],
    name: 'Agriwise',
    slug: 'agriwise',
    url: 'https://agriwise.ma',
    desc: t('projects-info.agriwise.desc'),
    logo: agriwise
  },
  {
    id: 3,
    type: 'web',
    stack: ['JavaScript', 'Vue', 'Php', 'Laravel', 'MySQL'],
    name: 'Ma3ahid',
    slug: 'ma3ahid',
    url: 'https://ma3ahid.gismait.com/',
    desc: t('projects-info.ma3ahid.desc'),
    logo: maahid,
    imgs: [m1, m2, m3, m4, m5]
  },
  {
    id: 4,
    type: 'mobile',
    stack: ['JavaScript', 'React Native', 'Php', 'Laravel', 'MySQL'],
    name: 'Bimma EWD',
    slug: 'bimma-ewd',
    url: 'https://play.google.com/store/apps/details?id=com.bimma_ewd_v2',
    desc: t('projects-info.bimma-ewd.desc'),
    logo: bimma,
    imgs: [bimma1, bimma2, bimma3, bimma4, bimma5, bimma6]
  }
])

// Filter projects based on active tab
const filteredProjects = computed(() =>
  projects.value.filter((project) => project.type === activeTab.value)
)

const activeTab = computed(() => {
  const tabId = router.currentRoute.value.query.tab
  return tabId ? tabId : 'web'
})
// Navigate to project detail page
const navigateToDetail = (project) => {
  router.push({
    name: 'project',
    params: { slug: project.slug, lang: router.currentRoute.value.params.lang }
  })
}

const onTabClicked = (tab) => {
  router.push({
    name: 'portfolio',
    params: { lang: router.currentRoute.value.params.lang },
    query: { tab: tab.id }
  })
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
}
</style>
