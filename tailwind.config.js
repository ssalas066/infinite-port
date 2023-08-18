/** @type {import('tailwindcss').Config} */


// const { fontFamily } = require(`tailwindcss/defaultTheme`)

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // '/public/images/**/*.{jpg}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      backgroundColor: {
        'page': "#e2e8f0",
        'void': "#092C48",
        'plat': "#E0E0E0",
        'night': "#141414",
      },
      fontFamily: {
        // sans: [`var(--font-jost)`, ...fontFamily.sans],
        sans: ['var(--font-jost)'],
        jost: ['Jost']
      },
      // backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
          // 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
