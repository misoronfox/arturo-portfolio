import React from "react";
import { colors } from "../../theme/WhoIAm/colors";

interface TaglineProps {
  mounted: boolean;
  first: string;
  then: string;
}

const lineStyle: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 14,
  letterSpacing: "0.32em",
  paddingLeft: "0.32em",
  color: colors.textMuted,
  textTransform: "uppercase",
};

export function Tagline({ mounted, first, then }: TaglineProps) {
  return (
    <div
      style={{
        marginTop: 56,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
        opacity: mounted ? 1 : 0,
        transition: "opacity 900ms ease 500ms",
      }}
    >
      <span style={lineStyle}>{first}</span>
      <span
        style={{
          width: 46,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(234,231,223,0.35), transparent)",
        }}
      />
      <span style={lineStyle}>{then}</span>
    </div>
  );
}
