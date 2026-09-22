import Image from "next/image";

export const LinkedInPreview = () => {
  return (
    <div className="w-[450px] bg-[#1d2226] text-[#e9e5df] rounded-xl shadow-2xl border border-[#38434f] overflow-hidden font-sans pb-4">
      {/* Banner */}
      <div className="h-28 w-full bg-[#1b1f23] relative">
        <Image src="https://media.licdn.com/dms/image/v2/D5616AQGn7hqYuEF22A/profile-displaybackgroundimage-shrink_200_800/B56ZiTI7R_HUAU-/0/1754815249282?e=1791417600&v=beta&t=ArmMsuwFaTJPm6KGbXW0hFhbOn5CWeOzJv6jaOuayJ4" alt="Banner" fill className="object-cover" />
      </div>

      {/* Profile Section */}
      <div className="px-5 relative mt-12">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full border-4 border-[#1d2226] bg-[#1b1f23] absolute -top-24 left-5 overflow-visible">
          <div className="w-full h-full relative overflow-hidden rounded-full">
            <Image src="/img.jpg" alt="Mukul Singh" fill className="object-cover" />
          </div>
          {/* Plus icon badge */}
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#1d2226] rounded-full border border-[#71b7fb] flex items-center justify-center text-[#71b7fb] text-lg leading-none font-bold">
            +
          </div>
        </div>

        {/* Top Right Edit / Company */}
        <div className="absolute top-0 right-5 flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#1b1f23] overflow-hidden relative">
              <Image src="/company/saarthiai.jpg" alt="Company" fill className="object-cover" />
            </div>
            <span className="text-sm font-bold">Saarthi AI</span>
          </div>
        </div>

        {/* Identity */}
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-xl text-white">Mukul Singh</h1>
            <svg viewBox="0 0 24 24" width="16" height="16" className="text-[#8c9196] fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
            <span className="text-sm text-[#8c9196]">(He/Him)</span>
          </div>
          <div className="text-[15px] mt-1 text-[#e9e5df]">
            Full Stack Engineer | Open to Remote
          </div>
          <div className="text-xs text-[#8c9196] mt-1">
            India • <span className="text-[#71b7fb] font-bold hover:underline cursor-pointer">Contact info</span>
          </div>

        </div>

        {/* Buttons */}
        {/* <div className="flex gap-2 mt-4">
          <div className="px-4 py-1 rounded-full bg-[#71b7fb] text-[#1d2226] font-bold text-sm">Open to</div>
          <div className="px-4 py-1 rounded-full border border-[#71b7fb] text-[#71b7fb] font-bold text-sm">Add section</div>
          <div className="px-4 py-1 rounded-full border border-[#8c9196] text-[#e9e5df] font-bold text-sm">Visit website</div>
        </div> */}
      </div>
    </div>
  );
};
