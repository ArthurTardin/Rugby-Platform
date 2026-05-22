function StatCard({
    title,
    value,
}) {
    return(
        <div className="bg-zinc-900 border border-zinc-800 rounded-3x1 p-8">

            <p className="text-zinc-400 mb-3">

                {title}
            </p>

            <h2 className="text-5x1 font-black text-green-400">
                {value}
            </h2>

        </div>

    )
}

export default StatCard