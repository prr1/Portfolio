import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'MoodTunes Music App',
      description: 'Music app that recommends songs based on real-time emotion input.',
      image: 'https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2020/01/music.jpg?fit=1200%2C629&ssl=1',
      technologies: ['React', 'TypeScript', 'Supabase', 'APIs'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'LiveLife Health Platform',
      description: 'Health platform with secure login and reliable API integration.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather info using optimized API calls.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/382319815/AL/ME/HW/135720527/extended-range-weather-forecast-1000x1000.jpeg',
      technologies: ['React', 'Node.js', 'OpenWeather API'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'E-COM',
      description: 'Basic cart app with full CRUD operations.',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Loan Approval Prediction',
      description: 'Predicts loan eligibility using applicant data.',
      image: 'https://www.cashe.co.in/wp-content/uploads/2024/06/What-is-a-Loan.png',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Transaction Categoriser',
      description: 'ML tool to classify transactions by type.',
      image: 'https://www.mindgate.solutions/wp-content/uploads/2019/08/adopt-digital-transaction.jpeg',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'NLTK', 'SQL'],
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
