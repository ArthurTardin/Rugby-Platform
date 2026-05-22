function Modal({
    isOpen,
    onClose,
    children,
}) {
    if (!isOpen) {
        return null
    }

    return(

        <div className="fixed inset-0 bg-black/70 flex intems-center justify-center z-50">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3x1 p-10 w-full max-w-2x1 relative">

                <button
                onClick={onClose}
                className="absolute top-5 right-5 text-zinc-500 hover:text-white transition">

                    X

                </button>

                {children}

            </div>

        </div>

    )

}

export default Modal