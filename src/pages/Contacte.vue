<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero-bg section-padding">
      <div class="container-custom">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            CONTACTE
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 mb-8">
            Estem aquí per ajudar-te
          </p>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Tens alguna pregunta sobre els nostres tallers o esdeveniments? 
            Contacta amb nosaltres i et respondrem amb la major brevetat possible.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form and Info -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div>
              <h2 class="text-3xl font-serif font-semibold text-gray-900 mb-6">
                Envia'ns un missatge
              </h2>
              <form @submit.prevent="submitForm" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input 
                    v-model="form.name"
                    type="text" 
                    id="name"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="El teu nom"
                  >
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input 
                    v-model="form.email"
                    type="email" 
                    id="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="el.teu.email@exemple.cat"
                  >
                </div>

                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                    Telèfon
                  </label>
                  <input 
                    v-model="form.phone"
                    type="tel" 
                    id="phone"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+34 123 456 789"
                  >
                </div>

                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                    Assumpte *
                  </label>
                  <select 
                    v-model="form.subject"
                    id="subject"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un assumpte</option>
                    <option value="tallers">Informació sobre tallers</option>
                    <option value="esdeveniments">Informació sobre esdeveniments</option>
                    <option value="inscripcions">Inscripcions</option>
                    <option value="preus">Preus i tarifes</option>
                    <option value="altres">Altres consultes</option>
                  </select>
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                    Missatge *
                  </label>
                  <textarea 
                    v-model="form.message"
                    id="message"
                    rows="6"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Explica'ns com et podem ajudar..."
                  ></textarea>
                </div>

                <div>
                  <label class="flex items-start space-x-3">
                    <input 
                      v-model="form.consent"
                      type="checkbox" 
                      required
                      class="mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    >
                    <span class="text-sm text-gray-600">
                      Accepto que L'Artesana utilitzi les meves dades per respondre a la meva consulta. 
                      <router-link to="/politica-privacitat" class="text-primary-600 hover:text-primary-700">
                        Política de privacitat
                      </router-link>
                    </span>
                  </label>
                </div>

                <button 
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full btn-primary"
                >
                  <span v-if="!isSubmitting">Enviar missatge</span>
                  <span v-else>Enviant...</span>
                </button>
              </form>
            </div>

            <!-- Contact Information -->
            <div>
              <h2 class="text-3xl font-serif font-semibold text-gray-900 mb-6">
                Informació de contacte
              </h2>
              
              <div class="space-y-8">
                <!-- Address -->
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Adreça</h3>
                    <p class="text-gray-600">
                      Consell de Cent 159, Local H<br>
                      Fàbrica Lehmann<br>
                      Barcelona
                    </p>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Telèfon</h3>
                    <div class="space-y-1">
                      <p class="text-gray-600">
                        <a href="tel:+34931717164" class="hover:text-primary-600 transition-colors duration-200">
                          +34 931 717 164
                        </a>
                      </p>
                      <p class="text-gray-600">
                        <a href="https://wa.me/34640743214" class="hover:text-primary-600 transition-colors duration-200">
                          +34 640 743 214 (WhatsApp)
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p class="text-gray-600">
                      <a href="mailto:info@espailartesana.cat" class="hover:text-primary-600 transition-colors duration-200">
                        info@espailartesana.cat
                      </a>
                    </p>
                  </div>
                </div>

                <!-- Hours -->
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Horaris</h3>
                    <div class="text-gray-600 space-y-1">
                      <p>Dilluns a Divendres: 9:00 - 19:00</p>
                      <p>Dissabte: 10:00 - 14:00</p>
                      <p>Diumenge: Tancat</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Map -->
              <div class="mt-8">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Com arribar</h3>
                <div class="bg-gray-100 rounded-lg p-8 text-center">
                  <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                    </svg>
                  </div>
                  <p class="text-gray-600 mb-4">
                    Estem ubicats a la Fàbrica Lehmann, un espai creatiu al cor de Barcelona.
                  </p>
                  <p class="text-sm text-gray-500">
                    Metro: Línia 1 (Arc de Triomf) - 5 minuts a peu<br>
                    Bus: Línies 6, 19, 40, 45, 47, 120
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-serif font-semibold text-gray-900 mb-6">
              Preguntes freqüents
            </h2>
            <p class="text-lg text-gray-600">
              Respostes a les preguntes més habituals sobre els nostres tallers i esdeveniments.
            </p>
          </div>

          <div class="space-y-6">
            <div v-for="(faq, index) in faqs" :key="index" 
                 class="bg-white rounded-xl shadow-sm overflow-hidden">
              <button 
                @click="toggleFaq(index)"
                class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 class="text-lg font-semibold text-gray-900">{{ faq.question }}</h3>
                <svg 
                  class="w-5 h-5 text-gray-500 transition-transform duration-200"
                  :class="{ 'rotate-180': faq.isOpen }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div v-if="faq.isOpen" class="px-6 pb-4">
                <p class="text-gray-600">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isSubmitting = ref(false)

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  consent: false
})

const faqs = ref([
  {
    question: 'Com puc inscriure\'m en un taller?',
    answer: 'Pots inscriure\'t contactant amb nosaltres per telèfon, email o WhatsApp. També pots omplir el formulari de contacte i et respondrem amb la major brevetat possible.',
    isOpen: false
  },
  {
    question: 'Quins materials necessito per als tallers?',
    answer: 'Tots els materials necessaris estan inclosos en el preu del taller. Només has de portar-te ganes d\'aprendre i gaudir!',
    isOpen: false
  },
  {
    question: 'Hi ha descomptes per a famílies?',
    answer: 'Sí, oferim descomptes especials per a famílies amb múltiples membres inscrits. Contacta amb nosaltres per obtenir més informació.',
    isOpen: false
  },
  {
    question: 'Puc cancel·lar la meva inscripció?',
    answer: 'Sí, pots cancel·lar la teva inscripció fins a 48 hores abans del taller. En cas de cancel·lació tardana, es retornarà el 50% del preu.',
    isOpen: false
  },
  {
    question: 'Els tallers són adequats per a principiants?',
    answer: 'Absolutament! Tots els nostres tallers estan dissenyats per adaptar-se a diferents nivells d\'experiència, des de principiants fins a persones amb més experiència.',
    isOpen: false
  }
])

const submitForm = async () => {
  if (!form.value.name || !form.value.email || !form.value.subject || !form.value.message || !form.value.consent) {
    return
  }

  isSubmitting.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))

  alert('Gràcies pel teu missatge! Et respondrem aviat.')
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  }

  isSubmitting.value = false
}

const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>
