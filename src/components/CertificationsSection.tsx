import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Wallet, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CREDLY_URL = "https://www.credly.com/users/mildred-embeywa";
const ACCREDIBLE_URL = "https://www.credential.net/profile/embeywa7/wallet";

type Platform = "Credly" | "Accredible";

interface Credential {
  title: string;
  org: string;
  date: string;
  platform: Platform;
  skills: string[];
  img?: string;
  verifyUrl: string;
}

const credentials: Credential[] = [
  // Credly badges
  { title: "Creating Compelling Reports", org: "Cisco", date: "Mar 2026", platform: "Credly", skills: ["Reporting", "Data Analysis"], img: "https://images.credly.com/images/37b16109-9083-4b08-8eec-b9d8f4bb88a8/image.png", verifyUrl: CREDLY_URL },
  { title: "Networking Basics", org: "Cisco", date: "Mar 2026", platform: "Credly", skills: ["Networking", "TCP/IP"], img: "https://images.credly.com/images/5bdd6a39-3e03-4444-9510-ecff80c9ce79/image.png", verifyUrl: CREDLY_URL },
  { title: "Network Technician Career Path", org: "Cisco", date: "Mar 2026", platform: "Credly", skills: ["Networking", "Troubleshooting"], img: "https://images.credly.com/images/978f88dc-c247-4093-9d39-6efac3651297/image.png", verifyUrl: CREDLY_URL },
  { title: "ISC2 Candidate", org: "ISC2", date: "Exp. Feb 2027", platform: "Credly", skills: ["Cybersecurity"], img: "https://images.credly.com/images/9180921d-4a13-429e-9357-6f9706a554f0/image.png", verifyUrl: CREDLY_URL },
  { title: "Python Essentials 1", org: "Cisco", date: "Feb 2026", platform: "Credly", skills: ["Python"], img: "https://images.credly.com/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png", verifyUrl: CREDLY_URL },
  { title: "Python Essentials 2", org: "Cisco", date: "Feb 2026", platform: "Credly", skills: ["Python"], img: "https://images.credly.com/images/3f802526-7274-4230-91ab-f6d1a35340e6/image.png", verifyUrl: CREDLY_URL },
  { title: "Security and Connectivity Support", org: "Cisco", date: "Jan 2026", platform: "Credly", skills: ["Security", "Support"], img: "https://images.credly.com/images/a42c5fcd-6617-429c-b4a9-8805310e0b10/blob", verifyUrl: CREDLY_URL },
  { title: "Hardware and Upgrade Support", org: "Cisco", date: "Jan 2026", platform: "Credly", skills: ["Hardware"], img: "https://images.credly.com/images/94cbdf0d-3e44-44b2-b213-866fe22aa7d5/blob", verifyUrl: CREDLY_URL },
  { title: "Introduction to Cybersecurity", org: "Cisco", date: "Jan 2026", platform: "Credly", skills: ["Cybersecurity"], img: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png", verifyUrl: CREDLY_URL },
  { title: "IT Customer Support Basics", org: "Cisco", date: "Jan 2026", platform: "Credly", skills: ["IT Support"], img: "https://images.credly.com/images/474a03c6-b5e1-44df-b313-adf0fed6c531/blob", verifyUrl: CREDLY_URL },
  { title: "Operating Systems Support", org: "Cisco", date: "Jan 2026", platform: "Credly", skills: ["OS", "Support"], img: "https://images.credly.com/images/70cc28ef-542c-4ce2-8bad-e8d95daf5138/blob", verifyUrl: CREDLY_URL },
  // Accredible credentials — replace with your real Accredible-issued items
  { title: "Specialized Credential", org: "Issuing Organization", date: "2026", platform: "Accredible", skills: ["Specialization"], verifyUrl: ACCREDIBLE_URL },
];

type Filter = "All" | "Credly" | "Accredible";
const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "All" },
  { label: "Industry Certs (Credly)", value: "Credly" },
  { label: "Specialized Credentials (Accredible)", value: "Accredible" },
];

const CertificationsSection = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = credentials.filter((c) => filter === "All" || c.platform === filter);

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="text-center space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">{"// credentials.verified"}</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Verified Certifications &amp; <span className="text-gradient-cyan">Digital Credentials</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Tamper-proof digital badges and professional certifications issued via Credly and Accredible.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button variant="cyber" size="sm" asChild>
                <a href={CREDLY_URL} target="_blank" rel="noopener noreferrer">
                  <Award size={14} /> View Credly Profile
                </a>
              </Button>
              <Button variant="cyber" size="sm" asChild>
                <a href={ACCREDIBLE_URL} target="_blank" rel="noopener noreferrer">
                  <Wallet size={14} /> View Accredible Wallet
                </a>
              </Button>
            </div>
          </div>

          {/* Filter bar */}
          <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter credentials">
            {filters.map((f) => (
              <button
                key={f.value}
                role="tab"
                aria-selected={filter === f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-1.5 text-xs rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                  filter === f.value
                    ? "border-primary text-primary bg-primary/10 shadow-[0_0_15px_hsl(var(--primary)/0.2)]"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visible.map((cred, i) => (
              <motion.div
                key={`${cred.platform}-${cred.title}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.05, 0.4), duration: 0.4 }}
                className="relative border border-border rounded-lg p-5 bg-card hover:border-primary/50 hover:shadow-[0_0_25px_hsl(var(--primary)/0.12)] transition-all duration-300 flex flex-col gap-3"
              >
                {/* Status badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wider text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    VERIFIED
                  </span>
                  <span
                    className={`px-2 py-0.5 text-[10px] rounded-full border ${
                      cred.platform === "Credly"
                        ? "border-secondary/50 text-secondary"
                        : "border-primary/50 text-primary"
                    }`}
                  >
                    {cred.platform}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  {cred.img ? (
                    <img src={cred.img} alt={cred.title} className="w-12 h-12 object-contain shrink-0" loading="lazy" />
                  ) : (
                    <ShieldCheck size={40} className="text-primary shrink-0" />
                  )}
                  <div className="space-y-0.5">
                    <h3 className="font-display font-semibold text-sm text-foreground leading-snug">{cred.title}</h3>
                    <p className="text-xs text-muted-foreground">{cred.org}</p>
                    <p className="text-[10px] text-muted-foreground/70">{cred.date}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cred.skills.map((s) => (
                    <span key={s} className="px-2 py-0.5 text-[10px] rounded border border-border bg-muted text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" asChild className="mt-auto w-fit border-primary/40 text-primary hover:bg-primary/10">
                  <a href={cred.verifyUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={12} /> Verify Badge
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
