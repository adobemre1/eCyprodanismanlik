import React from 'react';
import { ArrowRight, ShieldCheck, Briefcase, Mic2, Layers } from 'lucide-react';
import { FadeIn } from '../common/FadeIn';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-neutral overflow-hidden pt-32 pb-20">
      {/* Abstract Geometric Pattern Background - Premium & Corporate */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <svg className="absolute top-0 right-0 w-full md:w-2/3 h-full text-slate-200/40 fill-current" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
           <path d="M400 0L800 400L400 800L0 400L400 0Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
           <circle cx="600" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1"/>
           <path d="M600 50L600 350" stroke="currentColor" strokeWidth="0.5"/>
           <path d="M450 200L750 200" stroke="currentColor" strokeWidth="0.5"/>
           <rect x="100" y="500" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="1"/>
           <path d="M50 50L200 200" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
      </div>
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral via-neutral/90 to-white/0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="max-w-4xl">
          <FadeIn>
            <div className="inline-flex items-center space-x-3 bg-white border border-slate-200 rounded-full px-5 py-2 mb-10 shadow-sm">
              <ShieldCheck size={16} className="text-secondary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Global Standartlarda İş Ortağı
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h1 className="font-serif text-hero-m md:text-hero-d font-bold text-primary leading-[1.1] mb-8 tracking-tight">
              Strateji, Etkinlik ve <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-600">
                Dijital Çözümlerde
              </span>
              <br /> Güvenilir Partneriniz.
            </h1>
          </FadeIn>

          <FadeIn delay={400}>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-12 font-light">
              EcyPro, kurumsal yönetim danışmanlığından prestijli organizasyonlara ve dijital marka yönetimine kadar, işinizin her aşamasında değer katan bütüncül çözümler sunar.
            </p>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-10 py-4 bg-primary text-white text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1"
              >
                Hemen Başlayın
              </a>
              <a
                href="#services"
                className="inline-flex justify-center items-center px-10 py-4 border border-slate-300 text-slate-700 text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-white hover:border-secondary hover:text-secondary transition-all group bg-transparent"
              >
                Hizmetleri Keşfet
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>

          {/* Quick Category Access */}
          <FadeIn delay={800}>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl border-t border-slate-200 pt-8">
                <a href="#cat-consulting" className="group flex items-center p-2 transition-all">
                  <div className="bg-white p-3 rounded-full text-slate-400 border border-slate-200 group-hover:text-secondary group-hover:border-secondary transition-colors mr-4">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-primary group-hover:text-secondary transition-colors">Danışmanlık</span>
                    <span className="text-xs text-slate-500">Stratejik Yönetim</span>
                  </div>
                </a>
                <a href="#cat-events" className="group flex items-center p-2 transition-all">
                  <div className="bg-white p-3 rounded-full text-slate-400 border border-slate-200 group-hover:text-secondary group-hover:border-secondary transition-colors mr-4">
                    <Mic2 size={20} />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-primary group-hover:text-secondary transition-colors">Etkinlik & Org.</span>
                     <span className="text-xs text-slate-500">Kurumsal & Özel</span>
                  </div>
                </a>
                <a href="#cat-digital" className="group flex items-center p-2 transition-all">
                  <div className="bg-white p-3 rounded-full text-slate-400 border border-slate-200 group-hover:text-secondary group-hover:border-secondary transition-colors mr-4">
                    <Layers size={20} />
                  </div>
                  <div>
                     <span className="block text-sm font-bold text-primary group-hover:text-secondary transition-colors">Dijital & Sosyal</span>
                     <span className="text-xs text-slate-500">Marka Yönetimi</span>
                  </div>
                </a>
             </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};