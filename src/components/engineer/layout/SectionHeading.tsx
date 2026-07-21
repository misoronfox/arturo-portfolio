import React from "react";

interface SectionHeadingProps {
  code: string;
  title: string;
  description?: string;
  trailing?: React.ReactNode;
}

export function SectionHeading({ code, title, description, trailing }: SectionHeadingProps) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: 2,
            background: "var(--blue)",
            boxShadow: "0 0 0 3px var(--blue-tint)",
            flexShrink: 0,
          }}
        />
        <span style={{ width: 28, height: 1, background: "var(--border-strong)" }} />
        <span className="eng-mono-label">Section {code}</span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 500,
            fontSize: "clamp(26px, 4vw, 36px)",
            letterSpacing: "0.02em",
            margin: 0,
            color: "var(--text-primary)",
          }}
        >
          {title}
        </h2>
        {trailing}
      </div>

      {description && (
        <p
          style={{
            marginTop: 12,
            maxWidth: 560,
            color: "var(--text-secondary)",
            fontSize: 15,
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
