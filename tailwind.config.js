/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        primary: "#FF6B00", // Main accent color
        neon: "#00FF9F", // Neon for active states
        text: "#EAEAEA",
        muted: "#888888",
        card: "#1A1A1A",
        border: "#333333",

        // New Color Palette for Fitness Tracker:
        accent: "#FF5733", // A deeper, warmer orange for highlights or active buttons
        secondary: "#6A5ACD", // Medium purple for diversity and contrast in stats
        success: "#4CAF50", // Green for positive stats (e.g., goals achieved)
        danger: "#F44336", // Red for alerts or warnings
        info: "#2196F3", // Blue for informational stats or progress
        lightBlue: "#03A9F4", // Lighter blue for subtle backgrounds or hover effects
        yellow: "#FFEB3B", // Bright yellow for emphasis in statistics
        darkGray: "#212121", // A very dark gray for cards or background overlays
        lightGray: "#B0BEC5", // Lighter gray for muted content or borders
      },
      fontFamily: {
        "inter-400": ["Inter_400Regular", "sans-serif"],
        "montserrat-500": ["Montserrat_500Medium", "sans-serif"],
        "montserrat-600": ["Montserrat_600SemiBold", "sans-serif"],
        "montserrat-700": ["Montserrat_700Bold", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 10px #00FF9F", // Glowing effect for active elements
        orange: "0 0 10px #FF6B00",
      },
    },
  },
  plugins: [],
};
