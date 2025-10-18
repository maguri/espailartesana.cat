import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import pages
import Home from './pages/Home.vue'
import Tallers from './pages/Tallers.vue'
import TallersInfantsJoves from './pages/tallers/InfantsJoves.vue'
import Extraescolars35 from './pages/tallers/extraescolars/35.vue'
import Extraescolars59 from './pages/tallers/extraescolars/59.vue'
import Extraescolars10Plus from './pages/tallers/extraescolars/10Plus.vue'
import Casalets from './pages/tallers/Casalets.vue'
import Aniversaris from './pages/tallers/Aniversaris.vue'
import TallersAdults from './pages/tallers/Adults.vue'
import Workshops from './pages/tallers/Workshops.vue'
import Social from './pages/tallers/Social.vue'
import TallersFamiliars from './pages/tallers/Familiars.vue'
import CentresEscoles from './pages/tallers/CentresEscoles.vue'
import TeamBuildings from './pages/tallers/TeamBuildings.vue'
import Esdeveniments from './pages/Esdeveniments.vue'
import Agenda from './pages/Agenda.vue'
import Blog from './pages/Blog.vue'
import Contacte from './pages/Contacte.vue'
import AvisLegal from './pages/legal/AvisLegal.vue'
import PoliticaPrivacitat from './pages/legal/PoliticaPrivacitat.vue'
import Cookies from './pages/legal/Cookies.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/tallers', name: 'Tallers', component: Tallers },
  { path: '/tallers/infants-i-joves', name: 'TallersInfantsJoves', component: TallersInfantsJoves },
  { path: '/extraescolars/3-5', name: 'Extraescolars35', component: Extraescolars35 },
  { path: '/extraescolars/5-9', name: 'Extraescolars59', component: Extraescolars59 },
  { path: '/extraescolars/10-plus', name: 'Extraescolars10Plus', component: Extraescolars10Plus },
  { path: '/casalets', name: 'Casalets', component: Casalets },
  { path: '/aniversaris', name: 'Aniversaris', component: Aniversaris },
  { path: '/tallers/adults', name: 'TallersAdults', component: TallersAdults },
  { path: '/workshops', name: 'Workshops', component: Workshops },
  { path: '/social', name: 'Social', component: Social },
  { path: '/tallers/familiars', name: 'TallersFamiliars', component: TallersFamiliars },
  { path: '/tallers/centres-i-escoles', name: 'CentresEscoles', component: CentresEscoles },
  { path: '/tallers/teambuildings', name: 'TeamBuildings', component: TeamBuildings },
  { path: '/esdeveniments', name: 'Esdeveniments', component: Esdeveniments },
  { path: '/agenda', name: 'Agenda', component: Agenda },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/contacte', name: 'Contacte', component: Contacte },
  { path: '/avis-legal', name: 'AvisLegal', component: AvisLegal },
  { path: '/politica-privacitat', name: 'PoliticaPrivacitat', component: PoliticaPrivacitat },
  { path: '/cookies', name: 'Cookies', component: Cookies },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
