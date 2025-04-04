import { createContext, useCallback, ReactNode, useContext, useEffect, useMemo, useReducer, useState } from "react"
import { Web3OnboardProvider, init } from '@web3-onboard/react'
import {
    useAccountCenter,
    useConnectWallet,
    useNotifications,
    useSetChain,
    useWallets,
    useSetLocale,
    useWagmiConfig
} from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import wagmi from '@web3-onboard/wagmi'
import {
    sendTransaction as wagmiSendTransaction,
    switchChain,
    disconnect,
    getConnectors,
    signMessage as wagmiSignMessage,
    writeContract,
    simulateContract,
    waitForTransactionReceipt
} from '@web3-onboard/wagmi'
import { ethers } from 'ethers'
import { parseEther, Address, isHex, fromHex } from 'viem'
import { createCoinCall } from "@zoralabs/coins-sdk";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../amplify/data/resource"

const client = generateClient<Schema>();

export const WalletContext = createContext<any>({})

type Props = {
    children: ReactNode;
};

const DEFAULT_CHAIN = '0x14a34'

const baseSepoliaTestnet = {
    id: DEFAULT_CHAIN,
    token: 'ETH',
    label: 'Base Sepolia',
    rpcUrl: 'https://sepolia.base.org'
}

const chains = [baseSepoliaTestnet]
const wallets = [injectedModule()]

export const initWeb3Onboard = init({
    wagmi,
    wallets,
    chains,
    appMetadata: {
        name: 'Web3-Onboard Demo',
        icon: '<svg>App Icon</svg>',
        description: 'A demo of Web3-Onboard.'
    }
})

let provider

const Provider = ({ children }: Props) => {

    const [{ wallet }, connect, disconnect, updateBalances, setWalletModules] = useConnectWallet()
    const wagmiConfig: any = useWagmiConfig()
    const [{ chains, connectedChain, settingChain }, setChain] = useSetChain()

    const [values, dispatch] = useReducer(
        (curVal: any, newVal: any) => ({ ...curVal, ...newVal }),
        {
            web3Onboard: undefined
        }
    )

    const { web3Onboard } = values

    useEffect(() => {
        dispatch({
            web3Onboard: initWeb3Onboard
        })
    }, [])

    useEffect(() => {
        if (!wallet?.provider) {
            provider = null
        } else {
            provider = new ethers.BrowserProvider(wallet.provider, 'any')
        }
    }, [wallet])

    useEffect(() => {
        console.log('wagmiConfig', wagmiConfig)
    }, [wagmiConfig])


    const signMessage = useCallback(async () => {
        const { wagmiConnector }: any = wallet
        await wagmiSignMessage(wagmiConfig, {
            message: 'This is my message to you',
            connector: wagmiConnector
        })
    }, [wallet, wagmiConfig, web3Onboard])

    const switchWagmiChain = useCallback(async (chainId: number) => {
        const { wagmiConnector }: any = wallet
        let chainAsNumber
        if (isHex(chainId)) {
            chainAsNumber = fromHex(chainId, 'number')
        } else if (!isHex(chainId) && typeof chainId === 'number') {
            chainAsNumber = chainId
        } else {
            throw new Error('Invalid chainId')
        }
        await switchChain(wagmiConfig, {
            chainId: chainAsNumber,
            connector: wagmiConnector
        })
    }, [wallet, wagmiConfig, web3Onboard])

    const createCoin = useCallback(async ({ userId, title, description, tokenName, tokenSymbol }: any) => {

        // const { wagmiConnector }: any = wallet

        const activeAddress = wallet?.accounts[0]?.address

        const coinParams = {
            name: tokenName || "My Awesome Token",
            symbol: tokenSymbol || "TOKEN",
            uri: "https://nextoon.xyz",
            payoutRecipient: activeAddress as Address
        };

        const contractCallParams: any = createCoinCall(coinParams);
        const writeConfig = await simulateContract(wagmiConfig, contractCallParams)

        console.log("write config ", writeConfig, writeConfig.request)

        const hash = await writeContract(wagmiConfig, writeConfig.request);

        console.log("hash : ", hash)

        const receipt = await waitForTransactionReceipt(wagmiConfig, {
            hash
        })

        console.log("receipt : ", receipt)

        const entry = await client.models.Content.create({
            userId,
            title,
            description,
            tokenName,
            tokenSymbol,
            isTestnet: true
        })

        console.log("entry : ", entry)

        return {
            ...receipt,
            txId: hash
        }
    }, [wallet, wagmiConfig, web3Onboard])

    const walletContext: any = useMemo(
        () => ({
            defaultChain: DEFAULT_CHAIN,
            signMessage,
            switchWagmiChain,
            wallet,
            createCoin
        }),
        [
            signMessage,
            switchWagmiChain,
            wallet,
            createCoin
        ]
    )

    return (
        <WalletContext.Provider value={walletContext}>
            {children}
        </WalletContext.Provider>
    )
}

export default Provider
