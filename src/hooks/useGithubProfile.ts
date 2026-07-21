import { useEffect, useState } from "react";
import type { GithubUser } from "../types/engineer/github.types";

interface UseGithubProfileResult {
  profile: GithubUser | null;
  loading: boolean;
  error: string | null;
}

export function useGithubProfile(username: string): UseGithubProfileResult {
  const [profile, setProfile] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load(): Promise<void> {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) {
          throw new Error(`GitHub responded with ${res.status}`);
        }
        const data = (await res.json()) as GithubUser;
        if (!cancelled) setProfile(data);
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
  }, [username]);

  return { profile, loading, error };
}
