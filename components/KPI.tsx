import React from 'react';
import { STATS } from '../constants';
import { FadeIn } from './FadeIn';

export const KPI: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-bottom translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 mb-20">
          <div className="lg:col-span-1">
            <FadeIn>
              <h2 className="text-h2-d font-serif font-bold mb-8 leading-tight">
                Rakamlarla <br/><span className="text-secondary">Etkimiz</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed font-light border-l-2 border-secondary pl-6">
                Sadece strateji üretmiyoruz, işletmeniz için ölçülebilir finansal sonuçlar ve kalıcı değer yaratıyoruz.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-slate-700/50 pt-16">
          {STATS.map((stat, idx) => (
            <FadeIn key={stat.id} delay={idx * 100}>
              <div className="flex flex-col h-full group relative pl-6 border-l border-slate-700/50 hover:border-secondary transition-colors duration-500">
                <div className="text-5xl lg:text-6xl font-serif font-bold text-white mb-4 group-hover:text-secondary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-white font-bold text-lg mb-2">
                  {stat.label}
                </div>
                <div className="text-slate-400 text-sm font-light leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};