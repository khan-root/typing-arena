import React from 'react'
import { NavbarLeftSideData, NavbarRightSideData } from '../Utils/NavbarUtils'
import themes from '../Theme/Theme';
import useStore from '../Store/Store';
import useNavbarService from '../Services/__navbarServices';
import { getParsedLocalStorageItem } from '../Services/__localStorageServices';

const Navbar = () => {
    const theme = useStore((state)=> state.theme)
    const login = useStore((state)=> state.login)
    const currentTheme = themes[theme];

    
    const {handleNavbarRightSide, handleLeftNavbar} = useNavbarService()
    const userName = getParsedLocalStorageItem('user_name')

    // 

  return (
    <div className='flex items-end justify-between p-2'>
        <div className='flex items-end gap-2'>
            <div className='flex gap-2'>
                {/* <div className='flex items-end '>Logo</div> */}
                <div className='flex flex-col justify-end'>
                    <span className={`${currentTheme.text} text-[12px] mb-[-15px]`} >monkey see</span>
                    <span className={`text-[35px] ${currentTheme.mainText} mb-[-10px]`}>monkeytype</span>
                </div>
            </div>
            <div className='flex items-end gap-6'>
                {NavbarLeftSideData.map((ele)=>(
                    <span key={ele.id} className={`text-[17px] cursor-pointer ${currentTheme.text} hover:${currentTheme.mainText}`}
                        onClick={()=>handleLeftNavbar(ele)}
                    >{ele.icon}</span>
                ))}
            </div>
        </div>
        <div className='flex items-center gap-6'>
           {NavbarRightSideData.map((ele) => {
                // Only show the logout icon if the user is logged in
                if (ele.requiresLogin && !login) {
                    return null; // Skip rendering this icon if not logged in
                }
                return (
                    <span
                        key={ele.id}
                        className={`flex items-center gap-1 text-[17px] cursor-pointer ${currentTheme.text} hover:${currentTheme.mainText}`}
                        onClick={() => handleNavbarRightSide(ele)}
                    >
                        {ele.icon}
                        {/* Show user name only if logged in */}
                        {ele.id === 2 && login && userName && (
                            <span>{userName}</span>
                        )}
                    </span>
                );
            })}
        </div>
    </div>
  )
}

export default Navbar