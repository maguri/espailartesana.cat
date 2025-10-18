<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero-bg section-padding">
      <div class="container-custom">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            AGENDA
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 mb-8">
            Calendari d'activitats i esdeveniments
          </p>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Consulta el calendari complet d'activitats, tallers i esdeveniments programats. 
            Reserva la teva plaça per participar en les activitats que més t'interessin.
          </p>
        </div>
      </div>
    </section>

    <!-- Calendar Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-6xl mx-auto">
          <!-- Calendar Header -->
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-3xl font-serif font-semibold text-gray-900">
              {{ currentMonthName }} {{ currentYear }}
            </h2>
            <div class="flex space-x-2">
              <button 
                @click="previousMonth"
                class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button 
                @click="nextMonth"
                class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Calendar Grid -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <!-- Days of Week Header -->
            <div class="grid grid-cols-7 bg-gray-50">
              <div v-for="day in daysOfWeek" :key="day" 
                   class="p-4 text-center font-medium text-gray-700 border-r border-gray-200 last:border-r-0">
                {{ day }}
              </div>
            </div>

            <!-- Calendar Days -->
            <div class="grid grid-cols-7">
              <div 
                v-for="(day, index) in calendarDays" 
                :key="index"
                class="min-h-[120px] p-2 border-r border-b border-gray-200 last:border-r-0 hover:bg-gray-50 transition-colors duration-200"
                :class="{
                  'bg-gray-100': !day.isCurrentMonth,
                  'bg-primary-50': day.hasEvent,
                  'cursor-pointer': day.isCurrentMonth
                }"
                @click="day.isCurrentMonth && day.hasEvent ? selectDay(day) : null"
              >
                <div class="flex items-center justify-between mb-2">
                  <span 
                    class="text-sm font-medium"
                    :class="{
                      'text-gray-400': !day.isCurrentMonth,
                      'text-gray-900': day.isCurrentMonth && !day.hasEvent,
                      'text-primary-600': day.hasEvent
                    }"
                  >
                    {{ day.day }}
                  </span>
                  <div v-if="day.hasEvent" class="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                
                <!-- Event indicators -->
                <div v-if="day.hasEvent" class="space-y-1">
                  <div v-for="event in day.events.slice(0, 2)" :key="event.id" 
                       class="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded truncate">
                    {{ event.title }}
                  </div>
                  <div v-if="day.events.length > 2" class="text-xs text-gray-500">
                    +{{ day.events.length - 2 }} més
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Events List -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-serif font-semibold text-gray-900 mb-6">
              Pròxims esdeveniments
            </h2>
            <p class="text-lg text-gray-600">
              Descobreix les activitats programades per als pròxims dies.
            </p>
          </div>

          <div v-if="upcomingEvents.length > 0" class="space-y-6">
            <div v-for="event in upcomingEvents" :key="event.id" 
                 class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <div class="flex items-center space-x-4 mb-4">
                    <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="event.icon"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-xl font-semibold text-gray-900">{{ event.title }}</h3>
                      <p class="text-gray-600">{{ event.date }} - {{ event.time }}</p>
                    </div>
                  </div>
                  <p class="text-gray-700 mb-4">{{ event.description }}</p>
                  <div class="flex items-center space-x-4 text-sm text-gray-500">
                    <span class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      {{ event.location }}
                    </span>
                    <span class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {{ event.duration }}
                    </span>
                    <span class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                      {{ event.participants }}
                    </span>
                  </div>
                </div>
                <div class="ml-6">
                  <button class="btn-primary">
                    Inscriure's
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="text-center py-12">
            <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              No hi ha esdeveniments programats
            </h3>
            <p class="text-gray-600 mb-6">
              Actualment no tenim esdeveniments programats per aquest mes.
            </p>
            <router-link to="/contacte" class="btn-primary">
              Contactar per més informació
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Past Events -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-serif font-semibold text-gray-900 mb-6">
              Últims esdeveniments passats
            </h2>
            <p class="text-lg text-gray-600">
              Repassa els esdeveniments que hem organitzat recentment.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="event in pastEvents" :key="event.id" 
                 class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="event.icon"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ event.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ event.date }}</p>
              <p class="text-gray-700 text-sm">{{ event.description }}</p>
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
            Vols estar al dia de les nostres activitats?
          </h2>
          <p class="text-lg text-primary-100 mb-8">
            Subscriu-te al nostre butlletí per rebre les últimes novetats i ofertes.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contacte" class="btn-secondary">
              Contactar
            </router-link>
            <button class="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-primary-600">
              Subscriure's al butlletí
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const currentDate = ref(new Date())
const selectedDay = ref<number | null>(null)

