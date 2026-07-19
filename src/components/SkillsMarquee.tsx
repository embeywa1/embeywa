import { Code2, Coins, Cloud, Network } from "lucide-react";

const pillars = [
  { name: "Programming", Icon: Code2, color: "text-primary" },
  { name: "Bitcoin Development", Icon: Coins, color: "text-secondary" },
  { name: "Cloud Infrastructure", Icon: Cloud, color: "text-primary" },
  { name: "Systems & Networking", Icon: Network, color: "text-secondary" },
];

const SkillsMarquee = () => {
  const loop = [...pillars, ...pillars, ...pillars];

  return (
    <div className="marquee-mask group relative w-full overflow-hidden py-2">
      <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span
            key={`${item.name}-${i}`}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-border bg-card/70 px-3 py-1.5 text-xs font-mono text-muted-foreground shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <item.Icon className={`h-4 w-4 ${item.color}`} />
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;

