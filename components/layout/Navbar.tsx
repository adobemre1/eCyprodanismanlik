import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronUp, Phone, Globe } from 'lucide-react';
import { NAV_ITEMS, CONTACT_CONFIG } from '../../constants';
import { useScrollToSection } from '../common/useScrollToSection';
import { trackEvent } from '../../lib/analytics';
import { useLanguage } from '../../lib/useLanguage';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');
  
  // Use global language hook
  const { lang, setLanguage } = useLanguage();
  
  const dropdownTimeoutRef = useRef<number | null>(null);
  const scrollToSection = useScrollToSection();

  const toggleLanguage = () => {
    const newLang = lang === 'tr' ? 'en' : 'tr';
    setLanguage(newLang);
    trackEvent('Navbar', 'Change Language', newLang);
  };

  // Scroll handler for styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Close menus on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3, rootMargin: "-10% 0px -40% 0px" });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    trackEvent('Navbar', 'Click', label);
    setIsOpen(false);
    setActiveDropdown(null);
    if (href.startsWith('#')) {
      scrollToSection(e, href);
    }
  };

  const handleDropdownEnter = (id: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(id);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // 200ms delay for better UX
  };

  const toggleMobileAccordion = (id: string) => {
    setMobileExpanded(mobileExpanded === id ? null : id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200/50 py-3' 
          : 'bg-transparent border-transparent py-5 lg:py-6'
      }`}
      role="navigation"
      aria-label="Ana Navigasyon"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-full">
        
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero', 'Logo')}
          className="flex items-center h-full group relative z-50 outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg px-2 -ml-2"
          aria-label="EcyPro Anasayfa"
        >
          <span className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-tight transition-opacity">
            EcyPro<span className="text-secondary">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {NAV_ITEMS.map((item) => {
            const isDropdown = item.children && item.children.length > 0;
            const isActive = activeSection === item.href.substring(1);
            
            return (
              <div 
                key={item.id} 
                className="relative h-full flex items-center"
                onMouseEnter={() => isDropdown && handleDropdownEnter(item.id)}
                onMouseLeave={() => isDropdown && handleDropdownLeave()}
              >
                <a
                  href={item.href}
                  onClick={(e) => !isDropdown && handleNavClick(e, item.href, item.label[lang])}
                  className={`text-sm font-medium transition-colors flex items-center gap-1 py-4 uppercase tracking-wide outline-none focus-visible:text-secondary ${
                    isActive ? 'text-primary font-bold' : 'text-slate-600 hover:text-primary'
                  }`}
                  aria-haspopup={isDropdown}
                  aria-expanded={activeDropdown === item.id}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label[lang]}
                  {isDropdown && (
                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                  )}
                </a>

                {/* Active Indicator */}
                <span className={`absolute bottom-2 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>

                {/* Dropdown Panel */}
                {isDropdown && (
                  <div 
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 transition-all duration-200 transform origin-top z-50 ${
                      activeDropdown === item.id 
                        ? 'opacity-100 scale-100 visible translate-y-0' 
                        : 'opacity-0 scale-95 invisible -translate-y-2'
                    }`}
                    role="menu"
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2">
                      {item.children!.map((child) => (
                        <a
                          key={child.id}
                          href={child.href}
                          onClick={(e) => handleNavClick(e, child.href, child.label[lang])}
                          className="block px-6 py-3 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors font-medium border-l-2 border-transparent hover:border-secondary outline-none focus:bg-slate-50"
                          role="menuitem"
                        >
                          {child.label[lang]}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="text-xs font-bold text-slate-500 hover:text-primary transition-colors flex items-center gap-1 px-2 py-1"
            aria-label="Dili değiştir / Change language"
          >
            <Globe size={16} />
            <span>{lang === 'tr' ? 'EN' : 'TR'}</span>
          </button>

          {/* Quick Contact Icon */}
          <a 
            href={CONTACT_CONFIG.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => trackEvent('Navbar', 'Click', 'WhatsApp Icon')}
            className="text-slate-400 hover:text-[#25D366] transition-colors p-2"
            aria-label="WhatsApp"
          >
            <Phone size={20} />
          </a>

          {/* Primary CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact', 'Primary CTA')}
            className="px-6 py-2.5 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-transparent outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            {lang === 'tr' ? 'Teklif Alın' : 'Get Quote'}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary p-2 z-50 outline-none focus:ring-2 focus:ring-secondary rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-8 pb-10 overflow-y-auto">
           {NAV_ITEMS.map((item) => {
             const isDropdown = item.children && item.children.length > 0;
             const isExpanded = mobileExpanded === item.id;

             return (
              <div key={item.id} className="mb-4 border-b border-slate-50 last:border-0 pb-4">
                {isDropdown ? (
                  <div>
                    <button 
                      onClick={() => toggleMobileAccordion(item.id)}
                      className="flex items-center justify-between w-full text-left text-xl font-serif font-bold text-primary py-2 outline-none focus:text-secondary"
                      aria-expanded={isExpanded}
                    >
                      {item.label[lang]}
                      {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-4 space-y-3 border-l-2 border-slate-100 ml-1 py-2">
                        {item.children!.map((child) => (
                          <a
                            key={child.id}
                            href={child.href}
                            onClick={(e) => handleNavClick(e, child.href, `Mobile ${child.label[lang]}`)}
                            className="block text-base font-medium text-slate-600 hover:text-secondary py-1 outline-none focus:text-secondary"
                          >
                            {child.label[lang]}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, `Mobile ${item.label[lang]}`)}
                    className="block text-xl font-serif font-bold text-slate-800 hover:text-secondary py-2 outline-none focus:text-secondary"
                  >
                    {item.label[lang]}
                  </a>
                )}
              </div>
            );
           })}

            {/* Mobile Actions */}
            <div className="mt-auto pt-8 space-y-4">
              <div className="flex justify-center gap-6 pb-4 border-b border-slate-100">
                 <button onClick={toggleLanguage} className="font-bold text-slate-500 flex items-center gap-2 px-4 py-2 border rounded-lg">
                    <Globe size={18} /> {lang === 'tr' ? 'Türkçe' : 'English'}
                 </button>
              </div>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact', 'Mobile CTA')}
                className="block text-center w-full py-4 bg-primary text-white font-bold uppercase tracking-widest rounded-lg shadow-lg active:scale-95 transition-transform"
              >
                {lang === 'tr' ? 'Hemen Başlayın' : 'Start Now'}
              </a>
            </div>
        </div>
      </div>
    </nav>
  );
};