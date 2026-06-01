function ErrorToast({
    message,
}){
    return (
        <div className="fixed bottom-10 right-10 bg-red-500 text-white px-6 py-4 rounded-2x1 font-black shadow-2x1 z-50">

            {message}

        </div>

    )

}

export default ErrorToast