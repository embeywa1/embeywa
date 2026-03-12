import { motion } from "framer-motion";
import profileImg from "@/assets/mildred-profile.jpeg";

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
            I am a versatile Software Engineer and Bitcoin Developer with a strong foundation in
            building efficient, scalable web applications. Currently, I am advancing my expertise
            as an aspiring AWS Cloud Practitioner to bridge the gap between robust software
            development and cloud-native architecture.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I am passionate about contributing to the Bitcoin open-source ecosystem and leveraging
            a problem-solving mindset to drive impactful, secure digital solutions.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {["React", "TypeScript", "AWS", "Bitcoin", "Python", "Linux"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full border border-primary/30 text-primary bg-primary/5"
              >
                {tag}
              </span>
            ))}
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
