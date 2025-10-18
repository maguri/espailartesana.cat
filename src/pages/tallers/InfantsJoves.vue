<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero-bg section-padding">
      <div class="container-custom">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            TALLERS PER A INFANTS I JOVES
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 mb-8">
            Desenvolupament creatiu i connexió amb la natura
          </p>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Els nostres tallers per a infants i joves estan dissenyats per fomentar la creativitat, 
            la curiositat i la connexió amb la natura a través d'activitats artesanals adaptades 
            a cada etapa del desenvolupament.
          </p>
        </div>
      </div>
    </section>

    <!-- Age Groups -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6">
            Grups d'edat
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Cada grup d'edat té les seves pròpies necessitats i característiques. 
            Adaptem les activitats per garantir el millor aprenentatge i experiència.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <router-link to="/extraescolars/3-5" class="group">
            <div class="card h-full hover:scale-105 transition-transform duration-300">
              <div class="aspect-w-16 aspect-h-12 bg-gradient-to-br from-primary-100 to-primary-200 p-8">
                <div class="text-center">
                  <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                    <span class="text-white font-bold text-xl">3-5</span>
                  </div>
                  <h3 class="text-xl font-serif font-semibold text-gray-900 mb-2">3 a 5 anys</h3>
                  <p class="text-gray-600 mb-4">Primers passos en l'artesania i la natura</p>
                  <span class="text-primary-600 font-medium group-hover:text-primary-700">
                    Més informació →
                  </span>
                </div>
              </div>
            </div>
          </router-link>

          <router-link to="/extraescolars/5-9" class="group">
            <div class="card h-full hover:scale-105 transition-transform duration-300">
              <div class="aspect-w-16 aspect-h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 p-8">
                <div class="text-center">
                  <div class="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                    <span class="text-white font-bold text-xl">5-9</span>
                  </div>
                  <h3 class="text-xl font-serif font-semibold text-gray-900 mb-2">5 a 9 anys</h3>
                  <p class="text-gray-600 mb-4">Exploració i desenvolupament de habilitats</p>
                  <span class="text-secondary-600 font-medium group-hover:text-secondary-700">
                    Més informació →
                  </span>
                </div>
              </div>
            </div>
          </router-link>

          <router-link to="/extraescolars/10-plus" class="group">
            <div class="card h-full hover:scale-105 transition-transform duration-300">
              <div class="aspect-w-16 aspect-h-12 bg-gradient-to-br from-earth-100 to-earth-200 p-8">
                <div class="text-center">
                  <div class="w-16 h-16 bg-earth-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                    <span class="text-white font-bold text-xl">10+</span>
                  </div>
                  <h3 class="text-xl font-serif font-semibold text-gray-900 mb-2">+10 anys</h3>
                  <p class="text-gray-600 mb-4">Projectes complexos i tècniques avançades</p>
                  <span class="text-earth-600 font-medium group-hover:text-earth-700">
                    Més informació →
                  </span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Other Activities -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6">
            Altres activitats
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            A més dels tallers extraescolars, oferim altres activitats especials per a infants i joves.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <router-link to="/casalets" class="group">
            <div class="card h-full hover:scale-105 transition-transform duration-300">
              <div class="aspect-w-16 aspect-h-12 bg-gradient-to-br from-primary-100 to-secondary-100 p-8">
                <div class="text-center">
                  <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                    <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-serif font-semibold text-gray-900 mb-2">Casalets</h3>
                  <p class="text-gray-600 mb-4">Activitats de casal durant les vacances escolars</p>
                  <span class="text-primary-600 font-medium group-hover:text-primary-700">
                    Més informació →
                  </span>
                </div>
              </div>
            </div>
          </router-link>

          <router-link to="/aniversaris" class="group">
            <div class="card h-full hover:scale-105 transition-transform duration-300">
              <div class="aspect-w-16 aspect-h-12 bg-gradient-to-br from-secondary-100 to-earth-100 p-8">
                <div class="text-center">
                  <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                    <svg class="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-serif font-semibold text-gray-900 mb-2">Aniversaris</h3>
                  <p class="text-gray-600 mb-4">Celebració d'aniversaris amb activitats artesanals</p>
                  <span class="text-secondary-600 font-medium group-hover:text-secondary-700">
                    Més informació →
                  </span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6">
            Beneficis per als infants i joves
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Els nostres tallers aporten múltiples beneficis al desenvolupament dels infants i joves.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(benefit, index) in benefits" :key="index" class="text-center">
            <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="benefit.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ benefit.title }}</h3>
            <p class="text-gray-600">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-600">
      <div class="container-custom text-center">
        <div class="max-w-2xl mx-auto">
          <h2 class="text-3xl font-serif font-semibold text-white mb-4">
            Vols inscriure el teu fill/a?
          </h2>
          <p class="text-lg text-primary-100 mb-8">
            Contacta amb nosaltres per obtenir més informació sobre horaris, preus i disponibilitat.
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
const benefits = [
  {
    title: 'Desenvolupament Motor',
    description: 'Millora de la coordinació, destresa manual i control corporal a través d\'activitats pràctiques.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Creativitat i Imaginació',
    description: 'Estimulació de la creativitat i la capacitat d\'expressió artística dels infants.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
  },
  {
    title: 'Connexió amb la Natura',
    description: 'Aprenentatge sobre el medi ambient i desenvolupament del respecte per la natura.',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Habilitats Socials',
    description: 'Desenvolupament de la comunicació, col·laboració i treball en equip.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'Autoestima i Confiança',
    description: 'Reforç de l\'autoestima i la confiança en les pròpies capacitats.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Aprenentatge Divertit',
    description: 'Aprenentatge a través del joc i l\'experimentació, fent l\'educació més atractiva.',
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5-8V6a2 2 0 112 2h-2z'
  }
]
</script>
