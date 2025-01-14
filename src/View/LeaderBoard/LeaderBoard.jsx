import { Typography } from '@material-tailwind/react'
import React from 'react'
import { rightLeaderBoardData } from '../../Utils/leaderboardData'
import { FaCrown } from 'react-icons/fa6'

const LeaderBoard = () => {
  return (
    <div>
        <div>
            <span className='text-[35px] font-semibold text-white'>Leaderboards</span>
            <div className='flex flex-row items-center gap-2 text-white'>
                <span>Last Update</span>
                <span>15:40</span>
            </div>
        </div>
        <div className='grid gird-cols-1 lg:grid-cols-2 gap-2'>
            <div className='space-y-2'>            
                <div className='flex items-center justify-between '>
                    <span className='text-white'>Time 15</span>
                    <span className='w-6 h-6 bg-mainColor text-[14px] flex items-center justify-center rounded-lg'><FaCrown /></span>
                </div>
                <div className='h-[calc(100vh-250px)] overflow-y-auto'>
                    <table className='w-full min-w-max table-auto text-left'>
                        <thead className='sticky top-[-9px] z-[10]'>
                            <tr>
                                <th  className="bg-black py-3 px-2 text-center">
                                    <Typography
                                        variant="small"
                                        className="text-paraColor font-normal leading-none opacity-70"
                                    >#</Typography>
                                </th>
                                <th  className=" bg-black py-3 px-2">
                                    <Typography
                                        variant="small"
                                        className="text-paraColor font-normal leading-none opacity-70"
                                    >Name</Typography>
                                </th>
                                <th  className="bg-black py-3 px-2">
                                    <div>
                                        <Typography
                                            variant="small"
                                            className="text-paraColor  font-normal leading-none opacity-70"
                                        >
                                            WPM
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="text-paraColor font-normal leading-none opacity-70"
                                        >
                                            Accuracy
                                        </Typography>
                                    </div>
                                </th>
                                <th  className="bg-black px-2 py-3">
                                    <div>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="text-paraColor  font-normal leading-none opacity-70"
                                        >raw</Typography>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="text-paraColor font-normal leading-none opacity-70"
                                        >consistnecy</Typography>
                                    </div>
                                </th>
                                <th  className="bg-black py-3 px-2">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="text-paraColor font-normal leading-none opacity-70"
                                    >Date</Typography>
                                </th>
                            
                            </tr>
                        </thead>

                        <tbody>
                            {rightLeaderBoardData?.map((ele, i)=>{
                                return(
                                    <tr key={i} className="even:bg-black bg-mainColor">
                                        <td className='py-3 text-white text-center'>
                                            {i + 1}
                                        </td>
                                        <td className='py-2'>
                                            <div className='flex items-center gap-2'>
                                                <img className='w-10 h-10 object-fill rounded-full' src={ele.profile} alt={`img-${i}`}/>
                                                <Typography
                                                    variant="small"
                                                    className="text-white"
                                                >{ele.name}</Typography>
                                            </div>
                                        </td>
                                        <td className='py-2'>  
                                            <div>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="text-white"
                                                >
                                                    {ele.wpm}
                                                </Typography>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="text-white"
                                                >
                                                    {ele.accuracy}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className='py-2'>
                                            <div>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="text-white"
                                                >
                                                    {ele.raw}
                                                </Typography>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="text-white"
                                                >
                                                    {ele.consistency}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className='py-2'>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="text-white"
                                            >
                                                {ele.date}
                                            </Typography>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        
                    </table>
                </div>
            </div>
            <div className='space-y-2'>    
                <div className='flex items-center justify-between '>
                    <span className='text-white'>Time 60</span>
                    <span className='w-6 h-6 bg-mainColor text-[14px] flex items-center justify-center rounded-lg'><FaCrown /></span>
                </div>        
                <div className='h-[calc(100vh-250px)] overflow-y-auto'>
                    <table className='w-full text-left'>
                        <thead className='sticky top-[-9px] z-[10]'>
                            <tr>
                                <th  className="bg-black py-3 px-2">
                                    <Typography
                                        variant="small"
                                        className="text-paraColor font-normal leading-none opacity-70"
                                    >#</Typography>
                                </th>
                                <th  className=" bg-black py-3 px-2">
                                    <Typography
                                        variant="small"
                                        className="text-paraColor font-normal leading-none opacity-70"
                                    >Name</Typography>
                                </th>
                                <th  className="bg-black py-3 px-2">
                                    <div>
                                        <Typography
                                            variant="small"
                                            className="text-paraColor  font-normal leading-none opacity-70"
                                        >
                                            WPM
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="text-paraColor font-normal leading-none opacity-70"
                                        >
                                            Accuracy
                                        </Typography>
                                    </div>
                                </th>
                                <th  className="bg-black px-2 py-3">
                                    <div>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="text-paraColor  font-normal leading-none opacity-70"
                                        >raw</Typography>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="text-paraColor font-normal leading-none opacity-70"
                                        >consistnecy</Typography>
                                    </div>
                                </th>
                                <th  className="bg-black py-3 px-2">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="text-paraColor font-normal leading-none opacity-70"
                                    >Date</Typography>
                                </th>
                            
                            </tr>
                        </thead>

                        <tbody>
                            {rightLeaderBoardData?.map((ele, i)=>{
                                return(
                                    <tr key={i} className="even:bg-black bg-mainColor">
                                        <td className='py-2 text-white text-center'>
                                            {i + 1}
                                        </td>
                                        <td className='py-2'>
                                            <div className='flex items-center gap-2'>
                                                <img className='w-10 h-10 object-fill rounded-full' src={ele.profile} alt={`img-${i}`}/>
                                                <Typography
                                                    variant="small"
                                                    className="text-white"
                                                >{ele.name}</Typography>
                                            </div>
                                        </td>
                                        <td className='py-2'>
                                            <div>
                                                <Typography
                                                    variant="small"
                                                    className="text-white"
                                                >
                                                    {ele.wpm}
                                                </Typography>
                                                <Typography
                                                    variant="small"
                                                    className="text-white"
                                                >
                                                    {ele.accuracy}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className='py-2'>
                                            <div>
                                                <Typography
                                                    variant="small"
                                                    className="text-white"
                                                >
                                                    {ele.raw}
                                                </Typography>
                                                <Typography
                                                    variant="small"
                                                    className="text-white"
                                                >
                                                    {ele.consistency}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className='py-2'>
                                            <Typography
                                                variant="small"
                                                className="text-white"
                                            >
                                                {ele.date}
                                            </Typography>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default LeaderBoard