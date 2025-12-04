
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICE_CATEGORIES, FALLBACK_MESSAGES } from '../../constants';
import { FadeIn } from '../common/FadeIn';
import { trackEvent } from '../../lib/analytics';

export const Services: React.FC = () => {
  if (!SERVICE_CATEGORIES || SERVICE_CATEGORIES.length === 0) {
    return (
      <section className="py-24 bg-neutral text-center text-slate-500">
        <p>{FALLBACK_MESSAGES.EMPTY_LIST}</p>
      </section>
    );
  }

  return (
    <section id="services" className="py-24 lg:py-32 bg-neutral relative" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24 text-center md:text-left">
          <FadeIn>
            <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">
              360° Hizmet Portföyü
            </span>
            <h2 id="services-heading" className="text-h2-d font-serif font-bold text-primary max-w-3xl">
              İşinizin Her Alanında <br/>Profesyonel Çözümler
            </h2>
          </FadeIn>
        </div>

        <div className="space-y-32">
          {SERVICE_CATEGORIES.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-32 border-b border-slate-200 pb-20 last:border-0 last:pb-0" aria-labelledby={`${category.id}-title`}>
              <FadeIn delay={100}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                   <div>
                     <h3 id={`${category.id}-title`} className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 flex items-center gap-4">
                       <span className="w-8 h-1 bg-secondary block"></span>
                       {category.title}
                     </h3>
                     <p className="text-slate-600 max-w-2xl text-lg font-light pl-12">
                       {category.description}
                     </p>
                   </div>
                   <div className="mt-6 md:mt-0 hidden md:block">
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-4 py-2 rounded-full">
                       {category.items.length} Hizmet Başlığı
                     </span>
                   </div>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 pl-0 md:pl-12">
                {category.items.map((service, idx) => (
                  <FadeIn key={service.id} delay={idx * 100}>
                    <article className="group relative bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-between border border-slate-100 hover:border-secondary/30">
                      <div>
                        <div className="mb-8 p-4 rounded-xl bg-neutral w-fit text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-500">
                          <service.icon size={28} strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed mb-8 font-light text-sm">
                          {service.description}
                        </p>
                      </div>
                      
                      <a
                        href={service.link}
                        onClick={() => trackEvent('Services', 'Click Card', service.title)}
                        className="inline-flex items-center text-xs font-bold text-primary group-hover:text-secondary transition-colors mt-auto uppercase tracking-widest outline-none focus:text-secondary"
                      >
                        Detayları İncele
                        <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                        <span className="absolute inset-0"></span>
                      </a>
                    </article>
                  </FadeIn>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};
