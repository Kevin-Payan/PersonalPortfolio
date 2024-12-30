/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Set Lato as the default sans font
      },
      colors: {
        primary: "#212529",
        secondary: "#ffd100 ",
        accent: "#1e2125",
        card: "#373b3e",
      },
    },
  },
  plugins: [],
};
