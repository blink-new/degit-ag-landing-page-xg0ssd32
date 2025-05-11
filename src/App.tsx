import React, { useEffect } from 'react';
import { AppProvider } from './lib/context';
import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Team } from './components/sections/Team';
import { Footer } from './components/Footer';
import { SectionObserver } from './components/SectionObserver';
import { Toaster } from './components/ui/toaster';

function App() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <AppProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Team />
        </main>
        <Footer />
        <SectionObserver />
        <Toaster />
      </div>
    </AppProvider>
  );
}

export default App;