import { GraduationCap } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { SectionTitle } from "./section-title";

const education = [
  {
    degree: "B.Tech - Computer Science and Engineering",
    institute: "Baba Institute of Technology and Sciences, JNTUGV",
    year: "2026",
    score: "CGPA: 7.4"
  },
  {
    degree: "Diploma - Electronics and Communication Engineering",
    institute: "Sai Ganapathi Polytechnic, SBTET",
    year: "2022",
    score: "Percentage: 75%"
  },
  {
    degree: "SSC",
    institute: "Sri Surya Teja High School",
    year: "2019",
    score: "CGPA: 9.3"
  }
];

export function Education() {
  return (
    <AnimatedSection id="education">
      <SectionTitle
        eyebrow="Education"
        title="Academic Background"
        subtitle="My academic journey with consistent performance and technical focus."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((item) => (
          <article key={item.degree} className="glass-card p-6">
            <GraduationCap className="mb-4 h-6 w-6 text-accent" />
            <h3 className="font-display text-lg font-bold">{item.degree}</h3>
            <p className="mt-2 text-sm text-muted">{item.institute}</p>
            <p className="mt-3 text-xs uppercase tracking-wide text-slate-300">
              {item.year}
            </p>
            <p className="mt-1 text-sm text-accent">{item.score}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
