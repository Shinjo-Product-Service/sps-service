import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        md: { max: "768px" },
        // md: "768px",
      },
      width: {
        defaultLayout: "80rem",
        mdLayout: "61rem",
        smLayout: "53rem",
      },
      colors: {
        default: "#242424",
        key: "#5A93A4",
        keyWeak: "#57768c",
        gray: "#AEAEAE",
        white: "#FCFCFC",
        lineGray: "#D3D3D3",
        textGray: "#565656",
      },
      fontSize: {
        defaultText: [
          "1rem",
          {
            fontWeight: "DemiLight",
            lineHeight: "2",
          },
        ],
        sectionTitle: [
          "2rem",
          {
            fontWeight: "normal",
            lineHeight: "1.8",
          },
        ],
        sectionEnTitle: [
          "1.15rem",
          {
            fontWeight: "Regular",
            lineHeight: "1.4",
          },
        ],
        spDefaultText: [
          "1.4rem",
          {
            fontWeight: "DemiLight",
            lineHeight: "2",
          },
        ],
        spSectionTitle: [
          "2.8rem",
          {
            fontWeight: "normal",
            lineHeight: "1.6",
          },
        ],
        spSectionEnTitle: [
          "1.4rem",
          {
            fontWeight: "Regular",
            lineHeight: "1.4",
          },
        ],
      },
      fontFamily: {
        sans: ["Noto Sans JP", ...defaultTheme.fontFamily.sans],
        mincho: '"BIZ UDPMincho"',
        urbanist: '"Urbanist"',
      },
    },
  },
  plugins: [],
};
