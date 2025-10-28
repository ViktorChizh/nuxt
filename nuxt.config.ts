// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-10-28',
  devtools: { enabled: false }, // отключаем devtools, чтобы они не тянули sqlite
  nitro: {
    storage: {
      db: {
        driver: 'fs', // используем файловое хранилище
        base: './data'
      }
    }
  }
})

