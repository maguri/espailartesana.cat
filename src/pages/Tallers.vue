<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero-bg section-padding">
      <div class="container-custom">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            TALLERS
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 mb-8">
            Art, natura i consciència
          </p>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Els nostres tallers combinen tècniques artesanals tradicionals amb una perspectiva moderna i sostenible, 
            creant espais d'aprenentatge únics on la creativitat i la connexió amb la natura es converteixen en 
            eines de transformació personal i col·lectiva.
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div v-for="(image, index) in galleryImages" :key="index" class="group">
            <div class="aspect-w-16 aspect-h-12 bg-gray-200 rounded-xl overflow-hidden">
              <div class="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <div class="text-center p-8">
                  <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ image.title }}</h3>
                  <p class="text-gray-600 text-sm">{{ image.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Objectives Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6">
            Els nostres objectius
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Cada taller està dissenyat per aconseguir objectius específics que contribueixen al desenvolupament 
            personal i a la connexió amb el nostre entorn.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(objective, index) in objectives" :key="index" class="text-center">
            <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="objective.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ objective.title }}</h3>
            <p class="text-gray-600">{{ objective.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Workshop Categories -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6">
            Categories de tallers
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Descobreix la varietat de tallers que oferim, adaptats a diferents edats i interessos.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <router-link v-for="(category, index) in workshopCategories" :key="index" :to="category.link" class="group">
            <div class="card h-full hover:scale-105 transition-transform duration-300">
              <div class="aspect-w-16 aspect-h-12 bg-gradient-to-br from-primary-100 to-secondary-100 p-8">
                <div class="text-center">
                  <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                    <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.icon"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-serif font-semibold text-gray-900 mb-2">{{ category.title }}</h3>
                  <p class="text-gray-600 mb-4">{{ category.description }}</p>
                  <span class="text-primary-600 font-medium group-hover:text-primary-700">
                    Més informació →
                  </span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-600">
      <div class="container-custom text-center">
        <div class="max-w-2xl mx-auto">
          <h2 class="text-3xl font-serif font-semibold text-white mb-4">
            Vols saber més sobre els nostres tallers?
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
const galleryImages = [
  {
    title: 'Taller de Ceràmica',
    description: 'Aprenentatge de tècniques tradicionals de ceràmica'
  },
  {
    title: 'Taller de Teixit',
    description: 'Tècniques de teixit i filatura artesanal'
  },
  {
    title: 'Taller de Jardineria',
    description: 'Cultiu sostenible i connexió amb la natura'
  },
  {
    title: 'Taller de Pintura',
    description: 'Expressió artística amb pigments naturals'
  },
  {
    title: 'Taller de Fusta',
    description: 'Treballem la fusta amb eines tradicionals'
  },
  {
    title: 'Taller de Cuina',
    description: 'Cuina saludable amb ingredients locals'
  }
]

const objectives = [
  {
    title: 'Connexió amb la Natura',
    description: 'Reconnectar amb el nostre entorn natural mitjançant activitats que ens apropen a la terra i els seus recursos.',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Desenvolupament Creatiu',
    description: 'Potenciar la creativitat i l\'expressió artística a través de tècniques artesanals tradicionals i modernes.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
  },
  {
    title: 'Aprenentatge Col·laboratiu',
    description: 'Fomentar l\'aprenentatge en grup i la col·laboració, creant comunitat i vincles significatius.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  }
]

const workshopCategories = [
  {
    title: 'Infants i Joves',
    description: 'Tallers adaptats per a nens i adolescents, des de 3 anys fins a 18 anys.',
    link: '/tallers/infants-i-joves',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
  },
  {
    title: 'Adults',
    description: 'Tallers especialitzats per a adults, amb tècniques avançades i projectes complexos.',
    link: '/tallers/adults',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
  },
  {
    title: 'Familiars',
    description: 'Activitats per fer en família, creant vincles intergeneracionals únics.',
    link: '/tallers/familiars',
    icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z'
  },
  {
    title: 'Centres i Escoles',
    description: 'Programes educatius adaptats per a centres escolars i educatius.',
    link: '/tallers/centres-i-escoles',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    title: 'TeamBuildings',
    description: 'Activitats de cohesió d\'equip per a empreses i organitzacions.',
    link: '/tallers/teambuildings',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'Social',
    description: 'Tallers amb finalitat social i terapèutica per a col·lectius específics.',
    link: '/social',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  }
]
</script>
