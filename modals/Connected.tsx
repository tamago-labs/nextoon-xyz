import { useContext } from "react"
import BaseModal from "./Base"
import { WalletContext } from "@/contexts/wallet"

const ConnectedModal = ({ visible, title, close, children, maxWidth = "max-w-2xl" }: any) => {

    const { wallet } = useContext(WalletContext)

    return (
        <BaseModal
            visible={visible}
            title={wallet ? title : "Connect Your Wallet First"}
            close={close}
            maxWidth={maxWidth}
        >
            {!wallet
                ?
                <div className="text-center py-4 flex flex-col">
                    Your wallet is not connected. Please connect it first to access this.
                    <button onClick={close} className=" my-4 mx-auto px-4 mb-0 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
                        Close
                    </button>
                </div>
                :
                <>
                    {children}
                </>
            }
        </BaseModal>
    )
}

export default ConnectedModal