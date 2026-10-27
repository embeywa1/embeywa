import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Settings2, Code2, CloudCog } from "lucide-react";

const roles = [
  {
    icon: Settings2,
    title: "Systems & Zoho Developer",
    points: [
      "Write advanced Deluge scripts to automate complex business workflows, custom functions, and database triggers.",
      "Turn messy, manual organizational processes into seamless, cloud-connected automation pipelines.",
      "Build custom integrations using webhooks, Deluge, and APIs to connect internal systems with external tools.",
    ],
  },
  {
    icon: Code2,
    title: "Full-Stack Developer",
    points: [
      "Build custom web applications and client portals that extend capabilities far beyond default platform limits.",
      "Write responsive front-end interfaces and secure back-end logic to resolve operational bottlenecks.",
    ],
  },
  {
    icon: CloudCog,
    title: "Cloud & Infrastructure Practitioner",
    points: [
      "Configure and maintain secure cloud infrastructure using core AWS services and management platforms.",
      "Ensure applications are deployed on resilient, well-architected, and cost-optimized environments.",
    ],
  },
];

const AUTOPLAY_MS = 5000;

const RolesSection = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % roles.length),
      AUTOPLAY_MS
    );
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section id="roles" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div className="text-center space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              {"// roles.matrix"}
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What I Do Across <span className="text-gradient-cyan">My Roles</span>
            </h2>
          </div>

          <div
            className="relative max-w-3xl mx-auto"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            {/* Carousel viewport */}
            <div className="overflow-hidden rounded-xl">
              <motion.div
                className="flex"
                animate={{ x: `-${index * 100}%` }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              >
                {roles.map((role, i) => (
                  <div key={role.title} className="w-full shrink-0 px-1">
                    <div
                      role="group"
                      aria-label={`${i + 1} of ${roles.length}: ${role.title}`}
                      tabIndex={0}
                      className="group rounded-xl border border-border p-6 md:p-10 transition-all duration-300 focus:outline-none focus-visible:border-primary/60"
                      style={{
                        backgroundColor: paused && i === index ? "#090D16" : "#090D16",
                      }}
                    >
                      {/* Terminal header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:shadow-[0_0_18px_rgba(0,240,255,0.35)]"
                          style={{
                            backgroundColor: "rgba(0, 240, 255, 0.08)",
                            borderColor: "rgba(0, 240, 255, 0.4)",
                          }}
                        >
                          <role.icon size={20} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-foreground">
                            {role.title}
                          </h3>
                          <p className="text-xs text-muted-foreground font-mono">
                            {`role_${String(i + 1).padStart(2, "0")}`}
                          </p>
                        </div>
                      </div>

                      {/* Points */}
                      <ul className="space-y-3">
                        {role.points.map((point) => (
                          <li key={point} className="flex items-start gap-3">
                            <span className="text-primary font-mono text-sm mt-0.5 shrink-0">
                              {">"}
                            </span>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                              {point}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {roles.map((role, i) => (
                <button
                  key={role.title}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to ${role.title}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-primary" : "w-3 bg-muted-foreground/40 hover:bg-muted-foreground/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RolesSection;
