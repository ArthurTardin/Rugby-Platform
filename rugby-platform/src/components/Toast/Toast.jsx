function Toast({
    message,
}) {
    return(

        <div className="fixed bottom-10 right-10 bg-green-400 text-black px-6 py-4 rounded-2x1 font-black shadow-2x1 z-50">

            {message}

        </div>

    )

}

export default Toast