/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Set Lato as the default sans font
      },
      colors: {
        primary: "#34353A",
        secondary: "#FF4081 ",
        accent: "#FFA500",
      },
    },
  },
  plugins: [],
};
