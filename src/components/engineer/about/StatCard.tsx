
import { useCountUp } from "../../../hooks/useCountUp";
import { useScrollReveal } from "../../../hooks/useScrollReveal";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  live?: boolean;
}

export function StatCard({ value, suffix = "", label, live }: StatCardProps){
  const [ref, visible] = useScrollReveal<HTMLDivElement>();
  const count = useCountUp(value, visible);

  return (
    <div
      ref={ref}
      style={{
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: "24px 22px",
        background: "var(--surface-1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 34,
            fontWeight: 500,
            color: "var(--text-primary)",
          }}
        >
          {count}
          {suffix}
        </span>
        {live && (
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#6fe0a0",
              animation: "eng-pulse 2.4s ease-in-out infinite",
              marginLeft: 4,
            }}
          />
        )}
      </div>
      <p style={{ margin: "8px 0 0", fontSize: 13, color: "var(--text-muted)" }}>{label}</p>
    </div>
  );
}
