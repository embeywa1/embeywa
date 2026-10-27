import { motion } from "framer-motion";
import profileImg from "@/assets/mildred-profile.jpeg";
import SkillsMarquee from "./SkillsMarquee";

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid lg:grid-cols-5 gap-12 items-center"
      >
        {/* Left - Bio (60%) */}
        <div className="lg:col-span-3 space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            {"// about_me.md"}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I am a versatile Systems Engineer and Full-Stack Developer specializing in transforming
            manual, fragmented business processes into streamlined, automated workflows. Backed by
            a strong technical foundation and a diverse background spanning software, IT support,
            sales, and accounting, I bridge the gap between technical architecture and real-world
            operations. I don't just write code—I deeply understand what a business actually needs
            to scale.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I pride myself on being an adaptable, fast learner who translates complex technical
            concepts into plain language to get problems solved efficiently. Whether I am
            architecting cloud infrastructure, optimizing business tools, or deploying custom web
            portals, my goal is always the same: eliminating operational bottlenecks and building
            secure, scalable systems that last.
          </p>

          <div className="pt-2 -mx-2">
            <SkillsMarquee />
          </div>
        </div>

        {/* Right - Profile picture (40%) */}
        <div className="lg:col-span-2 flex justify-center">
          <div className="relative">
            {/* Terminal frame */}
            <div className="border-glow-cyan rounded-lg overflow-hidden bg-card">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/50">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full bg-secondary/70" />
                <div className="w-3 h-3 rounded-full bg-primary/50" />
                <span className="text-xs text-muted-foreground ml-2">profile.jpg</span>
              </div>
              <div className="p-2">
                <img
                  src={profileImg}
                  alt="Mildred Embeywa - Software Engineer"
                  className="w-72 h-80 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
