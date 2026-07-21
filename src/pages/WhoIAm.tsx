import { useEffect, useState } from "react";
import { colors } from "../theme/WhoIAm/colors";
import { panels } from "../data/WhoIAm/panels.data";
import { Panel } from "../components/WhoIAm/Panel";
import { SectionTitle } from "../components/WhoIAm/SectionTitle";
import { Tagline } from "../components/WhoIAm/Tagline";
import { GlobalStyles } from "../components/WhoIAm/GlobalStyles";

export default function WhoIAm() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100%",
        background: colors.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        boxSizing: "border-box",
      }}
    >
      <GlobalStyles />

      <SectionTitle mounted={mounted}>WHO I AM?</SectionTitle>

      <div
        style={{
          width: "100%",
          maxWidth: 920,
          display: "flex",
          flexDirection: "column",
          gap: 26,
        }}
      >
        {panels.map((panel, index) => (
          <div
            key={panel.variant}
            style={{
              opacity: mounted ? 1 : 0,
              animation: mounted
                ? `riseIn 700ms ease ${120 + index * 140}ms both`
                : "none",
            }}
          >
            <Panel {...panel} />
          </div>
        ))}
      </div>

      <Tagline mounted={mounted} first="First Software Engineer" then="Then Silversmith" />
    </div>
  );
}
