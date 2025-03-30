
import { BookOpen, Cpu, Vote, GitBranch, CheckCircle } from 'lucide-react';
import { Globe, MessageSquare, Zap } from "react-feather"


const HowItWorks = () => {
    return (
        <section className="py-16 my-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">How NexToon Works</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Experience webtoons where creators and readers co-create the narrative journey
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <BookOpen className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Collect Episodes as NFTs
                        </h3>
                        <p className="text-gray-600">
                            Mint episodes as limited NFTs. Each NFT grants you voting power to influence future storylines.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <CheckCircle className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Generates Story Option</h3>
                        <p className="text-gray-600">
                            Creators trigger AI to suggest compelling branch options, letting NFT holders vote on which direction the story should take.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <Globe className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Co-own Success Stories
                        </h3>
                        <p className="text-gray-600">
                            As webtoons gain popularity, creators can set marketplace prices with earnings distributed among NFT holders.
                        </p>
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-xl font-semibold text-center mb-6">AI-Generated Story Paths</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="h-1 w-full bg-red-400 rounded-full mb-3"></div>
                            <p className="text-sm text-gray-800 mb-2 font-medium">Dramatic Conflict</p>
                            <p className="text-xs text-gray-600">Character faces their greatest fear in a climactic confrontation</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="h-1 w-full bg-blue-400 rounded-full mb-3"></div>
                            <p className="text-sm text-gray-800 mb-2 font-medium">Unexpected Alliance</p>
                            <p className="text-xs text-gray-600">Former enemies must work together against a greater threat</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="h-1 w-full bg-green-400 rounded-full mb-3"></div>
                            <p className="text-sm text-gray-800 mb-2 font-medium">Hidden Truth</p>
                            <p className="text-xs text-gray-600">A long-buried secret emerges that changes everything</p>
                        </div>
                    </div>
                </div>



                {/* Updated Showcase Example */}
                <div className="mt-16 bg-white rounded-xl overflow-hidden shadow-lg">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Shape the Stories You Love</h3>
                            <p className="text-gray-600 mb-6">
                                NexToon gives you the power to influence storylines through your NFT collection. Vote on AI-suggested plot directions and share in the success of stories you help create.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <Zap className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                                    <span className="text-gray-700">Collect NFTs to gain voting influence</span>
                                </li>
                                <li className="flex items-start">
                                    <Zap className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                                    <span className="text-gray-700">Vote on key story decisions</span>
                                </li>
                                <li className="flex items-start">
                                    <Zap className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                                    <span className="text-gray-700">Watch stories evolve based on community choices</span>
                                </li>
                                <li className="flex items-start">
                                    <Zap className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                                    <span className="text-gray-700">Share revenue when storylines succeed</span>
                                </li>
                            </ul>
                            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-colors">
                                Join a Storyline Vote
                            </button>
                        </div>
                        <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-6">
                            <div className="relative w-full max-w-md aspect-[3/4] bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-8 bg-gray-200 flex items-center px-3">
                                    <div className="flex space-x-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="text-xs text-gray-500 mx-auto">Active Voting Session</div>
                                </div>
                                <div className="mt-8 p-4">
                                    <div className="text-center mb-4">
                                        <h4 className="font-medium text-sm">Dragon's Prophecy: Chapter 8</h4>
                                        <p className="text-xs text-gray-500">Voting closes in 18 hours</p>
                                    </div>
                                    <div className="h-24 bg-gray-200 rounded-lg mb-4"></div>
                                    <div className="text-xs font-medium text-gray-700 mb-2">What should Maya do with the ancient scroll?</div>

                                    <div className="space-y-3 mb-4">
                                        <div className="relative bg-gray-50 p-3 rounded-lg">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-xs">Destroy it to prevent it falling into wrong hands</span>
                                                <span className="text-xs font-medium">43%</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-red-500 rounded-full" style={{ width: '43%' }}></div>
                                            </div>
                                        </div>

                                        <div className="relative bg-blue-50 p-3 rounded-lg border border-blue-100">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-xs">Decipher it to unlock hidden powers</span>
                                                <span className="text-xs font-medium">38%</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-500 rounded-full" style={{ width: '38%' }}></div>
                                            </div>
                                        </div>

                                        <div className="relative bg-gray-50 p-3 rounded-lg">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-xs">Hide it in the temple for future generations</span>
                                                <span className="text-xs font-medium">19%</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-full bg-green-500 rounded-full" style={{ width: '19%' }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between">
                                        <button className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-lg">Your NFTs: 3</button>
                                        <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg">Cast Your Vote</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default HowItWorks