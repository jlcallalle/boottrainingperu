// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/css/main.css'
  ],

  app: {
    head: {
      title: 'Boot Training Perú | Zapatillas para entrenar',
      meta: [
        {
          name: 'description',
          content: 'Zapatillas deportivas para gimnasio, entrenamiento funcional y rutinas diarias. Mejora tus entrenamientos con soporte, comodidad y performance.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Boot Training Perú' },
        { property: 'og:title', content: 'Boot Training Perú | Zapatillas para entrenar' },
        {
          property: 'og:description',
          content: 'Zapatillas deportivas para gimnasio, entrenamiento funcional y rutinas diarias. Mejora tus entrenamientos con soporte, comodidad y performance.'
        },
        { property: 'og:url', content: 'https://www.boottrainingperu.com/' },
        { property: 'og:image', content: 'https://www.boottrainingperu.com/og-logo.jpeg' },
        { property: 'og:image:secure_url', content: 'https://www.boottrainingperu.com/og-logo.jpeg' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:alt', content: 'Logo de Boot Training Perú' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Boot Training Perú | Zapatillas para entrenar' },
        {
          name: 'twitter:description',
          content: 'Zapatillas deportivas para gimnasio, entrenamiento funcional y rutinas diarias. Mejora tus entrenamientos con soporte, comodidad y performance.'
        },
        { name: 'twitter:image', content: 'https://www.boottrainingperu.com/og-logo.jpeg' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.boottrainingperu.com/' }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          defer: true
        }
      ]
    }
  }
})
