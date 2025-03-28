"use client"
 
import React, { useState } from 'react';
import { TrendingUp, Eye, Heart, Star, Award, ArrowUp, ArrowDown } from 'react-feather';

const RankingsContainer = () => {

  const [rankingData, setRankingData] = useState([
    {
      id: 1,
      title: "Ethereal Legacy",
      author: "Yuna Park",
      coverImage: "/api/placeholder/300/400",
      rank: 1,
      previousRank: 2,
      rankChange: 1,
      rating: 4.9,
      views: 3750000,
      likes: 425000,
      genres: ["Fantasy", "Adventure"],
      summary: "After discovering an ancient family heirloom, college student Min-ji finds herself transported to a magical realm where she must embrace her destiny as the chosen one.",
      isRising: true,
      weeklyViews: 285000
    },
    {
      id: 2,
      title: "Metro Pulse",
      author: "David Chen",
      coverImage: "/api/placeholder/300/400",
      rank: 2,
      previousRank: 1,
      rankChange: -1,
      rating: 4.8,
      views: 3200000,
      likes: 380000,
      genres: ["Action", "Thriller"],
      summary: "In a dystopian future where corporations rule divided city sectors, a delivery courier becomes an unlikely revolutionary after stumbling upon a conspiracy that threatens the entire metro system.",
      isRising: false,
      weeklyViews: 245000
    },
    {
      id: 3,
      title: "Sweet Chemistry",
      author: "Jiho Kim",
      coverImage: "/api/placeholder/300/400",
      rank: 3,
      previousRank: 5,
      rankChange: 2,
      rating: 4.7,
      views: 2900000,
      likes: 350000,
      genres: ["Romance", "Comedy"],
      summary: "When a brilliant but socially awkward chemistry student is paired with the popular arts major for a cross-disciplinary project, they discover that opposites really do attract.",
      isRising: true,
      weeklyViews: 220000
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-sky-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 flex items-center justify-center">
            <Award className="text-blue-600 mr-3" size={36} />
            Top Rankings
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The most popular webtoons based on views, likes, and reader engagement.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl shadow-md p-6 mb-10">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-blue-600 font-bold text-xl mb-1">12.5M+</div>
              <div className="text-gray-600">Weekly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-blue-600 font-bold text-xl mb-1">325K+</div>
              <div className="text-gray-600">Active Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-blue-600 font-bold text-xl mb-1">85+</div>
              <div className="text-gray-600">Original Series</div>
            </div>
          </div>
        </div>

        {/* Rankings List */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white">
            <div className="flex items-center">
              <TrendingUp className="mr-2" size={20} />
              <h2 className="text-xl font-bold">Weekly Trending</h2>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {rankingData.map((webtoon) => (
              <div key={webtoon.id} className="p-6 hover:bg-blue-50 transition-colors">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Rank Information */}
                  <div className="flex flex-col items-center justify-center md:w-24">
                    <div className="text-3xl font-bold text-blue-800">#{webtoon.rank}</div>
                    <div className="flex items-center mt-2">
                      {webtoon.rankChange > 0 ? (
                        <div className="flex items-center text-green-600">
                          <ArrowUp size={16} className="mr-1" />
                          <span className="text-sm">{webtoon.rankChange}</span>
                        </div>
                      ) : webtoon.rankChange < 0 ? (
                        <div className="flex items-center text-red-600">
                          <ArrowDown size={16} className="mr-1" />
                          <span className="text-sm">{Math.abs(webtoon.rankChange)}</span>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-500">―</div>
                      )}
                    </div>
                    {webtoon.isRising && (
                      <div className="mt-2 px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium flex items-center">
                        {/* <Fire size={12} className="mr-1" /> */}
                        Rising
                      </div>
                    )}
                  </div>

                  {/* Cover Image */}
                  <div className="flex-shrink-0">
                    <img 
                      src={webtoon.coverImage} 
                      alt={webtoon.title} 
                      className="w-32 h-48 object-cover rounded-lg shadow-md" 
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {webtoon.genres.map((genre, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
                          {genre}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{webtoon.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">by {webtoon.author}</p>
                    <p className="text-gray-700 mb-4 line-clamp-2">{webtoon.summary}</p>
                    
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="text-yellow-500 mr-1" size={16} />
                        <span>{webtoon.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="text-blue-500 mr-1" size={16} />
                        <span>{(webtoon.views / 1000000).toFixed(1)}M</span>
                      </div>
                      <div className="flex items-center">
                        <Heart className="text-red-500 mr-1" size={16} />
                        <span>{(webtoon.likes / 1000).toFixed(0)}K</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="text-green-500 mr-1" size={16} />
                        <span>{(webtoon.weeklyViews / 1000).toFixed(0)}K this week</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-center md:justify-end">
                    <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm">
                      Read Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ranking Explanation */}
        <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">How Rankings Work</h3>
          <p className="text-gray-600">
            Our rankings are updated weekly based on recent views, likes, and reader engagement. 
            The ranking algorithm takes into account both the total popularity of a series and 
            its recent performance, allowing both established favorites and rising stars to shine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RankingsContainer;