/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkmode: 'class',
  theme: {
    extend: {
      colors: {


        "primary": "#4f6d31",


        "primary-content": "#d9e1d4",


        "secondary": "#51469c",


        "secondary-content": "#d9d9ed",


        "accent": "#95b8d1",


        "accent-content": "#080c10",


        "neutral": "#edafb8",


        "neutral-content": "#140b0c",


        "base-100": "#e8ddb5",


        "base-200": "#cac09d",


        "base-300": "#aca486",


        "base-content": "#13110c",


        "info": "#e8fcc2",


        "info-content": "#13160e",


        "success": "#38e4ae",


        "success-content": "#01120b",


        "warning": "#e98a15",


        "warning-content": "#130700",


        "error": "#f56960",


        "error-content": "#150403",
      },

    },
  },
  plugins: [require('preline/plugin.js')],
}

