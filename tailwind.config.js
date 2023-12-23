/** @type {import('tailwindcss').Config} */

// const { fontFamily } = require(`tailwindcss/defaultTheme`)

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // '/public/images/**/*.{jpg}',
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundColor: {
        page: "#e2e8f0",
        void: "#092C48",
        plat: "#E0E0E0",
        night: "#141414",
        "raisin-black": "#32292F",
        "french-gray": "#ACADBC",
        "cool-gray": "#9B9ECE",
        "tropical-indigo": "#8B85C1",
        "pomp-power": "#7A6F9B",
        eggplant: "#493843",
        "prussian-blue": "#003559",
        "russian-violet": "#3A003D",
        "dark-purple": "#270029",
        licorice: "#130014",
        "licorice-2": "#1D0C18",
        "dark-purple-2": "#38182F",
        "licorice-3": "#0E060C",
      },
      fontFamily: {
        // sans: [`var(--font-jost)`, ...fontFamily.sans],
        sans: ["var(--font-jost)"],
        jost: ["Jost"],
      },
      // backgroundImage: {
      // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      // 'gradient-conic':
      // 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: false, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "daisy-", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
