
import { profile } from "../../../config/profile.config";
import { SchematicBackground } from "./SchematicBackground";
import { Reveal } from "../layout/Reveal";

export function Hero(){
  const today = new Date();
  const rev = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, "0")}`;

  return (
    <section
      id="top"
      style={{
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid var(--border)",
        background: "linear-gradient(180deg, #060a10 0%, var(--bg) 100%)",
      }}
    >
      <SchematicBackground />

      <div
        className="eng-container"
        style={{
          position: "relative",
          zIndex: 1,
          padding: "120px 24px 96px",
          minHeight: "78vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          className="eng-hide-mobile"
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--text-muted)",
            letterSpacing: "0.08em",
            textAlign: "right",
          }}
        >
          rev {rev} — {profile.location}
        </div>

        <Reveal>
          <span className="eng-mono-label">{profile.role}</span>
        </Reveal>

        <Reveal delayMs={100}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              fontSize: "clamp(40px, 7vw, 76px)",
              lineHeight: 1.05,
              margin: "18px 0 24px",
              color: "var(--text-primary)",
            }}
          >
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delayMs={200}>
          <p
            style={{
              maxWidth: 560,
              fontSize: "clamp(16px, 2vw, 19px)",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              marginBottom: 40,
            }}
          >
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delayMs={300}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                padding: "13px 24px",
                borderRadius: 10,
                background: "var(--blue)",
                color: "#04121e",
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              View projects
            </a>
            <a
              href={profile.socials.find((s) => s.icon === "github")?.href ?? "#"}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "13px 24px",
                borderRadius: 10,
                border: "1px solid var(--border-strong)",
                color: "var(--text-primary)",
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              GitHub ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
