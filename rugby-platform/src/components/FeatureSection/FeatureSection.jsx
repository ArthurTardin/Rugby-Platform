function FeatureSection() {
    const features = [{

    
        title: 'Referee Management',
        description: 'Gerencie árbitros, avaliações, desempenho e atribuições de jogos.',
        },

        {
            title: 'Match Analytics',
            description: 'Análise avançada de partidas e estatísticas',
        },

        {
            title: 'Courses Platform',
            description: 'Cursos, certificações e treinamentos online',
        },

        {
            title: 'Performance Rankings',
            description: 'Rankings automáticos de árbitros e equipes',
        },
    ]


    return(
        <section className="py-32 px-6">

            <div className="max-w-7x1 mx-auto">

                <div className="mb-20 text-center">

                    <p className="text-green-400 font-bold uppercase tracking-widest mb-4">
                    Platform Features
                    </p>

                    <h2 className="text-5x1 font-black mb-6">
                    Enterprise Sports Technology
                    </h2>

                    <p className="text-zinc-400 max-w-2x1 mx-auto text-lg">

                    Uma plataforma moderna para elevar a arbitragem ao próximo nível.

                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {features.map((feature) => (
                    
                        <div
                        key={feature.title}
                        className="border border-zinc-800 bg-zinc-900/40 rounded-3x1 p-10
                        hover:border-green-400 transition">

                            <h3 className="text-3x1 font-bold mb-4">
                            {feature.title}
                            </h3>

                            <p className="text-zinc-400 leading-relaxed">

                            {feature.description}

                            </p>

                        </div>

                    ))}
                </div>
            </div>

        </section>
    )
}

export default FeatureSection