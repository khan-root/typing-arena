import React from 'react'
import CustomSelect from '../../../Components/CustomSelect'
import { Button, Radio, Typography } from '@material-tailwind/react'

const AddPermission = (props) => {
    const {privileges, handlePermission, privilegesValue,handleSelectPermission,handleAddPermission}= props
     
    
  return (
   <form className='space-y-3 py-2 px-4' onSubmit={handleAddPermission}>
    <div className='space-y-2'>
        <label className='text-paraColor text-[14px]'>Select User</label>
        <CustomSelect 
            placeHolderTitle = 'User'
            value={privilegesValue?.userId}
            options={privilegesValue?.userData?.map((user) => ({ value: user._id, label:user.user_name}))} 
            onChangeHandler={(selectedOption) => handleSelectPermission(selectedOption, 'userId')}
            customStyles={false}
            
        />
    </div>
    {privileges?.modules?.map((ele)=>(

        <div className='space-y-2' key={ele._id}>
            <label className='text-paraColor text-[14px]'>{ele?.name}</label>
            <div>
                {privileges?.permissions?.map((permission)=>(
                    <Radio
                        className= "text-mainColor checked:text-mainColor checked:before:bg-mainColor bg-white"
                        key={permission._id}
                        label={
                            <Typography
                            className='text-paraColor'
                            >
                                {permission?.name}
                            </Typography>
                        }
                        checked={privilegesValue.permissions[ele._id] == permission._id}
                        onChange={()=>handlePermission(ele?._id, permission._id)}
                    />
                ))}
            </div>

        </div>
    ))}
    <div className='flex'>
        <Button type='submit' className='w-full px-2 py-2 text-inputBg text-[16px] flex items-center justify-center capitalize bg-mainColor font-semibold rounded-lg'
            loading = {privilegesValue.loading}
        >Assign Permission</Button>
    </div>
   </form>
  )
}

export default AddPermission