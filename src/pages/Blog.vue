<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero-bg section-padding">
      <div class="container-custom">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            BLOG
          </h1>
          <p class="text-xl md:text-2xl text-gray-700 mb-8">
            Històries, tècniques i inspiració artesanal
          </p>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Descobreix articles sobre tècniques artesanals, històries de la nostra comunitat 
            i inspiració per al teu propi viatge creatiu.
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Categories -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-serif font-semibold text-gray-900 mb-6">
            Categories
          </h2>
          <div class="flex flex-wrap justify-center gap-4">
            <button 
              v-for="(category, index) in categories" 
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
        </div>
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article v-for="(post, index) in filteredPosts" :key="index" 
                     class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div class="aspect-w-16 aspect-h-12 bg-gradient-to-br from-primary-100 to-secondary-100 p-8">
                <div class="text-center">
                  <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-gentle">
                    <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="post.icon"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center space-x-2 mb-3">
                  <span class="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                    {{ post.category }}
                  </span>
                  <span class="text-gray-500 text-sm">{{ post.date }}</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {{ post.title }}
                </h3>
                <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">{{ post.readTime }} min de lectura</span>
                  <button class="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200">
                    Llegir més →
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="section-padding bg-primary-600">
      <div class="container-custom text-center">
        <div class="max-w-2xl mx-auto">
          <h2 class="text-3xl font-serif font-semibold text-white mb-4">
            Subscriu-te al nostre blog
          </h2>
          <p class="text-lg text-primary-100 mb-8">
            Rep les últimes entrades del blog directament al teu correu electrònic.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="El teu email"
              class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
            <button class="btn-secondary whitespace-nowrap">
              Subscriure's
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeCategory = ref(0)

const categories = [
  { name: 'Tots', id: 'all' },
  { name: 'Tècniques', id: 'tecnicas' },
  { name: 'Històries', id: 'histories' },
  { name: 'Inspiració', id: 'inspiracion' },
  { name: 'Comunitat', id: 'comunitat' }
]

const posts = [
  {
    title: 'Tècniques bàsiques de ceràmica per a principiants',
    excerpt: 'Aprèn les tècniques fonamentals per començar a treballar amb ceràmica i crear les teves primeres peces.',
    category: 'Tècniques',
    categoryId: 'tecnicas',
    date: '15 de març 2024',
    readTime: 5,
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  {
    title: 'La història de la Fàbrica Lehmann',
    excerpt: 'Descobreix la fascinant història d\'aquest espai industrial reconvertit en centre creatiu.',
    category: 'Històries',
    categoryId: 'histories',
    date: '10 de març 2024',
    readTime: 8,
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    title: 'Inspiració natural: colors de la tardor',
    excerpt: 'Com utilitzar els colors naturals de la tardor en els teus projectes artesanals.',
    category: 'Inspiració',
    categoryId: 'inspiracion',
    date: '5 de març 2024',
    readTime: 6,
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
  },
  {
    title: 'Comunitat artesanal: coneix els nostres artesans',
    excerpt: 'Entrevistes amb els artesans que formen part de la nostra comunitat creativa.',
    category: 'Comunitat',
    categoryId: 'comunitat',
    date: '1 de març 2024',
    readTime: 7,
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'Teixit tradicional: tècniques ancestrals',
    excerpt: 'Explora les tècniques de teixit que s\'han transmès de generació en generació.',
    category: 'Tècniques',
    categoryId: 'tecnicas',
    date: '25 de febrer 2024',
    readTime: 9,
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
  },
  {
    title: 'Sostenibilitat en l\'artesania moderna',
    excerpt: 'Com integrar principis de sostenibilitat en les pràctiques artesanals contemporànies.',
    category: 'Inspiració',
    categoryId: 'inspiracion',
    date: '20 de febrer 2024',
    readTime: 6,
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
  }
]

const filteredPosts = computed(() => {
  if (activeCategory.value === 0) {
    return posts
  }
  const categoryId = categories[activeCategory.value].id
  return posts.filter(post => post.categoryId === categoryId)
})
</script>
