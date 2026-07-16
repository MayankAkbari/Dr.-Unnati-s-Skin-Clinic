import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          gold: "#B76E79",
          champagne: "#E3A8B0",
          darkGold: "#8F4F5A",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          emerald: "#C4A8A2",
          teal: "#D8CBC2",
          darkTeal: "#8F7670",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        obsidian: {
          900: "#140E18",
          800: "#1B1420",
          700: "#261C2E",
          600: "#34283F",
        },
        pearl: {
          50: "#FFFDF9",
          100: "#FDF9F3",
          200: "#F2EBE0",
          300: "#E6DBD0",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "liquid-glass": "0 8px 32px 0 rgba(20, 14, 24, 0.12), inset 0 1px 1px 0 rgba(255, 255, 255, 0.5)",
        "liquid-glass-dark": "0 12px 40px 0 rgba(0, 0, 0, 0.45), inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)",
        "liquid-inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 0.4)",
        "liquid-gold": "0 8px 24px -4px rgba(183, 110, 121, 0.4), inset 0 1px 1px 0 rgba(255, 255, 255, 0.8)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        liquidFloat: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-12px) scale(1.02)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.08)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        specularShimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 4s ease-in-out infinite",
        "liquid-float": "liquidFloat 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "specular-shimmer": "specularShimmer 3s infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gold-shimmer": "linear-gradient(90deg, #D4AF37 0%, #F3E5AB 50%, #D4AF37 100%)",
        "liquid-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.05) 100%)",
        "liquid-gradient-dark": "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.02) 100%)",
        "specular-border": "linear-gradient(90deg, rgba(212,175,55,0.6) 0%, rgba(255,255,255,0.8) 50%, rgba(13,148,136,0.6) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
