import { GitHub } from "@deemlol/next-icons";

export const GithubPreview = () => {
  return (
    <div className="w-[500px] rounded-xl shadow-2xl border border-[#30363d] bg-[#0d1117] overflow-hidden font-sans leading-none flex">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="https://api.microlink.io/?url=https://github.com/mukuls1107&screenshot=true&meta=false&colorScheme=dark&embed=screenshot.url" 
        alt="GitHub Profile" 
        className="w-full h-auto object-cover" 
      />
    </div>
  );
};
