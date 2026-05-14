import { Link } from "react-router-dom"

function Navbar() {
    return(
        <header className="fixed top-= left-0 w-full border-b border-zinc-800 bg-black/
        80 backdrop-bluer-md z-50">

            <div className="max-w-7x1 mx-auto px-6 py-4 flex items-center justify-between">

                <h1 className="text-2x1 font-black text-green-400">
                    Rugby Ref
                </h1>

            <nav className="flex gap-8 text-sm font-semibold">

                <Link to="/" 
                className="hover:text-green-400 transition"
                >
                Home
                </Link>

                {' | '}

                <Link to="/referees"
                className="hover:text-green-400 transition"
                >
                Referees
                </Link>

                {' | '}

                <Link to="/matches"
                className="hover:text-green-400 transition"
                >
                Matches
                </Link>

                {' | '}

                <Link to="/courses"
                className="hover:text-green-400 transition"
                >
                Courses
                </Link>

                {' | '}

                <Link to="/rankings"
                className="hover:text-green-400 transition"
                >
                rankings
                </Link>

            </nav>

            </div>

        </header>
    )
}

export default Navbar