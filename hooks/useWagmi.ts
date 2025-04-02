// import Onboard from '@web3-onboard/core'
// import injectedModule from '@web3-onboard/injected-wallets'
// import wagmi from '@web3-onboard/wagmi'
// import {
//     sendTransaction as wagmiSendTransaction,
//     switchChain,
//     disconnect,
//     getConnectors,
//     signMessage as wagmiSignMessage
// } from '@web3-onboard/wagmi'
// import { parseEther, isHex, fromHex } from 'viem'

// const injected = injectedModule()

// const onboard = Onboard({
//     // This javascript object is unordered meaning props do not require a certain order
//     wagmi,
//     wallets: [injected],
//     chains: [
//         {
//             id: '0x14a34',
//             token: 'ETH',
//             label: 'Base Sepolia',
//             rpcUrl: 'https://sepolia.base.org/'
//         }
//     ]
//     // ... other Onboard options
// })

// const useWagmi = () => {

//     async function signMessage() {
//         const [activeWallet] = onboard.state.get().wallets
//         const wagmiConfig: any = onboard.state.get().wagmiConfig
//         await wagmiSignMessage(wagmiConfig, {
//             message: 'This is my message to you',
//             connector: activeWallet.wagmiConnector
//         })
//     }

//     async function switchWagmiChain(chainId: number) { 
//         const [activeWallet] = onboard.state.get().wallets
//         const { wagmiConnector } = activeWallet
//         let chainAsNumber
//         if (isHex(chainId)) {
//           chainAsNumber = fromHex(chainId, 'number')
//         } else if (!isHex(chainId) && typeof chainId === 'number') {
//           chainAsNumber = chainId
//         } else {
//           throw new Error('Invalid chainId')
//         }
//         const wagmiConfig: any = onboard.state.get().wagmiConfig
//         await switchChain(wagmiConfig, {
//           chainId: chainAsNumber,
//           connector: wagmiConnector
//         })
//       }

//     return {
//         signMessage,
//         switchWagmiChain
//     }
// }

// export default useWagmi