export default {
  publicRuntimeConfig: {
    ctfSpaceId: process.env.CTF_SPACE_ID || 'vlkuc5e6h3ku',
    ctfCdaAccessToken:
      process.env.CTF_CDA_ACCESS_TOKEN ||
      '-Su1tjxF-qpNwC97V3moe00qishyE4Q0z6Wwmk0jYyM',
    ctfEnvironment: 'master',
  },
  privateRuntimeConfig: {
    inToken: process.env.IN_TOKEN,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-stu-climbing',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },

  css: ['@/assets/scss/main'],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  modules: ['@nuxtjs/axios'],

  // // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-graphql-request',
  ],

  graphql: {
    /**
     * An Object of your GraphQL clients
     */
    clients: {
      default: {
        /**
         * The client endpoint url
         */
        endpoint:
          'https://graphql.contentful.com/content/v1/spaces/vlkuc5e6h3ku',
        /**
         * Per-client options overrides
         * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
         */
        options: {
          headers: {
            authorization: 'Bearer -Su1tjxF-qpNwC97V3moe00qishyE4Q0z6Wwmk0jYyM',
            'Content-Type': 'application/json',
          },
        },
      },
      secondClient: {
        // ...client config
      },
      // ...your other clients
    },

    /**
     * Options
     * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
     */
    options: {},

    /**
     * Optional
     * default: true (this includes cross-fetch/polyfill before creating the graphql client)
     */
    useFetchPolyfill: true,

    /**
     * Optional
     * default: false (this includes graphql-tag for node_modules folder)
     */
    includeNodeModules: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
