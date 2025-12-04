
import React from 'react';
import { KPI_ITEMS, KPI_COPY } from '../../constants';
import { FadeIn } from '../common/FadeIn';
import { useLanguage } from '../../lib/useLanguage';
import { useCountUp } from '../../lib/useCountUp';
import { trackEvent } from '../../lib/analytics';

// Component to handle individual KPI item animation
const KPIItem: React.FC<{ item: typeof KPI_ITEMS[0], delay: number, lang: 'tr' | 'en' }> = ({ item, delay, lang }) => {
  const animatedValue = useCountUp({
    end: item.value,
    duration: 2500,
    delay: delay
  });

  const getBorderColor = (category: string) => {
    switch (category) {
      case 'consulting': return 'border-l-secondary'; // Gold/Amber
      case 'events': return 'border-l-blue-400'; // Blue
      case 'digital': return 'border-l-purple-400'; // Purple
      default: return 'border-l-slate-400';
    }
  };

  return (
    <div className={`flex flex-col h-full group relative pl-6 border-l-4 ${getBorderColor(item.category)} bg-white/5 rounded-r-xl p-4 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors duration-500`}>
      <div
        className="text-[3rem] lg:text-[4rem] leading-none font-serif font-bold text-white mb-4 group-hover:text-secondary transition-colors duration-300 tabular-nums"
        aria-label={`${item.value}${item.suffix}`}
      >
        {animatedValue}{item.suffix}
      </div>
      <div className="text-white font-bold text-lg mb-2 tracking-wide">
        {item.label[lang]}
      </div>
      <div className="text-slate-300 text-xs font-light leading-relaxed uppercase tracking-wider">
        {item.helperText[lang]}
      </div>
    </div>
  );
};

export const KPI: React.FC = () => {
  const { lang } = useLanguage();

  // Track view event
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackEvent('KPI', 'View', `Item Count: ${KPI_ITEMS.length}`);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('kpi');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="kpi"
      className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden"
      aria-labelledby="kpi-heading"
      role="region"
    >
      {/* Background graphic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-bottom translate-x-1/2 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 mb-20">
          <div className="lg:col-span-1">
            <FadeIn>
              <h2 id="kpi-heading" className="text-h2-d font-serif font-bold mb-8 leading-tight">
                {KPI_COPY.titleLine1[lang]} <br/><span className="text-secondary">{KPI_COPY.titleHighlight[lang]}</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed font-light border-l-2 border-secondary pl-6">
                {KPI_COPY.description[lang]}
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Responsive Grid: 1 col mobile -> 2 cols tablet -> 4 cols desktop */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-slate-700/50 pt-16"
          role="list"
        >
          {KPI_ITEMS.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 150}>
              <div role="listitem" className="h-full">
                <KPIItem item={item} delay={idx * 200} lang={lang} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
