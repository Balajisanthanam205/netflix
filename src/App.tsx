import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ContentRow } from './components/ContentRow';
import { ContentList } from './components/ContentList';
import { contentData } from './utils/generateData';
import { Menu } from 'lucide-react';

function App() {
  const [currentSection, setCurrentSection] = useState<'home' | 'movies' | 'series' | 'anime'>('home');
  
  // Filter content by type
  const movies = contentData.filter(item => item.type === 'movie');
  const series = contentData.filter(item => item.type === 'series');
  const anime = contentData.filter(item => item.type === 'anime');

  // Get top rated content
  const getTopRated = (items: typeof contentData, count: number) => {
    return [...items].sort((a, b) => b.rating - a.rating).slice(0, count);
  };

  const featuredContent = contentData[0];

  const renderContent = () => {
    switch (currentSection) {
      case 'movies':
        return <ContentList items={movies} title="Movies" />;
      case 'series':
        return <ContentList items={series} title="TV Series" />;
      case 'anime':
        return <ContentList items={anime} title="Anime" />;
      default:
        return (
          <>
            <Hero content={featuredContent} />
            <div className="mt-[-10vh] relative z-10">
              <ContentRow title="Top 10 Movies" items={getTopRated(movies, 10)} />
              <ContentRow title="Popular Series" items={getTopRated(series, 10)} />
              <ContentRow title="Trending Anime" items={getTopRated(anime, 10)} />
              <ContentRow title="New Releases" items={contentData.slice(0, 10)} />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Section Navigation */}
      <div className="bg-black/90 sticky top-16 z-40 py-4 px-8 flex items-center gap-6 border-b border-gray-800">
        <button
          className={`text-lg ${currentSection === 'home' ? 'text-white font-bold' : 'text-gray-400'}`}
          onClick={() => setCurrentSection('home')}
        >
          Home
        </button>
        <button
          className={`text-lg ${currentSection === 'movies' ? 'text-white font-bold' : 'text-gray-400'}`}
          onClick={() => setCurrentSection('movies')}
        >
          Movies
        </button>
        <button
          className={`text-lg ${currentSection === 'series' ? 'text-white font-bold' : 'text-gray-400'}`}
          onClick={() => setCurrentSection('series')}
        >
          TV Series
        </button>
        <button
          className={`text-lg ${currentSection === 'anime' ? 'text-white font-bold' : 'text-gray-400'}`}
          onClick={() => setCurrentSection('anime')}
        >
          Anime
        </button>
      </div>

      {renderContent()}
    </div>
  );
}

export default App;