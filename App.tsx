
import React, { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CookieBanner } from './components/layout/CookieBanner';
import { Contact } from './components/layout/Contact';
import { Hero } from './components/sections/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { ValueProp } from './components/sections/ValueProp';
import { Services } from './components/sections/Services';
import { KPI } from './components/sections/KPI';
import { SuccessStories } from './components/sections/SuccessStories';
import { Insights } from './components/sections/Insights';
import { BackToTop } from './components/common/BackToTop';

const App: React.FC = () => {
  // Sync lang attribute with localStorage preference for SEO/A11y
  useEffect(() => {
    const savedLang = localStorage.getItem('ecypro_lang');
    if (savedLang) {
      document.documentElement.lang = savedLang;
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-neutral selection:bg-secondary selection:text-white">
      <Navbar />
      <main className="flex-grow" role="main" id="main-content">
        <Hero />
        <TrustBar />
        <ValueProp />
        <Services />
        <KPI />
        <SuccessStories />
        <Insights />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
      <BackToTop />
    </div>
  );
};

export default App;