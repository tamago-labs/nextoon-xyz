

const Subscribe = () => {
    return (
        <section className="mt-16 mb-16">
            <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <svg className="absolute inset-0" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,0 L100,0 C50,100 150,100 100,200 C50,300 150,300 100,400 C50,500 150,500 100,600 L0,600 Z" fill="rgba(255, 255, 255, 0.05)"></path>
                        <path d="M0,0 L100,0 C50,100 150,100 100,200 C50,300 150,300 100,400 C50,500 150,500 100,600 L0,600 Z" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2">
                            <animate attributeName="d" values="M0,0 L100,0 C50,100 150,100 100,200 C50,300 150,300 100,400 C50,500 150,500 100,600 L0,600 Z;M0,0 L100,0 C80,100 120,100 100,200 C80,300 120,300 100,400 C80,500 120,500 100,600 L0,600 Z;M0,0 L100,0 C50,100 150,100 100,200 C50,300 150,300 100,400 C50,500 150,500 100,600 L0,600 Z" dur="20s" repeatCount="indefinite" />
                        </path>
                    </svg>
                </div>
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Launch Your Webtoon Universe</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Create branching storylines where your community shapes the narrative through NFT-powered voting. Our AI tools suggest compelling plot directions while you maintain creative control.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-50 transition-colors">
                            Start Creating
                        </button>
                        <button className="bg-blue-700 text-white border border-blue-200 px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-800 transition-colors">
                            Watch Demo
                        </button>
                    </div>
                    {/* <div className="mt-8 flex justify-center items-center gap-2">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white"></div>
                            <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
                            <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                        </div>
                        <p className="text-blue-100 text-sm">Join 247+ creators already building on NexToon</p>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Subscribe