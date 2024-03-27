// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      baseURL: process.env.DB_URL || 'http://localhost:4000/',
    },
  },
  alias: {
    "~": "./",
  },
  css: ['~/assets/main.css'],
  postcss: {
    // Add plugin names as key and arguments as value
    // Install them before as dependencies with npm or yarn
    plugins: {
      'postcss-nested-ancestors': {},
      'postcss-nested': {},
    },
  },
  modules: ['nuxt-simple-sitemap'],
  sitemap: {
    siteUrl: 'http://localhost:3000/',
    trailingSlash: true,
    xsl: false,
    defaults: {
      priority: 0.1,
      changefreq: 'monthly',
    },
  },
})
