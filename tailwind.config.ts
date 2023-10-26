import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'tiltNeon': ['Tilt Neon', 'sans-serif'],
        'libre': ['Libre Baskerville']
      }
    },
  },
  plugins: [],
} satisfies Config;
