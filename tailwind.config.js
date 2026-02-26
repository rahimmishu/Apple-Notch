/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ── Typography ──────────────────────────────────────────
      fontFamily: {
        sans:    ["DM Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Syne", "ui-sans-serif", "sans-serif"],
        mono:    ["JetBrains Mono", "ui-monospace", "monospace"],
      },

      // ── Colors ──────────────────────────────────────────────
      colors: {
        base: {
          DEFAULT: "#0A0A0F",
          surface: "#0f0f18",
          elevated: "#14141f",
        },
        accent: {
          indigo: "#6366f1",
          violet: "#8b5cf6",
          cyan:   "#22d3ee",
          rose:   "#f472b6",
          amber:  "#f59e0b",
          emerald:"#10b981",
        },
      },

      // ── Spacing ─────────────────────────────────────────────
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "100": "25rem",
        "112": "28rem",
        "128": "32rem",
      },

      // ── Border Radius ────────────────────────────────────────
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      // ── Animations ──────────────────────────────────────────
      animation: {
        "fade-in":       "fadeIn 0.6s ease forwards",
        "fade-in-up":    "fadeInUp 0.7s ease forwards",
        "shimmer":       "shimmer 2.5s linear infinite",
        "float-y":       "floatY 4s ease-in-out infinite",
        "pulse-slow":    "pulse 3s ease-in-out infinite",
        "spin-slow":     "spin 8s linear infinite",
        "ping-slow":     "ping 2.5s cubic-bezier(0,0,0.2,1) infinite",
        "bounce-subtle": "bounceSub 2s ease-in-out infinite",
        "glow-pulse":    "glowPulse 2.5s ease-in-out infinite",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        bounceSub: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-4px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99,102,241,0.3)" },
          "50%":      { boxShadow: "0 0 50px rgba(99,102,241,0.7)" },
        },
      },

      // ── Backdrop Blur ────────────────────────────────────────
      backdropBlur: {
        xs: "2px",
      },

      // ── Box Shadow ───────────────────────────────────────────
      boxShadow: {
        "glow-indigo": "0 0 40px rgba(99,102,241,0.35)",
        "glow-violet": "0 0 40px rgba(139,92,246,0.35)",
        "glow-cyan":   "0 0 40px rgba(34,211,238,0.35)",
        "card":        "0 0 0 1px rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4)",
        "card-hover":  "0 0 0 1px rgba(255,255,255,0.1), 0 8px 40px rgba(0,0,0,0.5), 0 0 60px rgba(99,102,241,0.1)",
      },

      // ── Screen sizes ─────────────────────────────────────────
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
};