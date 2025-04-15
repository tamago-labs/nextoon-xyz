import { useCallback, useContext, useEffect, useReducer } from "react"
import ConnectedModal from "./Connected"
import { AccountContext } from "@/contexts/account"



const CreatorModal = ({ visible, close }: any) => {

    const { profile , updateProfile, loadProfile} = useContext(AccountContext)

    const [values, dispatch] = useReducer(
        (curVal: any, newVal: any) => ({ ...curVal, ...newVal }),
        {
            displayName: "",
            loading: false,
            errorMessage: undefined
        }
    )

    const { errorMessage, displayName } = values

    useEffect(() => {
        if (profile) { 
            dispatch({
                displayName: profile.displayName
            })
        }
    },[profile])

    const onSave = useCallback(async () => {

        const userId = profile.id
        
        dispatch({
            errorMessage: undefined
        })

        await updateProfile({
            id : userId,
            displayName
        })

        dispatch({
            errorMessage: "Your profile is successfully saved"
        })
 
    },[displayName])

    return (
        <ConnectedModal
            visible={visible}
            close={close}
            title="Creator Settings"
        >
            <div className="p-6 py-0 px-0">
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Wallet Address
                    </label>
                    <p className="text-xs text-gray-500 mb-2">
                        This is the connected wallet address and cannot be changed.
                    </p>
                    <input
                        type="text"
                        value={profile && profile.username}
                        disabled
                        className="w-full px-4 py-2 border border-gray-200 bg-gray-100 text-gray-600 rounded-lg outline-none cursor-not-allowed"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Display Name
                    </label>
                    <p className="text-xs text-gray-500 mb-2">
                        This name will appear on your public creator profile. You can use your real name or a pen name.
                    </p>
                    <input
                        type="text" 
                        value={displayName}
                        onChange={(e) => dispatch({ displayName: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                </div>

                <div className="flex  space-x-4">
                    <button onClick={onSave} className="px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Save
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

export default CreatorModal