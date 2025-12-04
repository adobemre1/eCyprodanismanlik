import { useState, useEffect } from 'react';

export type Language = 'tr' | 'en';

export const useLanguage = () => {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ecypro_lang') as Language;
      return (saved === 'tr' || saved === 'en') ? saved : 'tr';
    }
    return 'tr';
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const savedLang = localStorage.getItem('ecypro_lang') as Language;
      if (savedLang && (savedLang === 'tr' || savedLang === 'en') && savedLang !== lang) {
        setLang(savedLang);
        document.documentElement.lang = savedLang;
      }
    };

    const handleCustomChange = (e: CustomEvent) => {
      if (e.detail && e.detail !== lang) {
        setLang(e.detail);
        document.documentElement.lang = e.detail;
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('languageChange', handleCustomChange as EventListener);

    // Initial sync
    document.documentElement.lang = lang;

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('languageChange', handleCustomChange as EventListener);
    };
  }, [lang]);

  const setLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('ecypro_lang', newLang);
    document.documentElement.lang = newLang;
    window.dispatchEvent(new CustomEvent('languageChange', { detail: newLang }));
  };

  return { lang, setLanguage };
};
