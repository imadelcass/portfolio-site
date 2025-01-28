<template>
  <section class="text-gray-600 px-10 py-10 mx-auto body-font">
    <div class="container mx-auto">
      <!-- Header for Resume -->
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold tracking-wide text-indigo-500 uppercase">
          Resume
        </h1>
      </div>

      <!-- Experiences Section -->
      <div>
        <div class="uppercase tracking-widest text-indigo-500 text-xs font-medium title-font mb-6">
          Experiences
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            v-for="exp in experiences"
            :key="exp.id"
            class="flex flex-col border border-gray-300 rounded-lg p-4 shadow-md bg-white"
          >
            <h3 class="font-medium text-indigo-600 text-lg mb-1">
              {{ exp.company }}
            </h3>
            <p class="text-sm text-gray-500 italic mb-2">{{ exp.dates }}</p>
            <h4 class="text-gray-800 font-medium text-sm mb-2">
              {{ exp.title }}
            </h4>
            <p class="text-gray-600 text-sm" v-html="exp.desc"></p>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <div class="mt-10">
        <div class="uppercase tracking-widest text-indigo-500 text-xs font-medium title-font mb-6">
          Education
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            v-for="edu in educations"
            :key="edu.id"
            class="flex flex-col border border-gray-300 rounded-lg p-4 shadow-md bg-white"
          >
            <h3 class="font-medium text-indigo-600 text-lg mb-1">
              {{ edu.school }}
            </h3>
            <p class="text-sm text-gray-500 italic mb-2">{{ edu.dates }}</p>
            <p class="text-gray-800 text-sm">{{ edu.degree }}</p>
          </div>
        </div>
      </div>

      <!-- Soft Skills Section -->
      <div class="mt-10">
        <div class="uppercase tracking-widest text-indigo-500 text-xs font-medium title-font mb-4">
          Soft Skills
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
          Coding Skills
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
          Download Resume
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import fileUrl from '../../public/files/cv.pdf'

const experiences = ref([
  {
    company: 'BRAINBYTES',
    title: 'Web Developer',
    desc: `<strong>1. Finalizing and Improving the Existing Application:</strong> 
    Worked with the team to finalize version 1 of an application using CakePHP and MySQL, fixing issues and making adjustments to meet user needs.
    <br><br>
    <strong>2. Optimizing Export Features:</strong> 
    Implemented a queuing system to handle PDF data export with Puppeteer, improving the app's performance and stability.
    <br><br>
    <strong>3. Setting Up Docker and Separating Modules:</strong> 
    Configured Docker for easier app deployment and isolated different modules in containers, enhancing portability and dependency management.
    <br><br>
    <strong>4. Integrating WebSockets:</strong> 
    Added WebSockets for real-time communication between the frontend and backend, enabling file download status tracking and instant updates for users.
    <br><br>
    <strong>5. Migrating to Laravel and Vue.js:</strong> 
    Rebuilt the application using Laravel for the backend and Vue.js for the frontend to clearly separate responsibilities and improve system maintainability and scalability.
    <br><br>
    <strong>6. Optimizing Databases:</strong> 
    Redid database migrations to optimize performance, reducing query times and improving data management for a smoother and more responsive user experience.
    <br><br>`,
    location: 'Agadir, Morocco',
    dates: 'February 2024 - September 2024'
  },
  {
    company: 'WISE SYSTEMS',
    title: 'Web Developer',
    desc: `
    <strong>1. Web Application Development:</strong> 
    Built a strong web application named Agriwise with server-side design in Laravel and client-side design in Vue.js. 
    Developed a well-designed MVC architecture with clear separation of concerns and wrote clean code for easy maintenance.
    <br><br>
    <strong>2. Database Management:</strong> 
    Designed and optimized a large relational database in MySQL: schemas, database optimization, and database migration. 
    Developed export features for reports to analyze data and provide information to users.
    <br><br>
    <strong>3. Testing and Debugging:</strong> 
    Tested and debugged RESTful APIs with Insomnia to ensure consistent and high-performance web services. 
    Documented APIs for effective software integration to reduce development costs and improve user experience.
    <br><br>
    <strong>4. Version Control and Source Code Management:</strong> 
    Used Git for source code version control and worked with a team on GitHub, following best practices for branching and merging. 
    Conducted code reviews to ensure code quality.
    <br><br>
    <strong>5. Agile Methodology:</strong> 
    Worked in an Agile team, joined daily meetings to discuss team projects, and adapted plans as needed. 
    Actively collaborated with other developers to solve technical problems and design, code, and deploy collaboratively and responsibly.
    <br><br>
    <strong>6. Collaboration and Inter-Team Support:</strong> 
    Collaborated with design and product teams to influence and define technical requirements.`,
    location: 'Agadir, Morocco',
    dates: 'October 2022 - January 2024'
  },
  {
    company: 'Ma3ahid',
    title: 'Web Developer',
    desc: 'Developing a school management app with Laravel and Vue.js. Handling student, teacher, timetable, and grading features.',
    location: 'Agadir, Morocco',
    dates: 'Mars 2023 - November 2023'
  },
  {
    company: 'Bimma EWD',
    title: 'Mobile Developer',
    desc: 'Created a React Native app for managing BMW automobile electrical schematics.',
    location: 'Freeance',
    dates: 'November 2021 - May 2022'
  }
])

const educations = ref([
  {
    id: 1,
    school: 'Specialized Institute of Applied T - Agadir',
    location: 'Agadir, Morocco',
    dates: 'October 2020 - June 2022',
    degree: 'Specialized technician in computer development'
  },
  {
    id: 2,
    school: 'ESSAADA - Agadir',
    location: 'Agadir, Morocco',
    dates: 'October 2015 - June 2016',
    degree: 'High school diploma in physical sciences'
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
  }
])

const softSkills = ref([
  {
    name: 'Communication',
    level: 'w-4/5'
  },
  {
    name: 'Problem-solving',
    level: 'w-4/5'
  },
  {
    name: 'Adaptability',
    level: 'w-4/5'
  },
  {
    name: 'Creativity',
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
