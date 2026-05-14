import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home.jsx'
import Courses from '../pages/Courses/Courses.jsx'
import Matches from '../pages/Matches/Matches.jsx'
import Rankings from '../pages/Rankings/Rankings.jsx'
import Referees from '../pages/Referees/Referees.jsx'


function AppRoute() {
    return(
        <BrowserRouter>

        <Routes>

            <Route
            path='/'
            element={<Home />}
            />

            <Route
            path='/referees'
            element={<Referees />}
            />

            <Route
            path='/matches'
            element={<Matches />}
            />

            <Route
            path='/courses'
            element={<Courses />}
            />

            <Route
            path='/rankings'
            element={<Rankings />}
            />

        </Routes>

        </BrowserRouter>
    )
}

export default AppRoute