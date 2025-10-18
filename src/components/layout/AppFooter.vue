<template>
  <footer class="bg-gray-900 text-white">
    <div class="container-custom section-padding">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Logo and Description -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-sm">A</span>
            </div>
            <span class="font-serif text-xl font-semibold">L'Artesana</span>
          </div>
          <p class="text-gray-300 mb-6 max-w-md">
            Un espai on art i natura s'uneixen per crear experiències de connexió i transformació personal.
          </p>
          <div class="space-y-2">
            <p class="text-gray-300">
              <span class="font-medium">Adreça:</span><br>
              Consell de Cent 159, Local H – Fàbrica Lehmann<br>
              Barcelona
            </p>
            <p class="text-gray-300">
              <span class="font-medium">Contacte:</span><br>
              <a href="mailto:info@espailartesana.cat" class="hover:text-primary-400 transition-colors duration-200">
                info@espailartesana.cat
              </a><br>
              <a href="tel:+34931717164" class="hover:text-primary-400 transition-colors duration-200">
                +34 931 717 164
              </a><br>
              <a href="https://wa.me/34640743214" class="hover:text-primary-400 transition-colors duration-200">
                +34 640 743 214 (WhatsApp)
              </a>
            </p>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-serif text-lg font-semibold mb-4">Enllaços ràpids</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-300 hover:text-primary-400 transition-colors duration-200">Hola</router-link></li>
            <li><router-link to="/tallers" class="text-gray-300 hover:text-primary-400 transition-colors duration-200">Tallers</router-link></li>
            <li><router-link to="/esdeveniments" class="text-gray-300 hover:text-primary-400 transition-colors duration-200">Esdeveniments</router-link></li>
            <li><router-link to="/agenda" class="text-gray-300 hover:text-primary-400 transition-colors duration-200">Agenda</router-link></li>
            <li><router-link to="/blog" class="text-gray-300 hover:text-primary-400 transition-colors duration-200">Blog</router-link></li>
            <li><router-link to="/contacte" class="text-gray-300 hover:text-primary-400 transition-colors duration-200">Contacte</router-link></li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h3 class="font-serif text-lg font-semibold mb-4">Segueix-nos</h3>
          <div class="flex space-x-4 mb-6">
            <a href="https://instagram.com/espailartesana" target="_blank" rel="noopener noreferrer" 
               class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875z"/>
              </svg>
            </a>
            <a href="https://facebook.com/espailartesana" target="_blank" rel="noopener noreferrer"
               class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://vimeo.com/espailartesana" target="_blank" rel="noopener noreferrer"
               class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197a315.065 315.065 0 003.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
              </svg>
            </a>
            <a href="https://youtube.com/espailartesana" target="_blank" rel="noopener noreferrer"
               class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          
          <!-- Newsletter -->
          <div>
            <h4 class="font-medium mb-2">Newsletter</h4>
            <p class="text-sm text-gray-400 mb-3">Subscriu-te per estar al dia</p>
            <div class="flex">
              <input 
                type="email" 
                placeholder="El teu email"
                class="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
              <button class="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-r-lg transition-colors duration-200">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">
          © {{ currentYear }} L'Artesana. Tots els drets reservats.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <router-link to="/avis-legal" class="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
            Avís Legal
          </router-link>
          <router-link to="/politica-privacitat" class="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
            Política de Privacitat
          </router-link>
          <router-link to="/cookies" class="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
            Cookies
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
