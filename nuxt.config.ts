// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/google-fonts', '@vite-pwa/nuxt'],
  ssr: false,
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
  pwa: {
    manifest: {
      name: 'MERGE - 2048 Puzzle Game',
      short_name: 'MERGE',
      description: 'A 2048 puzzle game built with Vue 3 + Nuxt.',
      theme_color: '#bbada0',
      background_color: '#f5f5f4',
      display: 'standalone',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
    },
  },
})
