"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, GitHub, LinkedIn } from "@deemlol/next-icons";
import GithubBoard from "@/components/GithubBoard";
import SpotifyWidget from "@/components/SpotifyWidget";
import { animated, useSpring } from "react-spring";

import { ProjectLink } from "@/components/ProjectLink";
import { CompanyLink } from "@/components/CompanyLink";
import { SocialLink } from "@/components/SocialLink";
import { XIcon } from "@/components/icons/XIcon";
import { TwitterPreview } from "@/components/social-previews/TwitterPreview";
import { LinkedInPreview } from "@/components/social-previews/LinkedInPreview";
import { GithubPreview } from "@/components/social-previews/GithubPreview";
import { SpotlightQuote } from "@/components/SpotlightQuote";

export default function Home() {
  const slideIn = useSpring({
    from: { opacity: 0, scale: 0.95, y: 20 },
    to: { opacity: 1, scale: 1, y: 0 },
    config: { tension: 300, friction: 25 }
  });

  return (
    <main className="w-full min-h-screen bg-[var(--color-background)] flex items-center justify-center p-4 sm:p-8">
      <animated.div style={slideIn} className="profile-card w-full max-w-2xl relative">

        {/* BANNER */}
        <div className="h-32 sm:h-48 w-full relative overflow-hidden">
          <Image src="/hero.jpg" alt="Hero Banner" fill className="object-cover" />
        </div>

        {/* AVATAR OVERLAP */}
        <div className="absolute top-[80px] sm:top-[128px] left-4 sm:left-6">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-[6px] border-[var(--color-card)] bg-neutral-900 flex items-center justify-center shadow-lg relative group cursor-pointer overflow-hidden">
            <Image src="/img.jpg" alt="Mukul Singh" fill className="object-cover" />
          </div>
          {/* Discord Status Indicator */}
          <div className="absolute bottom-1 right-1 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 border-4 border-[var(--color-card)] rounded-full z-10"></div>
        </div>

        {/* PROFILE BODY */}
        <div className="p-4 sm:p-6 mt-12 sm:mt-16 space-y-6">

          {/* HEADER INFO */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#f2f3f5] leading-tight">Mukul Singh</h1>
            <h2 className="text-sm font-medium text-[var(--color-foreground)] mb-4 flex flex-wrap items-center gap-1">
              <Link href="https://x.com/mukulownsyou" target="_blank" className="hover:underline text-blue-400">
                @mukulownsyou
              </Link>
              <span className="text-[var(--color-muted-foreground)]">•</span> breaking things is my hobby
            </h2>

            <div className="w-full h-[1px] bg-[var(--color-card-border)] mb-4"></div>

            <h3 className="text-xs font-bold uppercase tracking-wide text-[var(--color-muted-foreground)] mb-2">About Me</h3>
            <p className="text-sm text-[var(--color-foreground)] leading-relaxed">
              Full-stack developer from India. I enjoy building things with Next.js and Node.js.
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-[var(--color-muted-foreground)] mb-2">Connections</h3>
            <div className="flex gap-2">
              <SocialLink
                href="https://github.com/mukuls1107"
                icon={GitHub}
                hoverColor="hover:text-white"
                previewCard={<GithubPreview />}
              />
              <SocialLink
                href="https://linkedin.com/in/mukul1107"
                icon={LinkedIn}
                hoverColor="hover:text-blue-500"
                previewCard={<LinkedInPreview />}
              />
              <SocialLink
                href="https://x.com/mukulownsyou"
                icon={XIcon}
                hoverColor="hover:text-white"
                previewCard={<TwitterPreview />}
              />
              <SocialLink
                href="mailto:mukul.110705@gmail.com"
                icon={Mail}
                hoverColor="hover:text-red-500"
                previewCard={
                  <div className="w-[300px] p-4 bg-[#1e1f22] border border-[#313338] rounded-xl text-white shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center border border-red-500/30">
                        <Mail size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-sm">Email Me</div>
                        <div className="text-xs text-[#b5bac1]">mukul.110705@gmail.com</div>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </div>

          {/* RICH PRESENCE (SPOTIFY) */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-[var(--color-muted-foreground)] mb-2">Activity</h3>
            <SpotifyWidget />
          </div>

          {/* ROLES / EXPERIENCE */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-[var(--color-muted-foreground)] mb-2">Current Roles</h3>
            <div className="space-y-2">
              <CompanyLink
                companyName="Saarthi AI"
                role="Software Engineering Intern"
                date="Jul 2025 - Present"
                logoUrl="/company/saarthiai.jpg"
                href="https://saarthi.ai"
                description="Built a custom CRM solution with Next.js and Express. Connected integrations across Zoho and WhatsApp Business API. Added Redis and BullMQ for asynchronous background processing."
              />
              <CompanyLink
                companyName="Cloud Maven, Inc."
                role="Software Engineering Intern"
                date="Feb 2025 - Jul 2025"
                logoUrl="/company/cloudmaven.png"
                href="https://cloudmaveninc.com"
                description="Developed LWC components and Apex services for document generation and e-signature workflows directly within the Salesforce ecosystem."
              />
            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-[var(--color-muted-foreground)] mb-2">Featured Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <ProjectLink
                href="https://base0.tech"
                title="Base0"
                description="Document Signing, Simplified. ESIGN Act + eIDAS compliant SaaS."
                imageUrl="https://base0.tech/pro-og.png"
              />
              <ProjectLink
                href="https://supatoken.lol"
                title="SupaToken.lol"
                description="Prompt Token Optimizer. Removes unnecessary tokens from LLM prompts."
                imageUrl="https://supatoken.lol/oglogo.png"
              />
            </div>
          </div>

          {/* GITHUB BOARD COMPACT */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-[var(--color-muted-foreground)] mb-2">GitHub Activity</h3>
            <div className="p-3 rounded bg-[var(--color-background)] border border-[var(--color-card-border)]">
              <GithubBoard />
            </div>
          </div>

          <SpotlightQuote />

        </div>
      </animated.div>
    </main>
  );
}
