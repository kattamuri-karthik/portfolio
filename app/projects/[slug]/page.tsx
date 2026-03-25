import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProjectBySlug, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Kattamuri Karthik"
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`
    },
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.summary,
      type: "article",
      url: `/projects/${project.slug}`
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    creator: {
      "@type": "Person",
      name: "Kattamuri Karthik"
    },
    keywords: project.stack.join(", "),
    url: `https://karthik-portfolio.vercel.app/projects/${project.slug}`
  };

  return (
    <main className="section-wrap pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />

      <Link
        href="/#projects"
        className="mb-6 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs hover:bg-white/10"
      >
        <ArrowLeft className="h-4 w-4" /> Back to projects
      </Link>

      <article className="glass-card p-6 md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">
          {project.tagline}
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent hover:bg-accent/20"
          >
            <ExternalLink className="h-4 w-4" />
            Live demo
          </a>
        </div>

        <section className="mt-10 grid gap-5 md:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-muted">{metric.label}</p>
              <p className="mt-2 text-xl font-bold text-accent">{metric.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="font-display text-2xl font-bold">Problem</h2>
          <p className="text-sm leading-relaxed text-muted md:text-base">{project.problem}</p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="font-display text-2xl font-bold">Constraints</h2>
          <ul className="space-y-2 text-sm text-muted md:text-base">
            {project.constraints.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-white/5 p-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="font-display text-2xl font-bold">Architecture</h2>
          <ol className="space-y-2 text-sm text-muted md:text-base">
            {project.architecture.map((item, index) => (
              <li key={item} className="rounded-xl border border-white/10 bg-white/5 p-3">
                {index + 1}. {item}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="font-display text-2xl font-bold">Key Decisions and Tradeoffs</h2>
          <div className="space-y-3">
            {project.decisions.map((decision) => (
              <article key={decision.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="font-bold">{decision.title}</h3>
                <p className="mt-2 text-sm text-muted md:text-base">{decision.rationale}</p>
                <p className="mt-2 text-sm text-accent2 md:text-base">Tradeoff: {decision.tradeoff}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="font-display text-2xl font-bold">Outcomes</h2>
          <ul className="space-y-2 text-sm text-muted md:text-base">
            {project.outcomes.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-white/5 p-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-2xl font-bold">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-slate-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
