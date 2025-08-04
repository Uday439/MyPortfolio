import React from 'react';
import { ArrowDown, FileText, Github, Linkedin, Twitter } from 'lucide-react';
import Uday from '../Uday.jpg';
import Resume from '../udaykiran-penikalapati.pdf'

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mt-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="block">Hi, I'm</span>
              <span className="text-blue-600 dark:text-blue-400">Udaykiran Penikalapati</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
              Software Developer specializing in creating beautiful, functional websites
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
              I craft responsive websites where technology meets creativity. I'm passionate about building excellent software that improves the lives of those around me.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Let's Talk
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src={Uday} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="flex flex-col items-center">
            <div className="flex space-x-6 mb-6">
              <a 
                href="https://github.com/Uday439" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-gray-800 dark:text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/udaykiran-penikalapati-1a9b66252" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-800 dark:text-white" />
              </a>
              <a 
                href="https://x.com/Udaykiran118528?t=SEzob6U3SvF74XGN0wkJDQ&s=09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 text-gray-800 dark:text-white" />
              </a>
              <a 
                href={Resume} 
                target="_blank"
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
                aria-label="Resume"
              >
                <FileText className="w-6 h-6 text-gray-800 dark:text-white" />
              </a>
            </div>
            <a 
              href="#about" 
              className="animate-bounce p-1 rounded-full bg-white dark:bg-gray-800 shadow-md"
              aria-label="Scroll down"
            >
              <ArrowDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;