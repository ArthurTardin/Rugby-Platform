function ActivityFeed() {
    const activities = [
        'Arthur Tardin completed a match review.',
        'New referee registered.',
        'Match report uploaded.',
        'Analytics updated',
        'Championship created.',

    ]

    return(
        <div className="bg-zinc-900 border border-zinc-800 rounded-3x1 p-8">

            <h2 className="text-2x1 font-bold mb-8">
                Activity Feed
            </h2>

            <div className="space-y-5">

                {activities.map((activity, index) => (

                    <div
                    key={index}
                    className="border-1-2 border-green-400 pl-4 py-2">

                        <p className="text-zinc-300">
                            {activity}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default ActivityFeed