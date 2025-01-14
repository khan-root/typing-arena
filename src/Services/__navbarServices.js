import { useNavigate } from "react-router-dom"
import useStore from "../Store/Store"

const useNavbarService = ()=>{

    const navigate = useNavigate()
    const login = useStore((state)=> state.login)
    const settingAuthState = useStore((state)=> state.settingAuthState)
    const gettingNotifications = useStore((state)=> state.gettingNotifications)
    const notificationData = useStore((state)=> state.notificationData)

    const handleNavbarRightSide = (data)=>{
        console.log(data)

        if(data.id == 2){
            if(login){
                navigate('/profile')
            }else{
                navigate('/login')
            }
        }
        else if(data.id === 5){
            navigate('/')
            settingAuthState(false)
            localStorage.clear()
        }
        else{
            navigate(data.link)
        }
    }

    const handleLeftNavbar = ()=>{
        navigate('/')
    }

    const handleProfile = ()=>{

    }


    const handleJoinContest = ()=>{
        navigate('/learning')
    }

    return { handleNavbarRightSide, handleProfile, handleLeftNavbar,handleJoinContest,
        gettingNotifications, notificationData
     }

}

export default useNavbarService