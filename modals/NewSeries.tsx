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
            description: "",
            tokenName: "",
            tokenSymbol: "",
            errorMessage: undefined,
            loading: false
        }
    )

    const { title, description, tokenName, tokenSymbol, errorMessage, loading } = values

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
        if (!title || title.length < 4 || title.length > 16) {
            dispatch({
                errorMessage: 'Title must be between 4 and 16 characters.'
            })
            return;
        }

        // Description: 4–200 characters
        if (!description || description.length < 4 || description.length > 200) {
            dispatch({
                errorMessage: "Description must be between 4 and 200 characters."
            })
            return;
        }

        // Token Name: 3–50 characters (ERC-20 standard practice)
        if (!tokenName || tokenName.length < 3 || tokenName.length > 50) {
            dispatch({
                errorMessage: "Token name must be between 3 and 50 characters."
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

            const txId = await createCoin({
                userId: profile.id,
                title,
                description,
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

    }, [title, description, profile, tokenName, tokenSymbol, createCoin])
 

    return (
        <ConnectedModal
            visible={visible}
            close={close}
            title="Create New Series"

        >
            <div className="p-6 py-0">
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Series Title</label>
                    <input
                        type="text"
                        onChange={(e) => dispatch({ title: e.target.value })}
                        placeholder="Enter a compelling title"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                        rows={3}
                        onChange={(e) => dispatch({ description: e.target.value })}
                        placeholder="Describe your webtoon series"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    ></textarea>
                </div>

                {/* <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <div className="flex flex-col items-center"> 
                            <p className="text-sm text-gray-500 mb-2">Drop your image here, or <span className="text-blue-600">browse</span></p>
                            <p className="text-xs text-gray-400">Recommended: 800×1200px (JPG, PNG)</p>
                        </div>
                    </div>
                </div> */}

                {/* <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Genre</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                        <option>Select a genre</option>
                        <option>Action</option>
                        <option>Romance</option>
                        <option>Fantasy</option>
                        <option>Sci-Fi</option>
                        <option>Drama</option>
                        <option>Comedy</option>
                        <option>Horror</option>
                    </select>
                </div> */}

                <div className="p-4 bg-blue-50 rounded-lg mb-6">
                    <h3 className="text-sm font-medium text-blue-800 mb-2">Token Creation</h3>
                    <p className="text-xs text-blue-600 mb-4">
                        When you create a series, NexToon automatically generates ERC-20 tokens using Zora's Coins Protocol. You'll receive 10% of the total supply, with the remaining 90% entering circulation.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-xs font-medium text-blue-800 mb-1">Token Name</label>
                            <input
                                type="text"
                                onChange={(e) => dispatch({ tokenName: e.target.value })}
                                placeholder="e.g., Dragon Prophecy Token"
                                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-blue-800 mb-1">Token Symbol</label>
                            <input
                                type="text"
                                onChange={(e) => dispatch({ tokenSymbol: e.target.value })}
                                placeholder="e.g., DPT"
                                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                            />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex-1">
                            <label className="block text-xs font-medium text-blue-800 mb-1">Initial Token Supply</label>
                            <div className="flex">
                                <input
                                    type="number"
                                    defaultValue="100000"
                                    className="w-full px-4 py-2 border border-blue-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                                />
                                <span className="inline-flex items-center px-4 py-2 border border-l-0 border-blue-300 rounded-r-lg bg-blue-50 text-blue-800 text-sm">
                                    Tokens
                                </span>
                            </div>
                        </div>
                        <div className="w-10"></div>
                        <div className="flex-1">
                            <label className="block text-xs font-medium text-blue-800 mb-1">Your Allocation (10%)</label>
                            <div className="flex">
                                <input
                                    type="number"
                                    defaultValue="10000"
                                    disabled
                                    className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-blue-50"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end space-x-4">
                    <button onClick={close} className="px-6 py-2 cursor-pointer border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                        Cancel
                    </button>
                    <button onClick={onCreate} disabled={loading} className="px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        {loading && <RefreshCw size={22} className="animate-spin mx-2" />}
                        {!loading && <>Create Series & Launch Tokens</>}
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