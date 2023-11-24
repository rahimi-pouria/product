// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // import css 
  css: [
    '~/assets/css/main.css',
    '~/assets/scss/base.scss',
    '~/assets/scss/fonts.scss',
    '~/assets/scss/Global.scss',
    '~/assets/scss/size.scss'
  ],
  modules: [
    '@pinia/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
