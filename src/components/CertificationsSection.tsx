import { motion } from "framer-motion";
import { Award } from "lucide-react";

const badges = [
  { name: "Creating Compelling Reports", issuer: "Cisco", date: "Mar 2026", img: "https://images.credly.com/images/37b16109-9083-4b08-8eec-b9d8f4bb88a8/image.png" },
  { name: "Networking Basics", issuer: "Cisco", date: "Mar 2026", img: "https://images.credly.com/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png" },
  { name: "Network Technician Career Path", issuer: "Cisco", date: "Mar 2026", img: "https://images.credly.com/images/978f88dc-c247-4093-9d39-6efac3651297/image.png" },
  { name: "ISC2 Candidate", issuer: "ISC2", date: "Exp. Feb 2027", img: "https://images.credly.com/images/9180921d-4a13-429e-9357-6f9706a554f0/image.png" },
  { name: "Python Essentials 1", issuer: "Cisco", date: "Feb 2026", img: "https://images.credly.com/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png" },
  { name: "Python Essentials 2", issuer: "Cisco", date: "Feb 2026", img: "https://images.credly.com/images/3f802526-7274-4230-91ab-f6d1a35340e6/image.png" },
  { name: "Security and Connectivity Support", issuer: "Cisco", date: "Jan 2026", img: "https://images.credly.com/images/a42c5fcd-6617-429c-b4a9-8805310e0b10/blob" },
  { name: "Hardware and Upgrade Support", issuer: "Cisco", date: "Jan 2026", img: "https://images.credly.com/images/94cbdf0d-3e44-44b2-b213-866fe22aa7d5/blob" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco", date: "Jan 2026", img: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png" },
  { name: "IT Customer Support Basics", issuer: "Cisco", date: "Jan 2026", img: "https://images.credly.com/images/474a03c6-b5e1-44df-b313-adf0fed6c531/blob" },
  { name: "Operating Systems Support", issuer: "Cisco", date: "Jan 2026", img: "https://images.credly.com/images/70cc28ef-542c-4ce2-8bad-e8d95daf5138/blob" },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">{"// certifications.verified"}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Certification <span className="text-gradient-orange">Badges</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {badges.map((badge, i) => (
            <motion.a
              key={i}
              href="https://www.credly.com/users/mildred-embeywa"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="border border-border rounded-lg p-3 bg-card hover:border-primary/40 transition-all duration-300 flex flex-col items-center text-center gap-2 group"
            >
              <img
                src={badge.img}
                alt={badge.name}
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
              />
              <span className="text-xs text-muted-foreground leading-tight">{badge.name}</span>
              <span className="text-[10px] text-primary">{badge.issuer}</span>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.credly.com/users/mildred-embeywa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <Award size={16} /> View all badges on Credly
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CertificationsSection;
