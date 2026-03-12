import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Mildred built a user-friendly service showcase website for my small business. She took initiative, offered ideas and delivered beyond what I expected.",
    name: "Benjamin Mulunda",
    title: "Business Owner",
  },
  {
    quote: "During her time in tech support, Mildred demonstrated impressive problem-solving skills and patience. She consistently resolved technical issues efficiently, making her part of our IT team.",
    name: "Sammy Ndululu",
    title: "",
  },
  {
    quote: "Working with Mildred on our branding assets was an outstanding experience. Her creativity, attention to detail and fast turnaround brought our vision to life effortlessly.",
    name: "RentaPlace Kenya",
    title: "Co-Founder, RentaPlace Kenya",
  },
  {
    quote: "Mildred knows how to deliver exactly what was ordered—on time and with exceptional quality. Her attention to detail and problem-solving skills truly stand out.",
    name: "Metrine Onala",
    title: "H.O.D Computing & Informatics",
  },
  {
    quote: "Mildred actively contributed to multiple web projects with modern UI and mobile responsiveness. Her work on the interactive testimonial slider and animated elements brought our site to life.",
    name: "Sophia Kimani",
    title: "Team Leader, Anonymous Tech Solutions",
  },
  {
    quote: "Mildred's Web attendance system was a game changer in my class. It made tracking student participation seamless, eliminated paperwork and saved valuable time. Her work is both innovative and dependable.",
    name: "Felix Juma",
    title: "Lecturer, Department of Computer Science",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">{"// testimonials.log"}</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              What They <span className="text-gradient-cyan">Say</span>
            </h2>
          </div>

          {/* Terminal slider */}
          <div className="border-glow-cyan rounded-lg bg-card overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-secondary/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
              <span className="text-xs text-muted-foreground ml-2">testimonials.sh</span>
            </div>

            <div className="p-8 min-h-[200px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="text-primary">$</span> echo "{t.quote}"
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">— {t.name}</p>
                    {t.title && <p className="text-xs text-muted-foreground">{t.title}</p>}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 pb-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-border"
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

export default TestimonialsSection;
