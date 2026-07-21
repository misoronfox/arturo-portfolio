
export function ProjectsSkeleton({ count = 6 }: { count?: number }){
  return (
    <div className="eng-grid-auto">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            height: 156,
            borderRadius: "var(--radius)",
            border: "1px solid var(--border)",
            background:
              "linear-gradient(100deg, var(--surface-1) 30%, var(--surface-2) 50%, var(--surface-1) 70%)",
            backgroundSize: "200% 100%",
            animation: "eng-shimmer 1.6s ease-in-out infinite",
          }}
        />
      ))}
      <style>{`
        @keyframes eng-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
