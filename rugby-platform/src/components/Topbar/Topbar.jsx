function Topbar() {
    return(
        <header className="h-24 border-b border-zinc-800 flex intems-center justify-between px-10 bg-zinc-950">

            <div>

                <h2 className="text-2x1 font-black">
                    Rugby Referee Platform
                </h2>

                <p className="text-zinc-500">
                    Enterprise Management System
                </p>

            </div>

            <div className="flex intems-center gap-6">

                <button className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-2x1 hover:border-green-400 transition">
                    Notifications
                </button>

                <div className="w-12 h-12 rounded-full bg-green-400 text-black flex intems-center justify-center font-black">

                    A

                </div>

            </div>

        </header>

    )

}

export default Topbar