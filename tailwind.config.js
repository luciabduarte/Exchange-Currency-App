/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/*.{html,ts}"],
  theme: {
    extend: {
      colors:  {
        primary: {
          DEFAULT: '#07B0FB',
          100: '#07affb3b',
          200: '#4AC7FC',
          300: '#36C1FC',
          400: '#22BAFC',
          500: '#04AAF1',
          600: '#039CDD',
          700: '#038EC9',
          800: '#037FB5',
          900: '#0271A1',
        },
      }
    },
  },
  plugins: [],
};
