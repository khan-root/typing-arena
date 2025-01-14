import React from 'react'
import CustomSelect from '../../../Components/CustomSelect'
import useContestServices from '../../../ViewModel/ContestViewModel/ContestServices'
import { Button } from '@material-tailwind/react'

const AddEditContest = (props) => {
    const { constestFormValue,handleSelectContest,handleChangeContest, handleSubmitContest } = props
    const {customTypeData} = useContestServices()
  return (
    <form className='space-y-3 py-2 px-4' onSubmit={handleSubmitContest}>
        <div className='space-y-2'>
            <label className='text-paraColor text-[14px]'>Name</label>  
            <input 
                className='w-full text-paraColor text-[14px] rounded-lg py-[10px] px-[17px] bg-inputBg outline-none'
                type='text' 
                value={constestFormValue.name}
                name='name' 
                onChange={handleChangeContest}
                placeholder='Enter Name'
            />
        </div>
        <div className='flex-1 flex flex-col space-y-1'>
            <label className='text-paraColor text-[14px]'>Description</label>
            <textarea 
                rows="3" 
                name="description"
                className='text-paraColor bg-inputBg text-[14px] rounded-lg   py-[10px] px-[17px] outline-none resize-none'
                onChange={handleChangeContest}
                value={constestFormValue.description}
                placeholder='Description Here'
            >
            </textarea>
        </div>
        <div className='space-y-2'>
            <label className='text-paraColor text-[14px]'>Type</label>
            <CustomSelect 
                placeHolderTitle = 'Type'
                value={constestFormValue.type}
                options={customTypeData?.map((typeData) => ({ value: typeData.type, label:typeData.title}))} 
                onChangeHandler={(selectedOption) => handleSelectContest(selectedOption, 'type')}
                customStyles={false}
                
            />
        </div>
        <div className='flex items-center gap-5'>
            <div className='flex-1 space-y-2'>
                <label className='text-paraColor text-[14px]'>Start Time</label>  
                <input 
                    className='w-full text-white text-[14px] rounded-lg py-[10px] px-[17px] bg-inputBg outline-none custom-calendar-indicator'
                    type='datetime-local' 
                    value={constestFormValue.startTime}
                    name='startTime' 
                    onChange={handleChangeContest}
                />
            </div>
            <div className='flex-1 space-y-2'>
                <label className='text-paraColor text-[14px]'>End Time</label>  
                <input 
                    className='w-full text-paraColor text-[14px] rounded-lg py-[10px] px-[17px] bg-inputBg outline-none custom-calendar-indicator'
                    type='datetime-local' 
                    value={constestFormValue.endTime}
                    name='endTime' 
                    onChange={handleChangeContest}
                />
            </div>
        </div>
        {constestFormValue.type.value === false && 
        <div className='flex-1 space-y-2'>
            <label className='text-paraColor text-[14px]'>Fee</label>  
            <input 
                className='w-full text-paraColor text-[14px] rounded-lg py-[10px] px-[17px] bg-inputBg outline-none'
                type='text' 
                value={constestFormValue.fee}
                name='fee'
                placeholder='Enter Fee' 
                onChange={handleChangeContest}
            />
        </div>
        }
        <div className='flex'>
            <Button className='px-2 py-2 text-inputBg text-[13px] flex items-center justify-center capitalize bg-mainColor font-semibold rounded-lg w-[130px]'
                loading={constestFormValue?.loading}
                type="submit"
                
            >Add Contest</Button>
        </div>
    </form>
  )
}

export default AddEditContest