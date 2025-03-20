import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start animations
          if (leftRef.current) leftRef.current.style.animationPlayState = 'running';
          if (rightRef.current) rightRef.current.style.animationPlayState = 'running';
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-secondary/50">
      <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
        <div 
          ref={leftRef} 
          className="opacity-0 animate-reveal-right"
          style={{ animationPlayState: 'paused' }}
        >
          <span className="section-subtitle">About Me</span>
          <h2 className="section-title mb-8">Computer Science Student at Western University</h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              As a Computer Science student at Western University with a specialization in Computer Science and a minor in Software Engineering (September 2022 - April 2026), I combine academic excellence with real-world application.
            </p>
            <p>
              I'm excited to be joining AMD as a Validation Engineer in May 2025, where I'll be working as an incoming software developer on the Virtualization Validation Engineering team.
            </p>
            <p>
              My journey in tech is driven by a passion for solving complex problems and creating intuitive software that makes a difference. I believe in clean code, thoughtful architecture, and continuous learning.
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-1">Education</h3>
              <p className="text-sm text-muted-foreground">Western University<br/>B.S. Computer Science<br/>Minor in Software Engineering</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">London, ON<br/>Markham, ON (AMD)<br/>Toronto, ON (Diligent)</p>
            </div>
          </div>
        </div>
        
        <div 
          ref={rightRef} 
          className="opacity-0 animate-reveal-left"
          style={{ animationPlayState: 'paused' }}
        >
          <div className="rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-neutral-100 to-secondary shadow-lg relative">
            <div className="absolute inset-4 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Programming" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"></div>
            
            <div className={cn(
              "absolute bottom-6 left-6 right-6 p-4 rounded-lg", 
              "bg-background/70 backdrop-blur-md"
            )}>
              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-amd animate-pulse"></div>
                <p className="text-sm font-medium">Currently working on: Advanced ML Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
