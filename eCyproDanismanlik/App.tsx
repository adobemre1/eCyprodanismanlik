
import React from 'react';
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
import { ErrorBoundary } from './components/common/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default App;
