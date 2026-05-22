import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout'

import LiveMatchesWidget from '../../components/LiveMatchesWidget/LiveMatchesWidget'
import ActivityFeed from '../../components/ActivityFeed/ActivityFeed'

function Dashboard() {

  return (

    <DashboardLayout>

      <div>

        <p className="text-green-400 font-bold uppercase tracking-widest mb-2">
          Dashboard
        </p>

        <h1 className="text-5xl font-black mb-10">
          Rugby Referee Platform
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          <LiveMatchesWidget />

          <ActivityFeed />

        </div>

      </div>

    </DashboardLayout>

  )
}

export default Dashboard