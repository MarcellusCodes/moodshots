const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Monofett", ...defaultTheme.fontFamily.sans],
        secondary: ["Saira Stencil One", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
