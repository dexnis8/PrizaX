/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "rgb-1-3-20": "rgb(1,3,20)",
        "rgb-11-7-39": "rgb(11,7,39)",
        "rgb-24-14-67": "rgb(24,14,67)",
        "rgb-26-15-74": "rgb(26,15,74)",
        "rgb-80-40-191": "rgb(80,40,191)",
        "rgb-108-64-223": "rgb(108,64,223)",
      },
      backgroundImage: {
        "hero-image": "url('./assets/hero-image.jpg')",
      },
    },
  },
  plugins: [],
};
