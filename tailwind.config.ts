import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    fontFamily: {
      oswald: "var(--font-oswald)",
      roboto: "var(--font-roboto)",
    },
    backgroundImage: {
      hero: "url(/assets/img/hero/hero.png)",
      banner6: "url(/assets/img/hero/banner6.png)",
      banner2: "url(/assets/img/hero/banner2.png)",
      banner3: "url(/assets/img/hero/banner3.png)",
      banner4: "url(/assets/img/hero/banner4.png)",
      banner5: "url(/assets/img/hero/banner5.png)",
      banner7: "url(/assets/img/hero/banner7.png)",
      goku: "url(/assets/img/hero/goku.svg)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#333",
          100: "#484848",
          200: "#070738",
          // 200: "#151515",
          300: "#070738",
          // 300: "#111",
          
        },
        accent: "#e56e38",
        accent2: "#070738",
        // accent2: "#2b446a",
        accent3: "#ebdac1",
      },
    },
  },
  plugins: [],
};
export default config;
