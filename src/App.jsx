import React, { useEffect } from 'react';
import themes from './Theme/Theme';
import ThemeProvider from './Theme/ThemeProvider';
import useStore from './Store/Store';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Router } from './Routers';
import { getLocalStorage, settingLocalStorage } from './Services/__authentication';
import { jwtDecode } from "jwt-decode";
import { Toaster } from './Components/Toaster';


const App = () => {
  const theme = useStore((state) => state.theme);
  const login = useStore((state)=> state.login)
  const currentTheme = themes[theme];

  const settingAuthState = useStore((state)=> state.settingAuthState)

  


  useEffect(()=>{
    const jwtToken = getLocalStorage()
    if(jwtToken){
      console.log('jwtTokenAvail', jwtToken)
      settingAuthState(true)
      console.log('***********')
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
  return (
    <ThemeProvider>
      <Toaster />
      <div className={`min-h-screen flex flex-col ${currentTheme.background}`}>
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
    </ThemeProvider>
  );
};

export default App;
