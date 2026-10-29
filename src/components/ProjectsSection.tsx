import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import ciphervaultPreview from "@/assets/ciphervault-preview.jpg";
import netsentinelPreview from "@/assets/netsentinel-preview.jpg";
import attendxPreview from "@/assets/attendx-preview.jpg";

type Project = {
  title: string;
  subtitle?: string;
  status?: string;
  description: string;
  image: string;
  tech: string[];
  codeUrl?: string;
  demoUrl?: string;
};

const projects: Project[] = [
  {
    title: "AttendX",
    subtitle: "Role-Based Academic Attendance & Telemetry Platform",
    status: "Live App",
    description:
      "A modern full-stack academic attendance management platform engineered with fine-grained role-based dashboards. Integrates Supabase authentication and strict PostgreSQL row-level security (RLS) policies to automate attendance tracking, dispute workflows, and administrative reporting.",
    image: attendxPreview,
    tech: ["React (Vite)", "Supabase", "PostgreSQL", "Tailwind CSS", "Row Level Security", "Shadcn UI"],
    codeUrl: "https://github.com/embeywa1/webattendx",
    demoUrl: "https://webattendx.lovable.app/",
  },
  {
    title: "NetSentinel",
    subtitle: "Real-Time Network Security & Incident Investigation Interface",
    status: "Live App",
    description:
      "An interactive cyber threat intelligence dashboard that aggregates real-time IP reputation telemetry and geospatial risk mapping. Integrates directly with the AbuseIPDB API to parse attack confidence scores, ISP data, and country origins for rapid security incident triage.",
    image: netsentinelPreview,
    tech: ["HTML5", "CSS3", "JavaScript", "Cybersecurity", "Network Defense"],
    codeUrl: "https://github.com/embeywa1/netsentinel",
    demoUrl: "https://netsentinelbyembeywa.netlify.app/",
  },
  {
    title: "CIPHERVAULT",
    subtitle: "High-Entropy Cryptographic Password & Security Utility",
    status: "Live App",
    description:
      "A zero-knowledge cryptographic web application engineered to generate high-entropy passwords and custom passphrases entirely within the browser client. Built using native browser APIs, it eliminates network exposure and modulo bias while calculating real-time bit-rate entropy to ensure maximum credential security.",
    image: ciphervaultPreview,
    tech: ["React", "Tailwind CSS", "JavaScript", "Web Crypto API", "Cybersecurity", "CSPRNG"],
    codeUrl: "https://github.com/embeywa1/ciphervaultbyembeywa",
    demoUrl: "https://ciphervaultbyembeywa.vercel.app",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">{"// featured_projects"}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              tabIndex={0}
              role="article"
              aria-label={`${proj.title} project card`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  const firstLink = e.currentTarget.querySelector("a") as HTMLElement | null;
                  firstLink?.focus();
                }
              }}
              className="border border-border rounded-lg bg-card overflow-hidden group hover:border-primary/40 focus-within:border-primary/40 focus-visible:border-primary/40 hover:shadow-[0_0_25px_hsl(var(--primary)/0.12)] focus-within:shadow-[0_0_25px_hsl(var(--primary)/0.12)] focus-visible:shadow-[0_0_25px_hsl(var(--primary)/0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all duration-300"
            >
              {/* 16:9 preview image */}
              <div className="relative aspect-video overflow-hidden border-b border-border group-hover:border-primary/40 transition-colors duration-300">
                <img
                  src={proj.image}
                  alt={`${proj.title} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-secondary/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                <span className="text-xs text-muted-foreground ml-2">{proj.title.toLowerCase().replace(/\s+/g, "-")}.tsx</span>
                {proj.status && (
                  <span className="ml-auto inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/40 shadow-[0_0_10px_hsl(193_100%_50%/0.25)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    {proj.status}
                  </span>
                )}
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-display font-semibold text-lg text-foreground">{proj.title}</h3>
                  {proj.subtitle && (
                    <p className="text-xs text-muted-foreground leading-tight">{proj.subtitle}</p>
                  )}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{proj.description}</p>

                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs rounded border border-primary/30 text-primary">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {proj.codeUrl && (
                    <Button variant="cyber" size="sm" asChild>
                      <a href={proj.codeUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} /> View Code
                      </a>
                    </Button>
                  )}
                  {proj.demoUrl && (
                    <Button variant="cyber" size="sm" asChild>
                      <a href={proj.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Globe size={14} /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full border border-border rounded-lg bg-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-primary/40 focus-within:border-primary/40 hover:shadow-[0_0_25px_hsl(var(--primary)/0.12)] focus-within:shadow-[0_0_25px_hsl(var(--primary)/0.12)] transition-all duration-300"
        >
          <div className="space-y-1 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">{"// more_projects"}</p>
            <h3 className="font-display font-semibold text-lg text-foreground">
              Want to see more of my open-source development and repositories?
            </h3>
          </div>
          <Button variant="cyber" asChild>
            <a href="https://github.com/embeywa1" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} /> View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
