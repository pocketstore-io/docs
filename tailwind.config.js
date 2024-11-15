import daisyui from "daisyui"
import typography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/sverminal/**/*.{html,svelte,js,ts}'
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.white'),
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.800'),
              },
            },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            strong: { color: theme('colors.red.600') },
            ul: {
              listStyleType: 'square', // Change bullet style
            },
            ol: {
              listStyleType: 'upper-roman', // Change ordered list style
            },
            'ul > li::marker': {
              color: '#1f6fed', // Custom bullet color
            },
            'ol > li::marker': {
              color: '#FF6347', // Custom number color
            },
          },
        },
      }),
    },
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