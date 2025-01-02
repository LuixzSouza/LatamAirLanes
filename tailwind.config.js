/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        firasans: ["var(--font-firasans)", "sans-serif"],
        latamsans: ["var(--font-latamsans)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"], 
      },
      backgroundImage: {
        "AirPlane": 'url("/bg-airplane1.png")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        '@desktop': '1024px',
        '@tablet': '640px',
      }
    },
  },
  plugins: [],
};
