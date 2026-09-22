"use client";

import { useRef, MouseEvent } from "react";

export const SpotlightQuote = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className="relative w-full mt-16 mb-4 cursor-default flex flex-col items-center justify-center text-center group py-8"
    >
      {/* Dim Base Layer (Visible when not hovered) */}
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter leading-tight text-[#313338]">
          "THERE'S ALWAYS MORE TO LEARN."
        </h2>
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1e1f22]">
          — IDK
        </p>
      </div>

      {/* Illuminated Overlay Layer (Revealed by cursor mask) */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center space-y-4 py-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          WebkitMaskImage: "radial-gradient(150px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 100%)",
          maskImage: "radial-gradient(150px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 100%)"
        }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter leading-tight text-[#f2f3f5]">
          "THERE'S ALWAYS MORE TO LEARN."
        </h2>
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#60a5fa]">
          — IDK
        </p>
      </div>
    </div>
  );
};
