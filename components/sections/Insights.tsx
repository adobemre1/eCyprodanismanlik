import React from 'react';
import { BLOG_POSTS, INSIGHTS_COPY } from '../../constants';
import { FadeIn } from '../common/FadeIn';
import { trackEvent } from '../../lib/analytics';
import { useLanguage } from '../../lib/useLanguage';

export const Insights: React.FC = () => {
  const { lang } = useLanguage();

  if (!BLOG_POSTS || BLOG_POSTS.length === 0) {
    return null;
  }

  return (
    <section id="insights" className="py-24 lg:py-32 bg-neutral border-t border-slate-200" aria-labelledby="insights-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end">
          <FadeIn>
             <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">
                {INSIGHTS_COPY.badge[lang]}
             </span>
            <h2 id="insights-heading" className="text-h2-d font-serif font-bold text-primary mb-6">
              {INSIGHTS_COPY.title[lang]}
            </h2>
            <p className="text-slate-600 max-w-2xl text-lg font-light">
              {INSIGHTS_COPY.description[lang]}
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <a href="#" className="hidden md:inline-block px-8 py-3 border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-primary hover:text-white hover:border-transparent transition-all">
              {INSIGHTS_COPY.viewAll[lang]}
            </a>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {BLOG_POSTS.map((post, idx) => (
            <FadeIn key={post.id} delay={idx * 150}>
              <article 
                className="flex flex-col h-full bg-transparent group cursor-pointer"
                onClick={() => trackEvent('Blog', 'Read', post.title[lang])}
              >
                <div className="border-t-2 border-slate-200 pt-6 mb-4 group-hover:border-secondary transition-colors duration-500">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                    <span className="text-secondary">{post.category[lang]}</span>
                    <span className="text-slate-300">•</span>
                    <span>{post.date[lang]}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-400 font-medium normal-case">{post.readTime[lang]}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4 leading-snug group-hover:text-secondary transition-colors duration-300">
                    {post.title[lang]}
                  </h3>
                </div>
                <div className="mt-auto">
                   <span className="text-sm font-bold text-primary border-b border-primary/20 pb-1 hover:border-primary transition-colors inline-block">
                     {INSIGHTS_COPY.readArticle[lang]}
                   </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        
        <div className="md:hidden mt-12 text-center">
          <a href="#" className="inline-block px-8 py-3 border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-primary hover:text-white hover:border-transparent transition-all">
            {INSIGHTS_COPY.viewAll[lang]}
          </a>
        </div>
      </div>
    </section>
  );
};