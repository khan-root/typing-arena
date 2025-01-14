import React from 'react'
import { DMYT } from '../../../Services/__time_date'
import { Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react'
import { contestActionData } from '../../../Utils/__actionData'
import useContestAction from '../../../ViewModel/ContestViewModel/ContestActionServices'
import DeleteConfirmation from '../../../Components/DeleteConfirmation'

const ContestList = (props) => {
    const {contest} = props
    const {deleteContestValue, handleConetstAction,handleDeleteContest, handleConfirmContestDelete} = useContestAction()
  return (
    <>
    <div className='bg-container flex items-center justify-between p-3 rounded-lg'>
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-3'>
                <span className='text-[20px] text-mainColor'>{contest?.name}</span>
                <span className={`text-[15px] px-3 py-[3px] rounded-xl ${contest.is_paid ? 'border border-premiumColor text-premiumColor' : 'border border-mainColor text-mainColor'}`}>{contest.is_paid ? 'Premium' : 'Free'}</span>
            </div>    
            <div className='text-paraColor text-[17px]'>
                <span>{contest?.description}</span>    
            </div> 
            <div className='text-timeColor flex items-center gap-3'>
                <span>Start Time : {DMYT(contest?.start_date)}</span>
                <span>End Time : {DMYT(contest?.end_date)}</span>
            </div>
        </div>
        <div>
            <Menu>
                <MenuHandler>
                    <button className='bg-mainColor px-5 py-2 text-[17px] rounded-lg'>Action</button>
                </MenuHandler>
                <MenuList className='bg-container p-0'>
                    {contestActionData?.map((ele)=>(
                        <MenuItem key={ele.id} className='bg-container rounded-none border-b border-b-white'
                            onClick={()=>handleConetstAction(ele, contest)}
                        >
                            <Typography className='text-white'>
                                {ele.title}
                            </Typography>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
            
        </div>
    </div>
    {deleteContestValue?.show &&
        <DeleteConfirmation 
            openDialog = {deleteContestValue?.show}
            handleOpen = {handleDeleteContest}
            title = "Delete Contest"
            description = "Are you sure you want to deletet this contest ? "
            confirmation = {handleConfirmContestDelete}
            loading={deleteContestValue?.loading}

        />
    }
    </>
  )
}

export default ContestList