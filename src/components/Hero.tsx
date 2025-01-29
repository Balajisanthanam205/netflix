import React from 'react';
import { Play, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Content } from '../types';

interface HeroProps {
  content: Content;
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <img
          src={content.imageUrl}
          alt={content.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{content.title}</h1>
        <p className="text-lg text-gray-200 mb-6">{content.description}</p>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded hover:bg-gray-200 transition">
            <Play size={20} />
            Play
          </button>
          <button className="flex items-center gap-2 px-8 py-3 bg-gray-500/70 text-white rounded hover:bg-gray-500/90 transition">
            <Info size={20} />
            More Info
          </button>
        </div>
      </motion.div>
    </div>
  );
};