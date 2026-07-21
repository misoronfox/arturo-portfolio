import React from "react";

import { colors } from "../../theme/WhoIAm/colors";

interface SectionTitleProps {
  mounted: boolean;
  children: React.ReactNode;
}

export function SectionTitle({ mounted, children }: SectionTitleProps) {
  return (
    <h1
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 500,
        fontSize: "clamp(28px, 5vw, 44px)",
        letterSpacing: "0.55em",
        paddingLeft: "0.55em",
        color: colors.textPrimary,
        marginBottom: 56,
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(-12px)",
        transition: "opacity 700ms ease, transform 700ms ease",
      }}
    >
      {children}
    </h1>
  );
}
