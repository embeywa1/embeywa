import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "University of The People",
    period: "2025 — Present",
  },
  {
    degree: "Diploma in Computer Science",
    school: "Matili Technical Training Institute, Bungoma, Kenya",
    period: "2022 — 2025",
  },
];

const EducationSection = () => (
  <section id="education" className="py-24 relative">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">{"// the_journey"}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Education
          </h2>
        </div>

        <div className="space-y-4">
          {education.map((ed, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="border-glow-cyan rounded-lg p-6 bg-card"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{ed.degree}</h3>
                  <p className="text-sm text-muted-foreground">{ed.school}</p>
                  <p className="text-xs text-primary mt-1">{ed.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
