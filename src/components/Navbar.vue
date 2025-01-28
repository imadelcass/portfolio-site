<template>
  <nav x-data="{ isOpen: false }" class="bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700">
    <div class="container px-4 mx-auto">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link
            to="/"
            class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-200 hover:text-indigo-500 transition-colors"
          >
            <span class="mr-2">El cass</span>
            <span class="text-indigo-500">Imad</span>
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex lg:items-center lg:space-x-6">
          <ul class="flex space-x-6">
            <li v-for="route in routes" :key="route.name">
              <router-link
                :to="route.to"
                class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition-colors"
              >
                {{ route.name }}
              </router-link>
            </li>
          </ul>

          <!-- Dark Mode Toggle -->
          <el-switch
            v-model="darkMode"
            :active-action-icon="Moon"
            :inactive-action-icon="Sunny"
            size="small"
            @change="toggleMode"
            class="ml-4"
          />
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex lg:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="text-gray-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none"
            aria-label="toggle menu"
          >
            <svg
              v-if="!isOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
            </svg>
            <svg
              v-if="isOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        x-cloak
        :class="[isOpen ? 'block' : 'hidden']"
        class="lg:hidden mt-2"
      >
        <ul class="flex flex-col space-y-4">
          <li v-for="route in routes" :key="route.name">
            <router-link
              :to="route.to"
              class="block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
            >
              {{ route.name }}
            </router-link>
          </li>
        </ul>

        <!-- Dark Mode Toggle for Mobile -->
        <div class="mt-4 px-4">
          <el-switch
            v-model="darkMode"
            :active-action-icon="Moon"
            :inactive-action-icon="Sunny"
            size="small"
            @change="toggleMode"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { Sunny, Moon } from '@element-plus/icons-vue';
import { useModeStore } from '@/stores/modeStore';

const modeStore = useModeStore();
const isOpen = ref(false);
const darkMode = ref(false);

const toggleMode = () => {
  modeStore.setMode(darkMode.value);
};

const routes = ref([
  { name: 'Home', to: '/' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Resume', to: '/resume' },
  { name: 'Contact', to: '/contact' },
]);
</script>

<style scoped>
/* Add custom styles if needed */
</style>