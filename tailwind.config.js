/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const spacing = require("./src/tailwind/themes/spacing");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: require("./src/tailwind/themes/screens"),
    fontFamily: require("./src/tailwind/themes/fontFamily"),
    colors: require("./src/tailwind/themes/colors"),
    fontSize: require("./src/tailwind/themes/fontSize"),
    opacity: require("./src/tailwind/themes/opacity"),
    zIndex: require("./src/tailwind/themes/zIndex"),
    backgroundImage: require("./src/tailwind/themes/gradient"),
    spacing: spacing,
    maxWidth: spacing,
    minWidth: spacing,
    minHeight: spacing,
    borderRadius: spacing,
    lineHeight: spacing,
    borderWidth: spacing,
  },
  corePlugins: require("./src/tailwind/plugins/corePlugins"),
  plugins: [...require("./src/tailwind/plugins")],
};
