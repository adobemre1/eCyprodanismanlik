import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TrustBarSection from "./components/TrustBarSection";
import ValueSection from "./components/ValueSection";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import TeamSection from "./components/TeamSection";
import BlogSection from "./components/BlogSection";
import PartnersSection from "./components/PartnersSection";
import ApproachSection from "./components/ApproachSection";
import ReferencesSection from "./components/ReferencesSection";
import CareersSection from "./components/CareersSection";
import CTASection from "./components/CTASection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content">
        <HeroSection />
        <TrustBarSection />
        <ValueSection />
        <ServicesSection />
        <StatsSection />
        <TeamSection />
        <BlogSection />
        <PartnersSection />
        <ApproachSection />
        <ReferencesSection />
        <CareersSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
