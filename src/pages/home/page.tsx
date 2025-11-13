
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Stylists from './components/Stylists';
import Pricing from './components/Pricing';
import ProcessTimeline from './components/ProcessTimeline';
import Testimonials from './components/Testimonials';
import SpecialOffers from './components/SpecialOffers';
import CTAFinal from './components/CTAFinal';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-[#0E0E0E] text-white overflow-hidden">
      <ScrollProgress />
      <Header scrolled={scrolled} />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Stylists />
      <Pricing />
      <ProcessTimeline />
      <Testimonials />
      <SpecialOffers />
      <CTAFinal />
      <Booking />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
