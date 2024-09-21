import React from 'react';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { HiMiniUserPlus } from 'react-icons/hi2';
import { IoLogIn } from 'react-icons/io5';
import useLogin from '../../Services/__loginServices';

const Login = () => {

    const { handleRegisterInputChange, registerValue, handleRegisterUser, handleLoginInputChange, handleUserLogin} = useLogin()

  return (
    <div className='w-full h-full block lg:flex'>

        <div className='flex-1 flex flex-col justify-center items-center'>

            <div className='w-full lg:w-[300px] space-y-3'>
                <div className='flex items-center gap-1 text-[#646669] text-[20px]'>
                    <span><HiMiniUserPlus /></span>
                    <span>Registeration</span>
                </div>
                <div>
                    <input className='py-2 px-2 w-full bg-[#2c2e31] rounded-md outline-white text-[#d1d0c5] placeholder:text-[#646669]' placeholder='Username'
                        name='user_name'
                        onChange={handleRegisterInputChange}
                        type='text'
                    />
                </div>
                <div>
                    <input className='py-2 px-2 w-full bg-[#2c2e31] rounded-md outline-white text-[#d1d0c5] placeholder:text-[#646669]' placeholder='Email' 
                        name='user_email'
                        onChange={handleRegisterInputChange}
                        type='email'
                    />
                </div>
                <div>
                    <input className='py-2 px-2 w-full bg-[#2c2e31] rounded-md outline-white text-[#d1d0c5] placeholder:text-[#646669]' placeholder='Password' 
                        name='password'
                        onChange={handleRegisterInputChange}
                        type='password'
                    />
                </div>
                <div className='flex items-center justify-center gap-2 py-2 bg-[#303235] text-[#646669] text-[20px] rounded-md cursor-pointer'
                    onClick={handleRegisterUser}
                >
                    <span>
                        <HiMiniUserPlus />
                    </span>
                    <span>Register</span>
                </div>
            </div>

        </div>
        <div className='flex-1 flex items-center justify-center'>
            <div className='w-full lg:w-[300px] space-y-2'>
                <div className='flex items-center gap-1 text-[#646669] text-[20px]'>
                    <span><IoLogIn /></span>
                    <span>Login</span>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex flex-1 items-center justify-center gap-2 py-2 bg-[#303235] text-[#d1d0c5] text-[20px] rounded-md'>

                        <span className=''>
                            <BsGoogle />
                        </span>
                    </div>
                    <div className='flex flex-1 items-center justify-center gap-2 py-2 bg-[#303235] text-[#d1d0c5] text-[20px] rounded-md'>

                        <span className=''>
                            <BsGithub />
                        </span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='flex-1 h-1 bg-[#303235]'></span>
                    <span className='flex-[0.1] text-[#d1d0c5] text-[16px]'>or</span>
                    <span className='flex-1 bg-[#303235] h-1'></span>
                </div>
                
                <div>
                    <input className='py-2 px-2 w-full bg-[#2c2e31] rounded-md outline-white text-[#d1d0c5] placeholder:text-[#646669]' placeholder='Email' 
                        name='user_email'
                        onChange={handleLoginInputChange}
                    />
                </div>
                <div>
                    <input className='py-2 px-2 w-full bg-[#2c2e31] rounded-md outline-white text-[#d1d0c5] placeholder:text-[#646669]' placeholder='Password' 
                        name='password'
                        onChange={handleLoginInputChange}
                    />
                </div>
                <div className='flex items-center justify-center gap-2 py-2 bg-[#303235] text-[#646669] text-[20px] rounded-md cursor-pointer'
                    onClick={handleUserLogin}
                >
                    <span>
                        <IoLogIn />
                    </span>
                    <span>Login</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;
