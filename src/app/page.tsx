'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import TechStack from '../components/TechStack/TechStack';
import Portfolio from '../components/Portfolio/Portfolio';
import WhyUs from '../components/WhyUs/WhyUs';
import Testimonials from '../components/Testimonials/Testimonials';
import Plans from '../components/Plans/Plans';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import FAQ from '../components/FAQ/FAQ';

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 1000,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Portfolio />
      <WhyUs />
      <Testimonials />
      <Plans />
      <FAQ />
      <Contact />
      <Footer />
      
      {/* Botão Flutuante do WhatsApp */}
      <a href="https://wa.me/5511939034586" target="_blank" className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:bg-green-600 hover:scale-110 transition-all duration-300">
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>
    </main>
  );
}