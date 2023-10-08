/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'foss': 'rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px',
        'mac': 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;'
      },
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

