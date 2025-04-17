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
import TransactionModal from "../../modals/Transaction"

const TradeContainer = () => {

    const [
        { wallet }
    ] = useConnectWallet()

    const { } = useContext(WalletContext)

    const [values, dispatch] = useReducer(
        (curVal: any, newVal: any) => ({ ...curVal, ...newVal }),
        {
            mode: "buy",
            tick: 1,
            inputAmount: 0,
            modal: undefined
        }
    )

    const { mode, tick, inputAmount, modal } = values

    const handleInputChange = (value: any) => {
        dispatch({
            inputAmount: Number(value)
        })
    }

    const showInfo = ({ transactionHash, amount, tokenSymbol }: any) => {
        dispatch({
            modal: {
                transactionHash,
                amount,
                tokenSymbol
            }
        })
    }

    let ethBalance = 0

    if (wallet && wallet.accounts[0]) {
        ethBalance = Number(wallet?.accounts[0]?.balance?.ETH || 0)
    }

    return (
        <div className="min-h-screen relative py-12">

            <TransactionModal
                visible={modal !== undefined}
                close={() => dispatch({
                    modal: undefined
                })}
                transactionHash={modal?.transactionHash}
                amount={modal?.amount}
                tokenSymbol={modal?.tokenSymbol}
            />

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

                    {mode === "buy" && <Buy showInfo={showInfo} ethBalance={ethBalance} handleInputChange={handleInputChange} inputAmount={inputAmount} />}
                    {mode === "sell" && <Sell showInfo={showInfo} handleInputChange={handleInputChange} inputAmount={inputAmount} />}
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