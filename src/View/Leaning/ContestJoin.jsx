import React, { useEffect } from 'react'
import useJoinContestServices from '../../Services/__contestJoinServices'
import { DMYT } from '../../Services/__time_date'
import { useOutletContext } from 'react-router-dom'
import { Button } from '@material-tailwind/react'

const ContestJoin = () => {
    const {getttingAllContest, allContest,joiningContest, loading} = useJoinContestServices()
    
    useEffect(()=>{
        getttingAllContest()
    },[])

    const {joinContestValue} = useOutletContext()


  return (
  
  <div className='space-y-4'>
        <div className='flex justify-center'>
          <span className='text-text text-[25px] font-semibold'>Contest List</span>
        </div>
        <div className='flex flex-col gap-3'>
            {allContest
                ?.filter((ele) => ele.is_paid === joinContestValue.paid)
                .map((ele) => (
                <div className="flex flex-col gap-2" key={ele._id}>
                    <div className="flex items-center gap-3">
                        <span className="text-[20px] text-mainColor">{ele?.name}</span>
                    </div>
                    <div className="text-paraColor text-[17px]">
                        <span>{ele?.description}</span>
                    </div>
                    <div className="text-timeColor flex items-center gap-3">
                        <span>Start Time: {DMYT(ele?.start_date)}</span>
                        <span>End Time: {DMYT(ele?.end_date)}</span>
                    </div>
                    <div>
                        <Button className='px-2 py-2 text-inputBg text-[13px] flex items-center justify-center capitalize bg-mainColor font-semibold rounded-lg w-[130px]'
                            loading={loading}
                            type="button"
                            onClick={()=>joiningContest(ele)}
                        >Join Contest</Button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ContestJoin