/** @type {import('tailwindcss').Config} */


const { fontFamily } = require(`tailwindcss/defaultTheme`)

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '/public/images/**/*.{jpg}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [`var(--font-jost)`, ...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
