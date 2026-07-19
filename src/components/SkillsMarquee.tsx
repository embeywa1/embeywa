import { Code2, Bitcoin, Cloud, Network } from "lucide-react";

const pillars = [
  {
    name: "Programming",
    Icon: Code2,
    textColor: "text-cyan-400",
    hoverColor: "hover:border-cyan-400",
    glow: "hover:shadow-[0_0_12px_rgba(34,211,238,0.35)]",
  },
  {
    name: "Bitcoin",
    Icon: Bitcoin,
    textColor: "text-amber-500",
    hoverColor: "hover:border-amber-500",
    glow: "hover:shadow-[0_0_12px_rgba(245,158,11,0.35)]",
  },
  {
    name: "Cloud Infrastructure",
    Icon: Cloud,
    textColor: "text-sky-300",
    hoverColor: "hover:border-sky-300",
    glow: "hover:shadow-[0_0_12px_rgba(125,211,252,0.35)]",
  },
  {
    name: "Systems & Networking",
    Icon: Network,
    textColor: "text-amber-500",
    hoverColor: "hover:border-amber-500",
    glow: "hover:shadow-[0_0_12px_rgba(245,158,11,0.35)]",
  },
];

const SkillsMarquee = () => (
  <div className="flex flex-wrap gap-2 py-2">
    {pillars.map((item) => (
      <span
        key={item.name}
        className={`inline-flex items-center gap-2 whitespace-nowrap rounded border border-border bg-muted px-2 py-1 text-xs font-mono ${item.textColor} shadow-sm transition-all duration-300 ${item.hoverColor} ${item.glow}`}
      >
        <item.Icon className={`h-4 w-4 ${item.textColor}`} />
        {item.name}
      </span>
    ))}
  </div>
);

export default SkillsMarquee;



