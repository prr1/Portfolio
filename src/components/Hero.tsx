import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900/20 to-purple-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Rahul Reddy Padakanti
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Full-Stack Developer & UI/UX Designer passionate about creating exceptional digital experiences
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <a 
              href="#contact"
              className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/prr1" className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/rahul-reddy-padakanti/" className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="mailto:rahulreddypadakanti@gmail.com" className="p-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;