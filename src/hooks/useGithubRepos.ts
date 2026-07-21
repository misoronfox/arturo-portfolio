import { useEffect, useMemo, useState } from "react";
import type { GithubRepo } from "../types/engineer/github.types";

export interface UseGithubReposOptions {
  maxRepos?: number;
  excludeForks?: boolean;
  featured?: string[];
  exclude?: string[];
}

interface UseGithubReposResult {
  repos: GithubRepo[];
  loading: boolean;
  error: string | null;
  lastSynced: Date | null;
  refetch: () => void;
}

export function useGithubRepos(
  username: string,
  options: UseGithubReposOptions = {}
): UseGithubReposResult {
  const { maxRepos = 6, excludeForks = true, featured = [], exclude = [] } = options;

  const [rawRepos, setRawRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastSynced, setLastSynced] = useState<Date | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function load(): Promise<void> {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`
        );
        if (!res.ok) {
          throw new Error(`GitHub responded with ${res.status}`);
        }
        const data = (await res.json()) as GithubRepo[];
        if (!cancelled) {
          setRawRepos(data);
          setLastSynced(new Date());
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Could not reach GitHub");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [username, attempt]);

  const repos = useMemo(() => {
    const excludeSet = new Set(exclude);
    const featuredSet = new Set(featured);

    const visible = rawRepos.filter((repo) => {
      if (excludeForks && repo.fork) return false;
      if (excludeSet.has(repo.name)) return false;
      return true;
    });

    const pinned = featured
      .map((name) => visible.find((repo) => repo.name === name))
      .filter((repo): repo is GithubRepo => Boolean(repo));

    const rest = visible
      .filter((repo) => !featuredSet.has(repo.name))
      .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());

    return [...pinned, ...rest].slice(0, maxRepos);
  }, [rawRepos, maxRepos, excludeForks, featured, exclude]);

  return {
    repos,
    loading,
    error,
    lastSynced,
    refetch: () => setAttempt((n) => n + 1),
  };
}
