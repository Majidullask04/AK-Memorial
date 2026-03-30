import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from './sections/About';
import BentoGrid from './sections/BentoGrid';
import ContactForm from './sections/ContactForm';
import DoctorProfile from './sections/DoctorProfile';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Navigation from './sections/Navigation';
import PrecisionCare from './sections/PrecisionCare';
import Reviews from './sections/Reviews';
import Services from './sections/Services';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#040b14] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="orb absolute left-[-8rem] top-[12rem] h-80 w-80 bg-[#7dd7ff]/12" />
        <div className="orb absolute right-[-6rem] top-[28rem] h-96 w-96 bg-[#65f7c3]/10" />
        <div className="orb absolute bottom-[-8rem] left-[22%] h-[28rem] w-[28rem] bg-[#a69cff]/10" />
      </div>

      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <PrecisionCare />
        <DoctorProfile />
        <BentoGrid />
        <Reviews />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
