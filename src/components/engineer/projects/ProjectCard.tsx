import React from "react";
import type { GithubRepo } from "../../../types/engineer/github.types";

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#6fc6ff",
  JavaScript: "#e8d3a3",
  Python: "#9fe1cb",
  Go: "#85b7eb",
  Rust: "#f0997b",
  HTML: "#d85a30",
  CSS: "#ed93b1",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, { month: "short", year: "numeric" });
}

export function ProjectCard({ repo }: { repo: GithubRepo }){
  const [hover, setHover] = React.useState(false);
  const languageColor = repo.language ? LANGUAGE_COLORS[repo.language] ?? "var(--text-muted)" : "var(--text-muted)";

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "block",
        padding: "22px",
        borderRadius: "var(--radius)",
        border: `1px solid ${hover ? "var(--border-strong)" : "var(--border)"}`,
        background: "var(--surface-1)",
        textDecoration: "none",
        transform: hover ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hover ? "0 16px 30px -20px var(--blue-glow)" : "none",
        transition: "transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h3
          style={{
            margin: 0,
            fontFamily: "var(--font-mono)",
            fontSize: 15,
            color: "var(--text-primary)",
            wordBreak: "break-word",
          }}
        >
          {repo.name}
        </h3>
        <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
          {"\u2605"} {repo.stargazers_count}
        </span>
      </div>

      <p
        style={{
          margin: "10px 0 18px",
          fontSize: 14,
          lineHeight: 1.6,
          color: "var(--text-secondary)",
          minHeight: 42,
        }}
      >
        {repo.description ?? "No description provided."}
      </p>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {repo.language && (
            <>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: languageColor }} />
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{repo.language}</span>
            </>
          )}
        </div>
        <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
          updated {formatDate(repo.pushed_at)}
        </span>
      </div>
    </a>
  );
}
