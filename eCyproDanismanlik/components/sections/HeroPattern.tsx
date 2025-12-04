
import React from 'react';

export const HeroPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Main geometric pattern - right side */}
      <svg className="absolute top-10 right-0 md:right-10 w-96 md:w-[500px] h-96 md:h-[500px] text-slate-200 opacity-50" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
         {/* Large circle */}
         <circle cx="350" cy="150" r="120" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
         {/* Small circle */}
         <circle cx="380" cy="120" r="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8"/>
         {/* Rectangle */}
         <rect x="280" y="300" width="140" height="140" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
      </svg>

      {/* Accent pattern - bottom left */}
      <svg className="absolute bottom-20 left-0 md:left-10 w-64 md:w-80 h-64 md:h-80 text-secondary/20 opacity-40" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
         {/* Diamond shape */}
         <path d="M150 30L270 150L150 270L30 150L150 30Z" fill="none" stroke="currentColor" strokeWidth="2"/>
         {/* Inner lines */}
         <path d="M150 30L150 270" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
         <path d="M30 150L270 150" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      </svg>
    </div>
  );
};
