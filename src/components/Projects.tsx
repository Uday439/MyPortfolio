import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'web' | 'mobile' | 'design' | 'other';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'To-Do List App',
    description: 'This is a cross-platform To-Do List application designed to help users efficiently manage their daily tasks with a sleek and intuitive interface. ensuring fast performance, real-time updates, and reliable data storage.',
    image: 'https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D',
    tags: ['Flutter', 'Django', 'PostgreSQL', 'Python', 'Docker','Git'],
    githubUrl: 'https://github.com/Uday439/TODOLISTAPPLICATION',
    liveUrl: 'https://github.com/Uday439/TODOLISTAPPLICATION',
    category: 'mobile'
  },
  {
    id: 2,
    title: 'Medical ChatBot AI',
    description: 'providing interactive, real-time health guidance. It leverages large language models to answer medical queries securely and efficiently through a user-friendly interface.',
    image: 'https://miro.medium.com/v2/resize:fit:1400/1*viGhVLaYS1uhGh0_ZHu2uQ.png',
    tags: ['Python', 'Gen AI', 'Streamlit', 'Langchain','Git'],
    githubUrl: 'https://github.com/Uday439/MEDICAL_CHATBOT',
    liveUrl: 'https://github.com/Uday439/MEDICAL_CHATBOT',
    category: 'web'
  },
  {
    id: 3,
    title: 'My Portfolio',
    description: 'showcasing projects, skills, and experience. It features smooth navigation, modern design, and real-time contact form integration for seamless user interaction.',
    image: 'https://images-platform.99static.com/zyGMRHflv2UltX6TmMzLnM5QvMc=/200x200:1800x1800/500x500/top/smart/99designs-contests-attachments/131/131244/attachment_131244073',
    tags: ['React.Js', 'Node.Js', 'BootStrap', 'Git'],
    githubUrl: 'https://github.com/Uday439/MyPortfolio.git',
    liveUrl: 'https://udayp.netlify.app/',
    category: 'web'
  },


];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'mobile' | 'design' | 'other'>('all');
  
  const filteredProjects = React.useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Projects
          </h2>
          <div className="w-16 h-1 mx-auto my-4 bg-blue-600 dark:bg-blue-400"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore a selection of my recent work. Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-200 dark:bg-gray-700 rounded-lg">
            {(['all', 'web', 'mobile', 'design', 'other'] as const).map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                  activeCategory === category
                    ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-between">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      aria-label="View live site"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;