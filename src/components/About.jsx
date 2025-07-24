import React from 'react';
import { Code, Palette, Zap, Cpu, BarChart } from 'lucide-react'; // Add BarChart icon for Data Science

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Full-Stack Development',
      description: 'Proficient in modern web technologies including React, Node.js, and cloud platforms.'
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with attention to user experience.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Optimization',
      description: 'Building fast, scalable applications with clean, maintainable code.'
    },
    {
      icon: <BarChart size={24} />,  // Icon for Data Science
      title: 'Data Science',
      description: 'Extracting meaningful insights from large datasets, creating data pipelines, and applying statistical techniques to drive data-driven decisions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with over a year of experience crafting digital solutions that make a difference. My journey began with a deep curiosity about how things work, and this curiosity has evolved into a career focused on building impactful and innovative web applications. Along the way, I’ve also developed a keen interest in Data Science, exploring how data can drive decisions, uncover trends, and fuel intelligent applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in modern JavaScript frameworks, cloud technologies, and user-centered 
              design principles. When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-indigo-600/20 text-indigo-300 rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-indigo-600/20 text-indigo-300 rounded-full text-sm">TypeScript</span>
              <span className="px-4 py-2 bg-indigo-600/20 text-indigo-300 rounded-full text-sm">Node.js</span>
              <span className="px-4 py-2 bg-indigo-600/20 text-indigo-300 rounded-full text-sm">AWS</span>
              <span className="px-4 py-2 bg-indigo-600/20 text-indigo-300 rounded-full text-sm">Docker</span>
              <span className="px-4 py-2 bg-indigo-600/20 text-indigo-300 rounded-full text-sm">Data Science</span> {/* Add Data Science tag */}
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-colors duration-200">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;