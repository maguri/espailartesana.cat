<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero-bg section-padding">
      <div class="container-custom">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6 animate-fade-in">
            Benvinguts a 
            <span class="text-gradient">L'Artesana</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 mb-8 animate-slide-up">
            un espai on art i natura s'uneixen per crear experiències de connexió i transformació personal.
          </p>
          <p class="text-lg text-gray-600 mb-12 animate-slide-up">
            La nostra missió és oferir espais d'aprenentatge i experimentació que permetin reconnectar amb la natura mitjançant tècniques artesanals sostenibles.
          </p>
        </div>
      </div>
    </section>

    <!-- Main CTAs -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <router-link to="/tallers" class="group">
            <div class="card h-full hover:scale-105 transition-transform duration-300">
              <div class="aspect-w-16 aspect-h-12 bg-gradient-to-br from-primary-100 to-primary-200 p-8 flex items-center justify-center">
                <div class="text-center">
                  <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <h3 class="text-2xl font-serif font-semibold text-gray-900 mb-2">TALLERS</h3>
                  <p class="text-gray-600">Descobreix els nostres tallers per a totes les edats</p>
                </div>
              </div>
            </div>
          </router-link>

          <router-link to="/esdeveniments" class="group">
            <div class="card h-full hover:scale-105 transition-transform duration-300">
              <div class="aspect-w-16 aspect-h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 p-8 flex items-center justify-center">
                <div class="text-center">
                  <div class="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 class="text-2xl font-serif font-semibold text-gray-900 mb-2">ESDEVENIMENTS</h3>
                  <p class="text-gray-600">Participa en els nostres esdeveniments especials</p>
                </div>
              </div>
            </div>
          </router-link>

          <router-link to="/botiga" class="group">
            <div class="card h-full hover:scale-105 transition-transform duration-300">
              <div class="aspect-w-16 aspect-h-12 bg-gradient-to-br from-earth-100 to-earth-200 p-8 flex items-center justify-center">
                <div class="text-center">
                  <div class="w-16 h-16 bg-earth-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                  </div>
                  <h3 class="text-2xl font-serif font-semibold text-gray-900 mb-2">BOTIGA</h3>
                  <p class="text-gray-600">Descobreix els nostres productes artesanals</p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Carousel Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
            Extraescolar Juvenil
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Activitats extraescolars que combinen creativitat, natura i aprenentatge per als nostres joves.
          </p>
        </div>

        <div class="relative">
          <div class="overflow-hidden rounded-2xl">
            <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div v-for="(slide, index) in carouselSlides" :key="index" class="w-full flex-shrink-0">
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div class="aspect-w-16 aspect-h-9 bg-gradient-to-r from-primary-200 to-secondary-200 p-12">
                    <div class="text-center">
                      <h3 class="text-2xl font-serif font-semibold text-gray-900 mb-4">{{ slide.title }}</h3>
                      <p class="text-gray-600 mb-6">{{ slide.description }}</p>
                      <router-link :to="slide.link" class="btn-primary">
                        Més informació
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Arrows -->
          <button 
            @click="previousSlide"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            @click="nextSlide"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <!-- Dots Indicator -->
          <div class="flex justify-center mt-6 space-x-2">
            <button 
              v-for="(slide, index) in carouselSlides" 
              :key="index"
              @click="currentSlide = index"
              class="w-3 h-3 rounded-full transition-colors duration-200"
              :class="index === currentSlide ? 'bg-primary-600' : 'bg-gray-300'"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Calendar CTA -->
    <section class="section-padding bg-white">
      <div class="container-custom text-center">
        <div class="max-w-2xl mx-auto">
          <h2 class="text-3xl font-serif font-semibold text-gray-900 mb-4">
            Consultar Calendari d'Activitats
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Descobreix totes les activitats programades i reserva la teva plaça.
          </p>
          <router-link to="/agenda" class="btn-primary text-lg px-8 py-4">
            Veure Calendari
          </router-link>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="section-padding bg-primary-50">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-serif font-semibold text-gray-900 mb-4">
            Si vols estar a l'última
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Subscriu-te al nostre butlletí per rebre les últimes novetats i ofertes.
          </p>
          
          <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              v-model="email"
              type="email" 
              placeholder="El teu email"
              required
              class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
            <button 
              type="submit"
              :disabled="isSubscribing"
              class="btn-primary whitespace-nowrap"
            >
              <span v-if="!isSubscribing">Subscriure's</span>
              <span v-else>Subscribint...</span>
            </button>
          </form>
          
          <div class="mt-4">
            <label class="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <input 
                v-model="consent"
                type="checkbox" 
                required
                class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              >
              <span>Accepto rebre comunicacions de L'Artesana</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const email = ref('')
const consent = ref(false)
const isSubscribing = ref(false)

const carouselSlides = [
  {
    title: 'Tallers per a nens de 3 a 5 anys',
    description: 'Activitats adaptades per als més petits, on aprenen a través del joc i la creativitat.',
    link: '/extraescolars/3-5'
  },
  {
    title: 'Tallers per a nens de 5 a 9 anys',
    description: 'Exploració de tècniques artesanals i connexió amb la natura per a aquesta etapa.',
    link: '/extraescolars/5-9'
  },
  {
    title: 'Tallers per a joves de +10 anys',
    description: 'Projectes més complexos i desenvolupament de habilitats artesanals avançades.',
    link: '/extraescolars/10-plus'
  }
]

let autoSlideInterval: number | null = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselSlides.length
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? carouselSlides.length - 1 : currentSlide.value - 1
}

const startAutoSlide = () => {
  autoSlideInterval = setInterval(nextSlide, 5000)
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = null
  }
}

const subscribeNewsletter = async () => {
  if (!email.value || !consent.value) return
  
  isSubscribing.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  alert('Gràcies per subscriure\'t al nostre butlletí!')
  email.value = ''
  consent.value = false
  isSubscribing.value = false
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>
