// Single source of truth for everything shown in the Work section.
// Descriptions live in the locale files under `projects-info.<slug>`.

// --- web ---
import elevateGuru from '@/assets/img/elevateGuru.webp'
import agriwise from '@/assets/img/agriwise.webp'
import maahid from '@/assets/img/maahid.webp'
import azorashop from '@/assets/img/azorashop.webp'
import eg1 from '@/assets/img/eg1.svg'
import eg2 from '@/assets/img/eg2.svg'
import eg3 from '@/assets/img/eg3.svg'
import az1 from '@/assets/img/az1.webp'
import az2 from '@/assets/img/az2.webp'
import az3 from '@/assets/img/az3.webp'
import az4 from '@/assets/img/az4.webp'
import m1 from '@/assets/img/m1.webp'
import m2 from '@/assets/img/m2.webp'
import m3 from '@/assets/img/m3.webp'
import m4 from '@/assets/img/m4.webp'
import m5 from '@/assets/img/m5.webp'

// --- mobile ---
import bimma from '@/assets/img/bimma.webp'
import bimma1 from '@/assets/img/bimma1.webp'
import bimma2 from '@/assets/img/bimma2.webp'
import bimma3 from '@/assets/img/bimma3.webp'
import bimma4 from '@/assets/img/bimma4.webp'
import bimma5 from '@/assets/img/bimma5.webp'
import bimma6 from '@/assets/img/bimma6.webp'
import scantel from '@/assets/img/scantel.webp'
import scantel2 from '@/assets/img/scantel2.webp'
import scantel3 from '@/assets/img/scantel3.webp'
import scantel4 from '@/assets/img/scantel4.webp'
import cod1 from '@/assets/img/cod1.webp'
import cod2 from '@/assets/img/cod2.webp'
import cod3 from '@/assets/img/cod3.webp'

// Play Store assets (icons + screenshots), see PLAYBOOK
const appShots = (slug, n) =>
  Array.from({ length: n }, (_, i) => new URL(`../assets/img/apps/${slug}-${i + 1}.webp`, import.meta.url).href)
const appIcon = (slug) => new URL(`../assets/img/apps/${slug}-icon.webp`, import.meta.url).href

