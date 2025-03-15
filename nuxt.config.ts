import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/icon',
    '@nuxt/fonts',
    'nuxt-particles',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-i18n-micro',
    'nuxt-aos',
    '@nuxt/ui',
  ],
  colorMode: {
    classSuffix: '',
  },
  fonts: {
    experimental: {
      processCSSVariables: true,
    },
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800],
      styles: ['normal', 'italic'],
      subsets: ['cyrillic-ext', 'cyrillic', 'latin-ext', 'latin'],
    },
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', dir: 'ltr' },
      { code: 'ru', iso: 'ru-RU', dir: 'ltr' },
    ],
    defaultLocale: 'ru',
    translationDir: 'locales',
    meta: true,
  },
  app: {
    head: {
      title: 'Code Editor',
    },
  },
  icon: {
    mode: 'svg',
    aliases: {
      code: 'heroicons:code-bracket-square-solid',
    },
  },
})
