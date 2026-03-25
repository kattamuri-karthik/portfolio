import { AnimatedSection } from "./animated-section";
import { SectionTitle } from "./section-title";

const skillGroups = {
  Programming: ["C", "Java", "Python", "SQL"],
  "Web Development": ["HTML", "CSS", "Frontend Development", "Full Stack (Basics)"],
  "AI and ML": ["Machine Learning", "NLP", "Data Analysis", "Power BI"],
  Cybersecurity: ["Cybersecurity Fundamentals", "Network Security Basics"]
};

export function Skills() {
  return (
    <AnimatedSection id="skills">
      <SectionTitle
        eyebrow="Skills"
        title="Technical Skills"
        subtitle="Foundation across programming, web development, AI projects, and cybersecurity fundamentals."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {Object.entries(skillGroups).map(([group, skills]) => (
          <article key={group} className="glass-card p-6">
            <h3 className="font-display text-xl font-bold">{group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
