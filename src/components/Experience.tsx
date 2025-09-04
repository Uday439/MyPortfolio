import React from 'react';
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Software Developer",
    company: "Sphere Cloud Systems Private Limited.",
    location: "Remote",
    duration: "March 2025 - Present",
    description: [
      "Responsible for building and maintaining both client-side (frontend) and server-side (backend) components of web and mobile applications.",
      "Uses technologies HTML, CSS, JavaScript, and frameworks such as React.js,Typescript, Angular, and Vue.js to create responsive and interactive user interfaces.",
      "Works with server-side languages Python, Node.js, Java, PHP and frameworks  Django, Express, and Spring Boot to manage databases, APIs, authentication, and business logic",
      "Handles database integration, API communication, version control Git, and deployment of applications on cloud platforms AWS, Azure."
    ],
    technologies: ["React.js", "Node.js","Typescript", "MongoDB", "Python", "JavaScript", "PostgreSQL","Git", "Docker","AWS"],
    link: undefined
  },
  {
    id: 2,
    title: "Full Stack Development - Trainee",
    company: "Palle Technologies",
    location: "Bangalore,Karnataka",
    duration: "June 2024 - September 2024",
    description: [
      "Covers both front-end (HTML, CSS, JavaScript, React) and back-end (Python, Django, REST APIs) technologies, enabling students to build complete web applications.",
      "Includes real-world projects like e-commerce sites, dashboards, and CRUD apps to help learners gain practical experience and build a strong portfolio.",
      "Teaches working with databases like MySQL, PostgreSQL, or MongoDB for efficient data management.",
      "Training often includes version control (Git), cloud hosting  AWS), and CI/CD pipeline basics to prepare learners for real-world deployment and collaboration."
    ],
    technologies: ["Python", "Django","JavaScript", "HTML/CSS","MySQL", "Git",],
    link: undefined
  },
  {
    id: 3,
    title: "Mobile Application Developer - Intern",
    company: "Elewayte",
    location: "Remote",
    duration: "October 2023 - Decembeter 2023",
    description: [
      "Covers development for both Android and iOS using native tools (Java for Android, Swift for iOS) and cross-platform frameworks such as Flutter.",
      "Focuses on creating intuitive, responsive, and visually appealing user interfaces using design best practices and tools Figma.",
      "Teaches how to connect mobile apps to backend services using REST APIs, Firebase, for real-time data handling, user authentication, and cloud storage.",
      "Includes testing techniques (manual and automated), debugging, and deploying apps to Google Play Store and Apple App Store, with version control via Git."
    ],
    technologies: ["Java", "Flutter", "Android", "IOS", "Docker", "Gen AI"],
    link: undefined
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Experience
          </h2>
          <div className="w-16 h-1 mx-auto my-4 bg-blue-600 dark:bg-blue-400"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development, showcasing the projects 
            I've worked on and the skills I've developed along the way.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
              )}
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        <span className="font-medium">{experience.company}</span>
                        {experience.link && (
                          <a
                            href={experience.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end space-y-1 mt-2 sm:mt-0">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {experience.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-1" />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <ul className="space-y-2">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600 dark:text-gray-400">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 