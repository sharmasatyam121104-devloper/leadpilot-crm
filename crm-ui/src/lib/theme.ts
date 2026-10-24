export const THEME = {
  colors: {
    background: "#F6F5F1",
    surface: "#FFFFFF",
    foreground: "#141413",
    textPrimary: "#141413",
    textSecondary: "#6B6B6B",
    muted: "#6B6B6B",
    border: "#E8E5DE",
    primary: "#141413",
    buttonText: "#FFFFFF",
    badge1: { bg: "#DBEAFE", text: "#1D4ED8" },
    badge2: { bg: "#F3E8FF", text: "#7E22CE" },
    badge3: { bg: "#D1FAE5", text: "#047857" },
    overlayLight: "rgba(246, 245, 241, 0.8)",
    overlayWhite14: "rgba(255, 255, 255, 0.14)",
    overlayWhite08: "rgba(255, 255, 255, 0.08)",
    hoverOverlay: "rgba(232, 229, 222, 0.6)",
  },
  radius: {
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    pill: "9999px",
  },
  spacing: {
    container: "max-w-7xl mx-auto px-6",
    section: "py-24 md:py-32",
  },
  font: {
    sans: "font-sans",
    mono: "font-mono",
  },
  shadow: {
    card: "shadow-sm",
    preview: "shadow-2xl",
    ai: "shadow-xl",
  },
} as const;

export type Theme = typeof THEME;
