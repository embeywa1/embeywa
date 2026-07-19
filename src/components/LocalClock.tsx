import { AnimatePresence, motion } from "framer-motion";
import { useLocalClock } from "@/hooks/useLocalClock";

const CRTClock = () => {
  const { time, date } = useLocalClock();

  return (
    <div className="relative flex items-center gap-2 px-2 py-1.5 md:px-3 md:py-2 rounded-lg border border-primary/40 bg-background/80 backdrop-blur-sm font-mono text-[10px] md:text-xs tracking-widest overflow-hidden group hover:border-primary/60 transition-colors duration-300">
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

      <div className="relative z-10 flex flex-col leading-tight min-w-[110px] md:min-w-[140px] tabular-nums">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={time}
            initial={{ opacity: 0, y: 3, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -3, filter: "blur(2px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-primary font-semibold [text-shadow:0_0_10px_hsl(193_100%_50%/_0.7)]"
          >
            {time}
          </motion.span>
        </AnimatePresence>
        <span className="text-muted-foreground transition-colors duration-300 hidden md:inline">{date}</span>
      </div>

      {/* Blinking live indicator */}
      <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-primary animate-pulse [box-shadow:0_0_8px_hsl(193_100%_50%/_0.8)]" />
    </div>
  );
};

export default CRTClock;
