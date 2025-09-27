import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import daisyui from 'daisyui'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  daisyui: {
    themes: [
      {
        mylight: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "base-100": "#ffffff",         // 👈 Main background
          "base-content": "#000000",     // 👈 Text color
        },
      },
    ],
  },
})
