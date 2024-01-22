/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        //left a wide range of the existing colors for possible tweaks/change in future
        'chateau-green': {
            '50': '#f0fdf5',
            '100': '#dcfcea',
            '200': '#bbf7d6',
            '300': '#86efb7',
            '400': '#4ade8f',
            '500': '#22c56f',
            '600': '#17a75b',
            '700': '#158048',
            '800': '#16653c',
            '900': '#145334',
            '950': '#052e1a',
        },
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};