import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
      { icon: Github, href: '#', label: 'GitHub' },
      { icon: Linkedin, href: '#', label: 'LinkedIn' },
      { icon: Twitter, href: '#', label: 'Twitter' },
      { icon: Mail, href: '#', label: 'Email' },
    ];  

  return (
    <footer className='flex flex-col min-h-screen mt-5'>
        <div className={`grow z-0 flex flex-col items-center justify-center  lg:backdrop-blur-sm`}>
             <div className="w-full max-w-lg bg-boho-beige p-8 md:p-12 rounded-t-[100px] shadow-xl">

                <h2 className="text-3xl font-bold text-boho-black mb-2 text-center font-serif">
                    Get in Touch
                </h2>
                <p className="text-boho-sage text-center mb-8 text-sm uppercase tracking-widest">
                    Let's build something beautiful
                </p>

                <form className="space-y-6">
                <div>
                    <label className="block text-xs font-semibold text-boho-black uppercase mb-1">Name</label>
                    <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-boho-tan focus:border-boho-terracotta outline-none py-2 text-boho-black transition-colors"
                    placeholder="Your Name"
                    />
                </div>

                <div>
                <label className="block text-xs font-semibold text-boho-black uppercase mb-1">Email</label>
                <input 
                type="email" 
                className="w-full bg-transparent border-b border-boho-tan focus:border-boho-terracotta outline-none py-2 text-boho-black transition-colors"
                placeholder="hello@example.com"
                />
            </div>

            <div>
                <label className="block text-xs font-semibold text-boho-black uppercase mb-1">Message</label>
                <textarea 
                rows="3"
                className="w-full bg-transparent border-b border-boho-tan focus:border-boho-terracotta outline-none py-2 text-boho-black transition-colors resize-none"
                placeholder="Tell me about your project..."
                />
            </div>

            <button 
                type="submit"
                className="w-full bg-boho-black text-boho-cream py-4 rounded-full font-bold hover:bg-boho-terracotta transition-all duration-300 transform hover:-translate-y-1 shadow-md"
            >
                SEND MESSAGE
            </button>
            </form>
            </div>
        </div>

      <div className="w-full z-10 shadow-[0_-6px_15px_rgba(0,0,0,0.15)] relative bg-boho-beige shadow-xl/30">
      {/* Horizontal Rainbow Arch Design */}
      <div className="relative w-full h-24 flex items-end justify-center overflow-hidden">
        <svg
          viewBox="0 0 800 120"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Left decorative bars */}
          <rect x="50" y="20" width="12" height="80" fill="#C17B63" rx="6" opacity="0.9" />
          <rect x="70" y="20" width="12" height="80" fill="#000000" rx="6" opacity="0.9" />
          <rect x="90" y="20" width="12" height="80" fill="#6B7770" rx="6" opacity="0.9" />
          <rect x="110" y="20" width="12" height="80" fill="#D4B5A0" rx="6" opacity="0.9" />

          {/* Horizontal rainbow arches */}
          {[
            { color: '#C17B63', radius: 280, width: 14 },
            { color: '#000000', radius: 266, width: 14 },
            { color: '#6B7770', radius: 252, width: 14 },
            { color: '#D4B5A0', radius: 238, width: 14 },
            { color: '#F5EDE4', radius: 224, width: 14 },
          ].map((arch, index) => {
            const startAngle = 180;
            const endAngle = 360;
            const largeArcFlag = 1;

            const centerX = 400;
            const centerY = 280;

            const startX = centerX + arch.radius * Math.cos((startAngle * Math.PI) / 180);
            const startY = centerY + arch.radius * Math.sin((startAngle * Math.PI) / 180);
            const endX = centerX + arch.radius * Math.cos((endAngle * Math.PI) / 180);
            const endY = centerY + arch.radius * Math.sin((endAngle * Math.PI) / 180);

            const pathData = `M ${startX} ${startY} A ${arch.radius} ${arch.radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;

            return (
              <path
                key={index}
                d={pathData}
                fill="none"
                stroke={arch.color}
                strokeWidth={arch.width}
                strokeLinecap="round"
                opacity="0.9"
              />
            );
          })}

          {/* Right decorative bars */}
          <rect x="678" y="50" width="10" height="50" fill="#6B7770" rx="5" opacity="0.9" />
          <rect x="694" y="50" width="10" height="50" fill="#000000" rx="5" opacity="0.9" />
          <rect x="710" y="50" width="10" height="50" fill="#4A3428" rx="5" opacity="0.9" />
          <rect x="726" y="50" width="10" height="50" fill="#C17B63" rx="5" opacity="0.9" />

          {/* Background decorative circles */}
          <circle cx="700" cy="30" r="25" fill="#E8D4C4" opacity="0.5" />
          <circle cx="150" cy="40" r="20" fill="#E8D4C4" opacity="0.4" />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-8 pb-8">
        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">

          {/* Social Icons */}
          <div className="flex gap-4 w-full justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full bg-gray-800 bg-opacity-10 hover:bg-opacity-20 transition-all hover:scale-110"
              >
                <social.icon className="w-5 h-5 text-boho-cream" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-gray-300 to-transparent mb-4" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Mousami Ghosh. All rights reserved.</p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Contact;