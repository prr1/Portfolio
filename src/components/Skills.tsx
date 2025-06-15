import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa';
import { FaDocker } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaVuejs } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 80, icon: <FaReact size={20} /> },
        { name: 'TypeScript', level: 80, icon: <FaNodeJs size={20} /> },
        { name: 'Tailwind CSS', level: 85, icon: <FaNodeJs size={20} /> },
        { name: 'Vue.js', level: 80, icon: <FaVuejs size={20} /> }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80, icon: <FaNodeJs size={20} /> },
        { name: 'Python', level: 85, icon: <FaPython size={20} /> },
        { name: 'PostgreSQL', level: 85, icon: <FaDatabase size={20} /> },
        { name: 'MongoDB', level: 80, icon: <FaDatabase size={20} /> }
      ]
    },
    {
      title: 'Data Science',
      skills: [
        { name: 'Pandas', level: 85, icon: <FaPython size={20} /> },
        { name: 'NumPy', level: 85, icon: <FaPython size={20} /> },
        { name: 'Matplotlib', level: 80, icon: <FaPython size={20} /> },
        { name: 'Jupyter Notebooks', level: 85, icon: <FaPython size={20} /> }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'AWS/Cloud', level: 80, icon: <FaAws size={20} /> },
        { name: 'Docker', level: 80, icon: <FaDocker size={20} /> },
        { name: 'Git/GitHub', level: 85, icon: <FaGithub size={20} /> },
        { name: 'Figma', level: 70, icon: <FaNodeJs size={20} /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors duration-200">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-indigo-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
