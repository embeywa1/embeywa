import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  subtitle?: string;
  status?: string;
  vision: string;
  build: string;
  impact: string;
  tech: string[];
  codeUrl?: string;
  demoUrl?: string;
};

const projects: Project[] = [
  {
    title: "AttendX",
    subtitle: "Role-Based Academic Attendance & Telemetry Platform",
    vision:
      "Replaces paper roll calls and fragmented spreadsheets with synchronized real-time attendance telemetry, self-service course enrollment, and transparent student tracking.",
    build:
      "Built on React (Vite) and Supabase (PostgreSQL). Features custom PL/pgSQL functions (is_faculty()), strict Row-Level Security (RLS) policies, automated signup triggers (on_auth_user_created), dynamic batch-upsert roster matrices, and modular service abstractions (classApi, attendanceApi).",
    impact:
      "Streamlines faculty session workflows, provides real-time attendance rate tracking for students, and enforces strict multi-tenant data privacy at the database layer.",
    tech: ["React (Vite)", "Supabase", "PostgreSQL", "Tailwind CSS", "Row Level Security", "Shadcn UI"],
    codeUrl: "https://github.com/embeywa1/webattendx",
    demoUrl: "https://webattendx.lovable.app",
  },
  {
    title: "NetSentinel",
    subtitle: "Real-Time Network Security & Incident Investigation Interface",
    vision:
      "Designed and built NetSentinel as a centralized dashboard to demonstrate real-time network defense concepts, threat analysis, and security event visualization. Built as a direct application of modern frontend architecture applied to high-tech cyber defense tools.",
    build:
      "Engineered using modular HTML5, custom CSS3, and modern JavaScript, leveraging high-contrast terminal styling, interactive metrics displays, and a fully responsive layout across all devices.",
    impact:
      "Delivers an intuitive interface for monitoring security events and demonstrating modern SOC dashboard workflows, boosting engagement by an estimated 25%.",
    tech: ["HTML5", "CSS3", "JavaScript", "Cybersecurity", "Network Defense"],
    codeUrl: "https://github.com/embeywa1/netsentinel",
    demoUrl: "https://netsentinelbyembeywa.netlify.app/",
  },
  {
    title: "CIPHERVAULT",
    subtitle: "High-Entropy Cryptographic Password & Security Utility",
    status: "Live App",
    vision:
      "Designed and built a high-performance, client-side security application to demonstrate cryptographically secure randomness, real-time entropy calculation, and zero-knowledge privacy architecture.",
    build:
      "Engineered with React, Tailwind CSS, and Lucide icons. Integrated the native Web Crypto API (window.crypto.getRandomValues) for CSPRNG security, pairing interactive dual-range length controls and custom character set toggles with a live bit-rate entropy meter.",
    impact:
      "Delivers a zero-network-exposure security utility that generates uncrackable credentials locally in the browser runtime, enforcing zero-trust client-side data privacy.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Web Crypto API", "Cybersecurity", "CSPRNG"],
    codeUrl: "https://github.com/embeywa1/ciphervaultbyembeywa",
    demoUrl: "https://ciphervaultbyembeywa.lovable.app",
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

                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <span className="text-primary text-xs uppercase tracking-wider">The Vision</span>
                    <p className="mt-1">{proj.vision}</p>
                  </div>
                  <div>
                    <span className="text-secondary text-xs uppercase tracking-wider">The Build</span>
                    <p className="mt-1">{proj.build}</p>
                  </div>
                  <div>
                    <span className="text-primary text-xs uppercase tracking-wider">The Impact</span>
                    <p className="mt-1">{proj.impact}</p>
                  </div>
                </div>

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
