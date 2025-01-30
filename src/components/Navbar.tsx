import React, { useState, useEffect } from 'react';
import { Search, Bell, User } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-red-600 text-2xl font-bold">NETFLIX</h1>
         <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-300 hover:text-white">Home</a>
              <a href="#" className="text-gray-300 hover:text-white">TV Shows</a>
              <a href="#" className="text-gray-300 hover:text-white">Movies</a>
              <a href="#" className="text-gray-300 hover:text-white">New & Popular</a>
              <a href="#" className="text-gray-300 hover:text-white">My List</a>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <Search className="w-5 h-5 text-gray-300 cursor-pointer hover:text-white" />
            <Bell className="w-5 h-5 text-gray-300 cursor-pointer hover:text-white" />
            <User className="w-5 h-5 text-gray-300 cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};