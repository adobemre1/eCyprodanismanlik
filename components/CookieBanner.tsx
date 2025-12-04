import React, { useState } from 'react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 p-6 z-50 animate-in slide-in-from-bottom-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-600 font-light max-w-2xl text-center md:text-left">
          Size daha iyi bir deneyim sunmak ve hizmet kalitemizi artırmak için web sitemizde çerezler kullanılmaktadır. 
          Detaylı bilgi için <a href="#" className="text-primary font-medium hover:underline">Çerez Politikamızı</a> inceleyebilirsiniz.
        </p>
        <div className="flex space-x-4 whitespace-nowrap">
          <button 
            onClick={() => setIsVisible(false)}
            className="text-sm font-bold text-slate-500 hover:text-primary transition-colors px-4 py-2"
          >
            Ayarlar
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="bg-primary text-white text-sm font-bold px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors shadow-md"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
};