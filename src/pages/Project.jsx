import React, { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react';

const Project = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack online shopping platform with payment integration, user authentication, and real-time inventory management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with drag-and-drop functionality, team chat, and progress tracking.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'AI Content Generator',
      description: 'An AI-powered content creation tool that helps users generate blog posts, social media content, and marketing copy.',
      tech: ['React', 'Python', 'OpenAI API', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking application with interactive maps, forecasts, and location-based alerts.',
      tech: ['Vue.js', 'Tailwind', 'Weather API', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 py-20 overflow-hidden">
      {/* Decorative Rainbow Arch - Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-32 opacity-40">
        
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}
          >
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of my recent work and creative experiments
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white bg-opacity-60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Links overlay */}
                <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-800" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    aria-label="View GitHub repository"
                  >
                    <Github className="w-5 h-5 text-gray-800" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-gray-700 border border-gray-300 border-opacity-30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 opacity-20">
                <svg viewBox="0 0 100 100">
                  <circle cx="80" cy="80" r="40" fill="#C17B63" />
                  <circle cx="70" cy="70" r="30" fill="#6B7770" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-amber-200 to-orange-200 text-gray-800 font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-gray-300 border-opacity-30">
            View All Projects
          </button>
        </div>
      </div>

      {/* Decorative elements at bottom */}
      <div className="absolute bottom-8 left-8 opacity-30">
        <div className="flex gap-2">
          <div className="w-3 h-20 bg-[#C17B63] rounded-full" />
          <div className="w-3 h-20 bg-[#000000] rounded-full" />
          <div className="w-3 h-20 bg-[#6B7770] rounded-full" />
        </div>
      </div>

      <div className="absolute bottom-8 right-8 opacity-30">
        <div className="flex gap-2">
          <div className="w-3 h-20 bg-[#6B7770] rounded-full" />
          <div className="w-3 h-20 bg-[#000000] rounded-full" />
          <div className="w-3 h-20 bg-[#C17B63] rounded-full" />
        </div>
      </div>

      </section>
  )
}

export default Project