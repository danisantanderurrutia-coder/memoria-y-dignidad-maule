/** @type {import('tailwindcss').Config} */
// Tema claro: la escala "zinc" está invertida a propósito (50 = tinta oscura, 950 = papel crema),
// de modo que todas las clases existentes pasan a un tema claro cálido tipo papel de archivo.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        zinc: {
          50: '#2a231c', 100: '#332b23', 200: '#40372e', 300: '#51473c', 400: '#6a5e51',
          500: '#76695b', 600: '#b8ac9b', 700: '#d6cbb9', 800: '#e7dece', 900: '#f3ecdf', 950: '#faf6ee',
        },
        terra: { 400: '#c2410c', 500: '#c2410c', 600: '#9a3412' },
        ocre: { 300: '#8a5a0a', 400: '#a06a0e', 500: '#c8922a' },
      },
    },
  },
  plugins: [],
};
