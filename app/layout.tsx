import type { Metadata } from "next";
import { profile } from "@/lib/profile";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://karthik-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kattamuri Karthik | AI and Software Portfolio",
    template: "%s | Kattamuri Karthik"
  },
  description:
    "Portfolio of Kattamuri Karthik, Computer Science undergraduate focused on AI applications, full-stack engineering fundamentals, and practical project delivery.",
  applicationName: "Kattamuri Karthik Portfolio",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Kattamuri Karthik | AI and Software Portfolio",
    description:
      "Recruiter-ready portfolio featuring AI projects, architecture case studies, and hands-on engineering outcomes.",
    siteName: "Kattamuri Karthik Portfolio",
    images: [
      {
        url: "/og-portfolio.svg",
        width: 1200,
        height: 630,
        alt: "Kattamuri Karthik portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kattamuri Karthik | AI and Software Portfolio",
    description:
      "Explore project case studies, architecture decisions, and engineering impact.",
    images: ["/og-portfolio.svg"]
  }
};

const themeScript = `
(() => {
  try {
    const storedTheme = localStorage.getItem("portfolio-theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const theme = storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : (prefersLight ? "light" : "dark");
    document.documentElement.dataset.theme = theme;
  } catch {}
})();
`;

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    email: profile.email,
    jobTitle: profile.role,
    url: siteUrl,
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: profile.skills
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
