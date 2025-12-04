import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Column 1: Brand */}
          <div className="space-y-8">
            <h3 className="text-3xl font-serif font-bold tracking-tight">EcyPro<span className="text-secondary">.</span></h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Stratejik yönetim danışmanlığı, kurumsal etkinlik yönetimi ve dijital çözümlerde global standartlarda hizmet sunan güvenilir iş ortağınız.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors border border-slate-700 p-2.5 rounded-full hover:bg-slate-800"><Linkedin size={18} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors border border-slate-700 p-2.5 rounded-full hover:bg-slate-800"><Twitter size={18} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors border border-slate-700 p-2.5 rounded-full hover:bg-slate-800"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Column 2: Hizmetler */}
          <div>
            <h4 className="text-xs font-bold mb-8 text-white uppercase tracking-widest border-b border-slate-800 pb-2 inline-block">Hizmetlerimiz</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#cat-consulting" className="hover:text-secondary transition-colors block">Stratejik Danışmanlık</a></li>
              <li><a href="#cat-consulting" className="hover:text-secondary transition-colors block">İnsan Kaynakları</a></li>
              <li><a href="#cat-consulting" className="hover:text-secondary transition-colors block">Liderlik & Koçluk</a></li>
              <li><a href="#cat-events" className="hover:text-secondary transition-colors block">Kurumsal Etkinlikler</a></li>
              <li><a href="#cat-events" className="hover:text-secondary transition-colors block">Özel Davetler</a></li>
              <li><a href="#cat-digital" className="hover:text-secondary transition-colors block">Dijital & Sosyal Medya</a></li>
            </ul>
          </div>

          {/* Column 3: Hızlı Linkler */}
          <div>
            <h4 className="text-xs font-bold mb-8 text-white uppercase tracking-widest border-b border-slate-800 pb-2 inline-block">Kurumsal</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#value-prop" className="hover:text-secondary transition-colors block">Hakkımızda</a></li>
              <li><a href="#cases" className="hover:text-secondary transition-colors block">Başarı Hikayeleri</a></li>
              <li><a href="#insights" className="hover:text-secondary transition-colors block">İçgörüler & Blog</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors block">Kariyer</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors block">İletişim</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-xs font-bold mb-8 text-white uppercase tracking-widest border-b border-slate-800 pb-2 inline-block">Bülten</h4>
            <p className="text-slate-400 text-sm mb-6 font-light">
              Sektörel trendler ve EcyPro haberleri için e-posta listemize katılın.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="bg-slate-800/50 border border-slate-700 text-white px-5 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary text-sm transition-all placeholder:text-slate-600"
              />
              <button className="bg-white text-primary px-5 py-3 rounded-lg text-sm font-bold hover:bg-secondary hover:text-white transition-colors uppercase tracking-wide">
                Abone Ol
              </button>
            </div>
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
