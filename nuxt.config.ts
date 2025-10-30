// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    'usebootstrap'
  ],
  app: {
    head: {
      title: "Nuxt site",
      meta: [
        {name: 'charset', content: 'utf-8'}
      ]
    }
  }
})