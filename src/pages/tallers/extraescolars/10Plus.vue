<template>
  <div class="min-h-screen">
    <section class="hero-bg section-padding">
      <div class="container-custom">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            {{ pageTitle }}
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 mb-8">
            {{ pageSubtitle }}
          </p>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ pageDescription }}
          </p>
        </div>
      </div>
    </section>

    <section class="section-padding bg-white">
      <div class="container-custom text-center">
        <div class="max-w-2xl mx-auto">
          <h2 class="text-3xl font-serif font-semibold text-gray-900 mb-6">
            Pròximament disponible
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Estem treballant per oferir-te la millor informació sobre aquesta secció.
          </p>
          <router-link to="/contacte" class="btn-primary">
            Contactar per més informació
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pageTitle = computed(() => {
  const titles: Record<string, string> = {
    '/extraescolars/10-plus': 'EXTRAESCOLARS +10 ANYS',
    '/casalets': 'CASALETS',
    '/aniversaris': 'ANIVERSARIS',
    '/tallers/adults': 'TALLERS PER A ADULTS',
    '/workshops': 'WORKSHOPS',
    '/social': 'TALLERS SOCIALS',
    '/tallers/familiars': 'TALLERS FAMILIARS',
    '/tallers/centres-i-escoles': 'CENTRES I ESCOLES',
    '/tallers/teambuildings': 'TEAMBUILDINGS'
  }
  return titles[route.path] || 'PÀGINA'
})

const pageSubtitle = computed(() => {
  const subtitles: Record<string, string> = {
    '/extraescolars/10-plus': 'Projectes complexos i tècniques avançades',
    '/casalets': 'Activitats de casal durant les vacances',
    '/aniversaris': 'Celebració d\'aniversaris amb activitats artesanals',
    '/tallers/adults': 'Tallers especialitzats per a adults',
    '/workshops': 'Workshops intensius i especialitzats',
    '/social': 'Tallers amb finalitat social i terapèutica',
    '/tallers/familiars': 'Activitats per fer en família',
    '/tallers/centres-i-escoles': 'Programes educatius per a centres',
    '/tallers/teambuildings': 'Activitats de cohesió d\'equip'
  }
  return subtitles[route.path] || 'Informació detallada'
})

const pageDescription = computed(() => {
  const descriptions: Record<string, string> = {
    '/extraescolars/10-plus': 'Els nostres tallers per a joves de més de 10 anys ofereixen projectes més complexos i tècniques avançades d\'artesania.',
    '/casalets': 'Durant les vacances escolars, oferim casalets amb activitats artesanals i de connexió amb la natura.',
    '/aniversaris': 'Celebra l\'aniversari del teu fill/a amb activitats artesanals úniques i memorables.',
    '/tallers/adults': 'Tallers especialitzats per a adults amb tècniques avançades i projectes complexos.',
    '/workshops': 'Workshops intensius i especialitzats per aprofundir en tècniques artesanals específiques.',
    '/social': 'Tallers amb finalitat social i terapèutica per a col·lectius específics.',
    '/tallers/familiars': 'Activitats dissenyades per fer en família, creant vincles intergeneracionals únics.',
    '/tallers/centres-i-escoles': 'Programes educatius adaptats per a centres escolars i educatius.',
    '/tallers/teambuildings': 'Activitats de cohesió d\'equip per a empreses i organitzacions.'
  }
  return descriptions[route.path] || 'Informació detallada sobre aquesta secció.'
})
</script>
