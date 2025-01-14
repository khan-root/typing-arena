import React from 'react'
import useSideMenuServices from '../Services/__sideMenuServices'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const SideMenu = () => {
    const {sideMenuData, handleAdminNavigation} = useSideMenuServices()
    const location = useLocation()
  return (
    <div className='pt-10 flex flex-col gap-4 items-end overflow-hidden pb-10'>
        {sideMenuData?.map((ele)=>(
            <motion.div 
                whileHover={{
                    scale:1.1
                }}
                key={ele.id} 
                className={`w-[80%] p-4 rounded-tl-lg rounded-bl-lg cursor-pointer ${ele.link == location.pathname ? 'bg-mainColor' : 'bg-fullbg border border-mainColor text-text'} `}
                onClick={()=>handleAdminNavigation(ele)}
            >
                <span>{ele.title}</span>
            </motion.div>
        ))}
    </div>
  )
}

export default SideMenu