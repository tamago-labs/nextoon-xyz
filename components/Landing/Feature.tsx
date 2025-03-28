import { Globe, MessageSquare, Zap } from "react-feather"


const Feature = () => {
    return (
        <section className="py-16    my-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Translation & Localization</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Experience webtoons in your language without losing the creator's original style, humor, and cultural nuances.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <Globe className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Contextual Translation</h3>
                        <p className="text-gray-600">
                            Our AI understands context, preserving humor, idioms, and cultural references that traditional translation misses.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <MessageSquare className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Text Fitting</h3>
                        <p className="text-gray-600">
                            Automatically adjusts speech bubbles and text layout to accommodate different language lengths while maintaining visual balance.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            {/* <LanguagesIcon className="h-6 w-6 text-blue-600" /> */}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Adaptation</h3>
                        <p className="text-gray-600">
                            Identifies cultural references and suggests appropriate localized alternatives that resonate with target audiences.
                        </p>
                    </div>
                </div>

                {/* Language Support */}
                <div className="mt-16">
                    <h3 className="text-xl font-semibold text-center mb-6">Supported Languages</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Russian', 'Japanese', 'Korean', 'Chinese', 'Arabic', 'Hindi'].map(language => (
                            <span key={language} className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">
                                {language}
                            </span>
                        ))}
                        <span className="bg-blue-500 px-4 py-2 rounded-full text-sm text-white shadow-sm">
                            + More Coming Soon
                        </span>
                    </div>
                </div>

                {/* Showcase Example */}
                <div className="mt-16 bg-white rounded-xl overflow-hidden shadow-lg">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">See it in Action</h3>
                            <p className="text-gray-600 mb-6">
                                Our AI translation preserves the nuance and emotion of the original content while making it accessible in your preferred language.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <Zap className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                                    <span className="text-gray-700">Preserves artistic style and tone</span>
                                </li>
                                <li className="flex items-start">
                                    <Zap className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                                    <span className="text-gray-700">Maintains cultural context and humor</span>
                                </li>
                                <li className="flex items-start">
                                    <Zap className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                                    <span className="text-gray-700">Adapts idioms and expressions naturally</span>
                                </li>
                                <li className="flex items-start">
                                    <Zap className="h-5 w-5 text-blue-500 mt-0.5 mr-2" />
                                    <span className="text-gray-700">Updates in real-time with new episodes</span>
                                </li>
                            </ul>
                            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-colors">
                                Try Translated Webtoons
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
                                    <div className="text-xs text-gray-500 mx-auto">Translation Preview</div>
                                </div>
                                <div className="mt-8 p-4">
                                    <div className="h-32 bg-gray-200 rounded-lg mb-4"></div>
                                    <div className="flex space-x-2 mb-4">
                                        <div className="h-10 w-10 bg-blue-200 rounded-full"></div>
                                        <div className="flex-1">
                                            <div className="bg-blue-100 p-2 rounded-lg rounded-tl-none">
                                                <div className="h-4 w-3/4 bg-blue-200 rounded mb-2"></div>
                                                <div className="h-4 w-1/2 bg-blue-200 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 mb-4 justify-end">
                                        <div className="flex-1">
                                            <div className="bg-gray-100 p-2 rounded-lg rounded-tr-none">
                                                <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                                                <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                                            </div>
                                        </div>
                                        <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                                    </div>
                                    <div className="h-40 bg-gray-200 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default Feature