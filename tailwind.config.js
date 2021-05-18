module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'mono': ['Source Code Pro', 'mono']
      },
      colors:{
        background: '#161212',
        accent1: '#9074BE',
        accent2: '#7EC8AC',
        accent3: '#FC9F5B',
        white: '#F7F2F7'
      },
      zIndex: {
        '-1':'-1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
