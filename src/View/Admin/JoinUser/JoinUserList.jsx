import React from 'react'
import { BiEnvelope, BiUser } from 'react-icons/bi'
import { FaLocationDot } from 'react-icons/fa6'
import { DMYT } from '../../../Services/__time_date'

const JoinUserList = (props) => {
    const {joinUser} = props

  return (
    <div className='bg-container flex items-center justify-between p-3 rounded-lg'>
        <div className='flex items-center gap-3'>
            <div>
                <span className='w-16 h-16 flex items-center justify-center border border-mainColor rounded-full text-text text-[25px]'><BiUser /></span>
            </div>
            <div>
                <div className='flex items-center gap-2'>
                    <span className='text-mainColor text-[23px]'>{joinUser?.user_id?.user_name}</span>
                    <span className='text-[13px] text-paraColor'>{joinUser?.user_id?.gender}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-mainColor text-[18px]'><BiEnvelope /></span>
                    <span className='text-text'>{joinUser?.user_id?.user_email}</span>
                </div>
                {/* <div className='flex items-center gap-2'>
                    <span className='text-mainColor text-[18px]'><FaLocationDot /></span>
                    <span className='text-text'>{joinUser?.user_id?.location}</span>
                </div> */}
            </div>
        </div>
        <div className='text-text'>
            <span>{DMYT(joinUser?.joined_at)}</span>
        </div>
    </div>
  )
}

export default JoinUserList