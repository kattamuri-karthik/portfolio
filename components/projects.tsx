"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/projects";
import { AnimatedSection } from "./animated-section";
import { SectionTitle } from "./section-title";

export function Projects() {
  return (
    <AnimatedSection id="projects">
      <SectionTitle
        eyebrow="Projects"
        title="Project Highlights"
        subtitle="Each project includes architecture decisions, constraints, and measurable outcomes."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="glass-card flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-accent/40"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-accent">
              {project.tagline}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
            <p className="mt-4 rounded-lg border border-accent/30 bg-accent/5 px-3 py-2 text-xs text-accent">
              {project.impact}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-xs hover:bg-white/10"
              >
                <Github className="h-4 w-4" /> Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-xs text-accent hover:bg-accent/20"
              >
                <ExternalLink className="h-4 w-4" /> Live
              </a>
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs hover:bg-white/10"
              >
                Case study <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
