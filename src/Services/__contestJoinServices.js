import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useStore from "../Store/Store"
import ContestApi from "../Model/Contest/Contest"
import { showToast } from "../Components/Toaster"

const useJoinContestServices = ()=>{


    const getttingAllContest = useStore((state)=> state.getttingAllContest)
    const allContest = useStore((state)=> state.allContest)
    const [loading, setLoading] = useState(false)

    const user_id = JSON.parse(localStorage.getItem('_id'))


    const navigate = useNavigate()

    const [joinContestValue, setContestJoinVlue] = useState({
        paid:false,
        loading:false
    })

    const handleJoinContest = (state)=>{
        if(state === 'free'){
            setContestJoinVlue((prevState)=>({
                ...prevState,
                paid:false
            }))
        }else{
            
            setContestJoinVlue((prevState)=>({
                ...prevState,
                paid:true
            }))
        }
        navigate('/learning/join-contest')
    }




    const joiningContest = async(data)=>{
        const jwtToken = localStorage.getItem('authToken')
        if(jwtToken === null){
            navigate('/login')
            return

        }
        const apiData={
            user_id: user_id,
            contest_id: data._id,
            refundable: true,
            status: 1

        }
        setLoading(true)
        try {
            const response = await ContestApi.joinContest(apiData)
            const responseData = response.data 
            if(response.status === 200 && responseData.STATUS){
                showToast("Join Contest Successfully", 'success')

            }
        } catch (error) {
            const errorDescripion = error.response.data.ERROR_DESCRIPTION 
            showToast(errorDescripion, 'error')
        }finally{

            setLoading(false)
        }
    }



    return {
        joinContestValue, handleJoinContest,getttingAllContest ,allContest,
        joiningContest,loading
    }

}


export default useJoinContestServices