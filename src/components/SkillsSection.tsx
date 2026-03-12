import { motion } from "framer-motion";
import { Cloud, Bitcoin, Code, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Cloud,
    title: "Cloud",
    color: "text-primary",
    skills: ["AWS Fundamentals", "EC2 Deployment", "S3 Storage", "IAM"],
  },
  {
    icon: Bitcoin,
    title: "Bitcoin",
    color: "text-secondary",
    skills: ["Node Management", "RPC API Integration", "Lightning Network"],
  },
  {
    icon: Code,
    title: "Programming",
    color: "text-primary",
    skills: [
      "Python", "PHP", "Laravel", "C#", "C++", "JavaScript", "React",
      "TypeScript", "Node.js", "MySQL", "REST APIs", "Tailwind CSS",
      "CSS", "Visual Basic",
    ],
  },
  {
    icon: Server,
    title: "Systems & Networking",
    color: "text-secondary",
    skills: [
      "Linux (Kali, Ubuntu)", "Cisco Networking", "TCP/IP", "DNS",
      "DHCP", "Hardware Troubleshooting",
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "text-primary",
    skills: ["Git/GitHub", "Docker", "Linux (Kali/Ubuntu)", "Cisco Networking"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">{"// skills.config"}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Technical <span className="text-gradient-cyan">Dashboard</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border border-border rounded-lg p-6 bg-card hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <cat.icon size={20} className={cat.color} />
                <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded border border-border bg-muted text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
