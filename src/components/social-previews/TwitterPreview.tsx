import Image from "next/image";

export const TwitterPreview = () => {
  return (
    <div className="w-[350px] bg-black text-white rounded-xl shadow-2xl border border-neutral-800 overflow-hidden font-sans">
      {/* Banner */}
      <div className="h-28 w-full bg-neutral-800 relative">
        <Image src="/hero.jpg" alt="Banner" fill className="object-cover" />
      </div>
      
      {/* Profile Section */}
      <div className="px-4 pb-4 relative">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full border-4 border-black bg-neutral-800 absolute -top-8 left-4 overflow-hidden">
          <Image src="/img.jpg" alt="Mukul Singh" fill className="object-cover" />
        </div>
        
        {/* Action Button space */}
        <div className="flex justify-end pt-3">
          <div className="px-4 py-1.5 rounded-full font-bold text-sm bg-white text-black">Follow</div>
        </div>

        {/* Name and Handle */}
        <div className="mt-2">
          <div className="flex items-center gap-1">
            <h1 className="font-bold text-lg leading-tight">Mukul Singh</h1>
            <svg viewBox="0 0 24 24" aria-label="Verified account" className="w-4 h-4 text-blue-400 fill-current"><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.918-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.337 2.25c-.416-.165-.866-.25-1.336-.25-2.21 0-3.918 1.792-3.918 3.998 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.46.74 2.746 1.867 3.45-.094.373-.147.76-.147 1.15 0 2.21 1.71 3.998 3.918 3.998.47 0 .92-.084 1.336-.25C9.182 21.585 10.49 22.5 12 22.5s2.816-.917 3.337-2.25c.416.165.866.25 1.336.25 2.21 0 3.918-1.792 3.918-3.998 0-.39-.053-.777-.147-1.15 1.127-.704 1.867-1.99 1.867-3.45zM10.74 15.82L7.26 12.34l1.48-1.48 2 2 5.06-5.06 1.48 1.48-6.54 6.54z"></path></g></svg>
          </div>
          <div className="text-neutral-500 text-sm">@mukulownsyou</div>
        </div>

        {/* Bio */}
        <div className="text-sm mt-3">
          Document signing made easy: <span className="text-blue-400">@base0tech</span>
        </div>

        {/* Meta Info */}
        <div className="flex gap-3 text-neutral-500 text-xs mt-3">
          <div className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><g><path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path></g></svg>
            India
          </div>
          <div className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><g><path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.439l-1.48 1.094-1.178-1.595 1.48-1.094c.789-.583 1.29-1.458 1.436-2.435s-.103-1.954-.686-2.746c-1.205-1.63-3.508-1.973-5.136-.77l-3.53 2.608c-.788.583-1.29 1.458-1.436 2.435-.146.977.103 1.954.685 2.746.49.664 1.17 1.132 1.95 1.35l.08.02-1.044 1.85zM6.61 21.134c-1.196 0-2.368-.535-3.136-1.572-1.716-2.322-1.224-5.61 1.1-7.33l1.48-1.093 1.177 1.594-1.48 1.094c-.789.582-1.29 1.457-1.436 2.434s.103 1.954.686 2.746c1.205 1.63 3.508 1.973 5.136.77l3.53-2.609c.789-.583 1.29-1.458 1.436-2.435.146-.977-.103-1.954-.685-2.746-.49-.664-1.17-1.132-1.95-1.351l-.08-.02 1.044-1.85c1.13.318 2.097.986 2.796 1.933.832 1.125 1.176 2.508.968 3.893s-.942 2.605-2.068 3.438l-3.53 2.608c-1.066.788-2.328 1.19-3.588 1.19z"></path></g></svg>
            <span className="text-blue-400">base0.tech</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-4 mt-3 text-sm">
          <div><span className="font-bold text-white">244</span> <span className="text-neutral-500">Following</span></div>
          <div><span className="font-bold text-white">73</span> <span className="text-neutral-500">Followers</span></div>
        </div>
      </div>
    </div>
  );
};
