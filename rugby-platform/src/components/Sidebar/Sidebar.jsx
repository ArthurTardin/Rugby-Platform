import { NavLink } from 'react-router-dom'

function Sidebar() {

  const links = [

    {
      label: 'Dashboard',
      path: '/dashboard',
    },

    {
      label: 'Matches',
      path: '/dashboard/matches',
    },

    {
      label: 'Referees',
      path: '/dashboard/referees',
    },

    {
      label: 'Analytics',
      path: '/dashboard/analytics',
    },

    {
      label: 'Settings',
      path: '/dashboard/settings',
    },

  ]

  return (

    <aside className="w-72 bg-black border-r border-zinc-800 p-8 flex flex-col">

      <div className="mb-14">

        <h1 className="text-4xl font-black text-green-400">
          Rugby Ref
        </h1>

        <p className="text-zinc-500 mt-2">
          Enterprise Platform
        </p>

      </div>

      <nav className="flex flex-col gap-4">

        {links.map((link) => (

          <NavLink
            key={link.path}
            to={link.path}
           className={({ isActive }) =>

  `
    rounded-2xl px-5 py-4 font-bold transition

    ${
      isActive
        ? 'bg-green-400 text-black'
        : 'bg-zinc-900 hover:bg-zinc-800'
    }
  `
}
          >

            {link.label}

          </NavLink>

        ))}

      </nav>

      <div className="mt-auto pt-10">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

          <p className="text-zinc-500 text-sm mb-2">
            Logged as
          </p>

          <h2 className="font-bold">
            Arthur Tardin
          </h2>

        </div>

      </div>

    </aside>

  )
}

export default Sidebar