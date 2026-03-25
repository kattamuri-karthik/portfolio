import { BadgeCheck } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { SectionTitle } from "./section-title";

const trainings = [
  "Introduction to Cybersecurity - Cisco Networking Academy",
  "Software Engineering and Agile Development - Infosys Springboard",
  "Python Full Stack Development - ExcelR",
  "Full Stack Development Program - Micro IT"
];

const certifications = [
  "Introduction to Cybersecurity - Cisco Networking Academy",
  "Power BI - OfficeMaster",
  "AI Fundamentals - IBM SkillsBuild",
  "CSR - IBM SkillsBuild"
];

export function Training() {
  return (
    <AnimatedSection id="training">
      <SectionTitle
        eyebrow="Training"
        title="Internships and Certifications"
        subtitle="Hands-on training and certifications aligned with software and AI-focused career goals."
      />
      <div className="grid gap-5 md:grid-cols-2">
        <article className="glass-card p-6">
          <h3 className="font-display text-xl font-bold">Internships and Training</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {trainings.map((item) => (
              <li key={item} className="flex gap-2">
                <BadgeCheck className="mt-0.5 h-4 w-4 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="glass-card p-6">
          <h3 className="font-display text-xl font-bold">Certifications</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {certifications.map((item) => (
              <li key={item} className="flex gap-2">
                <BadgeCheck className="mt-0.5 h-4 w-4 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </AnimatedSection>
  );
}
