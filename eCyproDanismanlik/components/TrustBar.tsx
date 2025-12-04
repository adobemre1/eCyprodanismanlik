import React from 'react';
import { FadeIn } from './FadeIn';

export const TrustBar: React.FC = () => {
  // Placeholder components for logos to avoid external image dependencies and ensure consistent style
  const LogoPlaceholder = ({ width = 120, height = 40, className = "" }) => (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={`fill-current ${className}`} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="10" width="20" height="20" rx="4" />
      <rect x="24" y="12" width="80" height="16" rx="2" />
    </svg>
  );

  const LogoPlaceholder2 = ({ width = 120, height = 40, className = "" }) => (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={`fill-current ${className}`} xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="20" r="10" />
      <rect x="35" y="12" width="70" height="16" rx="2" />
    </svg>
  );

  const LogoPlaceholder3 = ({ width = 120, height = 40, className = "" }) => (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={`fill-current ${className}`} xmlns="http://www.w3.org/2000/svg">
       <path d="M10 20 L20 10 L30 20 L20 30 Z" />
       <rect x="40" y="12" width="70" height="16" rx="2" />
    </svg>
  );

  return (
    <div className="bg-white border-b border-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] whitespace-nowrap pt-2">
              Global İş Ortaklarımız
            </p>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
               {/* Using varied SVG placeholders to simulate real logos */}
               <LogoPlaceholder className="text-slate-800 hover:text-primary transition-colors h-8 w-auto" />
               <LogoPlaceholder2 className="text-slate-800 hover:text-primary transition-colors h-8 w-auto" />
               <LogoPlaceholder3 className="text-slate-800 hover:text-primary transition-colors h-8 w-auto" />
               <LogoPlaceholder className="text-slate-800 hover:text-primary transition-colors h-8 w-auto" />
               <LogoPlaceholder2 className="text-slate-800 hover:text-primary transition-colors h-8 w-auto" />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
