import React, { useEffect } from 'react'
import ContestList from './ContestList'
import useContestServices from '../../../ViewModel/ContestViewModel/ContestServices'
import CustomDialog from '../../../Components/CustomDialog'
import AddEditContest from './AddEditContest'



const Contest = () => {

  const { constestFormValue, handleAddContest, toggleAddContest, handleSelectContest, handleChangeContest, handleSubmitContest,getttingAllContest,allContest } = useContestServices()

  useEffect(()=>{
    getttingAllContest()
  },[])
  


  return (
    <>
      <div className='space-y-4'>
        <div className='flex justify-between'>
          <span className='text-text text-[25px] font-semibold'>Contest List</span>
          <button className='bg-mainColor px-5 py-2 text-[17px] rounded-lg' onClick={handleAddContest}>Add</button>     
        </div>
        <div className='h-[2px] bg-white'></div>
        <div className='space-y-4'>
          {allContest?.map((ele, i)=>(
            <ContestList 
              key={i}
              contest = {ele}
            />
          ))}
        </div>
      </div>
      {
        constestFormValue.show &&
        <CustomDialog 
          openDialog = {constestFormValue.show}
          handleOpen = {toggleAddContest}
          title = "Add Contest"
          size="sm"
          compo = {
            <AddEditContest 
              constestFormValue = {constestFormValue}
              handleSelectContest = {handleSelectContest}
              handleChangeContest = {handleChangeContest}
              handleSubmitContest = {handleSubmitContest}
            
            />
          }


        />
      }
    </>
  )
}

export default Contest