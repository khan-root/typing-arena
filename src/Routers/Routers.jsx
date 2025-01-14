import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Main from '../View/Main/Main'
import Login from '../View/Login/Login'
import Profile from '../View/Profile/Profile'
import useStore from '../Store/Store'
import NotFound from '../Components/NotFound'
import LeaderBoard from '../View/LeaderBoard/LeaderBoard'
import Learning from '../View/Leaning/Learning'
import Dashboard from '../View/Admin/Dashboard/Dashboard'
import Contest from '../View/Admin/Contest/Contest'
import JoinUser from '../View/Admin/JoinUser/JoinUser'
import ParagraphList from '../View/Admin/ParagraphList/ParagraphList'
import PostionLeaderBoard from '../View/Admin/PostionLeaderBorad/PostionLeaderBoard'
import Users from '../View/Admin/Users/Users'
import Privileges from '../View/Admin/Priviliges/Privileges'
import ContestJoin from '../View/Leaning/ContestJoin'
import SuperAdminLogin from '../View/Admin/SuperAdminLogin'

const Routers = () => {
  const login = useStore((state)=> state.login)
  // const navigate = useNavigate()
  return (
    <Routes>
        <Route path='/' element={<Main />}>
          <Route path='contest-typing/:id' element={<Main />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/super-typi' element={<SuperAdminLogin />} />

        <Route
          path='/profile'
          element={login ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path='/leaderboard' element={<LeaderBoard />} />
        <Route path='/learning/' element = {<Learning />}>
          <Route path='join-contest' element={<ContestJoin />} />
        </Route>
        <Route path='/admin' element={<Dashboard />}>
          <Route path='contest' element={<Contest />} />
          <Route path='paragraph-list/:id' element={<ParagraphList />} />
          <Route path='join-user/:id' element={<JoinUser />} />
          <Route path='paragraph-list/' element={<ParagraphList />} />
          <Route path='postion-leaderboard/:id' element={<PostionLeaderBoard />} />
          <Route path='users' element={<Users />} />
          <Route path='privileges' element={<Privileges />} />
        </Route>
        <Route path='*' element={<NotFound />} />

    </Routes>
  )
}

export default Routers