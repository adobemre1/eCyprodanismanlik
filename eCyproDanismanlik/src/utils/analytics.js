// Lightweight GA initializer. Safe to call multiple times; no-ops without an ID or in SSR.
export const initAnalytics = (measurementId) => {
  if (typeof window === 'undefined') return;
  if (!measurementId) return;
  if (window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

export const hasConsent = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('cookie_consent') === 'granted';
};

// Lightweight event tracker; no-ops if gtag is unavailable.
export const trackEvent = (action, params = {}) => {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', action, params);
};
