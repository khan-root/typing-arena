import React, { useEffect } from 'react'
import JoinUserList from './JoinUserList'
import { useParams } from 'react-router-dom'
import useJoinUser from '../../../ViewModel/JoinUserViewModel/joinUserServices'





const JoinUser = () => {

  const {gettingJoinUser, joinUserList} = useJoinUser()

  const params = useParams()

  useEffect(()=>{
    gettingJoinUser(params.id)
  },[])
  return (
    <div className='space-y-4'>
      <div className='flex justify-between'>
        <span className='text-text text-[25px] font-semibold'>Join User</span>
        {/* <button className='bg-mainColor px-5 py-2 text-[17px] rounded-lg'>Add</button>      */}
      </div>
      <div className='h-[2px] bg-white'></div>
      <div className='space-y-4'>
        {joinUserList?.map((ele, i)=>(
          <JoinUserList 
            key={i}
            joinUser = {ele}
          />
        ))}
      </div>
    </div>
  )
}

export default JoinUser