const daysOfWeek = ['Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds', 'Dg']

const currentMonthName = computed(() => {
  return currentDate.value.toLocaleDateString('ca-ES', { month: 'long' })
})

const currentYear = computed(() => {
  return currentDate.value.getFullYear()
})

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())
  
  const days = []
  const today = new Date()
  
  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)
    
    const dayEvents = getEventsForDate(date)
    
    days.push({
      day: date.getDate(),
      date: date,
      isCurrentMonth: date.getMonth() === month,
      hasEvent: dayEvents.length > 0,
      events: dayEvents
    })
  }
  
  return days
})

const upcomingEvents = ref([
  {
    id: 1,
    title: 'Taller de Ceràmica per a Adults',
    date: '15 de març 2024',
    time: '10:00 - 12:00',
    description: 'Taller introductori de ceràmica on aprendràs les tècniques bàsiques de modelatge i decoració.',
    location: 'L\'Artesana',
    duration: '2 hores',
    participants: 'Màxim 8 persones',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  {
    id: 2,
    title: 'Extraescolar de Teixit (5-9 anys)',
    date: '18 de març 2024',
    time: '17:00 - 18:30',
    description: 'Sessió d\'extraescolar on els nens aprendran tècniques bàsiques de teixit i filatura.',
    location: 'L\'Artesana',
    duration: '1.5 hores',
    participants: 'Màxim 10 nens',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
  },
  {
    id: 3,
    title: 'Workshop de Jardineria Sostenible',
    date: '22 de març 2024',
    time: '16:00 - 18:00',
    description: 'Aprèn sobre jardineria sostenible i com crear el teu propi jardí urbà.',
    location: 'L\'Artesana',
    duration: '2 hores',
    participants: 'Màxim 12 persones',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
  }
])

const pastEvents = ref([
  {
    id: 1,
    title: 'Fira del Solstici d\'Estiu',
    date: '21 de juny 2023',
    description: 'Celebració del solstici d\'estiu amb activitats artesanals i rituals naturals.',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    id: 2,
    title: 'Mercat de Nadal Artesanal',
    date: '16 de desembre 2023',
    description: 'Mercat especial amb productes artesanals per a les festes de Nadal.',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    id: 3,
    title: 'Taller de Sant Jordi',
    date: '23 d\'abril 2023',
    description: 'Celebració de Sant Jordi amb tallers de roses i llibres artesanals.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  }
])

const getEventsForDate = (date: Date) => {
  // Simulate events for specific dates
  const events: any[] = []
  
  // Add some sample events
  if (date.getDate() === 15 && date.getMonth() === 2) { // March 15
    events.push({
      id: 1,
      title: 'Taller Ceràmica',
      time: '10:00'
    })
  }
  
  if (date.getDate() === 18 && date.getMonth() === 2) { // March 18
    events.push({
      id: 2,
      title: 'Extraescolar Teixit',
      time: '17:00'
    })
  }
  
  if (date.getDate() === 22 && date.getMonth() === 2) { // March 22
    events.push({
      id: 3,
      title: 'Workshop Jardineria',
      time: '16:00'
    })
  }
  
  return events
}

const previousMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1)
}

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1)
}

const selectDay = (day: any) => {
  selectedDay.value = day.day
  // Here you could show a modal with day details
}

onMounted(() => {
  // Initialize calendar
})
</script>
