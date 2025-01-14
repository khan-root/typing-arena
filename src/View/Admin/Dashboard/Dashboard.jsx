import React, { useEffect } from 'react'
import SideMenu from '../../../Components/SideMenu'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { getLocalStorage,userType,settingLocalStorage } from '../../../Services/__authentication'
import useStore from '../../../Store/Store'
import SuperAdminLogin from '../SuperAdminLogin'

const Dashboard = () => {


  const login = useStore((state)=> state.login)

  const settingAuthState = useStore((state)=> state.settingAuthState)

  

    useEffect(()=>{
        const jwtToken = getLocalStorage()
        const user_type = userType()

        if(user_type === "Admin"){
          settingAuthState(true)

          if(jwtToken){
            const decode = jwtDecode(jwtToken)

            for (const key in decode) {
              if (decode.hasOwnProperty(key)) {
                const value = decode[key];
                settingLocalStorage(key, value);
              }
            }
            
          }else{
            settingAuthState(false)
          }
          
          
        }
    },[login])
  return (
    <>
    {login ? 
    <div className='grid grid-cols-12 h-screen gap-6'>
        <div className='col-span-3 bg-container h-full rounded-lg'>
            <SideMenu />
        </div>
        <div className='col-span-9'>
            <Outlet />
        </div>
    </div>
    :
      <SuperAdminLogin />
    }
    </>
  )
}

export default Dashboard