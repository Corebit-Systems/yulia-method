"use client";

import { useEffect, useState } from "react";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

export default function BackgroundShapes() {
  const reduced = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* very subtle dots */}
      <div className="absolute inset-0 opacity-[0.16] [mask-image:radial-gradient(circle_at_30%_15%,black,transparent_60%)]">
        <div className="h-full w-full bg-[radial-gradient(circle,rgba(0,0,0,0.12)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      {/* RIGHT TOP: ring */}
      <div className="absolute -right-24 top-16">
        <div
          className={[
            "h-[440px] w-[440px] rounded-full border border-neutral-200/70",
            reduced ? "" : "animate-shape-in-right animate-shape-drift-1",
          ].join(" ")}
        />
      </div>

      {/* RIGHT MID: rounded square */}
      <div className="absolute -right-28 top-[42vh]">
        <div
          className={[
            "h-[280px] w-[280px] rounded-[52px] border border-neutral-200/60",
            "shadow-[0_0_0_1px_rgba(0,0,0,0.01)]",
            reduced ? "" : "animate-shape-in-right-delayed animate-shape-drift-2",
          ].join(" ")}
        />
      </div>

      {/* LEFT BOTTOM: soft block */}
      <div className="absolute -left-28 top-[70vh]">
        <div
          className={[
            "h-[360px] w-[360px] rounded-[72px] bg-neutral-100/70",
            reduced ? "" : "animate-shape-in-left animate-shape-drift-3",
          ].join(" ")}
        />
      </div>
    </div>
  );
}