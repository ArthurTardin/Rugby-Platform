import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'

function DashboardLayout({ children }) {
  return (

    <div className="flex min-h-screen bg-zinc-950 text-white">

      <Sidebar />

     <div className='flex-1 flex flex-col'>

      <Topbar />

      <main className='flex-1 p-10'>

        {children}

      </main>

     </div>

    </div>

  )
  
}

export default DashboardLayout