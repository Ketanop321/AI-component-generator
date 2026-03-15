/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#09090B',
        'secondary': '#141319',
        'tertiary': '#17171C',
      },
      textColor: {
        'primary': '#09090B',
        'secondary': '#141319',
        'tertiary': '#17171C',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-\[.*\]/,
      variants: ['hover', 'focus', 'active'],
    },
    {
      pattern: /text-\[.*\]/,
      variants: ['hover', 'focus', 'active'],
    },
    {
      pattern: /w-\[.*\]/,
    },
    {
      pattern: /h-\[.*\]/,
    },
    {
      pattern: /p-\[.*\]/,
    },
    {
      pattern: /m-\[.*\]/,
    },
    {
      pattern: /gap-\[.*\]/,
    },
  ],
}