import React from 'react'
import useFooterUtils from '../Utils/FooterUtils'
import themes from '../Theme/Theme'

const Footer = () => {

    const { RightSideFooter, LeftSideFooter, theme } = useFooterUtils()

    const currentTheme = themes[theme]
  return (
    <div className='flex items-center justify-between py-2'>
        <div className='flex items-center gap-3'>
            {LeftSideFooter.map((ele)=>(
                <div className='flex items-center gap-1 text-[0.78rem]' key={ele.id}>
                    <span className={`${currentTheme.text} hover:${currentTheme.mainText} cursor-pointer`}>{ele.icon}</span>
                    <span className={`${currentTheme.text} hover:${currentTheme.mainText} cursor-pointer`}>{ele.title}</span>
                </div>
            ))}
        </div>
        <div className='flex items-center gap-3'>
            {RightSideFooter.map((ele)=>(
                <div  className='flex items-center gap-1 text-[0.78rem]'key={ele.id}>
                    <span className={`${currentTheme.text} hover:${currentTheme.mainText} cursor-pointer`}>{ele.icon}</span>
                    <span className={`${currentTheme.text} hover:${currentTheme.mainText} cursor-pointer`}>{ele.title}</span>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Footer