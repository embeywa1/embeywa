import { useLocalClock } from "@/hooks/useLocalClock";

const CRTClock = () => {
  const { time, date } = useLocalClock();

  return (
    <div className="relative hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg border border-primary/40 bg-background/80 backdrop-blur-sm font-mono text-xs tracking-widest overflow-hidden group hover:border-primary/60 transition-colors duration-300">
      {/* CRT screen glow */}
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_20px_hsl(193_100%_50%/_0.1)] pointer-events-none" />

      {/* Scanline overlay */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,hsl(193_100%_50%/_0.04)_2px,hsl(193_100%_50%/_0.04)_4px)] pointer-events-none opacity-60" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-primary/80" />
      <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-primary/80" />
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-primary/80" />
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-primary/80" />

      <div className="relative z-10 flex flex-col leading-tight">
        <span className="text-primary font-semibold [text-shadow:0_0_8px_hsl(193_100%_50%/_0.6)] transition-all duration-300">
          {time}
        </span>
        <span className="text-muted-foreground transition-all duration-300">{date}</span>
      </div>

      {/* Blinking live indicator */}
      <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-primary animate-pulse [box-shadow:0_0_8px_hsl(193_100%_50%/_0.8)]" />
    </div>
  );
};

export default CRTClock;
