import { Brain, Layers, Rocket } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { SectionTitle } from "./section-title";

const points = [
  {
    icon: Brain,
    title: "Quick Learner",
    desc: "I adapt quickly to new technologies and apply them to project requirements."
  },
  {
    icon: Layers,
    title: "Problem Solving",
    desc: "I approach tasks with structured thinking and build practical solutions."
  },
  {
    icon: Rocket,
    title: "Committed Execution",
    desc: "I am hardworking, self-motivated, and focused on completing tasks with consistency."
  }
];

export function About() {
  return (
    <AnimatedSection id="about">
      <SectionTitle
        eyebrow="About"
        title="Profile Summary"
        subtitle="Computer Science undergraduate seeking an entry-level role where I can apply software development, cybersecurity fundamentals, and data analysis in real-world projects."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {points.map((point) => (
          <article key={point.title} className="glass-card p-6">
            <point.icon className="mb-4 h-6 w-6 text-accent" />
            <h3 className="font-display text-xl font-bold">{point.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{point.desc}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
