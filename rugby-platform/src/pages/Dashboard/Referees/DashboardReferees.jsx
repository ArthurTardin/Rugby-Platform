import DashboardLayout from '../../../layouts/DashboardLayout/DashboardLayout'

function DashboardReferees() {

  const referees = [

    {
      id: 1,
      name: 'Arthur Tardin',
      level: 'National Referee',
      experience: '2 Years',
      status: 'Available',
    },

    {
      id: 2,
      name: 'Cauã Ricardo',
      level: 'International Referee',
      experience: '10 Years',
      status: 'Busy',
    },

    {
      id: 3,
      name: 'Erika Weiss',
      level: 'International Referee',
      experience: '10 Years',
      status: 'Available',
    },

  ]

  return (

    <DashboardLayout>

      <div>

        <p className="text-green-400 font-bold uppercase tracking-widest mb-2">
          Referee Management
        </p>

        <h1 className="text-5xl font-black mb-10">
          Referees
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {referees.map((referee) => (

            <div
              key={referee.id}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-400 transition"
            >

              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 rounded-full bg-green-400 flex items-center justify-center text-black text-2xl font-black">

                  {referee.name[0]}

                </div>

                <div>

                  <h2 className="text-2xl font-bold">
                    {referee.name}
                  </h2>

                  <p className="text-zinc-400">
                    {referee.level}
                  </p>

                </div>

              </div>

              <div className="space-y-3">

                <div className="flex justify-between">

                  <span className="text-zinc-500">
                    Experience
                  </span>

                  <span>
                    {referee.experience}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-zinc-500">
                    Status
                  </span>

                  <span className="text-green-400 font-bold">
                    {referee.status}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </DashboardLayout>

  )
}

export default DashboardReferees