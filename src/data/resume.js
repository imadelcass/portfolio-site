// Mirrors ../../../resume-data.json — the CV's source of truth.
// Labels that need translating are i18n keys; proper nouns are literals.

export const skillGroups = [
  {
    key: 'backend',
    items: ['Laravel', 'PHP', 'APIs REST', 'Architecture MVC', 'Eloquent ORM', 'JWT / Sanctum', 'CakePHP']
  },
  {
    key: 'frontend',
    items: ['Vue.js', 'Nuxt.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    key: 'mobile',
    items: ['React Native', 'Expo', 'Ionic', 'Capacitor', 'Android', 'iOS']
  },
  {
    key: 'data',
    items: ['MySQL', 'PostgreSQL', 'MCD / MLD', 'Migrations', 'Optimisation SQL']
  },
  {
    key: 'tools',
    items: ['Git / GitHub', 'Docker', 'Postman', 'Agile / Scrum', 'Tests', 'IA / Assistants de code']
  }
]

export const experience = [
  {
    id: 'yadag',
    company: 'Yadag',
    location: 'Grand Toronto, Canada · Remote',
    period: 'Fév. 2026 – Avr. 2026',
    length: '3 mois',
    stack: ['Laravel', 'Vue.js', 'MySQL']
  },
  {
    id: 'city',
    company: 'CITY Électronique',
    location: 'Remote',
    period: 'Fév. 2025 – Juil. 2025',
    length: '6 mois',
    stack: ['Laravel', 'Vue.js', 'MySQL']
  },
  {
    id: 'brainbytes',
    company: 'BRAINBYTES',
    location: 'Rabat, Maroc',
    period: 'Fév. 2024 – Oct. 2024',
    length: '9 mois',
    stack: ['CakePHP', 'MySQL', 'Docker', 'WebSockets']
  },
  {
    id: 'wise',
    company: 'WISE SYSTEMS',
    location: 'Agadir, Maroc',
    period: 'Août 2022 – Jan. 2024',
    length: '1 an 6 mois',
    stack: ['Laravel', 'Vue.js', 'MySQL']
  }
]

export const education = [
  { id: 'ista-dev', org: 'ISTA OFPPT · Agadir', period: '2020 – 2022' },
  { id: 'ista-log', org: 'ISTA OFPPT · Agadir', period: 'Bac +2' },
  { id: 'bac', org: 'Agadir', period: '2016 – 2017' }
]

export const languages = [
  { id: 'ar', level: 'native', pct: 100 },
  { id: 'fr', level: 'fluent', pct: 90 },
  { id: 'en', level: 'fluent', pct: 85 }
]

export const contact = {
  email: 'imadelcass@gmail.com',
  phone: '+212 767 082 605',
  location: 'Agadir, Maroc',
  linkedin: 'https://linkedin.com/in/imad-elcass',
  github: 'https://github.com/imadelcass',
  playStore: 'https://play.google.com/store/apps/developer?id=Imad+El+Cass'
}

export const stats = [
  { id: 'years', value: '3+' },
  { id: 'apps', value: '5' },
  { id: 'projects', value: '10' }
]
