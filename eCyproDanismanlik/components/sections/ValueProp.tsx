import React from 'react';
import { VALUE_PROPS, VALUE_PROP_COPY } from '../../constants';
import { FadeIn } from '../common/FadeIn';
import { useLanguage } from '../../lib/useLanguage';

export const ValueProp: React.FC = () => {
  const { lang } = useLanguage();
  return (
    <section id="value-prop" className="py-24 lg:py-32 bg-white" aria-labelledby="value-prop-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 max-w-3xl">
          <FadeIn>
            <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">
               {VALUE_PROP_COPY.badge[lang]}
            </span>
            <h2 id="value-prop-heading" className="text-h2-d font-serif font-bold text-primary mb-6">
              {VALUE_PROP_COPY.title[lang]}
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              {VALUE_PROP_COPY.description[lang]}
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
                  {item.title[lang]}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description[lang]}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
