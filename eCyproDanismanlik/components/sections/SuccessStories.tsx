import React from 'react';
import { CASE_STUDIES, SUCCESS_STORIES_COPY } from '../../constants';
import { FadeIn } from '../common/FadeIn';
import { trackEvent } from '../../lib/analytics';
import { useLanguage } from '../../lib/useLanguage';

export const SuccessStories: React.FC = () => {
  const { lang } = useLanguage();

  if (!CASE_STUDIES || CASE_STUDIES.length === 0) {
    return null;
  }

  return (
    <section id="success-stories" className="py-24 lg:py-32 bg-white" aria-labelledby="cases-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-slate-100 pb-8">
            <div>
               <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">
                 {SUCCESS_STORIES_COPY.badge[lang]}
               </span>
               <h2 id="cases-heading" className="text-h2-d font-serif font-bold text-primary mb-4">
                {SUCCESS_STORIES_COPY.title[lang]}
              </h2>
               <p className="text-slate-600 font-light text-lg max-w-xl">
                 {SUCCESS_STORIES_COPY.description[lang]}
               </p>
            </div>
            <a href="#" className="text-primary font-bold hover:text-secondary transition-colors mt-6 md:mt-0 uppercase tracking-widest text-xs border-b border-slate-200 pb-1 hover:border-secondary">
              {SUCCESS_STORIES_COPY.viewAll[lang]}
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {CASE_STUDIES.map((study, idx) => (
            <FadeIn key={study.id} delay={idx * 150}>
              <article
                className="group cursor-pointer h-full flex flex-col border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200 transition-all duration-500 hover:-translate-y-1"
                onClick={() => trackEvent('CaseStudy', 'Click', study.client)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.client}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur text-primary text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-widest shadow-sm">
                      {study.sector[lang]}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow bg-white">
                  <div className="text-3xl font-serif font-bold text-secondary mb-2">
                    {study.result[lang]}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {study.client}
                  </h3>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                     {study.category[lang]}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                    {study.description[lang]}
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-50">
                    <span className="inline-flex items-center text-xs font-bold text-primary uppercase tracking-wider group-hover:ml-2 transition-all duration-300">
                      {SUCCESS_STORIES_COPY.details[lang]} <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
