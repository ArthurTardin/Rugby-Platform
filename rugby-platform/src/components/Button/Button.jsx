function Button({
    children,
    onClick,
    loading,
}) {
    return(
        <button
        onClick={onClick}
        className="bg-green-400 text-black px-6 py-4 rounded-2x1 font-black hover:scale-105 transition">

            {
                loading
                ? 'loading...'
                : children
            }

        </button>

    )

}

export default Button