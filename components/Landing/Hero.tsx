

const Hero = () => {
    return (
        <div className="relative overflow-hidden rounded-3xl mb-12 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 shadow-lg">
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute inset-0" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="small-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1"></path>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#small-grid)"></rect>
                    <circle cx="20%" cy="30%" r="50" fill="rgba(255, 255, 255, 0.1)"></circle>
                    <circle cx="80%" cy="70%" r="100" fill="rgba(255, 255, 255, 0.1)"></circle>
                    <circle cx="77%" cy="12%" r="70" fill="rgba(255, 255, 255, 0.1)"></circle>
                    <circle cx="50%" cy="50%" r="150" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2">
                        <animate attributeName="r" values="150;200;150" dur="10s" repeatCount="indefinite" />
                    </circle>
                </svg>
            </div>
            <div className="relative px-8 py-16 md:py-24 md:px-16 text-white flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Experience Stories Beyond Language</h1>
                    <p className="text-blue-100 mb-8 text-lg">Our AI-powered platform brings global webtoons to you in your native language while preserving the creator's original vision and style.</p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-50 transition-colors">
                            Start Reading
                        </button>
                        <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
                            For Creators
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                    <div className="relative">
                        <img src="/api/placeholder/400/500" alt="Featured Webtoon" className="rounded-lg shadow-xl object-cover" />
                        <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
                            <span className="font-bold">AI Translated</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero