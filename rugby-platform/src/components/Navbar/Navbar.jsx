import { Link } from "react-router-dom"

function Navbar() {
    return(
        <header className="fixed top-0 left-0 w-full border-b border-zinc-800 bg-black/
        80 backdrop-blur-md z-50">

            <div className="max-w-7x1 mx-auto px-6 py-4 flex items-center justify-between">

                <h1 className="text-2x1 font-black text-green-400">
                    Rugby Arbiters
                </h1>

            <nav className="flex gap-8 text-sm font-semibold">

                <Link to="/"
                className="hover:text-green-400 transitiion"
                >
                Home
                </Link>
                {' | '}
                <Link to="/referees"
                className="hover:text-green-400 transitiion"
                >
                Referees
                </Link>
                {' | '}
                <Link to="/matches"
                className="hover:text-green-400 transitiion"
                >
                Matches
                </Link>
                {' | '}
                <Link to="/courses"
                className="hover:text-green-400 transitiion"
                >
                Courses
                </Link>
                {' | '}
                <Link to="/rankings"
                className="hover:text-green-400 transitiion"
                >
                Rankings
                </Link>
            </nav>

            </div>

        </header>
    )
}

export default Navbar