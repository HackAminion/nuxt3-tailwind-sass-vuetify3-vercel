import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css',
        '~/assets/scss/style.scss',
       ],
  build: {
    transpile: ['vuetify'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        bodyAttrs: {
            class: 'demo'
        },
        charset: 'utf-8',
        titleTemplate: 'My Portfolio by Jakkrit',
        meta: [
            {
                name: 'author',
                content: 'My Portfolio by Jakkrit Wongjinda'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, maximum-scale=5'
            }
        ]
    }
  },
  modules: [
    'nuxt-icon',
    '@vueuse/nuxt',
    (_options,nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({autoInport: true}))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      }
    }
  },
})
