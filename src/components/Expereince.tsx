import React, { useRef, useEffect } from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  title, 
  company, 
  location, 
  period, 
  description 
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && itemRef.current) {
          itemRef.current.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef} 
      className="mb-12 opacity-0" 
      style={{ animationFillMode: 'forwards', animationDuration: '0.8s' }}
    >
      <div className="flex flex-col md:flex-row justify-between mb-2">
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-amd font-medium">{company}</p>
        </div>
        <div className="mt-2 md:mt-0 md:text-right">
          <p className="text-sm text-muted-foreground">{location}</p>
          <p className="text-sm font-light">{period}</p>
        </div>
      </div>
      
      <ul className="mt-4 space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-amd mr-2 mt-1">•</span>
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Validation Engineer",
      company: "AMD",
      location: "Markham, ON",
      period: "May 2025",
      description: [
        "Incoming software developer on the Virtualization Validation Engineering team"
      ]
    },
    {
      title: "Software Developer",
      company: "Diligent",
      location: "Toronto, ON",
      period: "September 2024 - December 2024",
      description: [
        "Contributed to the development of a modern investment platform by implementing features that enhanced user entity verification and automated workflows using AI technologies",
        "Built solutions that aligned with the company's mission of fostering trust and enabling seamless investor experience"
      ]
    },
    {
      title: "Python, Java and Academics Tutor",
      company: "Western University",
      location: "London, ON",
      period: "September 2022 - April 2023",
      description: [
        "Created customized lesson plans with adapting content to diverse learning styles",
        "Improved grasp of object-oriented programming skills resulting in an average grade increase of 17%"
      ]
    }
  ];

  return (
    <section id="experience" ref={sectionRef}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="section-subtitle">My Experience</span>
            <h2 className="section-title">Professional Journey</h2>
            <p className="mt-4 text-muted-foreground">
              My work experience spans software development, validation engineering, and academic tutoring.
            </p>
          </div>

          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
