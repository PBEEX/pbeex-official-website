import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkblue: "#102539",
        brandred: "#FF5A5A",
        darkgray: "#323232",
        lightgray: "#D4D3D3",
      },
      fontFamily: {
        rebas: ["Bebas Neue", "sans-serif"], 
        poppins: ["Poppins", "sans-serif"], 
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "fadeIn": "fadeIn 0.5s ease-out",
      },
      lineHeight: {
        'custom': '80px',
      },
    },
  },
  plugins: [],
} satisfies Config;
