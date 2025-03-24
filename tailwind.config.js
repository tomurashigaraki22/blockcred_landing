/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': 'var(--primary-purple)',
        'secondary-purple': 'var(--secondary-purple)',
        'accent-gold': 'var(--accent-gold)',
        'dark-bg': 'var(--dark-bg)',
        'darker-bg': 'var(--darker-bg)'
      },
      fontFamily: {
        'livvic': ['Livvic', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

