

const Faq = () => {
    return (
        <section className="py-12 my-12">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {[
                        {
                            question: "How does the NFT voting system work?",
                            answer: "TBD"
                        },
                        {
                            question: "How is revenue shared among NFT holders?",
                            answer: "TBD"
                        },
                        {
                            question: "How does the AI help with story creation?",
                            answer: "TBD"
                        },
                        {
                            question: "Why does NexToon use Base L2 and Zora's Coin protocol?",
                            answer: "TBD"
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                            <p className="text-gray-600">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="space-y-6"> 
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none">
        <span className="font-medium text-lg">How does the NFT voting system work?</span>
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div className="px-6 pb-4">
        <p className="text-gray-600">
          Each episode NFT grants you voting power on future story directions. Different rarity levels give you more influence: Common NFTs provide 1 vote, while Legendary NFTs grant 10 votes. When creators reach a story branch point, they'll use our AI to generate compelling options, and NFT holders vote within a 72-hour window. The winning direction becomes the canonical storyline, though creators may develop alternative "What If" branches for non-winning choices.
        </p>
      </div>
    </div>
     
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none">
        <span className="font-medium text-lg">How is revenue shared among NFT holders?</span>
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div className="px-6 pb-4">
        <p className="text-gray-600">
          When a creator monetizes a completed story arc, the smart contract automatically distributes a portion of the revenue to all NFT holders based on their ownership percentage. Higher rarity NFTs receive a greater share of the revenue pool. Additionally, when episodes are traded on the secondary market, creators receive royalties on each transaction. This creates a sustainable ecosystem where both creators and community members benefit from a story's success.
        </p>
      </div>
    </div>
     
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none">
        <span className="font-medium text-lg">How does the AI help with story creation?</span>
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div className="px-6 pb-4">
        <p className="text-gray-600">
          Our AI assists creators in multiple ways without replacing their creative vision. At branch points, the AI analyzes the story context, character development, and reader engagement to suggest potential narrative directions. Creators can refine these suggestions or create their own alternatives. The AI can also help with creative blocks, background details, and consistency checking. All AI suggestions are tools that enhance the creator's storytelling while maintaining their unique style and artistic control.
        </p>
      </div>
    </div>
     
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none">
        <span className="font-medium text-lg">Why does NexToon use Base L2 and Zora's Coin protocol?</span>
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div className="px-6 pb-4">
        <p className="text-gray-600">
          We chose Base L2 for its fast transactions, low gas fees, and security backed by Ethereum. This makes minting episode NFTs affordable for creators and collectors alike. Zora's Coin protocol provides the flexible tokenomics needed for our community voting and revenue-sharing mechanisms. Together, these technologies create a seamless user experience where you can focus on storytelling and community building rather than technical blockchain complexity. We handle all the Web3 infrastructure so you can concentrate on creating amazing webtoon experiences.
        </p>
      </div>
    </div>
  </div> */}
        </section>
    )
}

export default Faq