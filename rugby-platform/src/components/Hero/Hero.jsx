function Hero() {
    return(
        <section className="min-h-screen flex items-center justify-center px-6">

            <div className="max-w-5x1 text-center">

                <p className="text-green-400 font-bold mb-4 tracking-widest uppercase">
                    Elite Referee Platform
                </p>

                <h1 className="text-6x1 md:text-8x1 font-black leading-tight mb-8">

                    The future of
                    <span className="text-green-400"> 
                        {' '}rugby officiating
                    </span>

                </h1>

                <p className="text-zinc-400 text-lg md:text-2x1 max-w3x1 mx-auto mb-10">

                    Plataforma profissional para árbitros, análise de partidas, campeonatos,
                    rankings e tecnologia esportiva

                </p>

                <div className="flex gap-6 justify-center flex-wrap">

                    <button className="border border-zinc-700 px-8 py-4 rounded-x1 font-bold
                    hover:border-green-400 transition">

                        Ver Árbitros

                    </button>

                </div>

            </div>

        </section>
    )
}

export default Hero