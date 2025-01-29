import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Content } from '../types';

interface ContentListProps {
  items: Content[];
  title: string;
}

export const ContentList: React.FC<ContentListProps> = ({ items, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<'year' | 'rating'>('rating');
  const [filterGenre, setFilterGenre] = useState<string>('all');
  const itemsPerPage = 12;

  // Get unique genres from all items
  const allGenres = Array.from(new Set(items.flatMap(item => item.genres)));

  // Filter and sort items
  const filteredItems = items
    .filter(item => filterGenre === 'all' || item.genres.includes(filterGenre))
    .sort((a, b) => sortBy === 'year' ? b.year - a.year : b.rating - a.rating);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="py-8 px-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <div className="flex gap-4">
          <select
            className="bg-gray-800 text-white px-4 py-2 rounded"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'year' | 'rating')}
          >
            <option value="rating">Sort by Rating</option>
            <option value="year">Sort by Year</option>
          </select>
          <select
            className="bg-gray-800 text-white px-4 py-2 rounded"
            value={filterGenre}
            onChange={(e) => setFilterGenre(e.target.value)}
          >
            <option value="all">All Genres</option>
            {allGenres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="aspect-[2/3] rounded-lg overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity p-4">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300 mb-2">
                      {item.year} • {item.duration} • {item.certificate}
                    </p>
                    <p className="text-sm text-gray-300 mb-2">
                      Rating: ⭐ {item.rating.toFixed(1)}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {item.genres.map(genre => (
                        <span key={genre} className="text-xs bg-red-600 px-2 py-1 rounded">
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 line-clamp-3">{item.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-8 gap-4">
        <button
          className="p-2 bg-gray-800 rounded-full disabled:opacity-50"
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <span className="text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="p-2 bg-gray-800 rounded-full disabled:opacity-50"
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};