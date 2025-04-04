"use client"

import React, { useState, useEffect, useCallback, useContext } from 'react';
import { WifiOff } from 'react-feather';
import {
    PlusCircle,
    BookOpen,
    BarChart2,
    Users,
    Settings,
    X,
    Upload,
    Zap,
    Coins,
    Edit3,
    Image,
    Layout,
    Baseline
} from 'lucide-react';
import NewSeriesModal from "../../modals/NewSeries"
import CreateContentTab from './CreateContent';
import Dashboard from './Dashboard';
import { WalletContext } from '@/contexts/wallet';
//  useWagmi from '@/hooks/useWagmi';

const CreateContainerOLD = () => {

    const { signMessage } = useContext(WalletContext)

    // const { switchWagmiChain, signMessage} = useWagmi()

    const [activeTab, setActiveTab] = useState('create');

    // Tab configuration
    const tabs = [
        // { id: 'dashboard', name: 'Dashboard', icon: PlusCircle, description: 'Upload new episodes and create series' },
        { id: 'create', name: 'Create Content', icon: PlusCircle, description: 'Upload new episodes and create series' },
        { id: 'manage', name: 'Manage Content', icon: Layout, description: 'View and edit your published content' },
        { id: 'settings', name: 'Creator Settings', icon: Settings, description: 'Manage your creator account settings' }
    ];

    const onTest = useCallback(async () => {
        await signMessage()
    }, [signMessage])

    return (
        <div className="min-h-screen relative bg-gradient-to-br from-blue-50 via-blue-100 to-sky-200">


            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Title */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Creator Studio</h1>
                    <p className="text-gray-600 mt-2">Create and manage your webtoon series with community-driven storylines</p>

                    {/* <button onClick={onTest} className='bg-blue-600 text-white p-2 rounded'>
                        Test
                    </button> */}

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
                {/* <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                            {tabs.find(tab => tab.id === activeTab)?.icon && (
                                <tabs.find(tab => tab.id === activeTab).icon size={24} className="text-blue-600" />
              )}
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
                </div> */}

                {/* Tab Content Container */}
                <div className="bg-white rounded-lg shadow-md p-6 min-h-[500px]">

                    {activeTab === 'create' && (
                        <CreateContentTab />
                    )}


                    {/* {!user && (
                        <div className="text-center py-20 text-gray-500">
                            <WifiOff size={48} className="mx-auto text-blue-500 mb-4" />
                            <h3 className="text-xl font-medium text-gray-900 mb-2">
                                Not Signed In
                            </h3>
                            <p>Please sign in to continue.</p>
                        </div>
                    )} */}

                    {/* {activeTab === 'dashboard' && (
                        <Dashboard />
                    )}

                    {user && activeTab === 'create' && (
                        <CreateContentTab />
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
                    )} */}
                </div>
            </div>

        </div>
    )
}

const CreateContainer = () => {

    const [activeModal, setActiveModal] = useState<any>(null);

    // Open a specific modal
    const openModal = (modalName: any) => {
        setActiveModal(modalName);
    };

    // Close the active modal
    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <div className="min-h-screen relative ">

            {activeModal === "newSeries" &&(
                <NewSeriesModal
                    visible={activeModal === "newSeries"}
                    close={closeModal}
                />
            )}


            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> 
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-6 mb-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10">
                        <Baseline className="w-[200px] h-[200px]"/>
                    </div>
                    <h1 className="text-2xl font-bold mb-2">Welcome to Creator Studio</h1>
                    <p className="text-blue-100 max-w-xl">Launch your webtoon series with built-in tokenomics. Create episodes, set branch points and let your community help shape the story.</p>
                    <button
                        onClick={() => openModal('quickStart')}
                        className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium inline-flex items-center"
                    >
                        Quick Start Guide
                    </button>
                </div>
                {/* Stats Section */}
                {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <BookOpen className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-sm font-medium text-gray-500">Series</h3>
                                <p className="text-2xl font-bold text-gray-800">3</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <Layout className="h-6 w-6 text-purple-600" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-sm font-medium text-gray-500">Episodes</h3>
                                <p className="text-2xl font-bold text-gray-800">24</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center">
                            <div className="bg-green-100 p-3 rounded-lg">
                                <Users className="h-6 w-6 text-green-600" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-sm font-medium text-gray-500">Readers</h3>
                                <p className="text-2xl font-bold text-gray-800">1,248</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex items-center">
                            <div className="bg-yellow-100 p-3 rounded-lg">
                                <Coins className="h-6 w-6 text-yellow-600" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-sm font-medium text-gray-500">Trading volumes</h3>
                                <p className="text-2xl font-bold text-gray-800">$20K</p>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Action Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div
                        onClick={() => openModal('newSeries')}
                        className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:border-blue-300 cursor-pointer transition-colors"
                    >
                        <div className="flex items-start">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <PlusCircle className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Create New Series</h3>
                                <p className="text-gray-600 mt-1">Launch a new webtoon with automatic token creation</p>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={() => openModal('newEpisode')}
                        className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:border-blue-300 cursor-pointer transition-colors"
                    >
                        <div className="flex items-start">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <Edit3 className="h-6 w-6 text-purple-600" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Add Episode</h3>
                                <p className="text-gray-600 mt-1">Upload a new episode to an existing series</p>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={() => openModal('branchPoint')}
                        className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:border-blue-300 cursor-pointer transition-colors"
                    >
                        <div className="flex items-start">
                            <div className="bg-green-100 p-3 rounded-lg">
                                <Zap className="h-6 w-6 text-green-600" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Create Branch Point</h3>
                                <p className="text-gray-600 mt-1">Set up AI-suggested story options for voting</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Series Overview */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-medium text-gray-900">Your Series</h2>
                        <button
                            onClick={() => openModal('allSeries')}
                            className="text-blue-600 text-sm font-medium hover:text-blue-800"
                        >
                            View All
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Dragon's Prophecy",
                                episodes: 8,
                                readers: 642,
                                tokens: 5000,
                                image: "bg-gradient-to-br from-blue-500 to-purple-600"
                            },
                            {
                                title: "Cyber Detective",
                                episodes: 12,
                                readers: 483,
                                tokens: 3200,
                                image: "bg-gradient-to-br from-green-400 to-blue-500"
                            },
                            {
                                title: "Lost Kingdoms",
                                episodes: 4,
                                readers: 123,
                                tokens: 1000,
                                image: "bg-gradient-to-br from-yellow-400 to-red-500"
                            }
                        ].map((series, index) => (
                            <div
                                key={index}
                                onClick={() => openModal('seriesDetail')}
                                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                            >
                                <div className={`h-32 ${series.image} flex items-center justify-center`}>
                                    <h3 className="text-lg font-bold text-white px-4 text-center">{series.title}</h3>
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-500">Episodes</span>
                                        <span className="font-medium text-gray-800">{series.episodes}</span>
                                    </div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-500">Readers</span>
                                        <span className="font-medium text-gray-800">{series.readers}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Tokens</span>
                                        <span className="font-medium text-gray-800">{series.tokens}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
                        <button className="text-blue-600 text-sm font-medium hover:text-blue-800">View All</button>
                    </div>

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

                        <div className="flex items-start">
                            <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                                <BookOpen className="h-4 w-4 text-yellow-600" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-gray-800">
                                    <span className="font-medium">New episode published</span> for "Cyber Detective"
                                </p>
                                <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

        </div>
    )
}

export default CreateContainer