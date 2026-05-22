function Input({
    label,
    placeholder,
    type = 'text',
    value,
    onCharge,
}) {
    return(

        <div>

            <label className="block mb-2 text-zinc-400">

                {label}

            </label>

            <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onCharge}
            className="w-full bg-zinc-950 border border-zinc-800 rounde-x1 p-4 outline-none focus:border-green-400 transition" />

        </div>

    )

}

export default Input