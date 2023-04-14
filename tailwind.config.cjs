/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        react: '#53C1DE',
        angular: '#DD0031'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
