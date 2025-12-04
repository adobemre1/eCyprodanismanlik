import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Anasayfa', href: '#hero' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'İletişim', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:bg-white focus:text-blue-700 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow"
      >
        İçeriğe atla
      </a>
      {/* Top Bar */}
      <div className="py-2 text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>+90 541 714 30 00</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>adobemre1@gmail.com</span>
              </div>
            </div>
            <div className="items-center hidden gap-3 md:flex text-white/80">
              <ShieldCheck className="w-4 h-4" />
              <span>ISO27001 uyumlu süreçler</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="text-2xl font-bold text-gray-900" aria-label="EcyPro Danışmanlık ana sayfaya dön">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900">
                EcyPro
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="items-center hidden md:flex" style={{ gap: '28px' }} aria-label="Ana menü">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-base font-medium leading-relaxed transition-colors duration-200 ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-blue-700 relative after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-0.5 after:bg-blue-700'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setActiveSection(item.href.replace('#', ''))}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="items-center hidden gap-4 md:flex" style={{ marginRight: '16px' }}>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>İlk keşif ücretsiz</span>
            </div>
            <a
              href="#contact"
              onClick={() => trackEvent('cta_click', { location: 'header', label: 'Teklif Alın' })}
              className="px-6 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg"
            >
              Teklif Alın
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600"
              aria-label="Menüyü aç/kapat"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="bg-white border-t border-gray-200 md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1" role="menu" aria-label="Mobil menü">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-blue-600 hover:bg-gray-50 ${
                  activeSection === item.href.replace('#', '') ? 'bg-blue-50 text-blue-700' : ''
                }`}
                onClick={() => {
                  setActiveSection(item.href.replace('#', ''));
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-2">
              <a
                href="#contact"
                className="block w-full px-4 py-2 font-semibold text-center text-white rounded-lg bg-gradient-to-r from-blue-600 to-blue-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Teklif Alın
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
