import { X } from "react-feather"
import { Description, Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react'

//  data-aos="zoom-in" data-aos-duration="400"

const BaseModal = ({
    visible,
    title,
    close,
    children,
    borderColor = "border-gray-300",
    maxWidth = "max-w-2xl",
    showCloseButton = true
}: any) => {
    return (
        <>
            <Dialog open={visible} onClose={close} className="relative z-50">
                <DialogBackdrop className="fixed inset-0 bg-black/30" />
                <div className="fixed inset-0 flex w-screen  items-left sm:items-center justify-center p-4 px-2">
                    <DialogPanel className={`w-full ${maxWidth}  bg-transparent ${borderColor} text-slate-900  overflow-y-auto max-h-screen `}>
                        {title ? (
                            <div className="border-gray-300  bg-white flex border-b px-4 py-3 rounded-tl-lg rounded-tr-lg">
                                <h2 className="text-2xl  font-bold text-center px-0 sm:px-2 line-clamp-1">{title}</h2>
                                {showCloseButton && (
                                    <button className="ml-auto my-auto cursor-pointer" onClick={close}>
                                        <X />
                                    </button>
                                )}
                            </div>
                        ) : <div className="bg-white rounded-tl-lg rounded-tr-lg h-[10px]">

                        </div>}
                        <div className="p-2 sm:p-6 bg-white rounded-bl-lg rounded-br-lg ">
                            {children}
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}



export default BaseModal