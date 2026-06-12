/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        apple: {
          blue: '#0071E3',
          gray: '#F5F5F7',
          darkGray: '#86868B',
          black: '#1D1D1F'
        }
      },
      boxShadow: {
        'bento': '0 4px 24px rgba(0,0,0,0.06)',
      }
    },
  },
  plugins: [],
}
