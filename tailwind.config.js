module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'lg': { 'max': '992px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '480px' }
    },
    container: {
      padding: '20px',
      center: true,
    },
    extend: {
      colors: {
        lightblack: '#4D4244',
        lightred: '#FF0D38',
        darkred: '#D70026',
        lightgray: '#747474',
        darkgray: '#272727',
      }
    },
  },
  plugins: [],
}
