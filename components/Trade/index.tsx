"use client"

import { useConnectWallet, useSetChain } from '@web3-onboard/react'
import React, { useContext, useEffect, useState, useReducer } from 'react';
import {
    ChevronDown,
    RefreshCw,
    Info,
    ArrowDown,
    Settings,
    ExternalLink,
    Bookmark,
    AlertCircle
} from 'lucide-react';
import { ContentContext } from '@/contexts/content';

import Buy from "./Buy"
import Sell from "./Sell"
import { WalletContext } from '@/contexts/wallet';

const TradeContainerOLD = () => {

    // const { listCoins } = useContext(ContentContext)

    // useEffect(() => {
    //     listCoins()
    // }, [])

    const [values, dispatch] = useReducer(
        (curVal: any, newVal: any) => ({ ...curVal, ...newVal }),
        {
            mode: "buy"
        }
    )

    const { mode } = values

    const [selectedToken, setSelectedToken] = useState<any>(null);
    const [showTokenList, setShowTokenList] = useState(false);
    const [inputAmount, setInputAmount] = useState<any>('');
    const [outputAmount, setOutputAmount] = useState('');
    const [payWithToken, setPayWithToken] = useState('ETH');
    const [showPayWithOptions, setShowPayWithOptions] = useState(false);
    // const [mode, setMode] = useState<any>("buy")

    // Sample webtoon token data
    const webtoonTokens = [
        { id: 1, name: "Dragon's Prophecy", symbol: "DPT", creator: "JaneCreator", price: 0.00042, image: "bg-gradient-to-br from-blue-500 to-purple-600", change: 5.2 },
        { id: 2, name: "Cyber Detective", symbol: "CYBER", creator: "MaxWriter", price: 0.00021, image: "bg-gradient-to-br from-green-400 to-blue-500", change: -2.1 },
        { id: 3, name: "Lost Kingdoms", symbol: "LOST", creator: "FantasyArt", price: 0.00015, image: "bg-gradient-to-br from-yellow-400 to-red-500", change: 12.4 },
    ];

    // Payment token options
    const paymentOptions = [
        { symbol: "ETH", name: "Ethereum", balance: 1.245 },
        { symbol: "USDC", name: "USD Coin", balance: 350 },
        { symbol: "DAI", name: "Dai", balance: 120 },
    ];

    // Calculate output amount when input changes
    const handleInputChange = (value: any) => {
        setInputAmount(value);
        if (selectedToken && value) {
            const calculatedOutput = (value / selectedToken.price).toFixed(2);
            setOutputAmount(calculatedOutput);
        } else {
            setOutputAmount('');
        }
    };

    // Calculate input amount when output changes
    const handleOutputChange = (value: any) => {
        setOutputAmount(value);
        if (selectedToken && value) {
            const calculatedInput = (value * selectedToken.price).toFixed(6);
            setInputAmount(calculatedInput);
        } else {
            setInputAmount('');
        }
    };

    // Select a webtoon token
    const selectToken = (token: any) => {
        setSelectedToken(token);
        setShowTokenList(false);
        // Reset input/output when changing tokens
        setInputAmount('');
        setOutputAmount('');
    };

    // Select payment method
    const selectPaymentOption = (option: any) => {
        setPayWithToken(option.symbol);
        setShowPayWithOptions(false);
    };

    return (
        <div className="min-h-screen relative py-12">
            <div className="max-w-md mx-auto">
                {/* <div className="bg-white rounded-t-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-lg font-bold text-gray-900">Webtoon Token Exchange</h1>
                        <button className="text-gray-400 hover:text-gray-600">
                            <Settings className="h-5 w-5" />
                        </button>
                    </div>
 
                    <div className="flex bg-gray-100 p-1 rounded-lg w-full">
                        <button
                            className={`flex-1 py-2 text-center rounded-md transition-colors ${mode === 'buy'
                                ? 'bg-white text-blue-600 font-medium shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                            onClick={() => setMode('buy')}
                        >
                            Buy
                        </button>
                        <button
                            className={`flex-1 py-2 text-center rounded-md transition-colors ${mode === 'sell'
                                ? 'bg-white text-blue-600 font-medium shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                            onClick={() => setMode('sell')}
                        >
                            Sell
                        </button>
                    </div>
                </div> */}

                {/* Card Header */}
                <div className="bg-white rounded-t-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex justify-between items-center">
                        <h1 className="text-lg font-bold text-gray-900">Buy Webtoon Tokens</h1>

                        <button className="text-gray-400 hover:text-gray-600">
                            <Settings className="h-5 w-5" />
                        </button>
                    </div>
                    <p className="text-gray-600 mt-2 mb-0">Purchase tokens to unlock access and shape the story's direction through votes.</p>
                </div>

                {/* Main Swap Interface */}
                <div className="bg-white p-4 border-l border-r border-gray-200">
                    {/* Webtoon Token Selection */}

                    <div className="flex mb-4 bg-gray-200 p-1 rounded-lg w-full">
                        <button
                            className={`flex-1 py-2 text-center cursor-pointer rounded-md transition-colors ${mode === 'buy'
                                ? 'bg-white text-blue-600 font-medium shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                            onClick={() => {
                                dispatch({
                                    mode: "buy"
                                })
                            }}
                        >
                            Buy
                        </button>
                        <button
                            className={`flex-1 py-2 text-center  cursor-pointer rounded-md transition-colors ${mode === 'sell'
                                ? 'bg-white text-blue-600 font-medium shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                            onClick={() => {
                                dispatch({
                                    mode: "sell"
                                })
                            }}
                        >
                            Sell
                        </button>
                    </div>

                    {mode === "buy" && (
                        <>
                            <div className="mb-4">
                                <div className="relative">
                                    <button
                                        onClick={() => setShowTokenList(!showTokenList)}
                                        className={`w-full flex items-center justify-between p-3 border ${selectedToken ? 'border-gray-300' : 'border-dashed border-gray-400'} rounded-lg hover:border-blue-500 transition-colors`}
                                    >
                                        {selectedToken ? (
                                            <div className="flex items-center">
                                                <div className={`h-8 w-8 rounded-full ${selectedToken.image} flex items-center justify-center text-white font-bold text-xs`}>
                                                    {selectedToken.symbol.slice(0, 2)}
                                                </div>
                                                <div className="ml-2">
                                                    <div className="font-medium">{selectedToken.name}</div>
                                                    <div className="text-xs text-gray-500">by {selectedToken.creator}</div>
                                                </div>
                                            </div>
                                        ) : (
                                            <span className="text-gray-500">Select a Webtoon token</span>
                                        )}
                                        <ChevronDown className="h-5 w-5 text-gray-400" />
                                    </button>

                                    {/* Token selection dropdown */}
                                    {showTokenList && (
                                        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto">
                                            <div className="p-2">
                                                <input
                                                    type="text"
                                                    placeholder="Search tokens..."
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                                                />
                                            </div>
                                            <div className="py-1">
                                                {webtoonTokens.map((token) => (
                                                    <button
                                                        key={token.id}
                                                        className="w-full px-4 py-2 hover:bg-gray-50 flex items-center justify-between"
                                                        onClick={() => selectToken(token)}
                                                    >
                                                        <div className="flex items-center">
                                                            <div className={`h-8 w-8 rounded-full ${token.image} flex items-center justify-center text-white font-bold text-xs`}>
                                                                {token.symbol.slice(0, 2)}
                                                            </div>
                                                            <div className="ml-2 text-left">
                                                                <div className="font-medium">{token.name}</div>
                                                                <div className="text-xs text-gray-500">by {token.creator}</div>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="font-medium">{token.price} ETH</div>
                                                            <div className={`text-xs ${token.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                                                {token.change >= 0 ? '+' : ''}{token.change}%
                                                            </div>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Token amount input */}
                            {selectedToken && (
                                <div className="mb-4">
                                    <div className="p-3 border border-gray-300 rounded-lg">
                                        <div className="flex justify-between items-center mb-1">
                                            <label className="text-sm text-gray-500">How many tokens?</label>
                                            <div className="text-xs text-gray-500">
                                                Current Price: {selectedToken.price} ETH
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="number"
                                                placeholder="0.0"
                                                value={outputAmount}
                                                onChange={(e) => handleOutputChange(e.target.value)}
                                                className="w-full text-2xl font-medium focus:outline-none"
                                            />
                                            <div className="text-gray-700 font-medium">
                                                {selectedToken.symbol}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Divider with arrow */}
                            <div className="relative flex items-center justify-center my-4">
                                <div className="border-t border-gray-200 w-full"></div>
                                <div className="absolute bg-white p-1 rounded-full border border-gray-200">
                                    <ArrowDown className="h-4 w-4 text-gray-400" />
                                </div>
                            </div>

                            {/* Pay with section */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Pay with
                                </label>

                                <div className="p-3 border border-gray-300 rounded-lg mb-2">
                                    <div className="flex justify-between items-center mb-1">
                                        <input
                                            type="number"
                                            placeholder="0.0"
                                            value={inputAmount}
                                            onChange={(e) => handleInputChange(e.target.value)}
                                            className="w-full text-2xl font-medium focus:outline-none"
                                        />
                                        <button
                                            onClick={() => setShowPayWithOptions(!showPayWithOptions)}
                                            className="flex items-center bg-gray-100 px-2 py-1 rounded-lg hover:bg-gray-200"
                                        >
                                            {payWithToken}
                                            <ChevronDown className="h-4 w-4 ml-1" />
                                        </button>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div className="text-xs text-gray-500">
                                            {selectedToken && inputAmount ? `≈ ${inputAmount} ${payWithToken}` : ''}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            Balance: {paymentOptions.find(o => o.symbol === payWithToken)?.balance || '0'} {payWithToken}
                                        </div>
                                    </div>
                                </div>

                                {/* Payment options dropdown */}
                                {showPayWithOptions && (
                                    <div className="relative">
                                        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                            {paymentOptions.map((option) => (
                                                <button
                                                    key={option.symbol}
                                                    className="w-full px-4 py-3 hover:bg-gray-50 flex items-center justify-between"
                                                    onClick={() => selectPaymentOption(option)}
                                                >
                                                    <div className="flex items-center">
                                                        <div className="font-medium">{option.symbol}</div>
                                                        <div className="ml-2 text-xs text-gray-500">{option.name}</div>
                                                    </div>
                                                    <div className="text-sm">
                                                        {option.balance} {option.symbol}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Transaction info */}
                            {selectedToken && inputAmount && (
                                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="text-sm text-gray-700">Rate</div>
                                        <div className="text-sm text-gray-700">1 {selectedToken.symbol} = {selectedToken.price} {payWithToken}</div>
                                    </div>

                                    <div className="flex justify-between items-center mb-1">
                                        <div className="text-sm text-gray-700">Network Fee</div>
                                        <div className="text-sm text-gray-700">~0.0001 ETH</div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div className="text-sm text-gray-700 flex items-center">
                                            Price Impact
                                            <Info className="h-3 w-3 text-gray-400 ml-1" />
                                        </div>
                                        <div className="text-sm text-green-500">{"<"}0.01%</div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}







                </div>

                {/* Action Buttons */}
                <div className="bg-white p-4 rounded-b-xl shadow-sm border border-t-0 border-gray-200">
                    {!selectedToken ? (
                        <button className="w-full py-3 bg-gray-300 text-gray-500 rounded-lg font-medium cursor-not-allowed">
                            Select a token
                        </button>
                    ) : !inputAmount || inputAmount <= 0 ? (
                        <button className="w-full py-3 bg-gray-300 text-gray-500 rounded-lg font-medium cursor-not-allowed">
                            Enter an amount
                        </button>
                    ) : (
                        <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                            Buy {outputAmount} {selectedToken.symbol}
                        </button>
                    )}

                    {/* {selectedToken && (
                        <div className="flex justify-center mt-4 space-x-4">
                            <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                View Series
                            </button>
                            <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                                <Bookmark className="h-4 w-4 mr-1" />
                                Add to Watchlist
                            </button>
                        </div>
                    )} */}
                </div>

                {/* Extra info */}
                {/* {selectedToken && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                                <h3 className="text-sm font-medium text-blue-800">About {selectedToken.name} Tokens</h3>
                                <p className="mt-1 text-xs text-blue-600">
                                    These tokens grant you voting rights on how the "{selectedToken.name}" story develops. You'll also receive a portion of revenue if this webtoon becomes popular. 10% of all tokens are held by the creator.
                                </p>
                            </div>
                        </div>
                    </div>
                )} */}
            </div>
        </div>
    )
}

const TradeContainer = () => {

    const [
        { wallet }
    ] = useConnectWallet()

    const {  } = useContext(WalletContext)

    const [values, dispatch] = useReducer(
        (curVal: any, newVal: any) => ({ ...curVal, ...newVal }),
        {
            mode: "buy",
            tick: 1,
            inputAmount: 0
        }
    )

    const { mode, tick, inputAmount } = values

    const handleInputChange = (value: any) => { 
        dispatch({
            inputAmount: Number(value)
        })
    }

    let ethBalance = 0

    if (wallet && wallet.accounts[0] ) {
        ethBalance = Number(wallet?.accounts[0]?.balance?.ETH || 0)
    }
 
    return (
        <div className="min-h-screen relative py-12">
            <div className="max-w-md mx-auto">
                {/* Card Header */}
                <div className="bg-white rounded-t-xl p-4 shadow-sm border border-gray-200">
                    <div className="flex justify-between items-center">
                        <h1 className="text-lg font-bold text-gray-900">Buy Webtoon Tokens</h1>

                        <button className="text-gray-400 hover:text-gray-600">
                            <Settings className="h-5 w-5" />
                        </button>
                    </div>
                    <p className="text-gray-600 mt-2 mb-0">Purchase tokens to unlock access and shape the story's direction through votes.</p>
                </div>
                {/* Main Swap Interface */}
                <div className="bg-white p-4 border-l border-r border-gray-200  rounded-b-xl shadow-sm   ">
                    <div className="flex mb-4 bg-gray-200 p-1 rounded-lg w-full">
                        <button
                            className={`flex-1 py-2 text-center cursor-pointer rounded-md transition-colors ${mode === 'buy'
                                ? 'bg-white text-blue-600 font-medium shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                            onClick={() => {
                                dispatch({
                                    mode: "buy",
                                    inputAmount: 0
                                })
                            }}
                        >
                            Buy
                        </button>
                        <button
                            className={`flex-1 py-2 text-center  cursor-pointer rounded-md transition-colors ${mode === 'sell'
                                ? 'bg-white text-blue-600 font-medium shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                            onClick={() => {
                                dispatch({
                                    mode: "sell",
                                    inputAmount: 0
                                })
                            }}
                        >
                            Sell
                        </button>
                    </div>

                    { mode === "buy" && <Buy ethBalance={ethBalance} handleInputChange={handleInputChange} inputAmount={inputAmount} />}
                    { mode === "sell" && <Sell handleInputChange={handleInputChange} inputAmount={inputAmount} />}
                </div>

                {/* Action Buttons */}
                {/* <div className="bg-white p-4 rounded-b-xl shadow-sm border border-t-0 border-gray-200">
                    
                     {!selectedToken ? (
                        <button className="w-full py-3 bg-gray-300 text-gray-500 rounded-lg font-medium cursor-not-allowed">
                            Select a token
                        </button>
                    ) : !inputAmount || inputAmount <= 0 ? (
                        <button className="w-full py-3 bg-gray-300 text-gray-500 rounded-lg font-medium cursor-not-allowed">
                            Enter an amount
                        </button>
                    ) : (
                        <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                            Buy {outputAmount} {selectedToken.symbol}
                        </button>
                    )}  
                </div> */}

            </div>
        </div>
    )
}

export default TradeContainer