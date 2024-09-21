import React from 'react'
import { BiHome } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'


const NotFound = () => {
    return (
    <div className='h-full flex items-center justify-center'>
        <div className='space-y-2 flex flex-col items-center'>
            <span className='font-bold text-[60px]'>404</span>
            <span className='text-[20px] text-[#d1d0c5] '>Page not Exist</span>
            <NavLink to='/' className='flex justify-center items-center gap-3 bg-[#2c2e31] text-[#d1d0c5] w-full py-2 rounded-md'
                
            >
                <span><BiHome /></span>
                Home
            </NavLink>
        </div>
    </div>
  )
}

export default NotFound