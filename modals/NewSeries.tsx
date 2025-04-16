import { useCallback, useContext, useReducer } from "react"
import ConnectedModal from "./Connected"
import { RefreshCw } from "react-feather"
import { WalletContext } from "@/contexts/wallet"
import { AccountContext } from "@/contexts/account"


const NewSeriesModal = ({ visible, close }: any) => {

    const { profile } = useContext(AccountContext)
    const { createCoin } = useContext(WalletContext)

    const [values, dispatch] = useReducer(
        (curVal: any, newVal: any) => ({ ...curVal, ...newVal }),
        {
            title: "",
            tokenName: "",
            tokenSymbol: "",
            description: "",
            genre: "",
            errorMessage: undefined,
            loading: false
        }
    )

    const { title, description, genre, tokenName, tokenSymbol, errorMessage, loading } = values

    const onCreate = useCallback(async () => {

        dispatch({
            errorMessage: undefined
        })

        if (!profile) {
            dispatch({
                errorMessage: "Can't find your wallet entry. Please refresh and try again."
            })
            return;
        }

        // Title: 4–16 characters
        // if (!title || title.length < 4 || title.length > 16) {
        //     dispatch({
        //         errorMessage: 'Title must be between 4 and 16 characters.'
        //     })
        //     return;
        // }

        // Description: 4–1,000 characters
        if (!description || description.length < 4 || description.length > 1000) {
            dispatch({
                errorMessage: "Description must be between 4 and 1,000 characters."
            })
            return;
        }

        // Token Name: 4–32 characters (ERC-20 standard practice)
        if (!tokenName || tokenName.length < 4 || tokenName.length > 32) {
            dispatch({
                errorMessage: "Token name must be between 4 and 32 characters."
            })
            return;
        }

        // Token Symbol: 3–11 uppercase letters (ERC-20 symbol convention)
        const symbolRegex = /^[A-Z]{3,11}$/;
        if (!tokenSymbol || !symbolRegex.test(tokenSymbol)) {
            dispatch({
                errorMessage: "Token symbol must be 3 to 11 uppercase letters (A–Z only)."
            })
            return;
        }

        dispatch({
            loading: true
        })

        try {

            await createCoin({
                userId: profile.id,
                description,
                genre,
                tokenName,
                tokenSymbol
            })

        } catch (e: any) {
            console.log(e)
            dispatch({
                errorMessage: `${e.message}`
            })
        }

        dispatch({
            loading: false
        })

    }, [description, profile, genre, tokenName, tokenSymbol, createCoin])


    return (
        <ConnectedModal
            visible={visible}
            close={close}
            title="Create New Series"

        >
            <div className="p-6 py-0 px-0">
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Series Title (This will also be used as the Token Name)
                    </label>
                    <p className="text-xs text-gray-500 mb-2">
                        Title must be between 4–32 characters to comply with ERC-20 token name requirements.
                    </p>
                    <input
                        type="text"
                        value={tokenName}
                        onChange={(e) => dispatch({ tokenName: e.target.value })}
                        placeholder="Enter a compelling title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Token Symbol</label>
                        <p className="text-xs text-gray-500 mb-2">Must be 3–11 uppercase characters, like "NXT".</p>
                        <input
                            type="text"
                            value={tokenSymbol}
                            onChange={(e) => dispatch({ tokenSymbol: e.target.value })}
                            placeholder="e.g., NXT"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Genre</label>
                        <p className="text-xs text-gray-500 mb-2">Select the main theme of your series.</p>
                        <select
                            value={genre}
                            onChange={(e) => dispatch({ genre: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        >
                            <option value="">Select a genre</option>
                            <option value="action">Action</option>
                            <option value="romance">Romance</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="sci-fi">Sci-Fi</option>
                            <option value="drama">Drama</option>
                            <option value="comedy">Comedy</option>
                            <option value="horror">Horror</option>
                        </select>
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <p className="text-xs text-gray-500 mb-2">Description should be between 4–1000 characters.</p>
                    <textarea
                        rows={3}
                        value={description}
                        onChange={(e) => dispatch({ description: e.target.value })}
                        placeholder="Describe your webtoon series"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    ></textarea>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg mb-6">
                    <h3 className="text-sm font-medium text-blue-800 mb-2">Token Generation & Distribution</h3>
                    <p className="text-xs text-blue-600 mb-4">
                        When you create a series, NexToon automatically mints ERC-20 tokens using Zora's Coins Protocol. You'll receive 1% of the total supply, with the remaining entering circulation.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left text-blue-700 border border-blue-200">
                            <tbody>
                                <tr className="bg-blue-50">
                                    <td className="px-3 py-2 border-b border-blue-100">Total Supply</td>
                                    <td className="px-3 py-2 border-b border-blue-100">1,000,000,000 tokens</td>
                                </tr>
                                <tr className="bg-blue-50">
                                    <td className="px-3 py-2 border-b border-blue-100">Creator Allocation</td>
                                    <td className="px-3 py-2 border-b border-blue-100">10,000,000 tokens (1%)</td>
                                </tr>
                                {/* <tr className="bg-white">
          <td className="px-3 py-2 border-b border-blue-100">Liquidity Pool</td>
          <td className="px-3 py-2 border-b border-blue-100">990,000,000 tokens (Uniswap V3)</td>
        </tr> */}
                                <tr className="bg-blue-50">
                                    <td className="px-3 py-2">Exchange Listing</td>
                                    <td className="px-3 py-2">Uniswap V3 on Base Testnet</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                <div className="flex  space-x-4">
                    <button onClick={onCreate} disabled={loading} className="px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        {loading && <RefreshCw size={22} className="animate-spin mx-2" />}
                        {!loading && <>Create Series & Launch Tokens</>}
                    </button>
                    <button onClick={close} className="px-6 py-2 cursor-pointer border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                        Cancel
                    </button>

                </div>
                {errorMessage && (
                    <div className="flex px-2 w-full mx-auto py-4 pb-2 ">
                        <p className="text-sm mx-auto text-center font-semibold  text-blue-600">
                            {errorMessage}
                        </p>
                    </div>
                )}
            </div>
        </ConnectedModal>
    )
}

export default NewSeriesModal