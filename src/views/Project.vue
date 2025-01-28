<template>
  <div class="project-detail-page bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Project Header -->
      <header class="project-header flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-12">
        <img
          :src="project.logo"
          :alt="project.name"
          class="project-logo w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-lg border border-gray-200 dark:border-gray-700"
        />
        <div class="project-title-section text-center sm:text-left">
          <h1 class="project-name text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
            {{ project.name }}
          </h1>
          <p class="project-type text-lg text-gray-600 dark:text-gray-400 mt-2">
            {{ project.type?.toUpperCase() }} Project
          </p>
          <a
            :href="project.url"
            target="_blank"
            class="project-url mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium transition-colors"
          >
            Visit Project ↗
          </a>
        </div>
      </header>

      <!-- Project Main Content -->
      <section class="project-main grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Project Description -->
        <div class="project-description bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">About the Project</h2>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ project.desc }}</p>
        </div>

        <!-- Technology Stack -->
        <div class="project-stack bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Technology Stack</h2>
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
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6">Gallery</h2>
        <div class="image-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            v-for="(img, index) in project.imgs"
            :key="index"
            :src="img"
            :alt="'Screenshot ' + (index + 1)"
            class="gallery-image w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// Import project images
import bimma from '@/assets/img/bimma.png';
import elevateGuru from '@/assets/img/elevateGuru.png';
import agriwise from '@/assets/img/agriwise.png';
import maahid from '@/assets/img/maahid.png';
import m1 from '@/assets/img/m1.png';
import m2 from '@/assets/img/m2.png';
import m3 from '@/assets/img/m3.png';
import m4 from '@/assets/img/m4.png';
import m5 from '@/assets/img/m5.png';
import eg1 from '@/assets/img/eg1.svg';
import eg2 from '@/assets/img/eg2.svg';
import eg3 from '@/assets/img/eg3.svg';

const route = useRoute();
const projects = ref([
  {
    id: 1,
    type: 'web',
    stack: ['CakePHP', 'MySQL', 'Docker', 'Puppeteer', 'WebSockets', 'Laravel', 'Vue'],
    name: 'Elevate Guru',
    slug: 'elevateguru',
    url: 'https://www.elevateguru.com/en',
    desc: 'ElevateGuru.com is an online platform tailored for business advisors and entrepreneurs, enhancing workflow and collaboration. It guides startups through essential steps, from developing compelling business concepts to optimizing operations. With a comprehensive toolkit for informed decision-making, exceptional training programs, and monitoring tools, ElevateGuru empowers users to measure impact and highlight success stories. The platform fosters collaboration, providing resources for various business development aspects, making it essential for entrepreneurs at any stage of their journey.',
    logo: elevateGuru,
    imgs: [eg1, eg2, eg3],
  },
  {
    id: 2,
    type: 'web',
    stack: ['JavaScript', 'Vue', 'Php', 'Laravel', 'MySQL'],
    name: 'Agriwise',
    slug: 'agriwise',
    url: 'https://agriwise.ma',
    desc: 'Agriwise is a comprehensive farm management system that streamlines various agricultural processes. It provides tools for managing employees, users, point-of-sale, inventory, reception, expedition, and more. With Agriwise, farmers can efficiently track and analyze their operations, enabling better decision-making and increased productivity.',
    logo: agriwise,
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
    imgs: [m1, m2, m3, m4, m5],
  },
  {
    id: 4,
    type: 'mobile',
    stack: ['JavaScript', 'React Native', 'Php', 'Laravel', 'MySQL'],
    name: 'Bimma EWD',
    slug: 'bimma-ewd',
    url: 'https://play.google.com/store/apps/details?id=com.bimma_ewd_v2',
    desc: 'Bimma EWD is a mobile application developed using JavaScript, React Native, PHP, and Laravel frameworks. It serves as a useful tool for accessing electrical schemas of various BMW models. Users can easily search for a specific schema and view it within the app. They also have the option to download the schema or add it to their bookmarks for future reference. To explore the source code, please check the provided link.',
    logo: bimma,
    imgs: [
      'https://play-lh.googleusercontent.com/p_oiIo5C5AfoFZ7jRMT-2Ff1aZ7XLojg3N7JkyE6lMEo5KMr1iAUj3VoxAk0MoDbSg=w526-h296-rw',
      'https://play-lh.googleusercontent.com/IVTo1NIAQ87ICodrCkR4T6AzlVIhaJNf-998zUyRmxJelOARYjL58YhknP2EDBP_NLo=w526-h296-rw',
      'https://play-lh.googleusercontent.com/opQjjP4tcQKF6cQrgkq42uM4qPC3q-2XZmZj8VX4sR3-3dUDyop5mgkKxZ0jGBtmgl4=w526-h296-rw',
      'https://play-lh.googleusercontent.com/2DDMMZkC0FkPER2tXg7LJXVA-Xbdtq0jjwU28oE6Hiu7cVIZ_zBr0g-iZ-r5tTo58A=w526-h296-rw',
      'https://play-lh.googleusercontent.com/umlp8d_WDyQH-9CIVqMFxHPZnWVDaNCvql_AdcDminRkN_7oifGhSnJg-2aOTQW6H04=w526-h296-rw',
      'https://play-lh.googleusercontent.com/A6WQwmEXPvcT6_UziphfSPDth7lPLg-12wlc8tCPZzisP9Bng-s76vzRAoaxv404Bw=w526-h296-rw',
    ],
  },
]);

const project = ref({});

onMounted(() => {
  const slug = route.params.slug;
  project.value = projects.value.find((p) => p.slug === slug);
});
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