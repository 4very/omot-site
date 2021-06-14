module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#3D305A',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
