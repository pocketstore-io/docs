import daisyui from "daisyui"
import typography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/sverminal/**/*.{html,svelte,js,ts}'
  ],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#1f6fed",
          secondary: "teal",
          neutral: "#b8dbe4",
        },
      }
    ],
  },
  plugins: [daisyui, typography],
};