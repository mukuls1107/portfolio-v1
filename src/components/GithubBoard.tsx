"use client";

import { GitHubCalendar } from 'react-github-calendar';

export default function GithubBoard() {
  const explicitTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#1e1f22', '#0e4429', '#006d32', '#26a641', '#39d353'], // Dark theme adapted for Discord bg
  };

  return (
    <div className="w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [&_*::-webkit-scrollbar]:hidden [&_*]:[scrollbar-width:none]">
      <GitHubCalendar 
        username="mukuls1107" 
        theme={explicitTheme}
        colorScheme="dark"
        blockSize={10}
        blockMargin={4}
        fontSize={12}
      />
    </div>
  );
}
