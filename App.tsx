import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ValueProp } from './components/ValueProp';
import { Services } from './components/Services';
import { KPI } from './components/KPI';
import { SuccessStories } from './components/SuccessStories';
import { Insights } from './components/Insights';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-neutral selection:bg-secondary selection:text-white">
      <Navbar />
      <main className="flex-grow">
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
    </div>
  );
};

export default App;