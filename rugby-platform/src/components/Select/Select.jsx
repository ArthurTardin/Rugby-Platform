function Select({
    label,
    options,
}) {
    return(

        <div>

            <label className="block mb-2 text-zinc-400">

                {label}

            </label>

            <select
            className="w-full bg-zinc-950 border border-zinc-800 rounded-x1 p-4 outline-none focus:border-green-400 transition">

                {options.map((option, index) => (

                    <option
                    key={index}>

                        {option}
                    </option>

                ))}

            </select>

        </div>

    )

}

export default Select