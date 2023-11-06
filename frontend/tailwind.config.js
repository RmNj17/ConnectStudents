/** @type {import('tailwindcss').Config} */
const withMT = require( "@material-tailwind/react/utils/withMT" );

module.exports = withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: [ "Poppins", "sans-serif" ],
        'manrope': 'Manrope',
        outfit: [ "Outfit", "sans-serif" ],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: [ "active" ],
    },
  },
  plugins: [],
} );
