<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero-bg section-padding">
      <div class="container-custom">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            EXTRAESCOLARS 3-5 ANYS
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 mb-8">
            Primers passos en l'artesania i la natura
          </p>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Els nostres tallers per a nens de 3 a 5 anys estan dissenyats per fomentar 
            la creativitat i la curiositat a través d'activitats adaptades a la seva 
            etapa de desenvolupament.
          </p>
        </div>
      </div>
    </section>

    <!-- Activities Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-serif font-semibold text-gray-900 mb-6">
            Activitats per a nens de 3 a 5 anys
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Cada activitat està pensada per desenvolupar les habilitats motrius, 
            la creativitat i la connexió amb la natura dels més petits.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(activity, index) in activities" :key="index" class="text-center">
            <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="activity.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ activity.title }}</h3>
            <p class="text-gray-600">{{ activity.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Schedule Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-serif font-semibold text-gray-900 mb-6">
              Horaris i informació
            </h2>
            <p class="text-lg text-gray-600">
              Informació sobre horaris, preus i com inscriure el teu fill/a.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h3 class="text-2xl font-serif font-semibold text-gray-900 mb-6">Horaris</h3>
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Dilluns i Dimecres</h4>
                    <p class="text-gray-600">16:30 - 17:30</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900">Dissabte</h4>
                    <p class="text-gray-600">10:00 - 11:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-8">
              <h3 class="text-2xl font-serif font-semibold text-gray-900 mb-6">Preus</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-gray-700">Sessió individual</span>
                  <span class="font-semibold text-gray-900">15€</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-700">Bústia mensual (8 sessions)</span>
                  <span class="font-semibold text-gray-900">100€</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-700">Trimestre (24 sessions)</span>
                  <span class="font-semibold text-gray-900">270€</span>
                </div>
                <div class="border-t border-gray-200 pt-4">
                  <div class="flex justify-between items-center">
                    <span class="text-gray-700 font-medium">Descompte família</span>
                    <span class="font-semibold text-primary-600">-10%</span>
                  </div>
                </div>
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
            Vols inscriure el teu fill/a?
          </h2>
          <p class="text-lg text-primary-100 mb-8">
            Contacta amb nosaltres per obtenir més informació o per inscriure el teu fill/a.
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
const activities = [
  {
    title: 'Modelatge amb Argila',
    description: 'Els nens aprenen a treballar amb argila de forma segura, creant formes bàsiques i desenvolupant la motricitat fina.',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  {
    title: 'Pintura Natural',
    description: 'Utilització de pigments naturals i materials segurs per als nens, explorant colors i textures.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
  },
  {
    title: 'Jardineria Infantil',
    description: 'Primers contactes amb les plantes i la terra, aprenent sobre el creixement i els cicles naturals.',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Teixit Bàsic',
    description: 'Tècniques simples de teixit amb materials adequats per a la seva edat, desenvolupant la coordinació.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
  },
  {
    title: 'Cuina Sana',
    description: 'Preparació de receptes simples i saludables, aprenent sobre ingredients naturals i nutritius.',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Jocs Creatius',
    description: 'Activitats lúdiques que combinen joc i aprenentatge, fomentant la creativitat i la imaginació.',
    icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5-8V6a2 2 0 112 2h-2z'
  }
]
</script>
