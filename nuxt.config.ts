export default {
  buildModules: ['nuxt-vite'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    build: {
      cssCodeSplit: false,
    },
    plugins: [require('tailwindcss')],
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
}
