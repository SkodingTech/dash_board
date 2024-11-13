/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      screens: {
        // Custom iPad Pro breakpoints (Portrait and Landscape)
        'ipad': {'raw': '(min-width: 768px) and (max-width: 1024px)'},
        'ipad-landscape': {'raw': '(min-width: 1024px) and (max-width: 1366px)'},
      },
    },
  },
  plugins: [],
};
