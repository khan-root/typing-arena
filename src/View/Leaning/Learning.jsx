// import React, { useState } from 'react'
import { GoDotFill } from 'react-icons/go';
import { Outlet, useLocation } from 'react-router-dom';
import useJoinContestServices from '../../Services/__contestJoinServices';

  const icon = `<svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm16 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V144zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16H400c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336zM272 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM368 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V240zM464 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16z"></path></svg>`;

const Learning = () => {
    // const [progress, setProgress] = useState(60);
    const {handleJoinContest, joinContestValue} = useJoinContestServices()
    const location = useLocation()
  return (
    <div className='space-y-10'>


        {location.pathname.includes('join-contest') ? <Outlet context = {{joinContestValue}} /> : 
            <>
                <div className='flex items-center justify-center'>
                    <span className='text-[25px] text-[#E6E6E6] font-semibold tracking-[2px]'>Welcome To Typer Arena</span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='flex items-center justify-center'>
                        <div className='w-[400px] h-[400px] relative flex items-center justify-center bg-cover rounded-lg'
                            
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(icon)}")`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '70%', // Adjust size as needed
                                }}
                        >
                        <div className="bg-[#1e1e1e] bg-opacity-[80%] text-[#ACACAC] text-lg p-4 rounded-xl h-full w-full
                            flex items-center justify-center
                        ">
                            
                            <div className='flex flex-col gap-2'>
                                <div className='space-y-1 text-[14px] mb-6'> 
                                    <div className='flex flex-row items-center gap-2'>
                                        <span className='text-[10px]'> <GoDotFill /></span>
                                        <span>No Certificate</span>
                                    </div>
                                    <div className='flex flex-row items-center gap-2'>
                                        <span className='text-[10px]'><GoDotFill /></span>
                                        <span>No Fees</span>
                                    </div>
                                </div>
                                <div className='mt-6'>
                                    <button onClick={()=>handleJoinContest('free')} className='h-14 w-40 border border-mainColor bg-mainColor text-black rounded-md hover:bg-[#323437] hover:text-mainColor '>
                                        Beginner Level
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='w-[400px] h-[400px] relative flex items-center justify-center bg-cover rounded-lg'
                            
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(icon)}")`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '70%', // Adjust size as needed
                                }}
                        >
                        <div className="bg-[#1e1e1e] bg-opacity-[80%] text-[#ACACAC] text-lg p-4 rounded-xl h-full w-full
                            flex items-center justify-center
                        ">
                            
                            <div className='space-y-6'>
                                <div className='space-y-1 text-[14px]'> 
                                    <div className='flex flex-row items-center gap-2'>
                                        <span className='text-[10px]'> <GoDotFill /></span>
                                        <span>Certificate</span>
                                    </div>
                                    <div className='flex flex-row items-center gap-2'>
                                        <span className='text-[10px]'><GoDotFill /></span>
                                        <span>Entry Fees</span>
                                    </div>
                                    <div className='flex flex-row items-center gap-2'>
                                        <span className='text-[10px]'><GoDotFill /></span>
                                        <span>Price 25$</span>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={()=>handleJoinContest('paid')} className='h-14 w-40 border border-mainColor bg-mainColor text-black rounded-md hover:bg-[#323437] hover:text-mainColor '>
                                        Pro Level
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </>
        }
        {/* <div className='flex flex-col items-center gap-4'>
            <div className='flex items-center justify-center'>
                <div className="w-[500px] align-middle bg-[#5D552B] rounded-full h-6 relative">
                    <div
                        className="bg-[#E2B900] h-6 rounded-full"
                        style={{ width: `${progress}%` }}
                    >
                        <span className="absolute right-[50%] left-[50%] text-white text-sm leading-6">
                        {progress}%
                        </span>
                    </div>
                </div>
            </div>
            <span className=' text-[#ACACAC] text-[15px]'>
                Leaderboards members coming
            </span>
        </div> */}
        

    </div>
  )
}

export default Learning