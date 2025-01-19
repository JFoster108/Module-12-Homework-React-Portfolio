/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelBlue: '#add8e6',
        pastelPurple: '#d8bfd8',
        pastelPink: '#ffb6c1',
        pastelTurquoise: '#b0e0e6',
      },
    },
  },
  plugins: [],
};
