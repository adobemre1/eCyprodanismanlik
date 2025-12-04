import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { useScrollToSection } from '../common/useScrollToSection';
import { trackEvent } from '../../lib/analytics';

export const Footer: React.FC = () => {
  const scrollToSection = useScrollToSection();

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
              Stratejik yönetim danışmanlığı, kurumsal etkinlik yönetimi ve dijital çözümlerde global standartlarda hizmet sunan güvenilir iş ortağınız.
            </p>
            <div className="flex space-x-4">
              <a href="#" onClick={() => trackEvent('Social', 'Click', 'LinkedIn')} aria-label="LinkedIn Hesabımız" className="text-slate-400 hover:text-white transition-colors border border-slate-700 p-2.5 rounded-full hover:bg-slate-800 outline-none focus-visible:ring-2 focus-visible:ring-secondary"><Linkedin size={18} /></a>
              <a href="#" onClick={() => trackEvent('Social', 'Click', 'Twitter')} aria-label="Twitter Hesabımız" className="text-slate-400 hover:text-white transition-colors border border-slate-700 p-2.5 rounded-full hover:bg-slate-800 outline-none focus-visible:ring-2 focus-visible:ring-secondary"><Twitter size={18} /></a>
              <a href="#" onClick={() => trackEvent('Social', 'Click', 'Instagram')} aria-label="Instagram Hesabımız" className="text-slate-400 hover:text-white transition-colors border border-slate-700 p-2.5 rounded-full hover:bg-slate-800 outline-none focus-visible:ring-2 focus-visible:ring-secondary"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Column 2: Hizmetler */}
          <div>
            <h4 className="text-xs font-bold mb-8 text-white uppercase tracking-widest border-b border-slate-800 pb-2 inline-block">Hizmetlerimiz</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#cat-consulting" onClick={(e) => handleFooterLink(e, '#cat-consulting', 'Stratejik Danışmanlık')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">Stratejik Danışmanlık</a></li>
              <li><a href="#cat-consulting" onClick={(e) => handleFooterLink(e, '#cat-consulting', 'İnsan Kaynakları')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">İnsan Kaynakları</a></li>
              <li><a href="#cat-consulting" onClick={(e) => handleFooterLink(e, '#cat-consulting', 'Liderlik & Koçluk')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">Liderlik & Koçluk</a></li>
              <li><a href="#cat-events" onClick={(e) => handleFooterLink(e, '#cat-events', 'Kurumsal Etkinlikler')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">Kurumsal Etkinlikler</a></li>
              <li><a href="#cat-events" onClick={(e) => handleFooterLink(e, '#cat-events', 'Özel Davetler')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">Özel Davetler</a></li>
              <li><a href="#cat-digital" onClick={(e) => handleFooterLink(e, '#cat-digital', 'Dijital & Sosyal Medya')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">Dijital & Sosyal Medya</a></li>
            </ul>
          </div>

          {/* Column 3: Hızlı Linkler */}
          <div>
            <h4 className="text-xs font-bold mb-8 text-white uppercase tracking-widest border-b border-slate-800 pb-2 inline-block">Kurumsal</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#value-prop" onClick={(e) => handleFooterLink(e, '#value-prop', 'Hakkımızda')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">Hakkımızda</a></li>
              <li><a href="#success-stories" onClick={(e) => handleFooterLink(e, '#success-stories', 'Başarı Hikayeleri')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">Başarı Hikayeleri</a></li>
              <li><a href="#insights" onClick={(e) => handleFooterLink(e, '#insights', 'İçgörüler')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">İçgörüler & Blog</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">Kariyer</a></li>
              <li><a href="#contact" onClick={(e) => handleFooterLink(e, '#contact', 'İletişim')} className="hover:text-secondary transition-colors block outline-none focus-visible:text-secondary">İletişim</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-xs font-bold mb-8 text-white uppercase tracking-widest border-b border-slate-800 pb-2 inline-block">Bülten</h4>
            <p className="text-slate-400 text-sm mb-6 font-light">
              Sektörel trendler ve EcyPro haberleri için e-posta listemize katılın.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => { e.preventDefault(); trackEvent('Newsletter', 'Subscribe'); }}>
              <label htmlFor="newsletter-email" className="sr-only">E-posta adresiniz</label>
              <input 
                type="email" 
                id="newsletter-email"
                placeholder="E-posta adresiniz" 
                className="bg-slate-800/50 border border-slate-700 text-white px-5 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary text-sm transition-all placeholder:text-slate-600"
              />
              <button type="submit" className="bg-white text-primary px-5 py-3 rounded-lg text-sm font-bold hover:bg-secondary hover:text-white transition-colors uppercase tracking-wide outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary focus-visible:ring-offset-primary">
                Abone Ol
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 border-t border-slate-800 pt-10">
          <p>&copy; {new Date().getFullYear()} EcyPro Danışmanlık A.Ş. Tüm hakları saklıdır.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-white transition-colors">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
};