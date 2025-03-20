import React, { useRef, useEffect } from 'react';

interface SkillItemProps {
  name: string;
  level: number;
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && itemRef.current) {
          setTimeout(() => {
            if (itemRef.current) {
              itemRef.current.style.width = `${level}%`;
              itemRef.current.style.opacity = '1';
            }
          }, 100 * index);
        }
      });
    }, { threshold: 0.1 });
    
    if (itemRef.current) {
      observer.observe(itemRef.current.parentElement as HTMLElement);
    }
    
    return () => observer.disconnect();
  }, [index, level]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          ref={itemRef}
          className="h-full bg-gradient-to-r from-amd to-amd-dark rounded-full transition-all duration-1000 ease-out"
          style={{ width: '0%', opacity: 0 }}
        ></div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, items }: { title: string, items: { name: string, level: number }[] }) => {
  return (
    <div className="mb-12">
      <h3 className="text-lg font-medium mb-6">{title}</h3>
      <div>
        {items.map((skill, index) => (
          <SkillItem key={skill.name} name={skill.name} level={skill.level} index={index} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
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

  const programmingSkills = [
    { name: 'Python', level: 95 },
    { name: 'Java', level: 90 },
    { name: 'C++', level: 85 },
    { name: 'JavaScript/TypeScript', level: 80 },
    { name: 'C#', level: 75 },
    { name: 'SQL', level: 70 },
  ];

  const webSkills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Streamlit', level: 80 },
    { name: 'JavaScript', level: 80 },
    { name: 'Shell Scripting', level: 75 },
  ];

  const mlSkills = [
    { name: 'TensorFlow', level: 85 },
    { name: 'pandas', level: 85 },
    { name: 'NumPy', level: 80 },
    { name: 'Matplotlib', level: 75 },
    { name: 'Google Maps API', level: 70 },
  ];

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="section-subtitle">My Skills</span>
            <h2 className="section-title">Technical Expertise</h2>
            <p className="mt-4 text-muted-foreground">
              I've developed a diverse set of skills throughout my academic journey and professional experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            <div>
              <SkillCategory title="Programming Languages" items={programmingSkills} />
              <SkillCategory title="Web Technologies" items={webSkills} />
            </div>
            
            <div>
              <SkillCategory title="ML & Data Science" items={mlSkills} />
              
              <div className="mb-12">
                <h3 className="text-lg font-medium mb-6">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Streamlit', 'Yolov5', 'ultralytics'].map((tool) => (
                    <span 
                      key={tool} 
                      className="px-3 py-1.5 bg-secondary rounded-full text-sm inline-block"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-6">Developer Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'VS Code', 'PyCharm', 'IntelliJ', 'CLion', 'Eclipse', 'Vim'].map((tool) => (
                    <span 
                      key={tool} 
                      className="px-3 py-1.5 bg-secondary rounded-full text-sm inline-block"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
