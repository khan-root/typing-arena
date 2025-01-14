import React from 'react'
import { genderData } from '../../../Utils/__actionData'
import CustomSelect from '../../../Components/CustomSelect'
import { Button } from '@material-tailwind/react'

const AddEditUser = (props) => {
    const {handleChangeUser,handleSelecUser,addUserFormValue,handleSubmitAddUser} = props
  return (
    <form className='space-y-3 py-2 px-4' onSubmit={handleSubmitAddUser}>
        <div className='space-y-2'>
            <label className='text-paraColor text-[14px]'>Name</label>  
            <input 
                className='w-full text-paraColor text-[14px] rounded-lg py-[10px] px-[17px] bg-inputBg outline-none'
                type='text' 
                name='name'
                value={addUserFormValue?.name}
                placeholder='Enter Name'
                onChange={handleChangeUser}
            />
        </div>
        <div className='space-y-2'>
            <label className='text-paraColor text-[14px]'>Email</label>  
            <input 
                className='w-full text-paraColor text-[14px] rounded-lg py-[10px] px-[17px] bg-inputBg outline-none'
                type='text' 
                name= 'email'
                value={addUserFormValue?.email}
                placeholder='Enter Email'
                onChange={handleChangeUser}
            />
        </div>
        <div className='space-y-2'>
            <label className='text-paraColor text-[14px]'>Gender</label>
            <CustomSelect 
                placeHolderTitle = 'Gender'
                value={addUserFormValue?.gender}
                options={genderData?.map((gender) => ({ value: gender.value, label:gender.title}))} 
                onChangeHandler={(selectedOption) => handleSelecUser(selectedOption, 'gender')}
                customStyles={false}
                
            />
        </div>
        <div className='space-y-2'>
            <label className='text-paraColor text-[14px]'>Password</label>  
            <input 
                className='w-full text-paraColor text-[14px] rounded-lg py-[10px] px-[17px] bg-inputBg outline-none'
                type='password' 
                name='password'
                value={addUserFormValue?.password}
                placeholder='Enter Password'
                onChange={handleChangeUser}
            />
        </div>
        <div className='flex'>
            <Button type='submit' className='w-full px-2 py-2 text-inputBg text-[16px] flex items-center justify-center capitalize bg-mainColor font-semibold rounded-lg'
                loading = {addUserFormValue.loading}
            >Add User</Button>
        </div>
    </form>
  )
}

export default AddEditUser