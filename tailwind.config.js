module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      desktop: '1440px',
    },
    fontSize: {
      '3xl': ['72px', { lineHeight: '70px'}],
      '2xl': ['48px', { lineHeight: '48px'}],
      xl: ['40px', { lineHeight: '30px'}],
      lg: ['32px', { lineHeight: '32px'}],
      md: ['24px', { lineHeight: '24px'}],
      sm: ['15px', { lineHeight: '25px'}],
    },
    fontFamily: {
      joesfin: 'Josefin Sans, sans-serif',
      alata: 'Alata, sans-serif',
    },
    extend: {},
  },
  plugins: [],
}

