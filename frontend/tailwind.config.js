/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        major: ['Major Mono Display', 'monospace'],
        meera: ['Meera Inimai', 'sans-serif'],
        tilt: ["Tilt Neon", 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
};
