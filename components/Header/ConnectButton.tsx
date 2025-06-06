
import { Bell, RefreshCw } from "react-feather"
import { useState, useEffect, useContext } from "react"
import Link from 'next/link';
import { useConnectWallet, useSetChain } from '@web3-onboard/react'
import { RefreshCcw } from "react-feather";
import { WalletContext } from "@/contexts/wallet";
import { AccountContext } from "@/contexts/account";
import { parseEther, isHex, fromHex } from 'viem'

const ConnectButton = () => {

    const { profile, loadProfile } = useContext(AccountContext)

    const { defaultChain, switchWagmiChain } = useContext(WalletContext)

    const [
        {
            wallet, // the wallet that has been connected or null if not yet connected
            connecting // boolean indicating if connection is in progress
        },
        connect, // function to call to initiate user to connect wallet
        disconnect, // function to call with wallet<DisconnectOptions> to disconnect wallet
        updateBalances, // function to be called with an optional array of wallet addresses connected through Onboard to update balance or empty/no params to update all connected wallets
    ] = useConnectWallet()

    const [{ chains, connectedChain, settingChain }, setChain] = useSetChain()

    useEffect(() => {
        if (wallet && wallet?.accounts && wallet?.accounts[0]) { 
            loadProfile(wallet?.accounts[0].address)
        }
    },[wallet])

    const isCorrectNetwork = connectedChain ? connectedChain.id === defaultChain : false

    return (
        <>
            {/* {user ?
                <>
                    <button className="p-1.5 rounded-full text-gray-700 hover:bg-gray-200" aria-label="Notifications">
                        <Bell size={20} />
                    </button>

                    <button className="flex items-center p-1 rounded-full text-gray-700 hover:bg-gray-200" aria-label="User profile">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full flex items-center justify-center text-white font-medium text-sm">
                            JP
                        </div>
                    </button>
                </> :
                <Link href="/account">
                    <button className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
                        <span className="font-bold">Sign In</span>
                    </button>
                </Link>

            } */}
            <button disabled={connecting} onClick={() => (wallet ? (isCorrectNetwork ? disconnect(wallet) : switchWagmiChain(defaultChain)) : connect())} className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg">
                {connecting ? <RefreshCw size={22} className="animate-spin mx-2" /> : wallet ? (isCorrectNetwork ? 'Disconnect' : "Wrong Network") : 'Connect'}
            </button>
        </>
    )
}

export default ConnectButton