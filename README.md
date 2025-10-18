# L'Artesana - Vue.js Website

Un espai on art i natura s'uneixen per crear experiències de connexió i transformació personal.

## Tecnologies utilitzades

- **Vue.js 3** - Framework JavaScript reactiu
- **TypeScript** - Tipat estàtic per a JavaScript
- **Tailwind CSS** - Framework CSS utilitari
- **Vue Router** - Enrutament per a aplicacions Vue
- **Vite** - Eina de construcció ràpida

## Estructura del projecte

```
src/
├── components/
│   └── layout/
│       ├── AppHeader.vue
│       └── AppFooter.vue
├── pages/
│   ├── Home.vue
│   ├── Tallers.vue
│   ├── Esdeveniments.vue
│   ├── Agenda.vue
│   ├── Blog.vue
│   ├── Contacte.vue
│   ├── tallers/
│   │   ├── InfantsJoves.vue
│   │   ├── Adults.vue
│   │   ├── Workshops.vue
│   │   ├── Social.vue
│   │   ├── Familiars.vue
│   │   ├── CentresEscoles.vue
│   │   ├── TeamBuildings.vue
│   │   ├── Casalets.vue
│   │   ├── Aniversaris.vue
│   │   └── extraescolars/
│   │       ├── 35.vue
│   │       ├── 59.vue
│   │       └── 10Plus.vue
│   └── legal/
│       ├── AvisLegal.vue
│       ├── PoliticaPrivacitat.vue
│       └── Cookies.vue
├── App.vue
├── main.ts
└── style.css
```

## Instal·lació i desenvolupament

1. **Instal·lar dependències:**
   ```bash
   npm install
   ```

2. **Executar en mode desenvolupament:**
   ```bash
   npm run dev
   ```

3. **Construir per a producció:**
   ```bash
   npm run build
   ```

4. **Previsualitzar construcció:**
   ```bash
   npm run preview
   ```

## Característiques

### 🎨 Disseny modern i accessible
- Interfície responsive amb Tailwind CSS
- Animacions suaus i transicions
- Disseny accessible (WCAG)

### 📱 Responsive Design
- Optimitzat per a mòbils, tablets i desktop
- Navegació adaptativa
- Components flexibles

### 🎯 Funcionalitats clau
- **Calendari interactiu** - Visualització d'esdeveniments i activitats
- **Formulari de contacte** - Sistema de contacte complet
- **Carrusel d'activitats** - Presentació dinàmica de contingut
- **Navegació jeràrquica** - Estructura de menús complexa

### 🌐 Multilingüe
- Contingut principalment en català
- Estructura preparada per a internacionalització

## Desplegament

El projecte està configurat per desplegar-se automàticament a GitHub Pages:

1. **Push a la branca main** activa el desplegament automàtic
2. **GitHub Actions** construeix i desplega l'aplicació
3. **URL de producció:** `https://[username].github.io/espailartesana.cat/`

### Configuració manual

Si vols desplegar manualment:

```bash
# Construir el projecte
npm run build

# El contingut està a la carpeta dist/
# Puja el contingut de dist/ al teu servidor web
```

## Estructura de rutes

- `/` - Pàgina principal
- `/tallers` - Informació sobre tallers
- `/tallers/infants-i-joves` - Tallers per a infants i joves
- `/extraescolars/3-5` - Extraescolars per a nens de 3-5 anys
- `/extraescolars/5-9` - Extraescolars per a nens de 5-9 anys
- `/extraescolars/10-plus` - Extraescolars per a joves de +10 anys
- `/casalets` - Activitats de casal
- `/aniversaris` - Celebració d'aniversaris
- `/tallers/adults` - Tallers per a adults
- `/workshops` - Workshops especialitzats
- `/social` - Tallers socials
- `/tallers/familiars` - Tallers familiars
- `/tallers/centres-i-escoles` - Programes per a centres
- `/tallers/teambuildings` - Activitats d'equip
- `/esdeveniments` - Esdeveniments especials
- `/agenda` - Calendari d'activitats
- `/blog` - Blog i articles
- `/contacte` - Formulari de contacte
- `/avis-legal` - Avís legal
- `/politica-privacitat` - Política de privacitat
- `/cookies` - Política de cookies

## Contribució

1. Fork el projecte
2. Crea una branca per a la teva feature (`git checkout -b feature/AmazingFeature`)
3. Commit els canvis (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branca (`git push origin feature/AmazingFeature`)
5. Obre un Pull Request

## Llicència

Aquest projecte està sota la Llicència MIT. Vegeu el fitxer `LICENSE` per a més detalls.

## Contacte

- **Email:** info@espailartesana.cat
- **Telèfon:** +34 931 717 164
- **Adreça:** Consell de Cent 159, Local H – Fàbrica Lehmann, Barcelona
