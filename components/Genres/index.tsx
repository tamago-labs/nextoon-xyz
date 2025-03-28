"use client"

import React, { useState } from 'react';
import { BookOpen, Filter, TrendingUp, Clock } from 'react-feather';

const GenresContainer = () => {

  const [activeGenre, setActiveGenre] = useState('Romance');
  const [activeFilter, setActiveFilter] = useState('Popular');

  // This matches the Categories Bar from the homepage
  const genres = [
    { id: 'all', name: 'All', icon: BookOpen },
    { id: 'romance', name: 'Romance', icon: null },
    { id: 'action', name: 'Action', icon: null },
    { id: 'fantasy', name: 'Fantasy', icon: null },
    { id: 'comedy', name: 'Comedy', icon: null },
    { id: 'drama', name: 'Drama', icon: null },
    { id: 'scifi', name: 'Sci-Fi', icon: null },
    { id: 'horror', name: 'Horror', icon: null },
  ];

  // Filters available on the genre page
  const filters = [
    { id: 'popular', name: 'Popular', icon: TrendingUp },
    { id: 'new', name: 'New', icon: Clock },
  ];

  // Mock data for two webtoons in this genre
  const genreWebtoons = [
    {
      id: 1,
      title: "Heart Signal",
      author: "Min-ji Park",
      coverImage: "/api/placeholder/280/380",
      description: "When a mysterious dating app appears on her phone, college student Hae-won discovers it can predict who she'll fall in love with. But as she tries to outmaneuver fate, she learns that some connections are inevitable.",
      rating: 4.8,
      views: 2450000,
      likes: 320000,
      episodes: 45,
      tags: ["Romance", "Drama", "College"],
      updateDay: "Saturday",
      isCompleted: false
    },
    {
      id: 2,
      title: "Love Algorithm",
      author: "Jae-hoon Kim",
      coverImage: "/api/placeholder/280/380",
      description: "A brilliant but socially awkward AI researcher develops an algorithm to find his perfect match, only to discover that love follows rules no computer can predict.",
      rating: 4.7,
      views: 1850000,
      likes: 275000,
      episodes: 32,
      tags: ["Romance", "Comedy", "Sci-Fi"],
      updateDay: "Wednesday",
      isCompleted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-sky-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Genres</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover stories that match your taste from our curated collection of webtoons.
          </p>
        </div>

        {/* Categories Bar - matching the homepage design */}
        <div className="flex overflow-x-auto space-x-4 py-4 mb-8 scrollbar-hide">
          {genres.map((genre) => (
            <button
              key={genre.id}
              onClick={() => setActiveGenre(genre.name)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${activeGenre === genre.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
            >
              {genre.icon && <genre.icon size={16} />}
              <span>{genre.name}</span>
            </button>
          ))}
        </div>

        {/* Genre Header */}
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{activeGenre}</h2>
              <p className="text-gray-600">
                {activeGenre === 'Romance' ?
                  'Stories focusing on love, relationships, and emotional connections between characters.' :
                  'Stories in this genre category.'}
              </p>
            </div>

            <div className="flex mt-4 md:mt-0">
              <div className="relative">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <div className="px-3 py-2 bg-gray-100 text-gray-600 flex items-center">
                    <Filter size={16} className="mr-1" />
                    <span>Filter</span>
                  </div>
                  <select
                    className="form-select border-none focus:ring-0 py-2 pl-3 pr-8 text-gray-700 bg-white"
                    value={activeFilter}
                    onChange={(e) => setActiveFilter(e.target.value)}
                  >
                    <option>Popular</option>
                    <option>New</option>
                    <option>Completed</option>
                    <option>Ongoing</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Webtoon List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {genreWebtoons.map((webtoon) => (
            <div key={webtoon.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0 md:w-1/3">
                  <img
                    src={webtoon.coverImage}
                    alt={webtoon.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {webtoon.tags.map((tag, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{webtoon.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">by {webtoon.author}</p>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">{webtoon.description}</p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span>{webtoon.rating}</span>
                      </div>
                      <div>
                        {webtoon.episodes} episodes
                      </div>
                      <div>
                        Updates: {webtoon.updateDay}
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
                      Read Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl shadow-lg p-6 text-white text-center mb-8">
          <h3 className="text-xl font-bold mb-2">Want to see more {activeGenre.toLowerCase()} stories?</h3>
          <p className="mb-4">Sign up for weekly updates on new releases in your favorite genres.</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenresContainer