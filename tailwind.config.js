module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue,html}",
    "node_modules/preline/dist/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "media",
  theme: {
    extend: {},
  },
  plugins: [
    "",

    require("@tailwindcss/forms"),
    require("preline/plugin"),
    require("flowbite/plugin"),
  ],
};
