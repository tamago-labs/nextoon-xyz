import { Users, BookOpen, Coins, PlusCircle, Edit3, Zap, BarChart2 } from "lucide-react"


const Dashboard = () => {
    return (
        <div>
        {/* Dashboard Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Active Series</h3>
                <p className="text-3xl font-bold text-gray-800">3</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Total Readers</h3>
                <p className="text-3xl font-bold text-gray-800">1,248</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Coins className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Creator Tokens</h3>
                <p className="text-3xl font-bold text-gray-800">6,450</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
              <PlusCircle className="h-6 w-6 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-gray-800">New Series</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
              <Edit3 className="h-6 w-6 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-gray-800">New Episode</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
              <Zap className="h-6 w-6 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-gray-800">Create Branch Point</span>
            </button>
            <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
              <BarChart2 className="h-6 w-6 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-gray-800">View Reports</span>
            </button>
          </div>
        </div>
        
        {/* Token Distribution Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Token Distribution</h2>
          <p className="text-gray-600 mb-4">When you create a new webtoon series, ERC-20 tokens are minted with 10% allocated directly to you as the creator, while the remaining 90% enters circulation for community voting and rewards.</p>
          
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Coins className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">How Tokens Work</h3>
                <p className="mt-1 text-sm text-blue-600">
                  Tokens allow readers to vote on story directions, while also sharing in the success of popular series. As the creator, you receive 10% of all tokens when your series is established.
                </p>
              </div>
            </div>
          </div>
          
          <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full" style={{ width: '10%' }}>
              <span className="px-3 text-xs font-medium text-white flex items-center h-full">10%</span>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Creator (10%)</span>
            <span>Community Circulation (90%)</span>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Users className="h-4 w-4 text-green-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-800">
                  <span className="font-medium">32 new readers</span> collected episodes from "Dragon's Prophecy"
                </p>
                <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Zap className="h-4 w-4 text-blue-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-800">
                  <span className="font-medium">Voting closed</span> on Chapter 8 branch point
                </p>
                <p className="text-xs text-gray-500 mt-1">6 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Coins className="h-4 w-4 text-purple-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-800">
                  <span className="font-medium">450 tokens</span> earned from series revenue sharing
                </p>
                <p className="text-xs text-gray-500 mt-1">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Dashboard