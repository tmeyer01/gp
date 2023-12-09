/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroLanding: 'url(/assets/hero/hero-background.png)',
        heroAdventures: 'url(/assets/hero/hero-adventures.jpg)',
      },
      fontFamily: {
        alexBrush: [`var(--font-alexBrush)`, 'sans-serif'],
        montserrat: [`var(--font-montserrat)`, 'sans-serfif'],
        anton: [`var(--font-anton)`, 'sans-serfif'],
      },
    },
  },
  plugins: [],
}
