/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        primary: "#004c64",
        secondary: "#e8e8e8",
        success: "#047b9d",
      },
    },
  },
  plugins: [],
};
