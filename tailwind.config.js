module.exports = {
  darkMode: false,
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        snowflake: "url('/snowflake-bg.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
