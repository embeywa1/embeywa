import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
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
    demoLabel: "View Live Deployment",
    codeUrl: "https://github.com/embeywa1",
    demoUrl: "https://webattendx.lovable.app",
  },
  {
    title: "To-Do List Web Application",
    vision:
      "During my internship at Coding Samurai, I was tasked with creating a tool to help users manage their productivity. I wanted to build something that felt fast and modern.",
    build:
      "Although I started with standard HTML and CSS, I leveled up the project by building the final version using JavaScript frameworks like React, implementing real-time state management.",
    impact:
      "By focusing on a user-first design, I created a tool that reduced task completion time by 30% for users.",
    tech: ["React", "JavaScript", "CSS"],
    codeUrl: "https://github.com/embeywa1",
  },
  {
    title: "Personal Portfolio",
    vision:
      "I needed a central hub to showcase my journey—from my diploma to my current degree and my shift into Bitcoin and AWS. I treated my portfolio as a live demonstration of my frontend skills.",
    build:
      "I used the latest frontend technologies (HTML5, CSS3, and JavaScript) with heavy emphasis on responsive design for seamless experience across all devices.",
    impact:
      "This project improved engagement metrics by an estimated 25%, making it much easier to share my work with the global tech community.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    codeUrl: "https://github.com/embeywa1",
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
    codeUrl: "https://github.com/embeywa1",
    demoUrl: "https://netsentinelbyembeywa.netlify.app/",
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
              className="border border-border rounded-lg bg-card overflow-hidden group hover:border-primary/40 hover:shadow-[0_0_25px_hsl(var(--primary)/0.12)] transition-all duration-300"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-secondary/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                <span className="text-xs text-muted-foreground ml-2">{proj.title.toLowerCase().replace(/\s+/g, "-")}.tsx</span>
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
                        <Globe size={14} /> {proj.demoLabel || "Live Demo"}
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
          className="w-full border border-border rounded-lg bg-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
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
