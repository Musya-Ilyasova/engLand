import React from 'react';
import Hero from './components/Hero';
import BentoGridFeatures from './components/BentoGridFeatures';
import ContentBlock from './components/ContentBlock';
import PricingTable from './components/PricingTable';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <BentoGridFeatures />
      <ContentBlock />
      <PricingTable />
      <ContactForm />
      <Footer />

    </div>
  );
}
