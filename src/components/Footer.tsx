import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background py-12">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8">Get In Touch</h2>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:nsarwari@uwo.ca" 
              className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 hover:bg-amd hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/naweem-sarwari" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 hover:bg-amd hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/naweensar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 hover:bg-amd hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Naween Sarwari. All rights reserved.</p>
            <p className="mt-2">BSc. Computer Science | Western University</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
