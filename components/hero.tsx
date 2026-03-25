"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const [showToast, setShowToast] = useState(false);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const blasts = [
    { top: "12%", left: "14%", delay: 0.3, scale: 1 },
    { top: "20%", left: "58%", delay: 1.1, scale: 1.25 },
    { top: "58%", left: "24%", delay: 1.9, scale: 0.95 },
    { top: "68%", left: "74%", delay: 2.7, scale: 1.15 },
    { top: "35%", left: "85%", delay: 3.2, scale: 0.85 }
  ];

  const showDownloadToast = () => {
    setShowToast(true);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setShowToast(false), 2200);
  };

  const openProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  return (
    <section className="section-wrap pt-14 md:pt-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-mesh p-8 shadow-glow md:p-14">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-accent2/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 ai-grid opacity-30" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {blasts.map((blast, blastIndex) => (
            <div
              key={`${blast.top}-${blast.left}`}
              className="cracker-burst"
              style={{
                top: blast.top,
                left: blast.left,
                animationDelay: `${blast.delay}s`,
                transform: `scale(${blast.scale})`
              }}
            >
              <span
                className="cracker-core"
                style={{ animationDelay: `${blast.delay}s` }}
              />
              <span
                className="cracker-ring"
                style={{ animationDelay: `${blast.delay + 0.15}s` }}
              />
              {Array.from({ length: 14 }).map((_, sparkIndex) => {
                const angle = (sparkIndex * 360) / 14;
                return (
                  <span
                    key={`${blastIndex}-${sparkIndex}`}
                    className="cracker-particle"
                    style={
                      {
                        "--spark-angle": `${angle}deg`,
                        "--spark-delay": `${blast.delay + sparkIndex * 0.04}s`
                      } as CSSProperties
                    }
                  />
                );
              })}
            </div>
          ))}
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-accent"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Kattamuri Karthik | CSE 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl font-display text-4xl font-bold leading-tight md:text-7xl"
            >
              Kattamuri Karthik
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-200 md:text-lg"
            >
              <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-accent">
                Career Objective
              </span>
              Computer Science undergraduate seeking an entry-level role where I
              can apply my knowledge in software development, cybersecurity
              fundamentals, and data analysis to contribute to real-world
              projects while continuously improving my technical expertise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                type="button"
                onClick={openProjects}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-base transition hover:bg-[#64f4e1]"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="/Kattamuri-Karthik-Resume.docx"
                download
                onClick={showDownloadToast}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                Download Resume
                <Download className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-4 flex flex-wrap gap-3"
            >
              <a
                href="https://www.linkedin.com/in/kattamuri-karthik-615638335"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/kattamuri-karthik"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-accent/35 via-transparent to-accent2/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-2 backdrop-blur-md">
              <Image
                src="/karthik-profile.jpg"
                alt="Kattamuri Karthik profile"
                width={520}
                height={420}
                className="h-[420px] w-full rounded-2xl object-cover object-center"
                priority
              />
              <div className="absolute inset-0 rounded-3xl ai-scan" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={showToast ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none absolute bottom-6 right-6 rounded-xl border border-accent/40 bg-base/95 px-4 py-3 text-sm text-accent shadow-glow"
        >
          Resume downloaded successfully
        </motion.div>
      </div>
    </section>
  );
}