export const projects = [
  // ---------- Mobile: published on Google Play ----------
  {
    id: 'rami-marocain',
    slug: 'rami-marocain',
    type: 'mobile',
    name: 'Rami Marocain',
    tagline: 'projects-info.rami-marocain.tagline',
    desc: 'projects-info.rami-marocain.desc',
    body: 'projects-info.rami-marocain.body',
    stack: ['React Native', 'Expo', 'TypeScript', 'Android'],
    url: 'https://play.google.com/store/apps/details?id=com.imadelcass.ramimarocain',
    store: 'play',
    logo: appIcon('rami'),
    imgs: appShots('rami', 8),
    shotOrientation: 'landscape',
    featured: true
  },
  {
    id: 'tidenow',
    slug: 'tidenow',
    type: 'mobile',
    name: 'TideNow',
    tagline: 'projects-info.tidenow.tagline',
    desc: 'projects-info.tidenow.desc',
    body: 'projects-info.tidenow.body',
    stack: ['React Native', 'Expo', 'REST API', 'Maps', 'Géolocalisation'],
    url: 'https://play.google.com/store/apps/details?id=com.imadelcass.TideNow',
    store: 'play',
    logo: appIcon('tidenow'),
    imgs: appShots('tidenow', 8),
    shotOrientation: 'portrait',
    featured: true
  },
  {
    id: 'parkpin',
    slug: 'parkpin',
    type: 'mobile',
    name: 'ParkPin',
    tagline: 'projects-info.parkpin.tagline',
    desc: 'projects-info.parkpin.desc',
    body: 'projects-info.parkpin.body',
    stack: ['React Native', 'Expo', 'GPS', 'Google Maps', 'Stockage local'],
    url: 'https://play.google.com/store/apps/details?id=com.imadelcass.ParkPin',
    store: 'play',
    logo: appIcon('parkpin'),
    imgs: appShots('parkpin', 8),
    shotOrientation: 'portrait',
    featured: true
  },
  {
    id: 'bimma-ewd',
    slug: 'bimma-ewd',
    type: 'mobile',
    name: 'Bimma EWD',
    tagline: 'projects-info.bimma-ewd.tagline',
    desc: 'projects-info.bimma-ewd.desc',
    body: 'projects-info.bimma-ewd.body',
    stack: ['React Native', 'Expo', 'Laravel', 'MySQL', 'REST API'],
    url: 'https://play.google.com/store/apps/details?id=com.bimma_ewd_v2',
    store: 'play',
    logo: bimma,
    imgs: [bimma1, bimma2, bimma3, bimma4, bimma5, bimma6],
    shotOrientation: 'portrait'
  },
  {
    id: 'scantel',
    slug: 'scantel',
    type: 'mobile',
    name: 'Recharge Scanner',
    tagline: 'projects-info.scantel.tagline',
    desc: 'projects-info.scantel.desc',
    body: 'projects-info.scantel.body',
    stack: ['React Native', 'Expo', 'TypeScript', 'OCR', 'Caméra'],
    url: 'https://play.google.com/store/apps/details?id=com.imadelcass.rechargescanner',
    store: 'play',
    logo: scantel,
    imgs: [scantel2, scantel3, scantel4],
    shotOrientation: 'portrait'
  },
  {
    id: 'cod-delivery-man',
    slug: 'cod-delivery-man',
    type: 'mobile',
    name: 'COD Delivery Man',
    tagline: 'projects-info.cod-delivery-man.tagline',
    desc: 'projects-info.cod-delivery-man.desc',
    body: 'projects-info.cod-delivery-man.body',
    stack: ['Ionic', 'Capacitor', 'Vue.js', 'Laravel', 'MySQL'],
    url: 'https://vermillion-sundae-963a42.netlify.app/',
    logo: 'https://vermillion-sundae-963a42.netlify.app/assets/cod-power-group-logo-CEykfBH7.svg',
    imgs: [cod1, cod2, cod3],
    shotOrientation: 'portrait'
  },

  // ---------- Web ----------
  {
    id: 'elevateguru',
    slug: 'elevateguru',
    type: 'web',
    name: 'ElevateGuru',
    tagline: 'projects-info.elevateguru.tagline',
    desc: 'projects-info.elevateguru.desc',
    body: 'projects-info.elevateguru.body',
    stack: ['Laravel', 'Vue.js', 'CakePHP', 'MySQL', 'Docker', 'WebSockets', 'Puppeteer'],
    url: 'https://www.elevateguru.com/en',
    logo: elevateGuru,
    imgs: [eg1, eg2, eg3],
    featured: true
  },
  {
    id: 'ma3ahid',
    slug: 'ma3ahid',
    type: 'web',
    name: 'Ma3ahid',
    tagline: 'projects-info.ma3ahid.tagline',
    desc: 'projects-info.ma3ahid.desc',
    body: 'projects-info.ma3ahid.body',
    stack: ['Laravel', 'Vue.js', 'MySQL', 'REST API'],
    url: 'https://ma3ahid.gismait.com/',
    logo: maahid,
    imgs: [m1, m2, m3, m4, m5],
    featured: true
  },
  {
    id: 'agriwise',
    slug: 'agriwise',
    type: 'web',
    name: 'Agriwise',
    tagline: 'projects-info.agriwise.tagline',
    desc: 'projects-info.agriwise.desc',
    body: 'projects-info.agriwise.body',
    stack: ['Laravel', 'Vue.js', 'MySQL', 'REST API'],
    url: 'https://agriwise.ma',
    logo: agriwise,
    imgs: []
  },
  {
    id: 'azora-shop',
    slug: 'azora-shop',
    type: 'web',
    name: 'Azora Shop',
    tagline: 'projects-info.azora-shop.tagline',
    desc: 'projects-info.azora-shop.desc',
    body: 'projects-info.azora-shop.body',
    stack: ['Vue.js', 'Nuxt.js', 'Pinia', 'PrimeVue', 'Tailwind CSS', 'i18n'],
    url: 'https://azorashop.netlify.app/',
    logo: azorashop,
    imgs: [az1, az2, az3, az4]
  }
]

export const findProject = (slug) => projects.find((p) => p.slug === slug)

export const publishedApps = projects.filter((p) => p.store === 'play')
