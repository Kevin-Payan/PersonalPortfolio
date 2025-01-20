/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Rubik", "serif"],
        title: ["Lora", "serif"],
      },
      colors: {
        primary: "#212529",
        secondary: "#5fa6ed",
        accentBlue: "#1872c7",
        accent: "#1e2125",
        card: "#373b3e",
      },
    },
  },
  plugins: [],
};
