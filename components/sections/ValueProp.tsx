
import React from 'react';
import { VALUE_PROPS } from '../../constants';
import { FadeIn } from '../common/FadeIn';

export const ValueProp: React.FC = () => {
  return (
    <section id="value-prop" className="py-24 lg:py-32 bg-white" aria-labelledby="value-prop-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 max-w-3xl">
          <FadeIn>
            <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">
               Değer Önermemiz
            </span>
            <h2 id="value-prop-heading" className="text-h2-d font-serif font-bold text-primary mb-6">
              Neden EcyPro?
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Standart danışmanlık kalıplarının ötesinde, işinize özel tasarlanmış stratejik yaklaşımımızla fark yaratıyoruz.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PROPS.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 100}>
              <div className="flex flex-col items-start group p-8 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-neutral/50 transition-all duration-300 h-full">
                <div className="mb-6 p-4 rounded-xl bg-neutral text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                  <item.icon size={24} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
