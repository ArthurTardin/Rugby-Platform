import { Link } from 'react-router-dom'

import DashboardLayout from '../../../layouts/DashboardLayout/DashboardLayout.jsx'
import SearchBar from '../../../components/SearchBar/SearchBar'
import Table from '../../../components/Table/Table.jsx'

function DashboardMatches() {

    

  const matches = [
    {
      id: 1,
      home: 'Poli Rugby',
      away: 'Pasteur Rugby',
      date: '2026-05-20',
      referee: 'Arthur Tardin',
    },

    {
      id: 2,
      home: 'Jacarei Rugby',
      away: 'Farrapos',
      date: '2026-05-21',
      referee: 'Cauã Ricardo',
    },

    {
      id: 3,
      home: 'Tornados',
      away: 'São José Rugby',
      date: '2026-05-25',
      referee: 'Erika Weiss',
    },
  ]

  const columns = [
    'Home Team',
    'Away Team',
    'Date',
    'Referee',
  ]

  const TableData = matches.map((match) => [
    match.home,
    match.away,
    match.date,
    match.referee,
  ])

  return (
    <DashboardLayout>
        <div className='mb-8'>

            <SearchBar
            placeholder="Search matches..." />
        </div>

      <div>

        <div className="flex items-center justify-between mb-10">

          <div>

            <p className="text-green-400 font-bold uppercase tracking-widest mb-2">
              Match Management
            </p>

            <h1 className="text-5xl font-black">
              Matches
            </h1>

          </div>

          <Link
            to="/dashboard/matches/new"
            className="bg-green-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
          >

            New Match

          </Link>

        </div>

        <div className="mb-8">

          <SearchBar
            placeholder="Search matches..."
          />

        </div>

        <div className="overflow-x-auto border border-zinc-800 rounded-3xl">

         <Table
         columns={columns}
         data={TableData}
         />

        </div>

      </div>

    </DashboardLayout>
  )
}

export default DashboardMatches