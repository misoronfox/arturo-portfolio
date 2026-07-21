
import { profile } from "../../../config/profile.config";

const NAV_LINKS = [
  { label: "Principles", href: "#principles" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function NavBar(){
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        backdropFilter: "blur(10px)",
        background: "rgba(3,3,4,0.75)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="eng-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <a href="#top" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              color: "var(--blue)",
              letterSpacing: "0.04em",
            }}
          >
            {"<"}
            {profile.name.split(" ")[0]}
            {" />"}
          </span>
        </a>

        <nav className="eng-hide-mobile" style={{ display: "flex", gap: 28 }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: profile.availability.open ? "#6fe0a0" : "var(--text-muted)",
              animation: profile.availability.open ? "eng-pulse 2.4s ease-in-out infinite" : "none",
            }}
          />
          <span
            className="eng-hide-mobile"
            style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
          >
            {profile.availability.label}
          </span>
        </div>
      </div>
    </header>
  );
}
