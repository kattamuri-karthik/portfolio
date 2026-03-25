import { NextResponse } from "next/server";
import { fetchRepoStats } from "@/lib/github";
import { projects } from "@/lib/projects";

export async function GET() {
  try {
    const statsEntries = await Promise.all(
      projects.map(async (project) => {
        const stats = await fetchRepoStats(project.github);
        return [project.slug, stats] as const;
      })
    );

    return NextResponse.json({
      stats: Object.fromEntries(statsEntries)
    });
  } catch (error) {
    console.error("github route error", error);
    return NextResponse.json(
      {
        error: "Unable to load repository statistics."
      },
      { status: 500 }
    );
  }
}
