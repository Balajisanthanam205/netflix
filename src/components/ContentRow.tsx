import React from 'react';
import { motion } from 'framer-motion';
import type { Content } from '../types';

interface ContentRowProps {
  title: string;
  items: Content[];
}

export const ContentRow: React.FC<ContentRowProps> = ({ title, items }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4 px-8">{title}</h2>
      <div className="relative">
        <div className="flex overflow-x-auto gap-4 px-8 pb-4 hide-scrollbar">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex-none w-64 relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative aspect-video rounded-md overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.year} • {item.duration}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};