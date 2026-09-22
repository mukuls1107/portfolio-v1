import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SpotifyWidget() {
  const [timestamp, setTimestamp] = useState(0);

  useEffect(() => {
    setTimestamp(Date.now()); // Set initial timestamp only on client
    const interval = setInterval(() => {
      setTimestamp(Date.now());
    }, 10000); // Auto-update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-start sm:items-center gap-4 w-full">
      <Link href="https://open.spotify.com" target="_blank" className="hover:opacity-80 transition-opacity w-full max-w-[400px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={`https://spotify-swart-mu.vercel.app/api/now-playing${timestamp ? `?t=${timestamp}` : ''}`} 
          alt="Spotify Now Playing" 
          className="w-full h-auto"
        />
      </Link>
    </div>
  );
}
