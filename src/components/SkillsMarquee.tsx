import { Code2, Coins, Cloud, Network } from "lucide-react";

const pillars = [
  { name: "Programming", Icon: Code2 },
  { name: "Bitcoin Development", Icon: Coins },
  { name: "Cloud Infrastructure", Icon: Cloud },
  { name: "Systems & Networking", Icon: Network },
];

const SkillsMarquee = () => (
  <div className="flex flex-wrap gap-3 py-2">
    {pillars.map((item) => (
      <span
        key={item.name}
        className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-border bg-card/70 px-3 py-1.5 text-xs font-mono text-cyan-400 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(34,211,238,0.3)]"
      >
        <item.Icon className="h-4 w-4 text-cyan-400" />
        {item.name}
      </span>
    ))}
  </div>
);

export default SkillsMarquee;


