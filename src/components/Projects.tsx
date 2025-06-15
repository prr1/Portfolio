import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include real-time inventory management, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Project Management Tool',
      description: 'A collaborative project management application with real-time updates, task tracking, and team communication features. Built with modern web technologies.',
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'An intelligent analytics platform that uses machine learning to provide insights and predictions for business data visualization and reporting.',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'D3.js', 'Docker'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, transaction history, and budget tracking features. Focus on security and user experience.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Plaid API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Social Media Platform',
      description: 'A modern social media platform with real-time messaging, content sharing, and community features. Built with scalability and performance in mind.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'GraphQL', 'Node.js', 'Redis', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Learning Management System',
      description: 'An educational platform with course management, interactive quizzes, progress tracking, and video streaming capabilities for online learning.',
      image: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'AWS S3', 'WebRTC'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and passion projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-800 hover:border-gray-500 transition-colors duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
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