"use client"

import React, { useState, useEffect } from 'react';
import { PlusCircle, Layout, BarChart2, Settings, BookOpen, WifiOff } from 'react-feather';
import { getCurrentUser, signIn } from 'aws-amplify/auth';
import CreateContentTab from './CreateContent';

const CreateContainer = () => {

    const [user, setUser] = useState<any>(undefined)
    const [activeTab, setActiveTab] = useState('create');

    useEffect(() => {
        (async () => {
            try {
                const { username, userId, signInDetails } = await getCurrentUser();
                setUser({
                    username,
                    userId,
                    ...signInDetails
                })
            } catch (e) {
                setUser(undefined)
            }
        })()
    }, [])



    // Tab configuration
    const tabs = [
        { id: 'create', name: 'Create Content', icon: PlusCircle, description: 'Upload new episodes and create series' },
        { id: 'manage', name: 'Manage Content', icon: Layout, description: 'View and edit your published content' },
        { id: 'settings', name: 'Creator Settings', icon: Settings, description: 'Manage your creator account settings' }
    ];

    return (
        <div className="min-h-screen relative bg-gradient-to-br from-blue-50 via-blue-100 to-sky-200">


            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Title */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Creator Studio</h1>
                    <p className="text-gray-600 mt-2">Create, manage, and analyze your webtoon content</p>
                </div>

                {/* Tab Navigation */}
                <div className="mb-8">
                    <div className="border-b border-gray-200">
                        <nav className="flex -mb-px space-x-8">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                    ${activeTab === tab.id
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }
                  `}
                                >
                                    <div className="flex items-center">
                                        <tab.icon size={18} className="mr-2" />
                                        {tab.name}
                                    </div>
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Tab Description */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                            {/* {tabs.find(tab => tab.id === activeTab)?.icon && (
                                <tabs.find(tab => tab.id === activeTab).icon size={24} className="text-blue-600" />
              )} */}
                        </div>
                        <div className="ml-4">
                            <h2 className="text-lg font-medium text-gray-900">
                                {tabs.find(tab => tab.id === activeTab)?.name}
                            </h2>
                            <p className="text-gray-600">
                                {tabs.find(tab => tab.id === activeTab)?.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tab Content Container */}
                <div className="bg-white rounded-lg shadow-md p-6 min-h-[500px]">

                    {!user && (
                        <div className="text-center py-20 text-gray-500">
                            <WifiOff size={48} className="mx-auto text-blue-500 mb-4" />
                            <h3 className="text-xl font-medium text-gray-900 mb-2">
                                Not Signed In
                            </h3>
                            <p>Please sign in to continue.</p>
                        </div>
                    )}

                    {user && activeTab === 'create' && (
                        <CreateContentTab/>
                    )}

                    {user && activeTab === 'manage' && (
                        <div className="text-center py-20 text-gray-500">
                            <Layout size={48} className="mx-auto text-blue-500 mb-4" />
                            <h3 className="text-xl font-medium text-gray-900 mb-2">Manage Content Tab</h3>
                            <p>This area will show your published content and editing tools.</p>
                        </div>
                    )}

                    {user && activeTab === 'settings' && (
                        <div className="text-center py-20 text-gray-500">
                            <Settings size={48} className="mx-auto text-blue-500 mb-4" />
                            <h3 className="text-xl font-medium text-gray-900 mb-2">Creator Settings Tab</h3>
                            <p>This area will contain account settings and preferences.</p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default CreateContainer