import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Phone, MessageCircle, Award, Download, ArrowDown } from "lucide-react";
import profileImg from "@/assets/mildred-profile.jpeg";

const roles = ["Software Engineer", "Aspiring AWS Cloud Practitioner", "Bitcoin Developer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && text === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? currentRole.substring(0, text.length - 1)
          : currentRole.substring(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 scanline pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-primary/50 animate-pulse-glow">
              <img
                src={profileImg}
                alt="Mildred Embeywa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-secondary-foreground text-xs font-bold">₿</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
              {"// portfolio.init()"}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground">
              Mildred <span className="text-gradient-cyan">Embeywa</span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-10 flex items-center"
          >
            <span className="text-muted-foreground mr-2">{">"}</span>
            <span className="text-lg md:text-xl text-foreground">
              I am a{" "}
              <span className="text-primary font-semibold">{text}</span>
              <span className="animate-blink text-primary">|</span>
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button variant="cyber" size="lg" asChild>
              <a href="#projects">
                <ArrowDown size={16} /> View My Work
              </a>
            </Button>
            <Button variant="cyber-orange" size="lg" asChild>
              <a href="/CV_-_Mildred_Embeywa.pdf" download>
                <Download size={16} /> Download CV
              </a>
            </Button>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/mildred-embeywa-59bbba378", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/embeywa1", label: "GitHub" },
              { icon: Phone, href: "tel:+254113833466", label: "Phone" },
              { icon: MessageCircle, href: "https://wa.me/254113833466", label: "WhatsApp" },
              { icon: Award, href: "https://www.credly.com/users/mildred-embeywa", label: "Credly" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
