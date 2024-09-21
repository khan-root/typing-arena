import React from 'react'
import { paraCenterSelection, paraLeftSelection, paraRightSelection } from '../../Utils/ParaSelectionUtils'
import useStore from '../../Store/Store'
import themes from '../../Theme/Theme'

const ParaSelection = () => {
    const theme = useStore((state)=> state.theme)
    const currentTheme = themes[theme]
  return (
    <div className={`flex items-center gap-2 px-3 py-1 rounded-md w-[70%] mx-auto justify-around ${currentTheme.paraSelectionBg}`}>
        <div className='flex items-center gap-3'>
            {paraLeftSelection.map((ele)=>(
                <div key={ele.id} className={`flex items-center gap-3 ${currentTheme.text}`}>
                    <span>{ele.title}</span>
                    <span>{ele.name}</span>
                </div>
            ))}
        </div>
        <div className={`w-1 h-6 ${currentTheme.background}`}></div>
        <div className='flex items-center gap-3'>
            {paraCenterSelection.map((ele)=>(
                <div key={ele.id} className={`flex items-center gap-1.5 ${currentTheme.text}`}>
                    <span>{ele.icon}</span>
                    <span>{ele.name}</span>
                </div>
            ))}
        </div>
        <div className={`w-1 h-6 ${currentTheme.background}`}></div>
        <div className='flex items-center gap-3'>
            {paraRightSelection.map((ele)=>(
                <div key={ele.id} className={`flex items-center gap-3 ${currentTheme.text}`}>
                    <span>{ele.name}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ParaSelection