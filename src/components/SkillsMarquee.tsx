import { useState } from "react";
import { Terminal } from "lucide-react";
import { skillCategories } from "./SkillsSection";

const items = skillCategories.flatMap((cat) =>
  cat.skills.map((skill) => ({
    name: skill,
    color: cat.color,
    key: `${cat.title}-${skill}`,
  }))
);

const deviconUrl = (name: string) => {
  const slug = name.toLowerCase();
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`;
};

const SkillIcon = ({ name, color }: { name: string; color: string }) => {
  const isSimple = /^[a-zA-Z0-9]+$/.test(name);
  const [errored, setErrored] = useState(false);

  if (!isSimple || errored) {
    return <Terminal className={`h-4 w-4 ${color}`} />;
  }
  return (
    <img
      src={deviconUrl(name)}
      alt={`${name} icon`}
      loading="lazy"
      onError={() => setErrored(true)}
      className="h-4 w-4 object-contain"
    />
  );
};

const SkillsMarquee = () => {
  const loop = [...items, ...items];

  return (
    <div className="marquee-mask group relative w-full overflow-hidden py-2">
      <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span
            key={`${item.key}-${i}`}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-border bg-card/70 px-3 py-1.5 text-xs font-mono text-muted-foreground shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <SkillIcon name={item.name} color={item.color} />
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
