import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';
import { useLanguage } from '../../lib/useLanguage';
import { COOKIE_BANNER_COPY } from '../../constants';

export const CookieBanner: React.FC = () => {
  const { lang } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('ecypro_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({ essential: true, analytics: true, marketing: true });
    saveConsent('all');
  };

  const handleSavePreferences = () => {
    saveConsent('custom');
  };

  const saveConsent = (type: string) => {
    localStorage.setItem('ecypro_cookie_consent', JSON.stringify({
      timestamp: new Date().toISOString(),
      type: type,
      preferences: type === 'all' ? { essential: true, analytics: true, marketing: true } : preferences
    }));
    trackEvent('CookieBanner', 'Consent', type);
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 p-6 z-50 animate-in slide-in-from-bottom-5 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-slate-600 font-light max-w-2xl text-center md:text-left">
              {COOKIE_BANNER_COPY.text[lang]}
            </p>
            <div className="flex space-x-4 whitespace-nowrap">
              <button 
                onClick={() => setShowSettings(true)}
                className="text-sm font-bold text-slate-500 hover:text-primary transition-colors px-4 py-2"
              >
                {COOKIE_BANNER_COPY.settings[lang]}
              </button>
              <button 
                onClick={handleAcceptAll}
                className="bg-primary text-white text-sm font-bold px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors shadow-md outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                {COOKIE_BANNER_COPY.accept[lang]}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl p-6 md:p-8 animate-in zoom-in-95">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-serif font-bold text-primary">{COOKIE_BANNER_COPY.modalTitle[lang]}</h3>
              <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-primary">
                <X size={24} />
              </button>
            </div>
            
            <p className="text-slate-600 text-sm mb-6">
              {COOKIE_BANNER_COPY.modalDesc[lang]}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <h4 className="font-bold text-primary text-sm">{COOKIE_BANNER_COPY.essential[lang]}</h4>
                  <p className="text-xs text-slate-500 mt-1">{COOKIE_BANNER_COPY.essentialDesc[lang]}</p>
                </div>
                <div className="text-xs font-bold text-slate-400 bg-slate-200 px-2 py-1 rounded">{COOKIE_BANNER_COPY.alwaysActive[lang]}</div>
              </div>

              <div className="flex items-center justify-between p-4 border border-slate-100 rounded-lg">
                <div>
                  <h4 className="font-bold text-primary text-sm">{COOKIE_BANNER_COPY.analytics[lang]}</h4>
                  <p className="text-xs text-slate-500 mt-1">{COOKIE_BANNER_COPY.analyticsDesc[lang]}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={preferences.analytics} onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})} className="sr-only peer" />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-secondary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 border border-slate-100 rounded-lg">
                <div>
                  <h4 className="font-bold text-primary text-sm">{COOKIE_BANNER_COPY.marketing[lang]}</h4>
                  <p className="text-xs text-slate-500 mt-1">{COOKIE_BANNER_COPY.marketingDesc[lang]}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={preferences.marketing} onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})} className="sr-only peer" />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-secondary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button 
                onClick={handleAcceptAll}
                className="text-sm font-bold text-slate-600 hover:text-primary px-4 py-2"
              >
                {COOKIE_BANNER_COPY.acceptAll[lang]}
              </button>
              <button 
                onClick={handleSavePreferences}
                className="bg-primary text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors"
              >
                {COOKIE_BANNER_COPY.save[lang]}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};