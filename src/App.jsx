import React, { useEffect } from 'react';
import useStore from './Store/Store';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Router } from './Routers';
import { getLocalStorage, settingLocalStorage, userType } from './Services/__authentication';
import { jwtDecode } from "jwt-decode";
import { Toaster } from './Components/Toaster';
import { useLocation } from 'react-router-dom';


const App = () => {
  const theme = useStore((state) => state.theme);
  const login = useStore((state)=> state.login)

  const settingAuthState = useStore((state)=> state.settingAuthState)
  const location = useLocation()


  


  useEffect(()=>{
    const jwtToken = getLocalStorage()
    if(jwtToken){
      settingAuthState(true)
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
  },[login])

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme);

  },[theme])
  return (
    <>
      <Toaster />
      <div className={`min-h-screen flex flex-col font-poppins bg-fullbg`}>
        <div className='w-full lg:max-w-[1250px] lg:mx-auto px-10 flex flex-col flex-grow'>
          <div className=''>
           
              <Navbar />
          </div>
          <div className='flex-grow flex'>
            <div className='w-full'>
              <Router />
            </div> 
          </div>
          <div className=''>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
