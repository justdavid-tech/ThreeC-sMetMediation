/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B5D3B",   // deep green
          light: "#157A52",
          dark: "#063D28",
        },

        secondary: {
          DEFAULT: "#0A2A4A",   // deep blue
          light: "#123F6B",
          dark: "#061B30",
        },

        accent: {
          DEFAULT: "#D4AF37",   // gold
          light: "#E6C75A",
          dark: "#A68B2C",
        },

        neutral: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
    },
  },
  plugins: [],
}