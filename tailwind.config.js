module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      primary: "#5EA9C0",
      secondary: "#A4A5AF",
      success: "€57763E",
      danger: "#D73D47",
      light: "#B1EDEE",
      clear: "#EEBFD6",
      earth: "#D4A357",
      citron: "#B3AF21",
      pink: "#E25680",
    },
    fontFamily: {
      display: ["Poppins", "system-ui", "sans-serif"],
      body: ["Poppins", "system-ui", "sans-serif"],
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  backgroundColor: (theme) => ({
    ...theme("colors"),
    primary: "#9CBAC4",
    secondary: "#B598AA",
    danger: "#C18B78",
  }),
};
