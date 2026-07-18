import { useLocalClock } from "@/hooks/useLocalClock";
import { Clock } from "lucide-react";

const LocalClock = () => {
  const { time, date } = useLocalClock();

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-muted/50 font-mono text-xs tracking-wider">
      <Clock size={14} className="text-primary" />
      <div className="flex flex-col leading-tight">
        <span className="text-primary font-semibold">{time}</span>
        <span className="text-muted-foreground">{date}</span>
      </div>
    </div>
  );
};

export default LocalClock;
