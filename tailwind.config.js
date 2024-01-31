module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        nunitoSans: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        charcoal: '#353844',
        steelBlue: '#2ecc71',
        royalBlue: '#506BCA',
        midnightBlue: '#1B264F',
        white: '#FFF',
        lavenderGray: '#F5F5F8',
        cafe: '#D2AD81',
      },
    },
  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/typography',
    '@tailwindcss/aspect-ratio',
  ],
}
