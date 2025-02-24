<template>
  <div class="project-detail-page bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Project Header -->
      <el-breadcrumb separator="/" class="mb-6">
        <el-breadcrumb-item :to="{ path: '/' }">
          <div class="text-black font-bold hover:text-indigo-500 dark:text-white">
            {{ $t('home') }}
          </div>
        </el-breadcrumb-item>
        <el-breadcrumb-item class="cursor-pointer" @click="onPortfolioClicked">
          <div class="text-black font-bold hover:text-indigo-500 dark:text-white">
            {{ $t('portfolio') }}
          </div>
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ project.name }}</el-breadcrumb-item>
      </el-breadcrumb>
      <header class="project-header flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-12">
        <img
          :src="project.logo"
          :alt="project.name"
          class="project-logo w-full h-40 p-4 md:w-36 md:h-36 md:p-1 object-contain bg-white rounded-lg border border-gray-200 dark:border-gray-700"
        />

        <div class="project-title-section text-center sm:text-left">
          <h1 class="project-name text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
            {{ project.name }}
          </h1>
          <p class="project-type text-lg text-gray-600 dark:text-gray-400 mt-2">
            {{ project.type?.toUpperCase() }} {{ $t('project') }}
          </p>
          <a
            :href="project.url"
            target="_blank"
            class="project-url mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium transition-colors"
          >
            {{ $t('visit-project') }} ↗
          </a>
        </div>
      </header>

      <!-- Project Main Content -->
      <section class="project-main grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Project Description -->
        <div class="project-description bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            {{ $t('about-project') }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ project.desc }}</p>
        </div>

        <!-- Technology Stack -->
        <div class="project-stack bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            {{ $t('technology-stack') }}
          </h2>
          <ul class="stack-list flex flex-wrap gap-2">
            <li
              v-for="tech in project.stack"
              :key="tech"
              class="stack-item bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium"
            >
              {{ tech }}
            </li>
          </ul>
        </div>
      </section>

      <!-- Project Gallery -->
      <section class="project-gallery mt-12">
        <div class="mb-6">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white">{{ $t('gallery') }}</h2>

          <p class="ml-1 text-sm text-gray-600 dark:text-gray-400 max-w-md italic">
            {{ $t('click-on-image-to-open-fullscreen-view') }}
          </p>
        </div>

        <div class="image-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            v-for="(img, index) in project.imgs"
            :key="index"
            :src="img"
            :alt="'Screenshot ' + (index + 1)"
            class="gallery-image w-full h-40 object-contain rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-zoom-in"
            @click="openModal(index)"
          />
        </div>
      </section>
    </div>
  </div>

  <!-- Fullscreen Project Gallery -->
  <el-dialog v-model="isModalOpen" fullscreen class="bg-gray-900 dark:bg-gray-900">
    <el-carousel
      :initial-index="currentImageIndex"
      trigger="click"
      arrow="always"
      indicator-position="outside"
      height="80vh"
    >
      <el-carousel-item v-for="(img, index) in project.imgs" :key="index" class="bg-gray-900">
        <img :src="img" :alt="'Screenshot ' + (index + 1)" class="w-full h-full object-contain" />
      </el-carousel-item>
    </el-carousel>
  </el-dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
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

const route = useRoute()
const router = useRouter()
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
    imgs: [az1, az3, az4, az2]
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

const project = ref({})
const isModalOpen = ref(false)
const currentImageIndex = ref(0)

const openModal = (index) => {
  currentImageIndex.value = index
  isModalOpen.value = true
}

onMounted(() => {
  const slug = route.params.slug
  project.value = projects.value.find((p) => p.slug === slug)
})

const onPortfolioClicked = () => {
  // go back to portfolio page
  router.back()
}
</script>

<style scoped>
/* Custom styles for transitions and hover effects */
.gallery-image {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.gallery-image:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
