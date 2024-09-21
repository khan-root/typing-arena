import { useNavigate } from "react-router-dom"
import useStore from "../Store/Store"

const useNavbarService = ()=>{

    const navigate = useNavigate()
    const login = useStore((state)=> state.login)

    const handleNavbarRightSide = (data)=>{
        console.log(data)

        if(data.id === 2){
            if(login){
                navigate('/profile')
            }else{
                navigate('/login')
            }
        }
    }

    const handleLeftNavbar = (data)=>{
        navigate(data.link)
    }

    const handleProfile = ()=>{

    }

    return { handleNavbarRightSide, handleProfile, handleLeftNavbar }

}

export default useNavbarService