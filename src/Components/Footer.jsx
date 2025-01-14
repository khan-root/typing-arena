import React, { useEffect } from 'react'
import useFooterUtils from '../Utils/FooterUtils'
import themes from '../Theme/Theme'
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'

const Footer = () => {

    const { RightSideFooter, LeftSideFooter, theme, customThemeData,handleChnageTheme, getThemeFromLocal } = useFooterUtils()

    useEffect(()=>{
        getThemeFromLocal()
    },[])
  return (
    <div className='flex items-center justify-between py-2'>
        <div className='flex items-center gap-3'>
            {/* {LeftSideFooter.map((ele)=>(
                <div className='flex items-center gap-1 text-[0.78rem]' key={ele.id}>
                    <span className={`${currentTheme.text} hover:${currentTheme.mainText} cursor-pointer`}>{ele.icon}</span>
                    <span className={`${currentTheme.text} hover:${currentTheme.mainText} cursor-pointer`}>{ele.title}</span>
                </div>
            ))} */}
        </div>
        <div className='flex items-center gap-3'>
            {RightSideFooter.map((ele)=>(
                <div  className='flex items-center gap-1 text-[0.78rem]'key={ele.id}>
                    <Menu>
                        <MenuHandler>
                            <div className='flex items-center gap-3'>
                                <span className={`text-text hover:text-text cursor-pointer`}>{ele.icon}</span>
                                <span className={`text-text hover:text-text cursor-pointer`}>{ele.title}</span>
                            </div>
                        </MenuHandler>
                        <MenuList>
                            {customThemeData?.map((ele)=>(
                                <MenuItem key={ele.id}
                                    onClick={()=>handleChnageTheme(ele)}
                                    className='capitalize'
                                >{ele.title}</MenuItem>
                            ))}
                        </MenuList>
                        
                    </Menu>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Footer