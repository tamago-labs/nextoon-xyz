import { useState, useEffect } from "react";
import { ChevronRight, Globe, Speaker, ArrowRight, BookOpen, Clock, TrendingUp } from "react-feather"


const Contents = () => {


    const [featuredWebtoons, setFeaturedWebtoons] = useState<any>([]);
    const [popularWebtoons, setPopularWebtoons] = useState<any>([]);
    const [newReleases, setNewReleases] = useState<any>([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        // Mock data - would come from API in production
        setFeaturedWebtoons([
            { id: 1, title: 'Neon Dreams', author: 'Luna Kim', genre: 'Sci-Fi', imageUrl: '/api/placeholder/600/400', rating: 4.8, language: 'EN, JP, KR' },
            { id: 2, title: 'Phantom Shadows', author: 'Alex Chen', genre: 'Horror', imageUrl: '/api/placeholder/600/400', rating: 4.7, language: 'EN, KR, ES' },
            { id: 3, title: 'Electric Hearts', author: 'Mia Johnson', genre: 'Romance', imageUrl: '/api/placeholder/600/400', rating: 4.9, language: 'EN, FR, KR' }
        ]);

        setPopularWebtoons([
            { id: 4, title: 'Cosmic Odyssey', author: 'Jay Park', genre: 'Fantasy', imageUrl: '/api/placeholder/300/400', rating: 4.6 },
            { id: 5, title: 'Urban Legends', author: 'Sarah Lin', genre: 'Thriller', imageUrl: '/api/placeholder/300/400', rating: 4.8 },
            { id: 6, title: 'Dreamscape', author: 'Mark Zhang', genre: 'Fantasy', imageUrl: '/api/placeholder/300/400', rating: 4.5 },
            { id: 7, title: 'Neon Nights', author: 'Dana Lee', genre: 'Cyberpunk', imageUrl: '/api/placeholder/300/400', rating: 4.7 }
        ]);

        setNewReleases([
            { id: 8, title: 'Digital Divide', author: 'Chris Wong', genre: 'Sci-Fi', imageUrl: '/api/placeholder/300/400', rating: 4.4 },
            { id: 9, title: 'Moonlight Melodies', author: 'Emily Tanaka', genre: 'Romance', imageUrl: '/api/placeholder/300/400', rating: 4.6 },
            { id: 10, title: 'Techno Titans', author: 'Kevin Liu', genre: 'Action', imageUrl: '/api/placeholder/300/400', rating: 4.5 },
            { id: 11, title: 'Parallel Realities', author: 'Zoe Chen', genre: 'Sci-Fi', imageUrl: '/api/placeholder/300/400', rating: 4.7 }
        ]);
    }, []);

    const categories = ['All', 'Romance', 'Action', 'Fantasy', 'Sci-Fi', 'Horror', 'Comedy', 'Drama', 'Thriller'];


    return (
        <>

            {/* Featured Webtoons */}
            <section className="mb-16">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">Editor's Picks</h2>
                    <a href="#" className="text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center">
                        View All <ChevronRight size={16} />
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredWebtoons.map((webtoon: any) => (
                        <div key={webtoon.id} className="bg-white rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-xl hover:translate-y-[-5px] group">
                            <div className="relative">
                                <img src={webtoon.imageUrl} alt={webtoon.title} className="w-full h-56 object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                                    <span className="font-bold">Start Reading</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-xl text-gray-900">{webtoon.title}</h3>
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{webtoon.genre}</span>
                                </div>
                                <p className="text-gray-600 mb-3">{webtoon.author}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <span className="text-yellow-500">★</span>
                                        <span className="text-sm font-medium text-gray-700 ml-1">{webtoon.rating}</span>
                                    </div>
                                    <span className="text-xs text-blue-500 font-medium">
                                        Available in: {webtoon.language}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>





            {/* Categories Bar */}
            <div className="bg-white bg-opacity-70 backdrop-blur-lg p-2 rounded-2xl mb-12 sticky top-20 z-30 shadow-md">
                <div className="flex overflow-x-auto space-x-4 py-2 px-4 scrollbar-hide">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg whitespace-nowrap transition-colors ${selectedCategory === category
                                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                                : 'bg-white text-gray-700 hover:bg-blue-50'
                                }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            <span>{category}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Grids */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Popular Now */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <TrendingUp size={20} className="text-blue-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Popular Now</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {popularWebtoons.map((webtoon: any) => (
                            <div key={webtoon.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
                                <div className="relative">
                                    <img src={webtoon.imageUrl} alt={webtoon.title} className="w-full h-64 object-cover transition-transform group-hover:scale-105" />
                                    <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 m-2 rounded">
                                        <span className="font-medium">{webtoon.genre}</span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">{webtoon.title}</h3>
                                    <p className="text-xs text-gray-600 mb-2">{webtoon.author}</p>
                                    <div className="flex items-center">
                                        <span className="text-yellow-500">★</span>
                                        <span className="text-xs text-gray-700 ml-1">{webtoon.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* New Releases */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <Clock size={20} className="text-blue-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">New Releases</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {newReleases.map((webtoon: any) => (
                            <div key={webtoon.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group">
                                <div className="relative">
                                    <img src={webtoon.imageUrl} alt={webtoon.title} className="w-full h-64 object-cover transition-transform group-hover:scale-105" />
                                    <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 m-2 rounded">
                                        <span className="font-medium">{webtoon.genre}</span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 mb-1 line-clamp-1">{webtoon.title}</h3>
                                    <p className="text-xs text-gray-600 mb-2">{webtoon.author}</p>
                                    <div className="flex items-center">
                                        <span className="text-yellow-500">★</span>
                                        <span className="text-xs text-gray-700 ml-1">{webtoon.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>



        </>
    )
}

export default Contents