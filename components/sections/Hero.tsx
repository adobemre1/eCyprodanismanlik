
import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { FadeIn } from '../common/FadeIn';
import { useScrollToSection } from '../common/useScrollToSection';
import { trackEvent } from '../../lib/analytics';
import { HERO_CONTENT } from '../../constants';
import { HeroPattern } from './HeroPattern';

export const Hero: React.FC = () => {
  const scrollToSection = useScrollToSection();

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string, label: string) => {
    trackEvent('Hero', 'Click', label);
    scrollToSection(e, href);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-neutral overflow-hidden pt-32 pb-20 lg:pt-0" aria-label="Hero Section">
      {/* Abstract Geometric Pattern Background */}
      <HeroPattern />
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral via-neutral/90 to-white/0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="max-w-4xl">
          <FadeIn>
            <div className="inline-flex items-center space-x-3 bg-white border border-slate-200 rounded-full px-5 py-2 mb-10 shadow-sm">
              <ShieldCheck size={16} className="text-secondary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {HERO_CONTENT.badge}
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h1 className="font-serif text-hero-m md:text-hero-d font-bold text-primary leading-[1.1] mb-8 tracking-tight">
              {HERO_CONTENT.title.line1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-600">
                {HERO_CONTENT.title.highlight}
              </span>
              <br /> {HERO_CONTENT.title.line2}
            </h1>
          </FadeIn>

          <FadeIn delay={400}>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-12 font-light">
              {HERO_CONTENT.description}
            </p>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <a
                href={HERO_CONTENT.primaryCta.href}
                onClick={(e) => handleCtaClick(e, HERO_CONTENT.primaryCta.href, 'Primary CTA')}
                className="inline-flex justify-center items-center px-10 py-4 bg-primary text-white text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                {HERO_CONTENT.primaryCta.label}
              </a>
              <a
                href={HERO_CONTENT.secondaryCta.href}
                onClick={(e) => handleCtaClick(e, HERO_CONTENT.secondaryCta.href, 'Secondary CTA')}
                className="inline-flex justify-center items-center px-10 py-4 border border-slate-300 text-slate-700 text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-white hover:border-secondary hover:text-secondary transition-all group bg-transparent outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
              >
                {HERO_CONTENT.secondaryCta.label}
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>

          {/* Quick Category Access */}
          <FadeIn delay={800}>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl border-t border-slate-200 pt-8" role="list">
                {HERO_CONTENT.pillars.map((pillar) => (
                  <a 
                    key={pillar.id}
                    href={pillar.href} 
                    onClick={(e) => handleCtaClick(e, pillar.href, `Pillar: ${pillar.title}`)} 
                    className="group flex items-center p-2 transition-all outline-none focus:bg-white rounded-lg" 
                    role="listitem"
                  >
                    <div className="bg-white p-3 rounded-full text-slate-400 border border-slate-200 group-hover:text-secondary group-hover:border-secondary transition-colors mr-4">
                      <pillar.icon size={20} />
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-primary group-hover:text-secondary transition-colors">{pillar.title}</span>
                      <span className="text-xs text-slate-500">{pillar.subtitle}</span>
                    </div>
                  </a>
                ))}
             </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
