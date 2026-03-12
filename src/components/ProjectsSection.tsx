import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Web-Based Attendance System",
    vision:
      "For my final year project at Matili Technical Training Institute, I wanted to tackle the inefficiency of manual record-keeping. I saw how paper logs were easily lost and difficult to audit, so I built a digital solution to automate the process.",
    build:
      "I used PHP for the backend logic and MySQL for the database. This was a critical project because it required designing a relational database that could handle high-frequency data entry while maintaining integrity.",
    impact:
      "Once implemented, it streamlined the administrative workflow, resulting in a 20% increase in operational efficiency.",
    tech: ["PHP", "MySQL"],
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
              className="border border-border rounded-lg bg-card overflow-hidden group hover:border-primary/40 transition-all duration-300"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-secondary/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                <span className="text-xs text-muted-foreground ml-2">{proj.title.toLowerCase().replace(/\s+/g, "-")}.tsx</span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-display font-semibold text-lg text-foreground">{proj.title}</h3>

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

                <Button variant="cyber" size="sm" asChild>
                  <a href="https://github.com/embeywa1" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} /> View Code
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
