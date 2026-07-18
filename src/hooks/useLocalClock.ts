import { useState, useEffect } from "react";

export interface ClockTime {
  time: string;
  date: string;
}

export const useLocalClock = (): ClockTime => {
  const [clock, setClock] = useState<ClockTime>(() => {
    const now = new Date();
    return {
      time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
      date: now.toLocaleDateString([], { weekday: "short", year: "numeric", month: "short", day: "2-digit" }),
    };
  });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setClock({
        time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
        date: now.toLocaleDateString([], { weekday: "short", year: "numeric", month: "short", day: "2-digit" }),
      });
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return clock;
};

export default useLocalClock;
