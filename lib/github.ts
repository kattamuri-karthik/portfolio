export type GithubRepoStats = {
  stars: number;
  forks: number;
  openIssues: number;
  lastPushedAt: string;
  htmlUrl: string;
};

function parseRepoFromGithubUrl(url: string) {
  const match = url.match(/^https?:\/\/github\.com\/([^/]+)\/([^/#?]+)/i);
  if (!match) return null;
  return {
    owner: match[1],
    repo: match[2]
  };
}

export async function fetchRepoStats(githubUrl: string) {
  const parsed = parseRepoFromGithubUrl(githubUrl);
  if (!parsed) {
    return null;
  }

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json"
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(
    `https://api.github.com/repos/${parsed.owner}/${parsed.repo}`,
    {
      headers,
      next: { revalidate: 600 }
    }
  );

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as {
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    pushed_at: string;
    html_url: string;
  };

  const stats: GithubRepoStats = {
    stars: data.stargazers_count ?? 0,
    forks: data.forks_count ?? 0,
    openIssues: data.open_issues_count ?? 0,
    lastPushedAt: data.pushed_at ?? "",
    htmlUrl: data.html_url ?? githubUrl
  };

  return stats;
}
