import { ContentContext } from '@/contexts/content';
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
import { useReducer, useContext, useState, useEffect, useCallback } from 'react';
import { shortAddress } from "@/helpers";
import { AccountContext } from "@/contexts/account";
import { useConnectWallet } from '@web3-onboard/react'
import { WalletContext } from '@/contexts/wallet';



const Sell = ({ handleInputChange, inputAmount, showInfo }: any) => {

    const { updatePrice } = useContext(ContentContext)
    const { getTokenBalance, tradeCoin } = useContext(WalletContext)

    const [values, dispatch] = useReducer(
        (curVal: any, newVal: any) => ({ ...curVal, ...newVal }),
        {
            errorMessage: undefined,
            loading: false
        }
    )

    const { loading, errorMessage } = values

    const [{ wallet }] = useConnectWallet()

    const [showTokenList, setShowTokenList] = useState(false);
    const [selectedToken, setSelectedToken] = useState<any>(undefined);
    const [balance, setBalance] = useState<number>(0)

    useEffect(() => {

        if (selectedToken && selectedToken.tokenContract && wallet && wallet.accounts[0]) {
            getTokenBalance(selectedToken.tokenContract, wallet.accounts[0].address).then(setBalance)
        }

    }, [selectedToken, wallet])

    const { series } = useContext(ContentContext)

    const selectToken = (token: any) => {
        setSelectedToken(token);
        setShowTokenList(false);
    };

    const onSell = useCallback(async () => {

        dispatch({
            errorMessage: undefined
        })

        if (!inputAmount || 0.01 > inputAmount) {
            dispatch({
                errorMessage: "Minimum amount is 0.01"
            })
            return;
        }

        dispatch({
            loading: true
        })

        try {

            const output = await tradeCoin({
                direction: "sell",
                tokenAddress: selectedToken.tokenContract,
                amount: inputAmount
            })

            if (output) {
                showInfo({
                    transactionHash: output.transactionHash,
                    amount: output.amount,
                    tokenSymbol: selectedToken.tokenSymbol
                })
                const currentPrice = Number(output.amount) / Number(inputAmount)
                console.log("currentPrice : ", currentPrice)
                await updatePrice( selectedToken.id, currentPrice )
            }

        } catch (e: any) {
            console.log(e)
            dispatch({
                errorMessage: `${e.message}`
            })
        }

        dispatch({
            loading: false
        })

    }, [inputAmount, tradeCoin, selectedToken])


    return (
        <>
            <div className="mb-4">
                <div className="relative">
                    <button
                        onClick={() => setShowTokenList(!showTokenList)}
                        className={`w-full cursor-pointer flex items-center justify-between p-3 border ${selectedToken ? 'border-gray-300' : 'border-dashed border-gray-400'} rounded-lg hover:border-blue-500 transition-colors`}
                    >
                        {selectedToken ? (
                            <div className="flex items-center">
                                <div className={`h-8 w-8 rounded-full ${selectedToken.gradientBg} flex items-center justify-center text-white font-bold text-xs`}>
                                    {selectedToken?.coinData?.symbol.slice(0, 2)}
                                </div>
                                <div className="ml-2 text-left">
                                    <div className="font-medium">{selectedToken?.tokenName}</div>
                                    <div className="text-xs text-gray-500">by <DisplayCreatorName userId={selectedToken.userId} /></div>
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
                                {series.map((item: any, index: number) => {

                                    let gradientBg = ""

                                    if (index % 3 === 0) {
                                        gradientBg = "bg-gradient-to-br from-blue-500 to-purple-600"
                                    } else if (index % 3 === 1) {
                                        gradientBg = "bg-gradient-to-br from-green-400 to-blue-500"
                                    } else {
                                        gradientBg = "bg-gradient-to-br from-yellow-400 to-red-500"
                                    }

                                    return (
                                        <button
                                            key={index}
                                            className="w-full cursor-pointer px-4 py-2 hover:bg-gray-50 flex items-center justify-between"
                                            onClick={() => selectToken({
                                                ...item,
                                                gradientBg
                                            })}
                                        >
                                            <div className="flex items-center">
                                                <div className={`h-8 w-8 rounded-full ${gradientBg} flex items-center justify-center text-white font-bold text-xs`}>
                                                    {item?.coinData?.symbol.slice(0, 2)}
                                                </div>
                                                <div className="ml-2 text-left">
                                                    <div className="font-medium">
                                                        {item?.tokenName}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                {/* <div className="font-medium">{token.price} ETH</div>
                                            <div className={`text-xs ${token.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                                {token.change >= 0 ? '+' : ''}{token.change}%
                                            </div> */}
                                            </div>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>

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
                            step={0.1}
                            onChange={(e) => handleInputChange(e.target.value)}
                            className="w-full text-2xl font-medium focus:outline-none"
                        />
                        <div className="flex items-center bg-gray-100 px-2 py-1 rounded-lg">
                            {selectedToken?.coinData?.symbol || "UNKNOWN"}
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-500">
                            {selectedToken && inputAmount ? `≈ ${inputAmount}` : ''}
                        </div>
                        <div className="text-xs text-gray-500">
                            Balance: {(Number(balance)).toLocaleString()}
                        </div>
                    </div>
                </div>
            </div>

            {/* Transaction info */}
            {(selectedToken && inputAmount) ? (
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <div className="text-sm text-gray-700">Rate</div>
                        <div className="text-sm text-gray-700">1 {selectedToken?.coinData?.symbol} = 1234 ETH</div>
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
            ) : ""}

            <div className="    ">

                {!selectedToken ? (
                    <button className="w-full py-3 bg-gray-300 text-gray-500 rounded-lg font-medium cursor-not-allowed">
                        Select a token
                    </button>
                ) : !inputAmount || inputAmount <= 0 ? (
                    <button className="w-full  py-3 bg-gray-300 text-gray-500 rounded-lg font-medium cursor-not-allowed">
                        Enter an amount
                    </button>
                ) : !wallet ? (
                    <button className="w-full  py-3 bg-gray-300 text-gray-500 rounded-lg font-medium cursor-not-allowed">
                        Connect wallet
                    </button>
                ) : (
                    <button onClick={onSell} className="w-full flex cursor-pointer py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                        {loading && <RefreshCw size={22} className="animate-spin mx-auto" />}
                        {!loading && <div className="m-auto">Sell</div>}
                    </button>
                )}
            </div>
            {errorMessage && (
                <div className="flex px-2 w-full mx-auto py-4 pb-2 ">
                    <p className="text-sm mx-auto text-center font-semibold  text-blue-600">
                        {errorMessage}
                    </p>
                </div>
            )}
        </>
    )
}


const DisplayCreatorName = ({ userId }: any) => {

    const { getCreatorDisplayName } = useContext(AccountContext)

    const [displayName, setDisplayName] = useState<any>()

    useEffect(() => {
        userId && getCreatorDisplayName(userId).then(setDisplayName)
    }, [userId])

    return (
        <span>
            {!displayName ? shortAddress(userId) : displayName}
        </span>
    )
}

export default Sell