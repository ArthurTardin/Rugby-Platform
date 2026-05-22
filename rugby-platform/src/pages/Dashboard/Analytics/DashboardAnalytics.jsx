import DashboardLayout from '../../../layouts/DashboardLayout/DashboardLayout.jsx';
import StatCard from '../../../components/StatCard/StatCard.jsx';
import DashboardHeater from '../../../components/DashboardHeader/DashboardHeader.jsx';

function DashboardAnalytics() {
    const stats = [
        {
            title: 'Matches',
            value: '148',
        },
        {
            title: 'Referees',
            value: '32',
        },
        {
            title: 'penalties',
            value: '421'
        },
        {
            title: 'cards',
            value: '76',
        },

    ]

    return(
        <DashboardLayout>

            <div>

                <DashboardHeater
                title="Performance Dashboard"
                subtitle="Analytics"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 x1:grid-cols-4 gap-8 mb-10">

                    {stats.map((stat, index) => (
                        <StatCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        />

                    ))}

                </div>

                <div className='grid grid-cols-1 x1:grid-cols-2 gap-8'>

                    <div className='bg-zinc-900 border border-zinc-800 rounded-3x1 p-8 h-96'>

                        <h2 className='text-2x1 font-bold mb-6'>
                            Match Activity
                        </h2>

                        <div className='h-full flex items-center justify-center text-zinc-500'>
                            Future Chart Area

                        </div>

                    </div>

                    <div className='bg-zinc-900 border border-zinc-800 rounded-3x1 p-8 h-96'>

                        <h2 className='text-2x1 font-bold mb-6'>
                            Referee Ranking
                        </h2>

                        <div className='space-y-5'>

                            <div className='flex justify-between'>

                                <span>
                                    Arthur Tardin
                                </span>

                                <span className='text-green-400 font-bold'>
                                    98%
                                </span>

                            </div>

                            <div className='flex justify-between'>

                                <span>
                                    Cauã Ricardo
                                </span>

                                <span className='text-green-400 font-bold'>
                                    94%
                                </span>

                            </div>

                            <div className='flex justify-between'>

                                <span>
                                    Erika Weiss
                                </span>

                                <span className='text-green-400 font-bold'>
                                    91%
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </DashboardLayout>
    )
}

export default DashboardAnalytics;