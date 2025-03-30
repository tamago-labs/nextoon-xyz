"use client"

import React, { useState } from 'react';
import { Star, Heart, Clock, MessageCircle, Share2 } from 'react-feather';

const OriginalContainer = () => {

    const [originals, setOriginals] = useState([
        {
            id: 1,
            title: "Moonlight Hunters",
            author: "Aria Chen",
            description: "In a world where supernatural creatures hide among humans, a group of monster hunters with unique abilities must protect their city while dealing with their own inner demons.",
            coverImage: "/api/placeholder/800/500",
            headerImage: "/api/placeholder/1200/400",
            rating: 4.9,
            genres: ["Urban Fantasy", "Action", "Drama"],
            releaseDay: "Friday",
            episodes: 24,
            likes: 8743,
            views: 2500000,
            comments: 45632,
            featured: true,
            previewImages: [
                "/api/placeholder/400/250",
                "/api/placeholder/400/250",
                "/api/placeholder/400/250"
            ]
        },
        {
            id: 2,
            title: "Silicon Valley Dreams",
            author: "Marcus Wong",
            description: "Follow the journey of five college friends as they navigate the cutthroat world of tech startups, venture capital, and Silicon Valley politics while trying to maintain their friendship and moral compass.",
            coverImage: "/api/placeholder/800/500",
            headerImage: "/api/placeholder/1200/400",
            rating: 4.7,
            genres: ["Slice of Life", "Drama", "Comedy"],
            releaseDay: "Wednesday",
            episodes: 36,
            likes: 6529,
            views: 1800000,
            comments: 32145,
            featured: false,
            previewImages: [
                "/api/placeholder/400/250",
                "/api/placeholder/400/250",
                "/api/placeholder/400/250"
            ]
        }
    ]);

    return (
        <div className="min-h-screen relative  py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex flex-col items-center justify-between mb-8">
                        <h2 className="text-4xl mx-auto font-bold bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">NexToon Originals</h2>
                        <p className="text-xl mt-4 text-gray-600 max-w-3xl mx-auto">
                            Exclusive stories crafted by exceptional creators, available only on our platform.
                        </p>
                    </div>
                </div>


                {/* Originals List */}
                <div className="space-y-16 mb-[60px]">
                    {originals.map((original) => (
                        <div key={original.id} className="bg-white rounded-2xl overflow-hidden shadow-xl">
                            {/* Header Image */}
                            <div className="relative h-72 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 overflow-hidden">
                                <img
                                    src={original.headerImage}
                                    alt={`${original.title} header`}
                                    className="w-full h-full object-cover opacity-60"
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> */}
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <div className="flex items-center mb-2">
                                        {original.featured && (
                                            <span className="bg-blue-500 text-white text-xs font-bold uppercase px-3 py-1 rounded-full mr-3">
                                                Featured Original
                                            </span>
                                        )}
                                        {original.genres.map((genre, index) => (
                                            <span key={index} className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full mr-2">
                                                {genre}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="text-3xl font-bold">{original.title}</h2>
                                    <p className="text-lg opacity-90">By {original.author}</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                                <div className="md:col-span-2 space-y-6">
                                    {/* Description */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3">About this Series</h3>
                                        <p className="text-gray-600">{original.description}</p>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-gray-600">
                                        <div className="flex items-center">
                                            <Star className="text-yellow-500 mr-2" size={18} />
                                            <span className="font-medium">{original.rating}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Heart className="text-red-500 mr-2" size={18} />
                                            <span>{original.likes.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="text-blue-500 mr-2" size={18} />
                                            <span>Updates every {original.releaseDay}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <MessageCircle className="text-green-500 mr-2" size={18} />
                                            <span>{original.comments.toLocaleString()} Comments</span>
                                        </div>
                                    </div>

                                    {/* Preview Images */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Preview</h3>
                                        <div className="grid grid-cols-3 gap-3">
                                            {original.previewImages.map((img, index) => (
                                                <div key={index} className="aspect-w-16 aspect-h-10 rounded-lg overflow-hidden">
                                                    <img src={img} alt={`Preview ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar */}
                                <div className="bg-blue-50 rounded-xl p-6 flex flex-col h-full">
                                    <div className="relative aspect-w-3 aspect-h-4 mb-6">
                                        <img
                                            src={original.coverImage}
                                            alt={original.title}
                                            className="w-full h-full object-cover rounded-lg shadow-md"
                                        />
                                    </div>

                                    <div className="flex-1 space-y-6">
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">Total Episodes</div>
                                            <div className="text-xl font-bold text-gray-800">{original.episodes}</div>
                                        </div>

                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">Total Views</div>
                                            <div className="text-xl font-bold text-gray-800">{original.views.toLocaleString()}</div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity">
                                            Start Reading
                                        </button>

                                        <button className="w-full mt-3 bg-white border border-blue-300 text-blue-600 py-3 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center">
                                            <Share2 size={18} className="mr-2" />
                                            Share Series
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OriginalContainer