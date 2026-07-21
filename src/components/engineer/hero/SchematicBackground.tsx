
export function SchematicBackground() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.55,
      }}
    >
      <defs>
        <pattern id="eng-grid" width="42" height="42" patternUnits="userSpaceOnUse">
          <path d="M42 0H0V42" fill="none" stroke="rgba(111,198,255,0.06)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="1200" height="700" fill="url(#eng-grid)" />

      {[
        "M1150,40 L980,40 L980,120 L860,120 L860,200",
        "M1150,110 L1040,110 L1040,190 L900,190",
        "M1150,190 L1080,190 L1080,270 L920,270 L920,350",
        "M1150,270 L1000,270 L1000,320",
        "M1150,350 L1010,350 L1010,420 L880,420",
        "M1150,430 L950,430 L950,380",
      ].map((d, i) => (
        <path key={i} d={d} fill="none" stroke="rgba(111,198,255,0.5)" strokeWidth="1" />
      ))}

      {[
        [980, 40], [860, 120], [1040, 110], [900, 190], [1080, 190],
        [920, 270], [1000, 270], [1010, 350], [880, 420], [950, 430],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 3 : 2} fill="#6fc6ff" opacity="0.85" />
      ))}
    </svg>
  );
}
