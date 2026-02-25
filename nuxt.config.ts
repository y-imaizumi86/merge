// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/google-fonts'],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  googleFonts: {
    families: {
      Outfit: [400, 500, 700],
    },
    display: 'swap',
    preload: true,
    download: true,
  },
})
