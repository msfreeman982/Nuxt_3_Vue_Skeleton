export default {
  buildModules: ['nuxt-vite'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  image: {
    dir: 'assets/img',
  },

  // buildModules: ['@nuxtjs/tailwindcss'],
  // typescript: {
  //   typeCheck: true,
  // },
  // modules: ['@nuxtjs/eslint-module'],
  // tailwindcss: {
  //   cssPath: '~/assets/css/tailwind.css',
  //   configPath: 'tailwind.config.js',
  //   jit: true,
  // },
  vite: {
    build: {
      cssCodeSplit: false,
    },
    plugins: [require('tailwindcss')],
  },

  modules: ["@nuxt/image"]
};