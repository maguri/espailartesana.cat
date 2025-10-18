<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero-bg section-padding">
      <div class="container-custom">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            ESDEVENIMENTS
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 mb-8">
            Experiències úniques al llarg de l'any
          </p>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Organitzem esdeveniments especials que celebren les estacions, les tradicions 
            i la comunitat artesanal. Cada esdeveniment és una oportunitat única per 
            connectar amb la natura i l'artesania.
          </p>
        </div>
      </div>
    </section>

    <!-- Event Categories -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6">
            Categories d'esdeveniments
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Descobreix la varietat d'esdeveniments que organitzem al llarg de l'any.
          </p>
        </div>

        <!-- Event Tabs -->
        <div class="mb-8">
          <div class="flex flex-wrap justify-center gap-2 mb-8">
            <button 
              v-for="(category, index) in eventCategories" 
              :key="index"
              @click="activeCategory = index"
              class="px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              :class="activeCategory === index 
                ? 'bg-primary-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            >
              {{ category.name }}
            </button>
          </div>

          <!-- Event Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              v-for="(event, index) in filteredEvents" 
              :key="index"
              class="group"
            >
              <div class="card h-full hover:scale-105 transition-transform duration-300">
                <div class="aspect-w-16 aspect-h-12 bg-gradient-to-br from-primary-100 to-secondary-100 p-8">
                  <div class="text-center">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                      <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="event.icon"></path>
                      </svg>
                    </div>
                    <h3 class="text-xl font-serif font-semibold text-gray-900 mb-2">{{ event.title }}</h3>
                    <p class="text-gray-600 mb-4">{{ event.description }}</p>
                    <div class="text-sm text-gray-500 mb-4">
                      <span class="font-medium">{{ event.season }}</span>
                    </div>
                    <span class="text-primary-600 font-medium group-hover:text-primary-700">
                      Més informació →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Events -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6">
            Esdeveniments destacats
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Els nostres esdeveniments més populars i esperats de l'any.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div v-for="(event, index) in featuredEvents" :key="index" class="group">
            <div class="card h-full hover:scale-105 transition-transform duration-300">
              <div class="aspect-w-16 aspect-h-12 bg-gradient-to-br from-primary-200 to-secondary-200 p-8">
                <div class="text-center">
                  <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-gentle">
                    <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="event.icon"></path>
                    </svg>
                  </div>
                  <h3 class="text-2xl font-serif font-semibold text-gray-900 mb-4">{{ event.title }}</h3>
                  <p class="text-gray-600 mb-6">{{ event.description }}</p>
                  <div class="space-y-2 mb-6">
                    <div class="text-sm text-gray-500">
                      <span class="font-medium">Temporada:</span> {{ event.season }}
                    </div>
                    <div class="text-sm text-gray-500">
                      <span class="font-medium">Durada:</span> {{ event.duration }}
                    </div>
                    <div class="text-sm text-gray-500">
                      <span class="font-medium">Participants:</span> {{ event.participants }}
                    </div>
                  </div>
                  <button class="btn-primary">
                    Més informació
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Calendar Preview -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6">
            Calendari d'esdeveniments
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Consulta el calendari complet per veure tots els esdeveniments programats.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="bg-gray-50 rounded-2xl p-8">
            <div class="text-center">
              <h3 class="text-2xl font-serif font-semibold text-gray-900 mb-4">
                Pròxims esdeveniments
              </h3>
              <div class="space-y-4">
                <div v-for="(event, index) in upcomingEvents" :key="index" 
                     class="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900">{{ event.title }}</h4>
                      <p class="text-sm text-gray-600">{{ event.date }}</p>
                    </div>
                  </div>
                  <button class="btn-outline text-sm">
                    Inscriure's
                  </button>
                </div>
              </div>
              <div class="mt-8">
                <router-link to="/agenda" class="btn-primary">
                  Veure calendari complet
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-600">
      <div class="container-custom text-center">
        <div class="max-w-2xl mx-auto">
          <h2 class="text-3xl font-serif font-semibold text-white mb-4">
            Vols participar en els nostres esdeveniments?
          </h2>
          <p class="text-lg text-primary-100 mb-8">
            Contacta amb nosaltres per obtenir més informació sobre inscripcions i disponibilitat.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contacte" class="btn-secondary">
              Contactar
            </router-link>
            <router-link to="/agenda" class="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-primary-600">
              Veure Agenda
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeCategory = ref(0)

const eventCategories = [
  { name: 'Tots', id: 'all' },
  { name: 'Sala d\'Exposició', id: 'exposicio' },
  { name: 'Fires del Solstici', id: 'solstici' },
  { name: 'Fàbrica Embruixada', id: 'embruixada' },
  { name: 'Mercat de Nadal', id: 'nadal' },
  { name: 'Carnestoltes', id: 'carnestoltes' },
  { name: 'Sant Jordi', id: 'santjordi' }
]

const events = [
  {
    title: 'Exposició de Ceràmica Tradicional',
    description: 'Mostra de peces ceràmiques fetes amb tècniques tradicionals catalanes.',
    category: 'exposicio',
    season: 'Primavera',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  {
    title: 'Fira del Solstici d\'Estiu',
    description: 'Celebració del solstici d\'estiu amb activitats artesanals i rituals naturals.',
    category: 'solstici',
    season: 'Estiu',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Fàbrica Embruixada',
    description: 'Esdeveniment especial d\'Halloween amb tallers de màscares i decoracions.',
    category: 'embruixada',
    season: 'Tardor',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Mercat de Nadal Artesanal',
    description: 'Mercat especial amb productes artesanals per a les festes de Nadal.',
    category: 'nadal',
    season: 'Hivern',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Taller de Carnestoltes',
    description: 'Tallers de màscares i disfresses per a la festa de Carnestoltes.',
    category: 'carnestoltes',
    season: 'Hivern',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
  },
  {
    title: 'Sant Jordi Artesanal',
    description: 'Celebració de Sant Jordi amb tallers de roses i llibres artesanals.',
    category: 'santjordi',
    season: 'Primavera',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  }
]

const featuredEvents = [
  {
    title: 'Fira del Solstici d\'Estiu',
    description: 'El nostre esdeveniment més esperat de l\'any. Una celebració única que combina tradicions ancestrals amb activitats artesanals modernes.',
    season: 'Estiu',
    duration: '2 dies',
    participants: 'Famílies',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Mercat de Nadal Artesanal',
    description: 'Un mercat especial on podràs trobar productes artesanals únics per a les festes de Nadal, fets per artesans locals.',
    season: 'Hivern',
    duration: '1 dia',
    participants: 'Tots públics',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
  }
]

const upcomingEvents = [
  {
    title: 'Exposició de Ceràmica Tradicional',
    date: '15 de març 2024'
  },
  {
    title: 'Taller de Sant Jordi',
    date: '23 d\'abril 2024'
  },
  {
    title: 'Fira del Solstici d\'Estiu',
    date: '21 de juny 2024'
  }
]

const filteredEvents = computed(() => {
  if (activeCategory.value === 0) {
    return events
  }
  const categoryId = eventCategories[activeCategory.value].id
  return events.filter(event => event.category === categoryId)
})
</script>
