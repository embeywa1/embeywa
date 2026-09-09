import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const credentials = [
  {
    label: "View Credly Profile",
    sublabel: "Industry Certifications",
    url: "https://www.credly.com/users/mildred-embeywa",
    accent: "cyan",
  },
  {
    label: "View Accredible Wallet",
    sublabel: "ISOC & Technical Credentials",
    url: "https://www.credential.net/profile/embeywa7/wallet",
    accent: "orange",
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-10"
      >
        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            {"// credentials.verified"}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Verified Credentials & <span className="text-gradient-orange">Digital Badges</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Tamper-proof certifications, security accreditations, and technical domain transcripts.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-border p-6 md:p-10"
          style={{ backgroundColor: "#090D16" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {credentials.map((item, i) => {
              const isCyan = item.accent === "cyan";
              return (
                <motion.a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="group relative flex items-center justify-between gap-4 rounded-lg px-5 py-5 md:px-7 md:py-6 transition-all duration-300"
                  style={{
                    backgroundColor: "#0D1117",
                    border: `1px solid ${isCyan ? "#00F0FF" : "#F7931A"}`,
                    boxShadow: `0 0 0 ${isCyan ? "rgba(0, 240, 255, 0.08)" : "rgba(247, 147, 26, 0.08)"}`,
                  }}
                  whileHover={{
                    boxShadow: isCyan
                      ? "0 0 24px rgba(0, 240, 255, 0.25), inset 0 0 16px rgba(0, 240, 255, 0.06)"
                      : "0 0 24px rgba(247, 147, 26, 0.25), inset 0 0 16px rgba(0, 240, 255, 0.06)",
                  }}
                >
                  <div className="space-y-1">
                    <span
                      className="block text-sm md:text-base font-semibold font-display"
                      style={{ color: isCyan ? "#00F0FF" : "#F7931A" }}
                    >
                      {item.label}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {item.sublabel}
                    </span>
                  </div>

                  <div
                    className="flex items-center justify-center rounded-md p-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{
                      color: isCyan ? "#00F0FF" : "#F7931A",
                      backgroundColor: isCyan ? "rgba(0, 240, 255, 0.08)" : "rgba(247, 147, 26, 0.08)",
                    }}
                  >
                    <ArrowUpRight size={20} strokeWidth={2} />
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-8 flex items-center justify-center gap-2 font-mono text-xs md:text-sm text-muted-foreground"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="uppercase tracking-wider">
              Verified credentials available across Credly & Accredible
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default CertificationsSection;
