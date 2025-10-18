<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-sm">A</span>
          </div>
          <span class="font-serif text-xl font-semibold text-gray-900">L'Artesana</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            to="/" 
            class="text-gray-700 hover:text-primary-600 transition-colors duration-200"
            :class="{ 'text-primary-600 font-medium': $route.path === '/' }"
          >
            Hola
          </router-link>
          
          <!-- Tallers Dropdown -->
          <div class="relative group">
            <button class="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors duration-200">
              <span>Tallers</span>
              <svg class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div class="py-2">
                <router-link to="/tallers" class="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
                  Tots els tallers
                </router-link>
                <div class="border-t border-gray-100 my-2"></div>
                <div class="px-4 py-2 text-sm font-medium text-gray-500">Infants i Joves</div>
                <router-link to="/tallers/infants-i-joves" class="block px-6 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
                  Extraescolars
                </router-link>
                <router-link to="/casalets" class="block px-6 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
                  Casalets
                </router-link>
                <router-link to="/aniversaris" class="block px-6 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
                  Aniversaris
                </router-link>
                <div class="px-4 py-2 text-sm font-medium text-gray-500">Adults</div>
                <router-link to="/tallers/adults" class="block px-6 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
                  Workshops
                </router-link>
                <router-link to="/social" class="block px-6 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
                  Social
                </router-link>
                <div class="px-4 py-2 text-sm font-medium text-gray-500">Altres</div>
                <router-link to="/tallers/familiars" class="block px-6 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
                  Familiars
                </router-link>
                <router-link to="/tallers/centres-i-escoles" class="block px-6 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
                  Centres i Escoles
                </router-link>
                <router-link to="/tallers/teambuildings" class="block px-6 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
                  TeamBuildings
                </router-link>
              </div>
            </div>
          </div>

          <router-link 
            to="/esdeveniments" 
            class="text-gray-700 hover:text-primary-600 transition-colors duration-200"
            :class="{ 'text-primary-600 font-medium': $route.path === '/esdeveniments' }"
          >
            Esdeveniments
          </router-link>
          
          <router-link 
            to="/agenda" 
            class="text-gray-700 hover:text-primary-600 transition-colors duration-200"
            :class="{ 'text-primary-600 font-medium': $route.path === '/agenda' }"
          >
            Agenda
          </router-link>
          
          <router-link 
            to="/blog" 
            class="text-gray-700 hover:text-primary-600 transition-colors duration-200"
            :class="{ 'text-primary-600 font-medium': $route.path === '/blog' }"
          >
            Blog
          </router-link>
          
          <router-link 
            to="/contacte" 
            class="text-gray-700 hover:text-primary-600 transition-colors duration-200"
            :class="{ 'text-primary-600 font-medium': $route.path === '/contacte' }"
          >
            Contacte
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMobileMenuOpen" class="md:hidden border-t border-gray-200 py-4">
        <div class="space-y-2">
          <router-link to="/" class="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
            Hola
          </router-link>
          <router-link to="/tallers" class="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
            Tallers
          </router-link>
          <router-link to="/esdeveniments" class="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
            Esdeveniments
          </router-link>
          <router-link to="/agenda" class="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
            Agenda
          </router-link>
          <router-link to="/blog" class="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
            Blog
          </router-link>
          <router-link to="/contacte" class="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">
            Contacte
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>
