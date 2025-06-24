import React from 'react';
import { Code, Coffee, Laptop, Sparkles } from 'lucide-react';
import Kiran from '../Kiran.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-16 h-1 mx-auto my-4 bg-blue-600 dark:bg-blue-400"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
           <div className="relative w-full md:w-4/5 h-80 md:h-96 mx-auto">
  {/* Background Card */}
  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-lg z-0"></div>

  {/* Image (perfectly overlaps background card) */}
  <img
    src={Kiran}
    alt="Working on laptop"
    className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl z-10"
  />

  {/* Experience Badge */}
  
</div>

          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Software Developer with a passion for creating exceptional user experiences
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate Full Stack Developer, with over 1+ years of 
              experience building web applications. I specialize in Python, Java, Django, React.js, Node.js, Flutter, Gen AI and modern 
              JavaScript frameworks , with a strong focus on creating responsive, accessible, 
              and performant user interfaces.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              My approach combines technical expertise with creative problem-solving. I thrive in 
              collaborative environments where I can contribute to meaningful projects that make a 
              difference. When I'm not coding, you'll find me exploring new technologies, contributing 
              to open source, or enjoying outdoor activities.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-900 dark:text-gray-200">Clean Code</span>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center">
                <Laptop className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-900 dark:text-gray-200">Responsive Design</span>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center">
                <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-900 dark:text-gray-200">Problem Solver</span>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center">
                <Coffee className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-900 dark:text-gray-200">Fast Learner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;