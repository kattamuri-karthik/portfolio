export const profile = {
  name: "Kattamuri Karthik",
  role: "Computer Science Undergraduate (2026)",
  headline:
    "Entry-level software engineer focused on AI-powered applications, practical full-stack development, and cybersecurity fundamentals.",
  email: "kattamurikarthik96@gmail.com",
  phone: "9391485734",
  location: "Visakhapatnam, Andhra Pradesh, India",
  github: "https://github.com/kattamuri-karthik",
  linkedin: "https://www.linkedin.com/in/kattamuri-karthik-615638335",
  skills: [
    "Python",
    "Java",
    "C",
    "SQL",
    "Machine Learning",
    "NLP",
    "Frontend Development",
    "Cybersecurity Fundamentals"
  ]
};

export function getProfileKnowledgeBase() {
  return [
    `Name: ${profile.name}`,
    `Role: ${profile.role}`,
    `Headline: ${profile.headline}`,
    `Core skills: ${profile.skills.join(", ")}`,
    `Location: ${profile.location}`,
    `GitHub: ${profile.github}`,
    `LinkedIn: ${profile.linkedin}`
  ].join("\n");
}
