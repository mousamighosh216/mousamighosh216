import { label } from 'framer-motion/client';
import React, { useState } from 'react';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('about');

  return (
    <nav className="w-full bg-boho-beige py-6 px-8">
      <div className="max-w-7xl mx-auto w-full">
          <div className="hidden md:flex space-x-8 justify-between items-center text-[15px] font-serif cursor-pointer font-semibold ms-20 me-20">
            <a href="/" className="text-black hover:text-gray-700">Home</a>
            <a href="/about" className="text-black  hover:text-gray-700">About</a>
            <a href="/project" className="text-black  hover:text-gray-700">Project</a>
            <a href="/contact" className="text-black  hover:text-gray-700">Contact</a>
          </div>
      </div>
    </nav>
  );
}