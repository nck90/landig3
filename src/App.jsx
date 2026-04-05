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
import CTA from './components/sections/CTA';

function App() {
  return (
    <div className="min-h-screen bg-surface-50 text-surface-900 font-sans mx-auto">
      <Navbar />
      
      <main>
        <Hero />
        <PainPoints />
        <HowItWorks />
        <Features />
        <CaseStudies />
        <Offer />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
