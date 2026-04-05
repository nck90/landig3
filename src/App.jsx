import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import PainPoints from './components/sections/PainPoints';
import HowItWorks from './components/sections/HowItWorks';
import Features from './components/sections/Features';
import CaseStudies from './components/sections/CaseStudies';
import Offer from './components/sections/Offer';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';
import LogoMarquee from './components/sections/LogoMarquee';
import Preloader from './components/sections/Preloader';
import CustomCursor from './components/layout/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-surface-50 text-surface-900 font-sans mx-auto cursor-none">
      <Preloader />
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <LogoMarquee />
        <PainPoints />
        <HowItWorks />
        <Features />
        <CaseStudies />
        <Offer />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
