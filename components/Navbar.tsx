import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-sm border-slate-200/50 py-4' 
          : 'bg-transparent border-transparent py-6 lg:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-full">
        {/* Logo */}
        <a href="#" className="flex items-center h-full group relative z-50">
          <span className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-tight transition-opacity">
            EcyPro<span className="text-secondary">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10 xl:space-x-12">
          {NAV_ITEMS.map((item) => (
            <div 
              key={item.label} 
              className="relative group h-full flex items-center"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => item.children && setActiveDropdown(null)}
            >
              <a
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors flex items-center gap-1 py-4 uppercase tracking-wide"
              >
                {item.label}
                {item.children && (
                  <ChevronDown size={14} className="group-hover:text-secondary transition-colors" />
                )}
              </a>

              {/* Active Indicator */}
              <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>

              {/* Dropdown Menu */}
              {item.children && (
                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72 transition-all duration-300 transform origin-top ${
                  activeDropdown === item.label ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}>
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-6 py-3 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors font-medium border-l-2 border-transparent hover:border-secondary"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-transparent"
          >
            Teklif Alın
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary p-2 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-32 px-8 pb-10 overflow-y-auto">
           {NAV_ITEMS.map((item) => (
              <div key={item.label} className="mb-6">
                {item.children ? (
                  <div className="space-y-4">
                    <span className="block text-2xl font-serif font-bold text-primary pb-2 border-b border-slate-100">
                      {item.label}
                    </span>
                    <div className="pl-4 space-y-3 border-l-2 border-slate-100 ml-2">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block text-base font-medium text-slate-600 hover:text-secondary"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block text-2xl font-serif font-bold text-slate-800 hover:text-secondary pb-2 border-b border-slate-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <div className="mt-auto pt-8">
              <a
                href="#contact"
                className="block text-center w-full py-5 bg-primary text-white font-bold uppercase tracking-widest rounded-lg shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Hemen Başlayın
              </a>
            </div>
        </div>
      </div>
    </nav>
  );
};