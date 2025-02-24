<template>
  <section class="py-12 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-12">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h1 class="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">My Projects</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore the work I've done in web and mobile applications.
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
          @click="activeTab = tab.id"
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
          <div class="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
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

const router = useRouter()
const activeTab = ref('web')

// Define tabs
const tabs = [
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile Apps' }
]

// Define projects
const projects = ref([
  {
    id: 5,
    type: 'web',
    stack: ['JavaScript', 'VueJS', 'NuxtJS', 'Pinia', 'I18n', 'PrimeVue', 'TailwindCSS'],
    name: 'Azora Shop',
    slug: 'azora-shop',
    url: 'http://azorashop.store/',
    desc: 'Azora Shop',
    logo: azorashop,
    imgs: [
      'https://play-lh.googleusercontent.com/p_oiIo5C5AfoFZ7jRMT-2Ff1aZ7XLojg3N7JkyE6lMEo5KMr1iAUj3VoxAk0MoDbSg=w526-h296-rw',
      'https://play-lh.googleusercontent.com/IVTo1NIAQ87ICodrCkR4T6AzlVIhaJNf-998zUyRmxJelOARYjL58YhknP2EDBP_NLo=w526-h296-rw',
      'https://play-lh.googleusercontent.com/opQjjP4tcQKF6cQrgkq42uM4qPC3q-2XZmZj8VX4sR3-3dUDyop5mgkKxZ0jGBtmgl4=w526-h296-rw',
      'https://play-lh.googleusercontent.com/2DDMMZkC0FkPER2tXg7LJXVA-Xbdtq0jjwU28oE6Hiu7cVIZ_zBr0g-iZ-r5tTo58A=w526-h296-rw',
      'https://play-lh.googleusercontent.com/umlp8d_WDyQH-9CIVqMFxHPZnWVDaNCvql_AdcDminRkN_7oifGhSnJg-2aOTQW6H04=w526-h296-rw',
      'https://play-lh.googleusercontent.com/A6WQwmEXPvcT6_UziphfSPDth7lPLg-12wlc8tCPZzisP9Bng-s76vzRAoaxv404Bw=w526-h296-rw'
    ]
  },
  {
    id: 6,
    type: 'mobile',
    stack: ['JavaScript', 'Ionic', 'Capacitor', 'VueJs', 'Php', 'Laravel', 'MySQL'],
    name: 'Delivery Man',
    slug: 'delivery-man',
    url: 'https://play.google.com/store/apps/details?id=com.bimma_ewd_v2',
    desc: 'Delivery Man is a cross-platform mobile app designed to streamline the operations of delivery personnel in the Cash on Delivery (COD) business. The app provides delivery agents with an organized view of their orders, real-time status updates, journey statistics, and more. With an intuitive interface, it empowers delivery workers to manage their tasks efficiently and stay informed throughout their route.',
    logo: bimma,
    imgs: [
      'https://play-lh.googleusercontent.com/p_oiIo5C5AfoFZ7jRMT-2Ff1aZ7XLojg3N7JkyE6lMEo5KMr1iAUj3VoxAk0MoDbSg=w526-h296-rw',
      'https://play-lh.googleusercontent.com/IVTo1NIAQ87ICodrCkR4T6AzlVIhaJNf-998zUyRmxJelOARYjL58YhknP2EDBP_NLo=w526-h296-rw',
      'https://play-lh.googleusercontent.com/opQjjP4tcQKF6cQrgkq42uM4qPC3q-2XZmZj8VX4sR3-3dUDyop5mgkKxZ0jGBtmgl4=w526-h296-rw',
      'https://play-lh.googleusercontent.com/2DDMMZkC0FkPER2tXg7LJXVA-Xbdtq0jjwU28oE6Hiu7cVIZ_zBr0g-iZ-r5tTo58A=w526-h296-rw',
      'https://play-lh.googleusercontent.com/umlp8d_WDyQH-9CIVqMFxHPZnWVDaNCvql_AdcDminRkN_7oifGhSnJg-2aOTQW6H04=w526-h296-rw',
      'https://play-lh.googleusercontent.com/A6WQwmEXPvcT6_UziphfSPDth7lPLg-12wlc8tCPZzisP9Bng-s76vzRAoaxv404Bw=w526-h296-rw'
    ]
  },
  {
    id: 1,
    type: 'web',
    stack: ['CakePHP', 'MySQL', 'Docker', 'Puppeteer', 'WebSockets', 'Laravel', 'Vue'],
    name: 'Elevate Guru',
    slug: 'elevateguru',
    url: 'https://www.elevateguru.com/en',
    desc: 'ElevateGuru.com is an online platform tailored for business advisors and entrepreneurs, enhancing workflow and collaboration. It guides startups through essential steps, from developing compelling business concepts to optimizing operations. With a comprehensive toolkit for informed decision-making, exceptional training programs, and monitoring tools, ElevateGuru empowers users to measure impact and highlight success stories. The platform fosters collaboration, providing resources for various business development aspects, making it essential for entrepreneurs at any stage of their journey.',
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
    desc: 'Agriwise is a comprehensive farm management system that streamlines various agricultural processes. It provides tools for managing employees, users, point-of-sale, inventory, reception, expedition, and more. With Agriwise, farmers can efficiently track and analyze their operations, enabling better decision-making and increased productivity.',
    logo: agriwise
  },
  {
    id: 3,
    type: 'web',
    stack: ['JavaScript', 'Vue', 'Php', 'Laravel', 'MySQL'],
    name: 'Ma3ahid',
    slug: 'ma3ahid',
    url: 'https://ma3ahid.gismait.com/',
    desc: "Ma3ahid is a versatile web application tailored for school management, catering to the needs of trainees, trainers, and tutors. The application featured a robust timetable system, facilitating the scheduling of sessions, modules, and groups across different sectors, optimizing the overall learning experience. 📅✨ A key highlight was the implementation of a user system with role-based access control. The Super Admin could create custom roles, such as 'Assistance', and assign specific permissions. This allowed for a highly customizable system, enabling users to perform tasks like creating or updating groups and modules based on their assigned roles. 🛠️🔐 'Ma3ahid' supported seamless data export to Excel, enhancing data analysis capabilities. Additionally, it allowed for the generation of printable documents, such as timetables in PDF format, providing users with convenient documentation options. 📊🖨️ To streamline financial management, the web app supported invoicing and payments, contributing to the overall efficiency of administrative tasks within the educational institution. 💸📑 In summary, 'Ma3ahid' prioritized user flexibility, offering a customizable solution for academic institutions. Its diverse features aimed to simplify administrative processes, optimize resource allocation, and contribute to the overall success of the educational institution. 🏫🚀",
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
    desc: 'Bimma EWD is a mobile application developed using JavaScript, React Native, PHP, and Laravel frameworks. It serves as a useful tool for accessing electrical schemas of various BMW models. Users can easily search for a specific schema and view it within the app. They also have the option to download the schema or add it to their bookmarks for future reference.',
    logo: bimma,
    imgs: [
      'https://play-lh.googleusercontent.com/p_oiIo5C5AfoFZ7jRMT-2Ff1aZ7XLojg3N7JkyE6lMEo5KMr1iAUj3VoxAk0MoDbSg=w526-h296-rw',
      'https://play-lh.googleusercontent.com/IVTo1NIAQ87ICodrCkR4T6AzlVIhaJNf-998zUyRmxJelOARYjL58YhknP2EDBP_NLo=w526-h296-rw',
      'https://play-lh.googleusercontent.com/opQjjP4tcQKF6cQrgkq42uM4qPC3q-2XZmZj8VX4sR3-3dUDyop5mgkKxZ0jGBtmgl4=w526-h296-rw',
      'https://play-lh.googleusercontent.com/2DDMMZkC0FkPER2tXg7LJXVA-Xbdtq0jjwU28oE6Hiu7cVIZ_zBr0g-iZ-r5tTo58A=w526-h296-rw',
      'https://play-lh.googleusercontent.com/umlp8d_WDyQH-9CIVqMFxHPZnWVDaNCvql_AdcDminRkN_7oifGhSnJg-2aOTQW6H04=w526-h296-rw',
      'https://play-lh.googleusercontent.com/A6WQwmEXPvcT6_UziphfSPDth7lPLg-12wlc8tCPZzisP9Bng-s76vzRAoaxv404Bw=w526-h296-rw'
    ]
  }
])

// Filter projects based on active tab
const filteredProjects = computed(() =>
  projects.value.filter((project) => project.type === activeTab.value)
)

// Navigate to project detail page
const navigateToDetail = (project) => {
  router.push({
    name: 'project',
    params: { slug: project.slug }
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
