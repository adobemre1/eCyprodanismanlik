import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICE_CATEGORIES, SERVICES_COPY } from '../constants';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../lib/useLanguage';

export const Services: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="services" className="py-24 lg:py-32 bg-neutral relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24 text-center md:text-left">
          <FadeIn>
            <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">
              {SERVICES_COPY.badge[lang]}
            </span>
            <h2 className="text-h2-d font-serif font-bold text-primary max-w-3xl">
              {SERVICES_COPY.titleLine1[lang]} <br/>{SERVICES_COPY.titleLine2[lang]}
            </h2>
          </FadeIn>
        </div>

        <div className="space-y-32">
          {SERVICE_CATEGORIES.map((category, catIdx) => (
            <div key={category.id} id={category.id} className="scroll-mt-32 border-b border-slate-200 pb-20 last:border-0 last:pb-0">
              <FadeIn delay={100}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                   <div>
                     <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 flex items-center gap-4">
                       <span className="w-8 h-1 bg-secondary block"></span>
                       {category.title[lang]}
                     </h3>
                     <p className="text-slate-600 max-w-2xl text-lg font-light pl-12">
                       {category.description[lang]}
                     </p>
                   </div>
                   <div className="mt-6 md:mt-0 hidden md:block">
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-4 py-2 rounded-full">
                       {category.items.length} {SERVICES_COPY.countBadge[lang]}
                     </span>
                   </div>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-0 md:pl-12">
                {category.items.map((service, idx) => (
                  <FadeIn key={service.id} delay={idx * 100}>
                    <div className="group relative bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-between border border-slate-100 hover:border-secondary/30">
                      <div>
                        <div className="mb-8 p-4 rounded-xl bg-neutral w-fit text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-500">
                          <service.icon size={28} strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                          {service.title[lang]}
                        </h4>
                        <p className="text-slate-600 leading-relaxed mb-8 font-light text-sm">
                          {service.description[lang]}
                        </p>
                      </div>
                      
                      <a
                        href={service.link}
                        className="inline-flex items-center text-xs font-bold text-primary group-hover:text-secondary transition-colors mt-auto uppercase tracking-widest"
                      >
                        {SERVICES_COPY.viewDetails[lang]}
                        <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                        <span className="absolute inset-0"></span> {/* Stretched link */}
                      </a>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};