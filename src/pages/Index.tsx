import React from 'react';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
