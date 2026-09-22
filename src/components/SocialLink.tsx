"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";
import { animated, useSpring } from "react-spring";

export const SocialLink = ({ 
  href, 
  icon: Icon, 
  hoverColor,
  previewCard
}: { 
  href: string, 
  icon: any, 
  hoverColor: string,
  previewCard: ReactNode
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 1, tension: 400, friction: 30 } }));

  const handleMouseMove = (e: React.MouseEvent) => {
    set({ xy: [e.clientX, e.clientY] });
  };

  return (
    <>
      <Link 
        href={href} 
        target={href.startsWith('mailto') ? undefined : "_blank"} 
        className={`p-2 rounded bg-[var(--color-background)] hover:bg-[#313338] border border-[var(--color-card-border)] transition-colors text-[var(--color-foreground)] ${hoverColor} flex items-center justify-center relative z-10`}
        onMouseEnter={(e) => {
          setIsHovered(true);
          set({ xy: [e.clientX, e.clientY] });
        }}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <Icon size={20} />
      </Link>

      <animated.div
        className="fixed pointer-events-none z-[99] hidden sm:block origin-top-left"
        style={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.9,
          transform: xy.to((x, y) => `translate3d(${x + 20}px, ${y + 20}px, 0)`),
          left: 0,
          top: 0
        }}
      >
        {previewCard}
      </animated.div>
    </>
  );
};
