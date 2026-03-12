import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Kenya Tulia Safari Holiday Arcade Limited",
    role: "Accountant, Data Entry & IT Support",
    period: "Nov 2025 — Jan 2026",
    points: [
      "Managed financial transactions and payroll preparation (PAYE, NHIF, NSSF).",
      "Provided first-line tech support for office hardware, software, and network issues.",
      "Supported company website and online booking platforms.",
    ],
  },
  {
    company: "Omosoft Technologies",
    role: "Sales Executive & Level 2 Tech Support",
    period: "Sep 2025 — Oct 2025",
    points: [
      "Promoted software solutions and translated product features into client benefits.",
      "Provided first-line technical support for office hardware and network issues.",
    ],
  },
  {
    company: "Coding Samurai",
    role: "Web Development Intern",
    period: "Aug 2025 — Sep 2025",
    points: [
      "Focused on frontend development using HTML, CSS, and JavaScript.",
      "Engineered a dynamic To-Do List Application to enhance task management efficiency.",
    ],
  },
  {
    company: "Anonymous Tech Solutions",
    role: "Software Engineer",
    period: "May 2023 — Jul 2025",
    points: [
      "Developed responsive web applications using React and TypeScript.",
      "Managed MySQL databases, API integration, and version control with Git.",
      "Optimized load speed, reducing load time by 30%.",
      "Improved user engagement by 25% through feature implementation.",
    ],
  },
  {
    company: "Tecno Cyber",
    role: "Tech Support Assistant",
    period: "Sep 2023 — Dec 2023",
    points: [
      "Provided technical support for email, internet browsing, and hardware issues.",
      "Handled an average of 50+ clients per day efficiently.",
    ],
  },
  {
    company: "Phoenix Chemist",
    role: "Remote Data Entry Clerk",
    period: "Oct 2024 — Dec 2024",
    points: [
      "Managed large volumes of data while maintaining strict confidentiality.",
      "Reduced data entry errors and consistently met tight deadlines.",
    ],
  },
];

const impactCounters = [
  { value: "30%", label: "Load Time Reduced" },
  { value: "25%", label: "User Engagement Up" },
  { value: "50+", label: "Daily Clients Served" },
  { value: "6+", label: "Professional Roles" },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">{"// work_history.log"}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Professional <span className="text-gradient-cyan">Experience</span>
          </h2>
        </div>

        {/* Impact counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {impactCounters.map((item, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-center p-4 rounded-lg border border-border bg-card"
            >
              <div className="text-2xl md:text-3xl font-display font-bold text-primary">{item.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border border-border rounded-lg p-6 bg-card hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <Briefcase size={18} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <div>
                      <h3 className="font-display font-semibold text-foreground">{exp.company}</h3>
                      <p className="text-sm text-primary">{exp.role}</p>
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">{exp.period}</span>
                  </div>
                  <ul className="mt-3 space-y-1">
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
