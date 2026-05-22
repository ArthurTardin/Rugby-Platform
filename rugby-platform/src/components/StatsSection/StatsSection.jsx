function StatsSection() {
    const stats = [
        {
            number: '120+',
            label: 'referees',
        },

        {
            number: '350+',
            label: 'matches',
        },

        {
            number: '18',
            label: 'Championships',
        },

        {
            number: '99%',
            label: 'Platform Uptime',
        },

    ]

    return(
        <section className="py-24 px-6">

            <div className="max-w-7x1 mx-auto">

                <div className="grid grid cols-2 md:grid-cols-4 gap-8">

                    {stats.map((stat) =>(

                        <div
                        key={stat.label}
                        className="text-center border border-zinc-800 rounded-3x1 p-10 bg-zinc-900/40">

                            <h2 className="text-5x1 font-black text-green-400 mb-4">

                                {stat.number}
                            </h2>

                            <p className="text-zinc-400">

                                {stat.label}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default StatsSection