import React from 'react'
import { paraCenterSelection, paraLeftSelection, paraRightSelection } from '../../Utils/ParaSelectionUtils'

const ParaSelection = (props) => {
    const {countdown,handleTime} = props

    console.log('countdown', countdown)
  return (
    <div className='space-y-3'>

        {/* <div className='flex justify-end items-center gap-3'>
            <div className='flex items-center justify-center gap-2 text-mainColor bg-mainSecondayColor p-2 rounded-lg'>
                <span className={`text-[17px] cursor-pointer`}><BiRefresh /></span>
                <span className={`text-[17px] cursor-pointer`}>Refresh</span>
            </div>
            <div className='flex items-center justify-center gap-2 text-mainColor bg-mainSecondayColor p-2 rounded-lg'>
                <span className={`text-[17px] cursor-pointer`}><BiWorld /></span>
                <span className={`text-[17px] cursor-pointer`}>English</span>
            </div>
        </div> */}


    
        <div className={`flex items-center gap-2 px-3 py-1 rounded-md w-[70%] mx-auto justify-around bg-fullbg`}>
            <div className='flex items-center gap-3'>
                {/* {paraLeftSelection.map((ele)=>(
                    <div key={ele.id} className={`flex items-center gap-3 text-text cursor-pointer`}>
                        <span>{ele.title}</span>
                        <span>{ele.name}</span>
                    </div>
                ))} */}
            </div>
            <div className={`w-1 h-6 bg-fullbg`}></div>
                <div className='flex items-center gap-3 '>
                {paraCenterSelection.map((ele)=>(
                    <div key={ele.id} className={`flex items-center gap-1.5 text-text cursor-pointer`}>
                        <span>{ele.icon}</span>
                        <span>{ele.name}</span>
                    </div>
                ))}
            </div>
            <div className={`w-1 h-6 bg-fullbg`}></div>
            
        </div>
        <div className={`flex items-center justify-center`}>
            <div className='flex items-center gap-3'>
                {paraRightSelection.map((ele)=>(
                    <div key={ele.id} className={`flex items-center gap-3 text-text cursor-pointer`}>
                        <span className={`${countdown == ele.name ? 'text-mainColor':''}`}  
                            onClick={()=> handleTime(ele)}
                        >{ele.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ParaSelection