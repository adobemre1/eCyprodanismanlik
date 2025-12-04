import { useEffect } from 'react';
import { hasConsent, initAnalytics } from '../utils/analytics';

const AnalyticsProvider = ({ children }) => {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_ID;
    if (hasConsent()) {
      initAnalytics(measurementId);
    }
  }, []);

  return children;
};

export default AnalyticsProvider;
