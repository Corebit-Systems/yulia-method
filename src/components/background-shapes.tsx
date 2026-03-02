// src/app/components/background-shapes.tsx
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
      {/* Right top ring */}
      <div
        className={[
          "absolute -right-24 top-16 h-[420px] w-[420px] rounded-full border border-neutral-200/70",
          "blur-[0.2px]",
          reduced ? "" : "animate-shape-in-right",
        ].join(" ")}
      />

      {/* Right mid rounded square */}
      <div
        className={[
          "absolute -right-28 top-[46vh] h-[260px] w-[260px] rounded-[44px] border border-neutral-200/60",
          "rotate-12 blur-[0.2px]",
          reduced ? "" : "animate-shape-in-right-delayed",
        ].join(" ")}
      />

      {/* Left bottom soft block */}
      <div
        className={[
          "absolute -left-28 top-[70vh] h-[340px] w-[340px] rounded-[64px]",
          "bg-neutral-100/60",
          "blur-[0.5px]",
          reduced ? "" : "animate-shape-in-left",
        ].join(" ")}
      />

      {/* Subtle dots grid (very light) */}
      <div className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(circle_at_30%_20%,black,transparent_55%)]">
        <div className="h-full w-full bg-[radial-gradient(circle,rgba(0,0,0,0.12)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>
    </div>
  );
}