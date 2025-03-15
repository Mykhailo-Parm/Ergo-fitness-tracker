/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0F0F0F", // Main Dark Background
          secondary: "#1A1A1A", // Secondary Dark Background
          card: "#222222", // Containers
        },
        border: {
          muted: "#3A3A3A", // Borders / Dividers
        },
        icon: {
          muted: "#606060", // Muted Icons
        },
        primary: {
          DEFAULT: "#D4FF00", // Neon Yellow-Green (Main)
          hover: "#BCEA00", // Slightly darker for hover
        },
        secondary: {
          DEFAULT: "#FF8800", // Bright Orange (CTA)
          hover: "#E67600", // Hover State
        },
        text: {
          primary: "#FFFFFF", // Main White Text
          secondary: "#B3B3B3", // Light Gray Text
          muted: "#888888", // Muted Text
          placeholder: "#666666", // Input Placeholder Text
        },
        success: "#4CAF50", // Green
        warning: "#FFA726", // Orange
        error: "#FF5252", // Red
      },
      fontFamily: {
        "montserrat-500": ["Montserrat_500Medium", "sans-serif"],
        "montserrat-600": ["Montserrat_600SemiBold", "sans-serif"],
        "montserrat-700": ["Montserrat_700Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
