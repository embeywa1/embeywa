import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Github, Award, MessageCircle, Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:mildredembeywa7@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.open(mailtoLink);
    toast.success("Opening email client...");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">{"// contact.send()"}</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Get In <span className="text-gradient-cyan">Touch</span>
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border border-border rounded-lg bg-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-secondary/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                <span className="text-xs text-muted-foreground ml-2">new_message.sh</span>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">$ name:</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="bg-muted/50 border-border"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">$ email:</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="bg-muted/50 border-border"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">$ message:</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Your message..."
                    rows={4}
                    required
                    className="bg-muted/50 border-border"
                  />
                </div>
              </div>
            </div>

            <Button variant="cyber" size="lg" type="submit" className="w-full">
              <Send size={16} /> Send Message
            </Button>
          </form>

          {/* Socials */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Mail, href: "mailto:mildredembeywa7@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:+254113833466", label: "+254113833466" },
              { icon: MessageCircle, href: "https://wa.me/254113833466", label: "WhatsApp" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/mildred-embeywa-59bbba378", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/embeywa1", label: "GitHub" },
              { icon: Award, href: "https://www.credly.com/users/mildred-embeywa", label: "Credly" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
              >
                <s.icon size={16} /> {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
