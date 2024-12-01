/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A0CA3", // Mor renk
        secondary: "#4361EE4D", // Açık mor hover rengi
        textDark: "#2B2B2B", // Siyah yazı rengi
        textLight: "#FFFFFF", // Beyaz yazı rengi
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        smallParagraph: ["13.3px", "22px"],
        h5: ["16px", "24px"],
        logo: ["20px", "30px"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
