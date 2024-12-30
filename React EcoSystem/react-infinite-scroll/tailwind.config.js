// import keepPreset from "keep-react/preset";
// /** @type {import('tailwindcss').Config} */

// export default {
//     content: [
//         "./index.html",
//         "./src/**/*.{js,ts,jsx,tsx}",
//         "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
//     ],
//     presets: [keepPreset],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// };

// import { keepTheme } from "keep-react/keepTheme";

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
