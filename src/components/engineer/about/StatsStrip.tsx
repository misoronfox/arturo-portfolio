
import { profile } from "../../../config/profile.config";
import { useGithubProfile } from "../../../hooks/useGithubProfile";
import { StatCard } from "./StatCard";

export function StatsStrip() {
  const { profile: githubProfile } = useGithubProfile(profile.githubUsername);

  return (
    <div className="eng-grid-3" style={{ marginTop: 40 }}>
      {profile.stats.map((stat) => (
        <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
      ))}
      <StatCard
        value={githubProfile?.public_repos ?? 0}
        suffix=""
        label="Public repos on GitHub, live"
        live
      />
    </div>
  );
}
