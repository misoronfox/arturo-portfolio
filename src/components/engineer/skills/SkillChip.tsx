

export function SkillChip({ label }: { label: string }){
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "7px 14px",
        borderRadius: 8,
        border: "1px solid var(--border)",
        background: "var(--surface-1)",
        fontSize: 13,
        color: "var(--text-secondary)",
        fontFamily: "var(--font-mono)",
      }}
    >
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--blue-dim)" }} />
      {label}
    </span>
  );
}
