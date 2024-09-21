import { useState } from "react"
import AuthApi from "../Model/Auth/Auth"
import { useNavigate } from "react-router-dom"
import useStore from "../Store/Store"
import { showToast } from "../Components/Toaster"

const useLogin = ()=>{

    const navigate = useNavigate()
    const settingAuthState = useStore((state)=> state.settingAuthState)

    const [registerValue, setRegisterValue] = useState({
        user_name:'',
        user_email:'',
        password:''
    })



    const handleRegisterInputChange = (e)=>{
        const {name, value} = e.target

        setRegisterValue((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }


    const handleRegisterUser = async()=>{
        console.log(registerValue)
        const apiData = {
            user_name:registerValue.user_name,
            user_email: registerValue.user_email,
            password:registerValue.password
        }

        try {
            
            const response = await AuthApi.register(apiData)
            console.log('response', response)
            const responseData = response.data 
            if(response.status === 200 && responseData.STATUS === 'SUCCESSFUL'){
                const DB_DATA = responseData.DB_DATA
                const token = DB_DATA.token
                localStorage.setItem('authToken', token)
                settingAuthState(true)
                navigate('/profile')


            }

        } catch (error) {
            
        }
    }


    const [loginValue, setLoginValue] = useState({
        user_email:'',
        password:''
    })

    const handleLoginInputChange = (e)=>{
        const {name, value} = e.target

        setLoginValue((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }

    const handleUserLogin = async()=>{
         try {
            
            const response = await AuthApi.login(loginValue)
            console.log('response', response)
            const responseData = response.data 
            if(response.status === 200 && responseData.STATUS === 'SUCCESSFUL'){
                const DB_DATA = responseData.DB_DATA
                const token = DB_DATA.token
                localStorage.setItem('authToken', token)
                settingAuthState(true)
                navigate('/profile')


            }

        } catch (error) {
            const errResponse = error.response
            const errorMessage = errResponse.data.ERROR_DESCRIPTION
            showToast(errorMessage, 'error')
        }
    }

    return { registerValue, handleRegisterInputChange, handleRegisterUser,handleLoginInputChange, handleUserLogin}

}

export default useLogin