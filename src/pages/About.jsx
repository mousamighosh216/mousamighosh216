import React from 'react';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 py-20 overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive' }}
          >
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences
          </p>
        </div>

        {/* Bio Section */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Hi, I'm [Your Name]</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I'm a full-stack developer with a passion for creating beautiful, functional web applications. 
                With over 5 years of experience, I've worked on everything from small startups to large-scale 
                enterprise projects.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                I believe in writing clean, maintainable code and creating user experiences that delight. 
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or mentoring aspiring developers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Based in [Your City], I'm always open to new opportunities and collaborations. 
                Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
        

      {/* Decorative vertical bars at bottom */}
      <div className="absolute bottom-8 left-1/4 opacity-30">
        <div className="flex gap-2">
          <div className="w-3 h-16 bg-[#C17B63] rounded-full" />
          <div className="w-3 h-16 bg-[#000000] rounded-full" />
          <div className="w-3 h-16 bg-[#6B7770] rounded-full" />
          <div className="w-3 h-16 bg-[#D4B5A0] rounded-full" />
        </div>
      </div>

      <div className="absolute bottom-8 right-1/4 opacity-30">
        <div className="flex gap-2">
          <div className="w-3 h-16 bg-[#D4B5A0] rounded-full" />
          <div className="w-3 h-16 bg-[#6B7770] rounded-full" />
          <div className="w-3 h-16 bg-[#000000] rounded-full" />
          <div className="w-3 h-16 bg-[#C17B63] rounded-full" />
        </div>
      </div>

      {/* Background decorative circle */}
      <div className="absolute top-1/2 right-12 w-40 h-40 opacity-10">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="#E8D4C4" />
        </svg>
      </div>

      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  )
}

export default About