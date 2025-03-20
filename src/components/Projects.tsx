import React, { useRef, useEffect } from 'react';

interface ProjectItemProps {
  title: string;
  description: string[];
  technologies: string[];
  date: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ 
  title, 
  description, 
  technologies,
  date
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
      className="p-6 rounded-xl bg-secondary/30 mb-8 opacity-0" 
      style={{ animationFillMode: 'forwards', animationDuration: '0.8s' }}
    >
      <div className="flex flex-col md:flex-row justify-between mb-3">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1 md:mt-0">{date}</p>
      </div>
      
      <ul className="mt-3 space-y-2 mb-4">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-amd mr-2 mt-1">•</span>
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech) => (
          <span 
            key={tech} 
            className="px-2 py-1 bg-secondary rounded-full text-xs inline-block"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
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

  const projects = [
    {
      title: "ThermoLogic, SaaS platform",
      description: [
        "Leverages an IoT device within the home to collect real-time operational data and transmit it to be processed",
        "Energy demand prediction by using a gradient-boosted forest model to predict future electricity demand using historical energy data and weather forecasts to decrease in solar energy",
        "Allows the direction of energy to be sent to storage and reduces carbon emissions"
      ],
      technologies: ["TensorFlow", "Arduino", "Python", "HTML/CSS", "JavaScript"],
      date: "January 2025"
    },
    {
      title: "SafeU, Princeton University",
      description: [
        "Developed fundamental emergency app that helps campus users stay informed and secure in real-time by delivering geolocation-based alerts and emergency call notifications",
        "Integrated React Native for cross-platform compatibility, resulting in seamless user experience on both iOS and Android devices",
        "Integrated features like real-time location sharing, SOS alerts, and a customizable safe zone feature powered by Google Maps API"
      ],
      technologies: ["JavaScript", "React Native", "Python", "Google Maps API"],
      date: "November 2024"
    },
    {
      title: "AIDRIS, Harvard University",
      description: [
        "Addresses serious symptoms of acute ischemic and hemorrhagic events as evidenced by real-time emergency detection through integration of a refined YOLOv5 vision model",
        "Delivered fast and reliable notifications as demonstrated by consistent alerts via SMS and email",
        "Enabled empathetic and user-focused healthcare solutions, reflected in its scalability for broader use cases by prioritizing patient needs and designing for future expansion"
      ],
      technologies: ["YOLOv5", "ultralytics", "Python", "OpenCV"],
      date: "October 2024"
    },
    {
      title: "Pitta-Patta (CaT Hack the Valley Winner)",
      description: [
        "Developed \"PittaPatta,\" a web app for dialect translation. It has the ability to handle voice and text input for both input processing and output translation",
        "Incorporated a fine-tuned machine learning model based on foundation models",
        "Optimized model training processes, measured by successful alignment with Spark and LLM environments to overcome integration challenges",
        "Facilitated smooth user interaction with the translation feature and intuitive usage by building the frontend with Streamlit for seamless accessibility"
      ],
      technologies: ["Python", "Streamlit", "OpenAI"],
      date: "October 2023"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="bg-secondary/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="section-subtitle">My Projects</span>
            <h2 className="section-title">Recent Work</h2>
            <p className="mt-4 text-muted-foreground">
              Here are some of the notable projects I've worked on, spanning various technologies and domains.
            </p>
          </div>

          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            {projects.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
