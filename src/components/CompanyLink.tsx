"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "@deemlol/next-icons";
import { animated, useSpring } from "react-spring";

export const CompanyLink = ({ companyName, role, date, logoUrl, href, description }: { companyName: string, role: string, date: string, logoUrl: string, href: string, description: string }) => {
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
        className="flex items-center justify-between p-3 rounded bg-[var(--color-background)] hover:bg-[#313338] border border-[var(--color-card-border)] transition-colors group relative z-10"
        onMouseEnter={(e) => {
          setIsHovered(true);
          set({ xy: [e.clientX, e.clientY] });
        }}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1e1f22] flex items-center justify-center overflow-hidden relative shrink-0 border border-[#313338]">
            <Image src={logoUrl} alt={companyName} fill className="object-cover" />
          </div>
          <div>
            <div className="text-sm font-bold text-[#f2f3f5]">{companyName}</div>
            <div className="text-xs text-[var(--color-muted-foreground)]">{role}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs font-mono text-[var(--color-muted-foreground)] hidden sm:block">{date}</div>
          <ExternalLink size={14} className="text-[var(--color-muted-foreground)] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
        </div>
      </Link>
      
      <animated.div
        className="fixed pointer-events-none z-[99] w-72 p-4 rounded-xl shadow-2xl border border-[var(--color-card-border)] bg-[var(--color-card)] overflow-hidden hidden sm:block origin-top-left"
        style={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.9,
          transform: xy.to((x, y) => `translate3d(${x + 20}px, ${y + 20}px, 0)`),
          left: 0,
          top: 0
        }}
      >
        <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[var(--color-card-border)]">
          <div className="w-10 h-10 rounded-full bg-[#1e1f22] flex items-center justify-center overflow-hidden relative shrink-0 border border-[#313338]">
            <Image src={logoUrl} alt={companyName} fill className="object-cover" />
          </div>
          <div>
            <div className="text-sm font-bold text-[#f2f3f5] leading-tight">{companyName}</div>
            <div className="text-xs font-medium text-blue-400">{href.replace('https://', '')}</div>
          </div>
        </div>
        
        <div className="text-[13px] text-[var(--color-foreground)] leading-relaxed font-medium">
          {description}
        </div>
      </animated.div>
    </>
  );
};
