import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start animations
          const elements = entry.target.querySelectorAll('.reveal-animation > *');
          elements.forEach(el => {
            (el as HTMLElement).style.animationPlayState = 'running';
          });
        }
      });
    }, { threshold: 0.1 });
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className="min-h-screen flex flex-col justify-center items-center pt-20 pb-16" 
      id="hero"
      ref={containerRef}
    >
      <div className="container-custom max-w-5xl mx-auto reveal-animation">
        <div className="relative">
          <span className="absolute -top-3 left-0 text-xs font-medium text-amd tracking-widest animate-fade-in opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
            COMPUTER SCIENCE STUDENT
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mt-8">
            Naween Sarwari
          </h1>
        </div>
        
        <div className="mt-8 md:mt-12 max-w-2xl">
          <p className="text-xl md:text-2xl font-light text-muted-foreground">
            B.S. Computer Science at Western University <br className="hidden sm:block" />
            Incoming Validation Engineer at AMD
          </p>
          
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a href="mailto:nsarwari@uwo.ca" className="text-sm flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <span className="underline">nsarwari@uwo.ca</span>
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <a href="tel:6479132144" className="text-sm flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <span className="underline">(647) 913-2144</span>
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <a href="https://linkedin.com/in/naweem-sarwari" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <span className="underline">linkedin.com/in/naween-sarwari</span>
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <a href="https://github.com/naweensar" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <span className="underline">github.com/naweensar</span>
            </a>
          </div>
        </div>
        
        <div className="mt-10 md:mt-16 flex flex-col sm:flex-row gap-4">
          <a 
            href="#projects" 
            className="btn-primary px-8 py-3 h-auto text-base"
          >
            View My Projects
          </a>
          <a 
            href="#experience" 
            className="btn-secondary px-8 py-3 h-auto text-base"
          >
            My Experience
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-xs font-light text-muted-foreground mb-2">Scroll Down</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2L8 22M8 22L2 16M8 22L14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
