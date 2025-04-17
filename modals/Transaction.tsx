import { useCallback, useContext, useReducer } from "react"
import BaseModal from "./Base"
import { CheckCircle, Copy, ExternalLink } from "react-feather"


const TransactionModal = ({ visible, close, transactionHash, amount, tokenSymbol }: any) => {
    return (
        <BaseModal
            visible={visible}
            close={close}
            title="Transaction Completed"
        >
            <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                    <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-10 w-10 text-green-500" />
                    </div>
                </div>

                <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
                    Purchase Successful!
                </h3>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-gray-600">Amount Purchased:</span>
                        <span className="text-lg font-medium text-gray-900">{amount} {tokenSymbol}</span>
                    </div> 
                </div>

                <div className="flex space-x-4">
                     <button
                        onClick={close}
                        className="w-1/2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                        Close
                    </button>
                     <a
                        href={`https://sepolia.basescan.org/tx/${transactionHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2 px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 flex items-center justify-center"
                    >
                        View on BaseScan
                        <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                   
                   
                </div>
            </div>
        </BaseModal>
    )
}

export default TransactionModal