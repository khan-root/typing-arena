import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa6'
import profileApi from '../../Model/Profile/Profile'

const Profile = () => {

  const name = JSON.parse(localStorage.getItem('user_name'))
  const email = JSON.parse(localStorage.getItem('user_email'))


  const id = JSON.parse(localStorage.getItem('_id'))
  const [profileData, setProfileData] = useState({})

  useEffect(()=>{
    gettingProfile(id)
  },[])



  const gettingProfile = async(id)=>{
    try {
      const response = await profileApi.getProfile(id)
      const responseData = response.data 
      if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
        const dbData = responseData.DB_DATA 
        setProfileData(dbData)
      }
      
    } catch (error) {
      
    }
  }


  return (
    <div className='w-[75%] h-full mx-auto flex flex-col'>
      <div className='flex-[.3] relative'>
        <div className='absolute -bottom-24 z-10 left-1/2 transform -translate-x-1/2'>
          <div className='h-48 w-48 bg-fullbg border border-mainColor rounded-full flex items-center justify-center text-[50px] text-white'>
            <FaUser />
          </div>
        </div>
      </div>
      <div className='flex-[.6] bg-container flex justify-center rounded-lg'>
        <div className='flex flex-col gap-5 mt-32'>
          <div className='flex flex-col gap-5 text-center'>
            <span className='text-white text-[20px]'>{name}</span>
            {/* <span className='text-mainColor text-[20px]'>Beginner Level</span> */}
          </div>
          <div className='text-center'>
            <div className='space-x-2 text-[18px] text-white'>
              <span>Email: </span>
              <span>{email}</span>
            </div>
            <div className='space-x-2 text-[18px] text-white'>
              {/* <span>Mobile</span> */}
              {/* <span>+9232323232323</span> */}
            </div>
          </div>
          <div className='text-mainColor text-[20px] text-center'>
            <span>Total Contest : {profileData?.contestCount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile