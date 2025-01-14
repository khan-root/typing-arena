import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaKeyboard } from 'react-icons/fa6';
import { Button } from '@material-tailwind/react';
import { showToast } from '../../Components/Toaster';
import AuthApi from '../../Model/Auth/Auth';
import useStore from '../../Store/Store';

const SuperAdminLogin = () => {
    const navigate = useNavigate()
    const settingAuthState = useStore((state)=> state.settingAuthState)



    const [formValue, setFormValue] = useState({
        user_email:'',
        password:''
    })


    const handleChange = (e)=>{
        const {name, value}  = e.target
        setFormValue((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }


    const handleSubmit = async(e)=>{
        e.preventDefault()
       try {
            
            const response = await AuthApi.adminLogin(formValue)
            const responseData = response.data 
            if(response.status === 200 && responseData.STATUS === 'SUCCESSFUL'){
                const DB_DATA = responseData.DB_DATA
                const token = DB_DATA.token
                localStorage.setItem('authToken', token)
                settingAuthState(true)
                navigate('/admin/contest')
            }

        } catch (error) {
            const errResponse = error.response
            const errorMessage = errResponse.data.ERROR_DESCRIPTION
            showToast(errorMessage, 'error')
        }
    }

  return (
    <div className='space-y-6 pt-5'>
        <div className='flex items-center justify-center'>
            <div className='flex flex-col justify-end'>
                <div className={`flex items-center gap-2 text-[20px] uppercase text-text cursor-pointer`}
                    onClick={()=>navigate('/')}
                >
                    <span className='text-mainColor'><FaKeyboard /></span>
                    <span className={`text-text tracking-[5px]`} >Typer</span>
                </div>
                <div>
                    <span className={`text-[18px] tracking-[10px] text-text`}>Arena</span>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <span className='text-[25px] text-[#E6E6E6] font-semibold tracking-[2px]'>Welcome To Typer Arena</span>
        </div>

        <div className='w-[40%] my-0 mx-auto rounded-lg p-5 bg-container space-y-5'>
            <div className='flex items-center justify-center'>
                <span className='uppercase text-mainColor text-[20px]'>Login</span>
            </div>
            <form className='space-y-6' onSubmit={handleSubmit}>
               <div className='space-y-2'>
                    <label className='text-paraColor text-[14px]'>Email</label>  
                    <input 
                        className='w-full text-paraColor text-[14px] rounded-lg py-[10px] px-[17px] bg-inputBg outline-none'
                        type='email' 
                        name= 'user_email'
                        placeholder='Enter Email'
                        onChange={handleChange}
                        value={formValue?.user_email}
                    />
                </div>
               <div className='space-y-2'>
                    <label className='text-paraColor text-[14px]'>Password</label>  
                    <input 
                        className='w-full text-paraColor text-[14px] rounded-lg py-[10px] px-[17px] bg-inputBg outline-none'
                        type='password' 
                        name= 'password'
                        placeholder='Enter Password'
                        onChange={handleChange}
                        value={formValue?.password}
                    />
                </div>
                <div className='flex items-center justify-center'>
                    <Button type='submit' className='px-7 py-2 text-white text-[16px] flex items-center justify-center capitalize bg-mainColor font-semibold rounded-lg'
                    >Login</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SuperAdminLogin