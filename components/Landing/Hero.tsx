import Link from "next/link";
import { useState, useEffect } from "react"
import { ChevronRight } from "react-feather";



const Hero = () => {
    return (
        <div className=" overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="pt-20 pb-20  flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 z-10">
                        {/* <div className="inline-block mb-4 px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium">
                            Revolutionizing Digital Storytelling
                        </div> */}
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                            Webtoons <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-blue-500 to-cyan-400">Where AI Meets Crypto</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg">
                            Experience webtoons reimagined on Base L2 where AI suggests multiple storylines and you vote with Zora's Coins to determine what happens next
                        </p>
                        <div className="mt-8 space-y-4 md:space-y-0 md:flex md:space-x-4">
                            <Link href="/create" className="block w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-center  shadow-lg shadow-indigo-500/30 transition duration-150">
                                Start Yours
                            </Link>
                            <Link href="/originals" className="block w-full md:w-auto px-8 py-3 bg-gray-100 shadow-lg text-gray-800 font-medium rounded-lg text-center border border-gray-200 hover:bg-gray-200 transition duration-150">
                                Explore Originals
                            </Link>
                        </div>
                        <div className="mt-8 flex items-center space-x-6">
                            <div className="flex -space-x-2">
                                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 border-2 border-white"></div>
                                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 border-2 border-white"></div>
                                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-white"></div>
                                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 border-2 border-white"></div>
                                <div className="h-8 w-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                                    <span className="text-xs text-gray-600 font-medium">+1.2K</span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500">Join 1,200+ webtoon artists and collectors</p>
                        </div>
                    </div>

                    <div className="md:w-1/2 mt-12 md:mt-0 relative">
                        <div className="relative h-96 w-full md:h-auto">
                            {/* Light-themed blob animations */}
                            <div className="absolute top-0 -left-4 h-72 w-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
                            <div className="absolute top-0 -right-4 h-72 w-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
                            <div className="absolute -bottom-8 left-20 h-72 w-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

                            <div className="relative">
                                <div className="rounded-2xl overflow-hidden shadow-xl h-96 md:h-[36rem] max-w-md mx-auto bg-gray-50 border border-gray-200">
                                    {/* Browser-like header */}
                                    <div className="h-6 w-full bg-gray-100 flex items-center px-4 border-b border-gray-200">
                                        <div className="flex space-x-2">
                                            <div className="h-2 w-2 rounded-full bg-red-400"></div>
                                            <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                                            <div className="h-2 w-2 rounded-full bg-green-400"></div>
                                        </div>
                                    </div>

                                    {/* Main content area */}
                                    <div className="relative h-80 md:h-[calc(36rem-6rem)]">
                                        <img
                                            className="w-full h-full object-cover"
                                            src="/api/placeholder/800/1000"
                                            alt="Webtoon preview"
                                        />
                                        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-blue-900 to-transparent"></div>
                                        <div className="absolute bottom-0 inset-x-0 p-6">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <p className="text-indigo-200 text-sm font-medium">Webtoon in Active</p>
                                                    <h3 className="text-white text-xl font-bold">Parallel Dimensions</h3>
                                                    <div className="mt-2 flex items-center">
                                                        <div className="h-6 w-6 rounded-full bg-blue-600"></div>
                                                        <p className="ml-2 text-gray-300 text-sm">@creator_studio</p>
                                                    </div>
                                                </div>
                                                <div className="bg-blue-600 rounded-lg px-4 py-2 flex items-center space-x-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                                    </svg>
                                                    <span className="text-white text-sm font-medium">Mint NFT</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer stats area */}
                                    <div className="p-4 bg-white border-t border-gray-200">
                                        <div className="flex justify-between items-center">
                                            <div className="flex space-x-4">
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
                                            <div className="text-gray-600 text-sm">
                                                <span className="text-blue-600 font-medium">42 ETH</span> / Fork price
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero