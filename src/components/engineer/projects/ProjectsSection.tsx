
import { profile } from "../../../config/profile.config";
import { useGithubRepos } from "../../../hooks/useGithubRepos";
import { SectionHeading } from "../layout/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectsSkeleton } from "./ProjectsSkeleton";
import { Reveal } from "../layout/Reveal";

function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ago`;
}

export function ProjectsSection() {
  const { repos, loading, error, lastSynced, refetch } = useGithubRepos(profile.githubUsername, {
    maxRepos: profile.projects.maxRepos,
    excludeForks: profile.projects.excludeForks,
    featured: [...profile.projects.featured],
    exclude: [...profile.projects.exclude],
  });

  return (
    <section id="projects" className="eng-section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="eng-container">
        <SectionHeading
          code="03"
          title="Projects"
          description="Pulled straight from GitHub, so this list updates itself the moment I push."
          trailing={
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: error ? "var(--text-muted)" : "#6fe0a0",
                  animation: error ? "none" : "eng-pulse 2.4s ease-in-out infinite",
                }}
              />
              <span
                style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}
              >
                {lastSynced ? `synced ${timeAgo(lastSynced)}` : "connecting to github"}
              </span>
            </div>
          }
        />

        {loading && <ProjectsSkeleton count={profile.projects.maxRepos} />}

        {!loading && error && (
          <div
            style={{
              padding: 24,
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              fontSize: 14,
            }}
          >
            Couldn't reach GitHub ({error}).{" "}
            <button
              onClick={refetch}
              style={{
                background: "none",
                border: "none",
                color: "var(--blue)",
                cursor: "pointer",
                padding: 0,
                font: "inherit",
                textDecoration: "underline",
              }}
            >
              Try again
            </button>
          </div>
        )}

        {!loading && !error && repos.length === 0 && (
          <p style={{ color: "var(--text-muted)", fontSize: 14 }}>
            No public repositories found for this GitHub account yet.
          </p>
        )}

        {!loading && !error && repos.length > 0 && (
          <div className="eng-grid-auto">
            {repos.map((repo, index) => (
              <Reveal key={repo.id} delayMs={Math.min(index * 70, 280)}>
                <ProjectCard repo={repo} />
              </Reveal>
            ))}
          </div>
        )}

        <div style={{ marginTop: 32 }}>
          <a
            href={`https://github.com/${profile.githubUsername}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: 13, color: "var(--blue)", textDecoration: "none" }}
          >
            View all repositories on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
