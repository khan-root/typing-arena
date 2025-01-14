import { useState } from "react";
import ContestApi from "../../Model/Contest/Contest";
import { showToast } from "../../Components/Toaster";
import useStore from "../../Store/Store";
import { useNavigate } from "react-router-dom";

const useContestAction = ()=>{

    const navigate = useNavigate()



    const deleteContest = useStore((state)=> state.deleteContest)
    const [deleteContestValue, setDeleteContestValue] = useState({
        id:'',
        loading:false,
        show:false
    })

    const handleConetstAction = (action,data)=>{
        console.log('data', data)
        const caseId = action.id 

        switch (caseId) {
            case 1:
                navigate(`/admin/join-user/${data._id}`)
                break;
            case 2:
                navigate(`/admin/paragraph-list/${data._id}`)
                break;
            case 3:
                navigate(`/admin/postion-leaderboard/${data._id}`)
                break;
            case 5:
                handleDeleteContest(data._id)
            default:
                break;
        }
    }



    const handleDeleteContest = (id)=>{
        if(deleteContestValue.show){
            setDeleteContestValue((pervState)=>({
                ...pervState,
                id:'',
                show:false
            }))
            
        }else{

            setDeleteContestValue((pervState)=>({
                ...pervState,
                id:id,
                show:true
            }))
        }
    }

    const handleConfirmContestDelete = async()=>{
        setDeleteContestValue((pervState)=>({
            ...pervState,
            loading:true
        }))
        try {
            const response = await ContestApi.deleteContest(deleteContestValue?.id)
            const responseData = response.data 
            if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
                showToast("Contest deleted successfully", 'success')
                handleDeleteContest()
                deleteContest(deleteContestValue?.id)

            }
        } catch (error) {
            const errorData = error?.response?.data 
            const error_description = errorData.ERROR_DESCRIPTION
            showToast(error_description, 'error')
        }finally{

            setDeleteContestValue((pervState)=>({
                ...pervState,
                loading:false
            }))
        }
    }



    return {
        handleConetstAction,deleteContestValue,handleDeleteContest,handleConfirmContestDelete
    }

}

export default useContestAction