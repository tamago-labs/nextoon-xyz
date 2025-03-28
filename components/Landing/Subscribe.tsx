

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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Become a Creator</h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Join our global community of creators and share your stories with the world. Our AI-powered platform will help translate your work into multiple languages.</p>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-50 transition-colors">
                        Start Creating
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Subscribe