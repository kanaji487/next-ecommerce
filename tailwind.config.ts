import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#cc00ff",
          secondary: "#00a9ff",
          accent: "#e03d00",
          neutral: "#0b0b0b",
          "base-100": "#262626",
          info: "#00b6ff",
          success: "#00aa5e",
          warning: "#be8a00",
          error: "#ff5968",
          body: {
            "background-color": "#e3e6e6",
          }
        },
      },
    ],
  },
};
export default config;
