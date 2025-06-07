import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'other';
}

const skills: Skill[] = [
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'React.js', level: 88, category: 'frontend' },
  { name: 'Flutter', level: 82, category: 'frontend' },
  { name: 'Streamlit', level: 80, category: 'frontend' },
  { name: 'Node.js', level: 75, category: 'backend' },
  { name: 'Express', level: 78, category: 'backend' },
  { name: 'Python', level: 72, category: 'backend' },
  { name: 'Django', level: 72, category: 'backend'},
  { name: 'PostgreSQL', level: 70, category: 'backend' },
  { name: 'Git', level: 85, category: 'other' },
  { name: 'Docker', level: 60, category: 'other' },
  { name: 'Gen AI', level: 55, category: 'other' },
  { name: 'UI/UX Design', level: 75, category: 'other' },
  
];

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<'all' | 'frontend' | 'backend' | 'other'>('all');
  
  const filteredSkills = React.useMemo(() => {
    if (activeCategory === 'all') return skills;
    return skills.filter(skill => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Skills
          </h2>
          <div className="w-16 h-1 mx-auto my-4 bg-blue-600 dark:bg-blue-400"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've acquired a diverse set of skills throughout my career. Here's a 
            snapshot of my technical expertise and proficiency levels.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-200 dark:bg-gray-700 rounded-lg">
            {(['all', 'frontend', 'backend', 'other'] as const).map(category => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredSkills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;