/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'jetMono': ['JetBrains Mono', 'Monospace']
      },
      cursor: {
        "gray": 'url("Images/icons8-connection-status-on-24-gray.png"), pointer',
      }
    },
  },
  plugins: [],
})

