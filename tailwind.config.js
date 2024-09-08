/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "20px",
        center: true,
        screens: {
          sm: "680px",
          md: "808px",
          lg: "1160px",
          xl: "1270px",
        },
      },
    },
  },
  plugins: [],
};
