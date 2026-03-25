"use client";

import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Training } from "@/components/training";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <>
        <About />
        <Education />
        <Projects />
        <Skills />
        <Training />
        <Contact />
      </>
    </main>
  );
}
