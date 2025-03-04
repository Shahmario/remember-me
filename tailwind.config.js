module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  content: [
     './pages/**/*.{html,js,jsx,ts,tsx,mdx}',
     './component/**/*.{html,js,jsx,ts,tsx,mdx}',
     './app/**/*.{html,js,jsx,ts,tsx,mdx}',
  ],
  plugins: [
    require("daisyui")
  ],
}
