import { useState, useEffect, useReducer, useContext } from "react";
import { ChevronRight, Globe, Speaker, ArrowRight, BookOpen, Clock, TrendingUp, ExternalLink } from "react-feather"
import Link from "next/link";
import { ContentContext } from "@/contexts/content";
import { shortAddress } from "@/helpers";
import { AccountContext } from "@/contexts/account";

const Contents = () => {

    const { series } = useContext(ContentContext)
 
    const [featuredWebtoons, setFeaturedWebtoons] = useState<any>([]);
    const [popularWebtoons, setPopularWebtoons] = useState<any>([]);
    const [newReleases, setNewReleases] = useState<any>([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        // Mock data - would come from API in production
        setFeaturedWebtoons([
            { id: 1, title: 'Neon Dreams', author: 'Luna Kim', genre: 'Sci-Fi', imageUrl: './images/mock/poster-2.jpg', rating: 4.8, language: 'EN, JP, KR' },
            { id: 2, title: 'Phantom Shadows', author: 'Alex Chen', genre: 'Horror', imageUrl: './images/mock/poster-3.jpg', rating: 4.7, language: 'EN, KR, ES' },
            { id: 3, title: 'Electric Hearts', author: 'Mia Johnson', genre: 'Romance', imageUrl: './images/mock/poster-4.jpg', rating: 4.9, language: 'EN, FR, KR' }
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
                <div className="flex  mb-8">
                    <h2 className="text-3xl font-bold  my-auto bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                        NexToon Originals
                    </h2>
                    {/* <Link href="/originals" className="text-blue-500 ml-auto my-auto  hover:text-blue-700 text-sm font-medium flex items-center">
                        View All <ChevronRight size={16} />
                    </Link> */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {series.map((webtoon: any, index: number) => {

                        let gradientBg = ""

                        if (index % 3 === 0) {
                            gradientBg = "bg-gradient-to-br from-blue-500 to-purple-600"
                        } else if (index % 3 === 1) {
                            gradientBg = "bg-gradient-to-br from-green-400 to-blue-500"
                        } else {
                            gradientBg = "bg-gradient-to-br from-yellow-400 to-red-500"
                        }

                        return (
                            <div key={webtoon.id} className="bg-white rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-xl hover:translate-y-[-5px] group">

                                <div className="relative">
                                    <div className={`h-56 ${gradientBg} flex items-center justify-center`}>
                                        <h3 className="text-2xl font-bold text-white px-4 text-center">{webtoon.tokenName}</h3>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                                        <span className="font-bold">Start Reading</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-xl text-gray-900">{webtoon.tokenName}</h3>
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 capitalize rounded-full">{webtoon.genre}</span>
                                    </div>
                                    <p className="text-gray-600 mb-3">
                                        By <DisplayCreatorName userId={webtoon.userId} />
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex space-x-4 ">
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                                </svg>
                                                <span className="text-gray-600 text-sm">1.5K</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                                                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
                                                </svg>
                                                <span className="text-gray-600 text-sm">284</span>
                                            </div>
                                        </div>
                                        <span className="text-sm text-blue-500 font-medium"> 
                                            Price{` `}<span className="text-blue-600 font-medium">{(webtoon.tokenPrice*1000000000).toLocaleString()} Gwei</span>
                                            {/* <Link href={`https://sepolia.basescan.org/token/${webtoon.tokenContract}`} target="_blank">
                                            <button className="flex cursor-pointer hover:underline items-center text-sm text-blue-600 hover:text-blue-800">
                                                <ExternalLink className="h-4 w-4 mr-1" />
                                                Basescan
                                            </button>
                                        </Link> */}
                                        </span>
                                    </div>
                                    {/* <div className="flex justify-center mt-4  space-x-4">
                                        <Link href={`https://sepolia.basescan.org/token/${webtoon.tokenContract}`} target="_blank">
                                            <button className="flex cursor-pointer hover:underline items-center text-sm text-blue-600 hover:text-blue-800">
                                                <ExternalLink className="h-4 w-4 mr-1" />
                                                View Token Contract
                                            </button>
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>


            {/* Categories Bar */}
            {/* <div className="bg-white bg-opacity-70 backdrop-blur-lg p-2 rounded-2xl mb-12 sticky top-20 z-30 shadow-md">
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
            </div> */}

            {/* Content Grids */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
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
            </div> */}

        </>
    )
}

const DisplayCreatorName = ({ userId }: any) => {

    const { getCreatorDisplayName } = useContext(AccountContext)

    const [displayName, setDisplayName] = useState<any>()

    useEffect(() => {
        userId && getCreatorDisplayName(userId).then(setDisplayName)
    }, [userId])

    return (
        <span>
            {!displayName ? shortAddress(userId) : displayName}
        </span>
    )
}

export default Contents