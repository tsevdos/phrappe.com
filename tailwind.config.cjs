const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", ...defaultTheme.fontFamily.sans] },
      typography: {
        DEFAULT: {
          css: {
            a: { textDecoration: "none", "&:hover": { opacity: ".75" } },
            img: { borderRadius: defaultTheme.borderRadius.lg },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
