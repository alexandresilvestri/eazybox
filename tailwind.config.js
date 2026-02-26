/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#2D7E4A',
        primaryHover: '#23633a',
        secondary: '#7AC2A0',
        bgMain: '#F2F5F4',
        surface: '#FFFFFF',
        border: '#E3E7E5',
        textMain: '#333333',
        textSec: '#666666',
        surfaceHighlight: '#ECF7F1',
        statusApproved: '#3B82F6',
        statusPending: '#FFB347',
        statusPaid: '#2D7E4A',
        statusRejected: '#C44545',
      }
    },
  },
  plugins: [],
}