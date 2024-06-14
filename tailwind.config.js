const withMT = require('@material-tailwind/html/utils/withMT');
const tailwindcss = require('tailwindcss');

const config = withMT({
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});

module.exports = config;