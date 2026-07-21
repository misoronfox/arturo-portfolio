

const VIA_POSITIONS = [8, 24, 41, 58, 75, 91];

export function PageSpine(){
  return (
    <div
      aria-hidden="true"
      className="eng-hide-mobile"
      style={{
        position: "absolute",
        left: 24,
        top: 0,
        bottom: 0,
        width: 1,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(180deg, var(--border-strong) 0px, var(--border-strong) 6px, transparent 6px, transparent 14px)",
        }}
      />
      {VIA_POSITIONS.map((top) => (
        <span
          key={top}
          style={{
            position: "absolute",
            left: -2.5,
            top: `${top}%`,
            width: 6,
            height: 6,
            borderRadius: 2,
            background: "var(--surface-1)",
            border: "1px solid var(--blue-dim)",
          }}
        />
      ))}
    </div>
  );
}
