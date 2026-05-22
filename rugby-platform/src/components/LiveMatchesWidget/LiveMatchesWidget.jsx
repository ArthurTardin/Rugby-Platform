function LiveMatchesWidget() {
    const liveMatches = [
        {
            id: 1,
            home: 'Poli Rugby',
            away: 'Pasteur Rugby',
            minute: '62',
            status: 'LIVE',
        },

        {
            id: 2,
            home: 'Jacarei Rugby',
            away: 'Farrapos',
            minutes: '28',
            status: 'LIVE',
        },
    ]

    return(
        <div className="bg-zinc-900 border border-zinc-800 rounded-3x1 p-8">

            <div className="flex intems-center justify-between mb-8">

                <h2 className="text-2x1 font-bold">
                    Live Matches
                </h2>

                <span className="text-red-400 font-bold animate-pulse">
                    LIVE
                </span>

            </div>

            <div className="space-y-6">

                {liveMatches.map((match) =>(

                    <div
                    key={match.id}
                    className="border border-zinc-800 rounded-2x1 p-6">

                        <div className="flex justify-between intems-center mb-3">

                            <span className="font-bold">
                                {match.home}
                            </span>

                            <span className="text-zinc-500">
                                vs
                            </span>

                            <span className="font-bold">
                                {match.away}
                            </span>

                        </div>

                        <div className="flex justify-between intems-center">

                            <span className="text-green-400 font-bold">
                                {match.minute}'
                            </span>

                            <span className="text-red-400 text-sm font-bold">
                                {match.status}

                            </span>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default LiveMatchesWidget