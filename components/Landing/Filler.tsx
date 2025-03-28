import { ArrowRight, Globe, Star, Users } from "react-feather"

const Filler = () => {
    return (
        <section className="my-12">
        <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 rounded-xl overflow-hidden shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-20 -mt-20 -mr-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-700 rounded-full opacity-20 -mb-16 -ml-16"></div>
            
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between">
              {/* Left section - Main message */}
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-white mb-4">Read Webtoons in Your Language</h2>
                <p className="text-blue-100 text-lg mb-6">
                  Our AI translation technology makes global stories accessible while preserving the creator's original vision and style.
                </p>
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium shadow-md inline-flex items-center transition-colors">
                  Try Multilingual Webtoons
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              
              {/* Right section - Stats */}
              <div className="md:w-1/2 md:pl-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-blue-700 bg-opacity-30 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center mb-2">
                      <Globe className="h-6 w-6 text-blue-200 mr-2" />
                      <h3 className="text-xl font-semibold text-white">12+</h3>
                    </div>
                    <p className="text-blue-100">Languages Supported</p>
                  </div>
                  
                  <div className="bg-blue-700 bg-opacity-30 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center mb-2">
                      <Star className="h-6 w-6 text-blue-200 mr-2" />
                      <h3 className="text-xl font-semibold text-white">98%</h3>
                    </div>
                    <p className="text-blue-100">Translation Accuracy</p>
                  </div>
                  
                  <div className="bg-blue-700 bg-opacity-30 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center mb-2">
                      <Users className="h-6 w-6 text-blue-200 mr-2" />
                      <h3 className="text-xl font-semibold text-white">3M+</h3>
                    </div>
                    <p className="text-blue-100">Global Readers</p>
                  </div>
                </div>
                
                <div className="mt-4 bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm border border-blue-300 border-opacity-30">
                  <p className="text-blue-50 italic">
                    "WebtoonAI's translation technology has allowed me to reach fans in countries I never imagined. The quality is remarkable."
                  </p>
                  <p className="text-blue-200 text-sm mt-2">— Min-jae Park, Creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Filler 