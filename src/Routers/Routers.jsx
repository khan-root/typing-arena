import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Main from '../View/Main/Main'
import Login from '../View/Login/Login'
import Profile from '../View/Profile/Profile'
import useStore from '../Store/Store'
import NotFound from '../Components/NotFound'
import LeaderBoard from '../View/LeaderBoard/LeaderBoard'

const Routers = () => {
  const login = useStore((state)=> state.login)
  // const navigate = useNavigate()
  return (
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />

        <Route
          path='/profile'
          element={login ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path='/leaderboard' element={<LeaderBoard />} />
        <Route path='*' element={<NotFound />} />

    </Routes>
  )
}

export default Routers