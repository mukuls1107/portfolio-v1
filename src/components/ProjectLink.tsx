"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "@deemlol/next-icons";
import { animated, useSpring } from "react-spring";

export const ProjectLink = ({ href, title, description, imageUrl }: { href: string, title: string, description: string, imageUrl: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 400, friction: 30 } }));

  const handleMouseMove = (e: React.MouseEvent) => {
    set({ xy: [e.clientX, e.clientY] });
  };

  return (
    <>
      <Link 
        href={href} 
        target="_blank" 
        className="block p-3 rounded bg-[var(--color-background)] hover:bg-[#313338] border border-[var(--color-card-border)] transition-colors group relative z-10"
        onMouseEnter={(e) => {
          setIsHovered(true);
          set({ xy: [e.clientX, e.clientY] });
        }}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <div className="text-sm font-bold text-[#f2f3f5] mb-1 flex justify-between items-center z-10 relative">
          {title}
          <ExternalLink size={14} className="text-[var(--color-muted-foreground)] group-hover:text-white transition-colors" />
        </div>
        <div className="text-xs text-[var(--color-foreground)] line-clamp-2 relative z-10">
          {description}
        </div>
      </Link>
      
      <animated.div
        className="fixed pointer-events-none z-[99] w-72 rounded-xl shadow-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] overflow-hidden hidden sm:block origin-top-left"
        style={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.9,
          transform: xy.to((x, y) => `translate3d(${x + 20}px, ${y + 20}px, 0)`),
          left: 0,
          top: 0
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt={title} className="w-full h-auto aspect-video object-cover" />
      </animated.div>
    </>
  );
};
