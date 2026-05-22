function SearchBar({
    placeholder

}) {
    return(
        <input
        type="text"
        placeholder={placeholder}
        className="bg-zinc-900 border border-zinc-800 rounded-x1 px-4 py-3 outline-none focus:border-green-400
        transition w-full md:w-96" />
    )

}

export default SearchBar