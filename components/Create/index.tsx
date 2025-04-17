"use client"

import React, { useState, useEffect, useCallback, useContext, useReducer } from 'react';
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
    Baseline,
    UserPen
} from 'lucide-react';
import { ExternalLink } from 'react-feather';
import NewSeriesModal from "../../modals/NewSeries"
import CreatorProfileModal from "../../modals/Creator"
import CreateContentTab from './CreateContent';
import Dashboard from './Dashboard';
import Link from 'next/link';
import { WalletContext } from '@/contexts/wallet';
import { ContentContext } from '@/contexts/content';
import { AccountContext } from '@/contexts/account';
import NewEpisodeModal from '@/modals/NewEpisode';

const CreateContainer = () => {

    const { series } = useContext(ContentContext)
    const { profile } = useContext(AccountContext)

    const [activeModal, setActiveModal] = useState<any>(null);

    const [values, dispatch] = useReducer(
        (curVal: any, newVal: any) => ({ ...curVal, ...newVal }),
        {
            mySeries: []
        }
    )

    const { mySeries } = values

    useEffect(() => {

        if (series && series.length > 0 && profile && profile.id) {
            const mySeries = series.filter((item: any) => item.userId === profile.id)
            dispatch({
                mySeries
            })
        }

    }, [series, profile])

    // Open a specific modal
    const openModal = (modalName: any) => {
        setActiveModal(modalName);
    };

    // Close the active modal
    const closeModal = () => {
        setActiveModal(null);
    };

    console.log("mySeries: ", mySeries)

    return (
        <div className="min-h-screen relative ">

            {activeModal === "newSeries" && (
                <NewSeriesModal
                    visible={activeModal === "newSeries"}
                    close={closeModal}
                />
            )}
            {activeModal === "profile" && (
                <CreatorProfileModal
                    visible={activeModal === "profile"}
                    close={closeModal}
                />
            )}
            {activeModal === "newEpisode" && (
                <NewEpisodeModal
                    visible={activeModal === "newEpisode"}
                    close={closeModal}
                    mySeries={mySeries}

                />
            )}



            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">


                <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-5">
                        <Baseline className="w-[200px] h-[200px]" />
                    </div>
                    <div className="flex md:items-center flex-col md:flex-row">
                        <div className="md:flex-1">
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Creator Studio</h1>
                            <p className="text-gray-600 max-w-xl mb-4">Launch your webtoon series with built-in tokenomics. Create episodes, set branch points and let your community help shape the story.</p>
                            <button
                                onClick={() => openModal('quickStart')}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium inline-flex items-center transition-colors"
                            >
                                Quick Start Guide
                            </button>
                        </div>
                    </div>
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
                        onClick={() => openModal('profile')}
                        className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:border-blue-300 cursor-pointer transition-colors"
                    >
                        <div className="flex items-start">
                            <div className="bg-amber-100 p-3 rounded-lg">
                                <UserPen className="h-6 w-6 text-amber-600" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Creator Settings</h3>
                                <p className="text-gray-600 mt-1">Manage your creator account settings</p>
                            </div>
                        </div>
                    </div>

                    {/* <div
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
                    </div> */}

                </div>

                {/* Series Overview */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-medium text-gray-900">Your Series</h2>
                        {/* <button
                            onClick={() => openModal('allSeries')}
                            className="text-blue-600 text-sm font-medium hover:text-blue-800"
                        >
                            View All
                        </button> */}
                    </div>

                    {mySeries.length === 0 && (
                        <div className='flex text-gray-600 justify-between items-center h-[200px]'>
                            <div className='mx-auto'>
                                No content found. Connect your wallet and create your first Webtoon series!
                            </div>

                        </div>
                    )}

                    {mySeries.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* {[
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
                            ))} */}
                            {mySeries.map((item: any, index: number) => {

                                let gradientBg = ""

                                if (index % 3 === 0) {
                                    gradientBg = "bg-gradient-to-br from-blue-500 to-purple-600"
                                } else if (index % 3 === 1) {
                                    gradientBg = "bg-gradient-to-br from-green-400 to-blue-500"
                                } else {
                                    gradientBg = "bg-gradient-to-br from-yellow-400 to-red-500"
                                }

                                return (
                                    <div
                                        key={index}
                                        className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                                    >
                                        <div className={`h-32 ${gradientBg} flex items-center justify-center`}>
                                            <h3 className="text-lg font-bold text-white px-4 text-center">{item.tokenName}</h3>
                                        </div>
                                        <div className="p-4">
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-gray-500">Episodes</span>
                                                <span className="font-medium text-gray-800">
                                                    {item.episodes.length}
                                                </span>
                                            </div>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-gray-500">Readers</span>
                                                <span className="font-medium text-gray-800">
                                                    {item && item.coinData ? item.coinData.uniqueHolders : 0}
                                                </span>
                                            </div>
                                            {/* <div className="flex justify-between text-sm">
                                                <span className="text-gray-500">Market Cap</span>
                                                <span className="font-medium text-gray-800">
                                                ${ item && item.coinData ? item.coinData.marketCap : 0}
                                                </span>
                                            </div> */}

                                        </div>
                                        <div className="flex justify-center mt-4 mb-4 space-x-4">
                                            <Link href={`https://sepolia.basescan.org/token/${item.tokenContract}`} target="_blank">
                                                <button className="flex cursor-pointer hover:underline items-center text-sm text-blue-600 hover:text-blue-800">
                                                    <ExternalLink className="h-4 w-4 mr-1" />
                                                    View Token Contract
                                                </button>
                                            </Link>
                                        </div>

                                    </div>
                                )
                            })

                            }
                        </div>
                    )

                    }
                </div>

                {/* Recent Activity */}
                {/* <div className="bg-white rounded-lg shadow-sm p-6">
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
                </div> */}




            </div>

        </div>
    )
}

export default CreateContainer