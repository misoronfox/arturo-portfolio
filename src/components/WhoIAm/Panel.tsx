import { useState } from "react";
import type { PanelConfig } from "../../types/WhoIAm/panel.types";
import { colors } from "../../theme/WhoIAm/colors";
import { Link } from "react-router-dom";

type PanelProps = PanelConfig;

export function Panel({
  variant,
  label,
  sublabel,
  backgroundImage,
  href,
  ariaLabel,
}: PanelProps) {
  const isEngineer = variant === "engineer";
  const [hover, setHover] = useState(false);

  const glow = isEngineer ? colors.blueGlow : colors.goldGlow;
  const overlay = isEngineer ? colors.blueOverlay : colors.goldOverlay;
  const labelColor = isEngineer ? "#cfe8ff" : "#e8d3a3";
  const borderColor = isEngineer ? "rgba(111,198,255,0.18)" : "rgba(216,184,120,0.22)";

  return (
    <Link
      to={href}
      aria-label={ariaLabel}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        display: "block",
        overflow: "hidden",
        borderRadius: 18,
        border: `1px solid ${borderColor}`,
        height: 190,
        textDecoration: "none",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: hover
          ? `0 0 0 1px ${glow}, 0 18px 40px -20px ${glow}`
          : "0 10px 30px -18px rgba(0,0,0,0.7)",
        transform: hover ? "translateY(-3px) scale(1.005)" : "translateY(0) scale(1)",
        transition: "transform 400ms ease, box-shadow 400ms ease",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: overlay,
        }}
      />

      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 26,
            letterSpacing: "0.42em",
            fontWeight: 500,
            color: labelColor,
            paddingLeft: "0.42em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        <span style={{ opacity: 0.9 }}>{sublabel}</span>
      </span>
    </Link>
  );
}
