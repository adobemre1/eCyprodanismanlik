import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { useScrollToSection } from '../common/useScrollToSection';
import { trackEvent } from '../../lib/analytics';
import { useLanguage } from '../../lib/useLanguage';
import { FOOTER_COPY } from '../../constants';

export const Footer: React.FC = () => {
  const scrollToSection = useScrollToSection();
  const { lang } = useLanguage();

  const handleFooterLink = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string, label: string) => {
    trackEvent('Footer', 'Click', label);
    if (href.startsWith('#')) {
      scrollToSection(e, href);
    }
  };

  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-slate-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Column 1: Brand */}
          <div className="space-y-8">
            <a href="#hero" onClick={(e) => handleFooterLink(e, '#hero', 'Brand Logo')} className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded">
              <h3 className="text-3xl font-serif font-bold tracking-tight">EcyPro<span className="text-secondary">.</span></h3>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              {FOOTER_COPY.description[lang]}
            </p>
            <div className="flex space-x-4">
              <a href="#" onClick={() => trackEvent('Social', 'Click', 'LinkedIn')} aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors border border-slate-700 p-2.5 rounded-full hover:bg-slate-800 outline-none focus-visible:ring-2 focus-visible:ring-secondary"><Linkedin size={18} /></a>
              <a href="#" onClick={() => trackEvent('Social', 'Click', 'Twitter')} aria-label="Twitter" className="text-slate-400 hover:text-white transition-colors border border-slate-700 p-2.5 rounded-full hover:bg-slate-800 outline-none focus-visible:ring-2 focus-visible:ring-secondary"><Twitter size={18} /></a>
              <a href="#" onClick={() => trackEvent('Social', 'Click', 'Instagram')} aria-label="Instagram" className="text-slate-400 hover:text-white transition-colors border border-slate-700 p-2.5 rounded-full hover:bg-slate-800 outline-none focus-visible:ring-2 focus-visible:ring-secondary"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Column 2: Hizmetler */}
          <div>
            <h4 className="text-xs font-bold mb-8 text-white uppercase tracking-widest border-b border-slate-800 pb-2 inline-block">{FOOTER_COPY.servicesTitle[lang]}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#cat-consulting" onClick={(e) => handleFooterLink(e, '#cat-consulting', 'Consulting')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">{lang === 'tr' ? 'Stratejik Danışmanlık' : 'Strategic Consulting'}</a></li>
              <li><a href="#cat-consulting" onClick={(e) => handleFooterLink(e, '#cat-consulting', 'HR')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">{lang === 'tr' ? 'İnsan Kaynakları' : 'Human Resources'}</a></li>
              <li><a href="#cat-consulting" onClick={(e) => handleFooterLink(e, '#cat-consulting', 'Leadership')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">{lang === 'tr' ? 'Liderlik & Koçluk' : 'Leadership & Coaching'}</a></li>
              <li><a href="#cat-events" onClick={(e) => handleFooterLink(e, '#cat-events', 'Corporate Events')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">{lang === 'tr' ? 'Kurumsal Etkinlikler' : 'Corporate Events'}</a></li>
              <li><a href="#cat-events" onClick={(e) => handleFooterLink(e, '#cat-events', 'Private Events')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">{lang === 'tr' ? 'Özel Davetler' : 'Private Events'}</a></li>
              <li><a href="#cat-digital" onClick={(e) => handleFooterLink(e, '#cat-digital', 'Digital')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">{lang === 'tr' ? 'Dijital & Sosyal Medya' : 'Digital & Social Media'}</a></li>
            </ul>
          </div>

          {/* Column 3: Hızlı Linkler */}
          <div>
            <h4 className="text-xs font-bold mb-8 text-white uppercase tracking-widest border-b border-slate-800 pb-2 inline-block">{FOOTER_COPY.corporateTitle[lang]}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#value-prop" onClick={(e) => handleFooterLink(e, '#value-prop', 'About')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">{lang === 'tr' ? 'Hakkımızda' : 'About Us'}</a></li>
              <li><a href="#success-stories" onClick={(e) => handleFooterLink(e, '#success-stories', 'Cases')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">{lang === 'tr' ? 'Başarı Hikayeleri' : 'Case Studies'}</a></li>
              <li><a href="#insights" onClick={(e) => handleFooterLink(e, '#insights', 'Insights')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">{lang === 'tr' ? 'İçgörüler & Blog' : 'Insights & Blog'}</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">{lang === 'tr' ? 'Kariyer' : 'Careers'}</a></li>
              <li><a href="#contact" onClick={(e) => handleFooterLink(e, '#contact', 'Contact')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">{lang === 'tr' ? 'İletişim' : 'Contact'}</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-xs font-bold mb-8 text-white uppercase tracking-widest border-b border-slate-800 pb-2 inline-block">{FOOTER_COPY.newsletterTitle[lang]}</h4>
            <p className="text-slate-400 text-sm mb-6 font-light">
              {FOOTER_COPY.newsletterDesc[lang]}
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => { e.preventDefault(); trackEvent('Newsletter', 'Subscribe'); }}>
              <label htmlFor="newsletter-email" className="sr-only">{FOOTER_COPY.newsletterPlaceholder[lang]}</label>
              <input
                type="email"
                id="newsletter-email"
                placeholder={FOOTER_COPY.newsletterPlaceholder[lang]}
                className="bg-slate-800/50 border border-slate-700 text-white px-5 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary text-sm transition-all placeholder:text-slate-600"
              />
              <button type="submit" className="bg-white text-primary px-5 py-3 rounded-lg text-sm font-bold hover:bg-secondary hover:text-white transition-colors uppercase tracking-wide outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary focus-visible:ring-offset-primary">
                {FOOTER_COPY.subscribe[lang]}
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 border-t border-slate-800 pt-10">
          <p>&copy; {new Date().getFullYear()} EcyPro. {FOOTER_COPY.rights[lang]}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{FOOTER_COPY.privacy[lang]}</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-white transition-colors">{FOOTER_COPY.kvkk[lang]}</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-white transition-colors">{FOOTER_COPY.cookies[lang]}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
