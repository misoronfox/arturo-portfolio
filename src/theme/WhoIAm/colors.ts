export const colors = {
  bg: "#030304",
  textPrimary: "#eae7df",
  textMuted: "rgba(234,231,223,0.42)",
  blue: "#6fc6ff",
  blueGlow: "rgba(58,140,199,0.35)",
  blueOverlay:
    "radial-gradient(ellipse 65% 80% at 50% 50%, rgba(3,10,18,0.8) 0%, rgba(3,10,18,0.42) 55%, rgba(3,10,18,0.62) 100%)",
  gold: "#d8b878",
  goldGlow: "rgba(150,116,54,0.35)",
  goldOverlay:
    "radial-gradient(ellipse 65% 80% at 50% 50%, rgba(10,7,3,0.78) 0%, rgba(10,7,3,0.38) 55%, rgba(10,7,3,0.58) 100%)",
} as const;

export type ColorToken = keyof typeof colors;
