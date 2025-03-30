import React, { useState } from 'react';
import { Clock, Edit, Trash2, Search, Filter, EyeOff, Check, AlertTriangle, SortDesc, Grid, List, ChevronDown } from 'lucide-react';

const ContinueDraft = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedDraft, setSelectedDraft] = useState(null);
  const [sortBy, setSortBy] = useState('lastEdited');
  
  // Mock data for drafts
  const draftItems = [
    {
      id: 1,
      type: 'episode',
      title: 'The Mysterious Encounter',
      series: 'Cosmic Adventures',
      coverImage: '/api/placeholder/220/320',
      lastEdited: '2025-03-22T14:30:00',
      status: 'inProgress',
      progress: 70,
      pendingItems: ['Add speech bubbles', 'Review translations'],
      series_id: 1
    },
    {
      id: 2,
      type: 'episode',
      title: 'Unexpected Alliance',
      series: 'Urban Legends',
      coverImage: '/api/placeholder/220/320',
      lastEdited: '2025-03-24T18:45:00',
      status: 'needsReview',
      progress: 90,
      pendingItems: ['Final review'],
      series_id: 2
    },
    {
      id: 3,
      type: 'series',
      title: 'Mystery Academy',
      coverImage: '/api/placeholder/220/320',
      lastEdited: '2025-03-15T10:20:00',
      status: 'justStarted',
      progress: 25,
      pendingItems: ['Add series description', 'Upload cover image', 'Set schedule'],
      series_id: null
    }
  ];

  // Format relative time
  const getRelativeTime = (dateString: any) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.valueOf() - date.valueOf()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Less than an hour ago';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInHours < 48) return 'Yesterday';
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)} days ago`;
    
    return date.toLocaleDateString();
  };
  
  // Status badges
  const getStatusBadge = (status: any) => {
    switch (status) {
      case 'inProgress':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <Clock size={12} className="mr-1" />
            In Progress
          </span>
        );
      case 'needsReview':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
            <AlertTriangle size={12} className="mr-1" />
            Needs Review
          </span>
        );
      case 'justStarted':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            <Edit size={12} className="mr-1" />
            Just Started
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900">Continue Draft</h2>
        <p className="text-gray-600">Pick up where you left off with your drafted content</p>
      </div>
      
      {/* Search and Filter Bar */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search drafts..."
            />
          </div>
          
          <div className="flex space-x-2">
            <div className="relative">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                <Filter size={16} className="mr-2 text-gray-500" />
                Filter
                <ChevronDown size={16} className="ml-1 text-gray-500" />
              </button>
              
              {filterOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1">
                    <div className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider font-semibold bg-gray-50">
                      Filter by Type
                    </div>
                    <div className="px-4 py-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" defaultChecked />
                        <span className="ml-2 text-gray-700">Episodes</span>
                      </label>
                    </div>
                    <div className="px-4 py-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" defaultChecked />
                        <span className="ml-2 text-gray-700">Series</span>
                      </label>
                    </div>
                    
                    <div className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider font-semibold bg-gray-50">
                      Filter by Status
                    </div>
                    <div className="px-4 py-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" defaultChecked />
                        <span className="ml-2 text-gray-700">In Progress</span>
                      </label>
                    </div>
                    <div className="px-4 py-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" defaultChecked />
                        <span className="ml-2 text-gray-700">Needs Review</span>
                      </label>
                    </div>
                    <div className="px-4 py-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" defaultChecked />
                        <span className="ml-2 text-gray-700">Just Started</span>
                      </label>
                    </div>
                    
                    <div className="border-t border-gray-100 my-1"></div>
                    
                    <div className="px-4 py-2 flex justify-between">
                      <button className="text-xs text-gray-500 hover:text-gray-700">
                        Reset Filters
                      </button>
                      <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white h-full pl-4 pr-7 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="lastEdited">Last Edited</option>
                <option value="title">Title</option>
                <option value="progress">Progress</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <SortDesc size={16} />
              </div>
            </div>
            
            <div className="inline-flex shadow-sm rounded-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`inline-flex items-center px-3 py-2 rounded-l-md border text-sm ${
                  viewMode === 'grid'
                    ? 'bg-blue-50 text-blue-700 border-blue-300'
                    : 'bg-white text-gray-500 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`inline-flex items-center px-3 py-2 rounded-r-md border-t border-r border-b text-sm ${
                  viewMode === 'list'
                    ? 'bg-blue-50 text-blue-700 border-blue-300'
                    : 'bg-white text-gray-500 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Draft Items */}
      <div className="p-6">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {draftItems.map((draft) => (
              <div
                key={draft.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="relative aspect-w-3 aspect-h-4 bg-gray-100">
                  <img
                    src={draft.coverImage}
                    alt={draft.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-2 left-2">
                    {draft.type === 'series' ? (
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-purple-100 text-purple-800">
                        Series
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        Episode
                      </span>
                    )}
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1 bg-red-600 text-white rounded-full">
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="text-white font-bold truncate">{draft.title}</h3>
                    {draft.series && (
                      <p className="text-gray-300 text-sm truncate">{draft.series}</p>
                    )}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-gray-500">
                      <Clock size={14} className="inline mr-1" />
                      {getRelativeTime(draft.lastEdited)}
                    </span>
                    {getStatusBadge(draft.status)}
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{draft.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${draft.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-xs text-gray-500 font-medium mb-1">Next Steps:</h4>
                    <ul className="text-xs text-gray-700">
                      {draft.pendingItems.slice(0, 2).map((item, index) => (
                        <li key={index} className="flex items-start mb-1">
                          <div className="flex-shrink-0 h-4 w-4 border border-gray-300 rounded-sm mt-0.5 mr-1.5"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                      {draft.pendingItems.length > 2 && (
                        <li className="text-xs text-gray-500">
                          +{draft.pendingItems.length - 2} more items
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-medium text-sm transition-colors">
                    Continue Editing
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Edited
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {draftItems.map((draft) => (
                  <tr key={draft.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            src={draft.coverImage}
                            alt={draft.title}
                            className="h-10 w-10 object-cover rounded"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{draft.title}</div>
                          {draft.series && (
                            <div className="text-sm text-gray-500">{draft.series}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {draft.type === 'series' ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                          Series
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                          Episode
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(draft.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${draft.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-500">{draft.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {getRelativeTime(draft.lastEdited)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {draftItems.length === 0 && (
          <div className="text-center py-10">
            <EyeOff size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-1">No drafts found</h3>
            <p className="text-gray-500">
              You don't have any saved drafts. Start creating new content to save drafts.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContinueDraft;