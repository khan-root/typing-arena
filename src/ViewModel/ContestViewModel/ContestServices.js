import { useState } from "react"
import { showToast } from "../../Components/Toaster"
import { timeDataToUnixTimeStamp } from "../../Services/__time_date"
import ContestApi from "../../Model/Contest/Contest"
import useStore from "../../Store/Store"

const useContestServices = ()=>{


    const getttingAllContest = useStore((state)=> state.getttingAllContest)
    const allContest = useStore((state)=> state.allContest)
    const addNewContest = useStore((state)=> state.addNewContest)
    const gettingLeaderBoardData = useStore((state)=> state.gettingLeaderBoardData)
    const contestLeaderBoard = useStore((state)=> state.contestLeaderBoard)


    const customTypeData = [
        {id:1, title:'Free', type:true},
        {id:2, title:'Premium', type:false}
    ]


    const [constestFormValue, setContestFormValue] = useState({
        show:false,
        type:{value:true, label:'Free'},
        name:'',
        description:'',
        startTime:'',
        endTime:'',
        fee:'',
        loading:false
    })


    const handleAddContest = ()=>{
        setContestFormValue((prevState)=>({
            ...prevState,
            show:true
        }))
    }
    const toggleAddContest = ()=>{
        setContestFormValue((prevState)=>({
            ...prevState,
            show:false,
            type:{value:true, label:'Free'},
            name:'',
            description:'',
            startTime:'',
            endTime:'',
            fee:'',
            loading:false
        }))
    }


    const handleSelectContest = (select, field)=>{
        setContestFormValue((prevState)=>({
            ...prevState,
            [field]: select
        }))
    }


    const handleChangeContest = (e)=>{
        const {name, value} = e.target

        setContestFormValue((prevState)=>({
            ...prevState,
            [name]:value
        }))
    }


    const contestFormValidation = ()=>{
        const {name, description, startTime, endTime, type, fee} = constestFormValue
        if(name === ''){
            showToast('Contest Name is required', 'error')
            return
        }
        else if(description === ''){
            showToast('Contest Description is required', 'error')
            return
        }
        else if (startTime === ''){
            showToast('Start time is required', 'error')
            return
        }
        else if(endTime === ''){
            showToast('End Time is required', 'error')
            return
        }
        else if(type.value !== true){
            if(fee === ''){
                showToast('Fee is required', 'error')
                return
            }
        }

        return true
    }



    const handleSubmitContest = async(e)=>{
        
        e.preventDefault()
        const {name, description, startTime, endTime, type, fee} = constestFormValue
        const formVlidaiton = contestFormValidation()
        if(formVlidaiton){
            const apiData = {
                name:name,
                description:description,
                start_date:startTime,
                end_date:endTime,
                is_paid:type.value ? false: true,
                fee:type.value ? '' : fee

            }

            setContestFormValue((prevState)=>({
                ...prevState,
                loading:true
            }))
            try{

                const response = await ContestApi.addContest(apiData)
                const responseData = response.data 
                if(response.status === 200 && responseData.STATUS === "SUCCESSFUL"){
                    const newData = responseData.DB_DATA
                    showToast("Contest added successfully", 'success')
                    toggleAddContest()
                    addNewContest(newData)
                }
            }catch(err){
                const error = err.response.data.ERROR_DESCRIPTION
                showToast(error, 'error')
            }finally{
                setContestFormValue((prevState)=>({
                    ...prevState,
                    loading:true
                }))
            }
        }
    }


    return{
        constestFormValue,
        handleAddContest,
        toggleAddContest,
        customTypeData,
        handleSelectContest,
        handleChangeContest,
        handleSubmitContest,
        getttingAllContest,
        allContest,
        gettingLeaderBoardData,
        contestLeaderBoard
    }

}

export default useContestServices