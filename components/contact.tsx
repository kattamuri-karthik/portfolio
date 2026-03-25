"use client";

import { FormEvent, useState } from "react";
import { Download, Github, Linkedin, Mail, SendHorizonal } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { SectionTitle } from "./section-title";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus("Please fill name, email, and message.");
      return;
    }

    const mailSubject = subject || `Portfolio inquiry from ${name}`;
    const mailBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Project details:",
      message
    ].join("\n");

    window.location.href = `mailto:kattamurikarthik96@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    setStatus("Email draft opened.");
  };

  return (
    <AnimatedSection id="contact">
      <div className="glass-card p-8 md:p-12">
        <SectionTitle
          eyebrow="Contact"
          title="Have a project in mind?"
          subtitle="I am available for internships and freelance frontend/full-stack work."
        />

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-muted focus:border-accent/60"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-muted focus:border-accent/60"
            />
          </div>
          <input
            type="text"
            placeholder="Project Subject"
            value={form.subject}
            onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
            className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-muted focus:border-accent/60"
          />
          <textarea
            placeholder="Tell me about your project..."
            rows={6}
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-muted focus:border-accent/60"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-base hover:bg-[#64f4e1]"
          >
            <SendHorizonal className="h-4 w-4" />
            Send Message
          </button>
          {status && <p className="text-xs text-muted">{status}</p>}
        </form>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:kattamurikarthik96@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-base hover:bg-[#64f4e1]"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/kattamuri-karthik-615638335"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="https://github.com/kattamuri-karthik"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="/Kattamuri-Karthik-Resume.docx"
            download
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm hover:bg-white/10"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>
        <p className="mt-5 text-sm text-muted">
          Phone: 9391485734 | Location: Konavanipalam, Pedagantyada,
          Visakhapatnam, Andhra Pradesh
        </p>
      </div>
    </AnimatedSection>
  );
}
