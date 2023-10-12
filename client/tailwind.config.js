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
        "gray": 'url("Images/Cursor/icons8-connection-status-on-24-gray.png"), pointer',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        }
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'spin-medium': 'spin 9s linear infinite',
        'spin-fast': 'spin 6s linear infinite',
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'fade-out': 'fadeOut 1s ease-in-out forwards'
      }
    },
  },
  plugins: [],
})

