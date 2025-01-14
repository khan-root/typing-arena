import React, { useEffect } from 'react'
import { NavbarRightSideData } from '../Utils/NavbarUtils'
import themes from '../Theme/Theme';
import useStore from '../Store/Store';
import useNavbarService from '../Services/__navbarServices';
import { getParsedLocalStorageItem } from '../Services/__localStorageServices';
import { FaKeyboard } from 'react-icons/fa6';
import { Tooltip, Typography } from '@material-tailwind/react';

const Navbar = () => {
    const theme = useStore((state)=> state.theme)
    const login = useStore((state)=> state.login)

    
    const {handleNavbarRightSide, handleLeftNavbar,handleJoinContest, notificationData, gettingNotifications} = useNavbarService()
    const userName = getParsedLocalStorageItem('user_name')

    useEffect(()=>{
        const id = JSON.parse(localStorage.getItem('_id'))
        gettingNotifications(id)
    },[])



    // 

  return (
    <div className='flex items-center justify-between p-2'>
        <div className='flex items-end gap-2'>
            <div className='flex gap-2'>
                {/* <div className='flex items-end '>Logo</div> */}
                <div className='flex flex-col justify-end'>
                    <div className={`flex items-center gap-2 text-[20px] uppercase text-text cursor-pointer`}
                        onClick={handleLeftNavbar}
                    >
                        <span className='text-mainColor'><FaKeyboard /></span>
                        <span className={`text-text tracking-[5px]`} >Typer</span>
                    </div>
                    <div>
                        <span className={`text-[18px] tracking-[10px] text-text`}>Arena</span>
                    </div>
                </div>
            </div>
            {/* <div className='flex items-end gap-6'>
                {NavbarLeftSideData.map((ele)=>(
                    <span key={ele.id} className={`text-[17px] cursor-pointer ${currentTheme.text} hover:${currentTheme.mainText}`}
                        onClick={()=>handleLeftNavbar(ele)}
                    >{ele.icon}</span>
                ))}
            </div> */}
        </div>
        <div className='flex items-center gap-6'
            
        >
            <span className='bg-mainColor text-paraColor text-white rounded-lg cursor-pointer px-3 py-1'
                onClick={handleJoinContest}
            >
                Join Contest
            </span>
           {NavbarRightSideData.map((ele) => {
                // Only show the logout icon if the user is logged in
                if (ele.requiresLogin && !login) {
                    return null; // Skip rendering this icon if not logged in
                }
                return (
                    <Tooltip content={
                        <Typography className='text-black text-[10px] p-0'>
                            {ele.content} 
                        </Typography>
                        }placement="bottom"
                        className="border border-blue-gray-50 p-1 bg-white shadow-xl shadow-black/10"
                    >
                    <span
                        key={ele.id}
                        className={`flex items-center gap-1 text-[17px] cursor-pointer text-mainColor hover:text-text`}
                        onClick={() => handleNavbarRightSide(ele)}
                    >
                        {ele.icon}
                        {/* Show user name only if logged in */}
                        {ele.id === 2 && login && userName && (
                            <span>{userName}</span>
                        )}
                    </span>
                    </Tooltip>
                );
            })}
        </div>
    </div>
  )
}

export default Navbar