
export const trackEvent = (category: string, action: string, label?: string) => {
  // Gerçek bir GA4/GTM entegrasyonu için buraya window.gtag(...) kodu gelecektir.
  // Şimdilik geliştirme aşamasında konsola logluyoruz.
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Analytics] ${category} - ${action}`, label ? `(${label})` : '');
  }
};
