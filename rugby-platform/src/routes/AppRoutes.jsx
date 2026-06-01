import {
    BrowserRouter ,
    Routes,
    Route
} from 'react-router-dom'

import Home from '../pages/Home/Home.jsx'
import Matches from '../pages/Matches/Matches.jsx'
import Courses from '../pages/Courses/Courses.jsx'
import Rankings from '../pages/Rankings/Rankings.jsx'
import Referees from '../pages/Referees/Referees.jsx'
import Dashboard from '../pages/Dashboard/Dashboard.jsx'
import DashboardMatches from '../pages/Dashboard/Matches/DashboardMatches.jsx'
import NewMatches from '../pages/Dashboard/Matches/NewMatches.jsx'
import DashboardReferees from '../pages/Dashboard/Referees/DashboardReferees.jsx'
import DashboardAnalytics from '../pages/Dashboard/Analytics/DashboardAnalytics.jsx'
import DashboardSettings from '../pages/Dashboard/Settings/DashboardSettings.jsx'
import Login from '../pages/Auth/Login.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

function AppRoutes() {
    return(
        <BrowserRouter>

            <Routes>

                <Route
                 path="/" element={<Home />} 
                 />

                 <Route
                 path='/dashboard/referees' element={<ProtectedRoute> <DashboardReferees /> </ProtectedRoute>} />

                 <Route
                 path='/referees' element={<Referees />}
                 />

                 <Route
                    path='/matches' element={<Matches />}
                />

                <Route
                    path='/courses' element={<Courses />}
                />

                <Route
                    path='/rankings' element={<Rankings />}
                />

                <Route
                    path='/dashboard' element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>}
                />

                 <Route
                    path='/dashboard/matches/new' element={<ProtectedRoute> <NewMatches /> </ProtectedRoute>}
                />

                <Route
                    path='/dashboard/matches' element={<ProtectedRoute> <DashboardMatches /> </ProtectedRoute>}
                />

                <Route
                    path='/dashboard/analytics' element={<ProtectedRoute> <DashboardAnalytics /> </ProtectedRoute>}
                />

                <Route
                path='/dashboard/settings' element={<ProtectedRoute> <DashboardSettings /> </ProtectedRoute>}
                />

                <Route
                path='/login' element={<Login />}
                />

            </Routes>

        </BrowserRouter>
    )
}
export default AppRoutes